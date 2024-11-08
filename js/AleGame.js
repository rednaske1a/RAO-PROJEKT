class AleGame {
    constructor() {
        this.entityList = [];
        this.renderer = new AleRenderer();
        this.fizika = new AleFizika();
        this.eventManager = new AleEventManager();
        this.data = {};
    }

    init(data){
        this.data = data;
        this.loadData(this.data.gameData);
        this.loadData(this.data.level1Data);
        this.loadData(this.data.playerData);
        this.loadData(this.data.guiData);

        this.run();
    }

    loadData(data){
        data.forEach(entity =>{
            Entity.addEntity(this.entityList, entity);
        })
        //IDJI MORAJO BITI SETANI DA SE BOJO POINTERJI PRAVILNO POSTAVILI !!!!!!
        Entity.setIDs(this.entityList);
        Entity.setPointers(this.entityList);
    
        this.eventManager.initKeyTracking(this.entityList);
    }

    unloadData(data){
        console.log(data);
        this.entityList.forEach(entity =>{
            if(entity.name == data[0].name){
                Entity.removeEntity(this.entityList, entity);
            }
        })
        
        Entity.setIDs(this.entityList);
        Entity.setPointers(this.entityList);

        this.eventManager.initKeyTracking(this.entityList);
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