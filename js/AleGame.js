class AleGame {
    constructor() {
        this.sManager = {};
        this.eManager = new AleEventManager();
        this.renderer = new AleRenderer();
        this.fizika = new AleFizika();
    }

    init(scenes){
        this.sManager = new AleSceneManager(scenes);
        this.sManager.createEntity("gameScene", null, this.eManager);
        this.sManager.createEntity("level1Scene", "gameScene", this.eManager);
        this.sManager.createEntity("level1Scene", "gameScene", this.eManager);
        this.sManager.createEntity("playerScene", "gameScene", this.eManager);
        this.sManager.createEntity("guiScene", "gameScene", this.eManager);
    }

    run() {
        game.render();
        game.update();
        window.requestAnimationFrame(game.run);
    }

    render() {
        //console.log("render");
        this.renderer.render(this.sManager.loadedEntities);
    }

    update() {
        this.eManager.solveEvents(this.sManager);
        this.fizika.update(this.sManager.loadedEntities);
    }
}