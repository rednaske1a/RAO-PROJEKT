class AleGame {
    constructor() {
        this.entityList = [];
        this.renderer = new AleRenderer();
        this.fizika = new AleFizika();
        this.eventManager = new AleEventManager();
        this.fps = 60;
        this.frameDuration = 1000 / this.fps;
        this.start = Date.now();
        this.elapsed = Date.now() - this.start;
        this.gameData = {};
    }

    init(gameData){
        this.gameData = gameData;

        this.loadEntities();

        this.eventManager.initKeyTracking(this.entityList);
        this.run();
    }

    loadEntities(){
        for(let key in this.gameData){
            this.addEntity(gameData[key]);
        }

        this.entityList.forEach(entity =>{
            entity.setEntityPointers(this.entityList);
        })
    }

    

    addEntity(entity){
        this.entityList.push(new Entity(entity));
    }

    run() {
        game.render();
        game.update();

        window.requestAnimationFrame(game.run);
    }

    render() {
        this.renderer.render(this.entityList);
    }

    update() {
        this.eventManager.solveEvents(this.entityList);
        this.fizika.update(this.entityList);
    }
}