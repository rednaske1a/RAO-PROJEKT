class AleGame {
    constructor() {
        this.sManager = {};
        this.eManager = new AleEventManager();
        this.renderer = new AleRenderer();
        this.fizika = new AleFizika();
    }

    init(scenes){
        this.sManager = new AleSceneManager(scenes);
        let game = this.sManager.createEntity("Game", null, this.eManager);
        this.sManager.createEntity("L001", game, this.eManager);
        this.sManager.createEntity("Player", game, this.eManager);
        this.sManager.createEntity("Gui", game, this.eManager);
    }

    run() {
        game.render();
        game.update();
        window.requestAnimationFrame(game.run);
    }

    render() {
        //console.log("render");
        this.renderer.render(this.sManager.eLoaded);
    }

    update() {
        this.eManager.solveEvents(this.sManager);
        this.fizika.update(this.sManager.eLoaded);
    }
}