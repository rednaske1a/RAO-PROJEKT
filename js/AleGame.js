class AleGame {
    constructor() {
        this.sManager = new AleSceneManager();
        this.eManager = new AleEventManager();
        this.renderer = new AleRenderer();
        this.fizika = new AleFizika();
    }

    init(scenes){
        console.log(scenes);
        this.sManager.setScenes(scenes);
        this.sManager.loadScene("gameScene", this.eManager);
        this.sManager.loadScene("level1Scene", this.eManager);
        this.sManager.loadScene("playerScene", this.eManager);
        this.sManager.loadScene("guiScene", this.eManager);
    }

    run() {
        game.render();
        game.update();
        window.requestAnimationFrame(game.run);
    }

    render() {
        //console.log("render");
        this.renderer.render(this.sManager.entityList);
    }

    update() {
        this.eManager.solveEvents(this.sManager);
        this.fizika.update(this.sManager.entityList);
    }
}