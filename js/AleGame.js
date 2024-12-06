class AleGame {
    constructor() {
        this.sManager = {};
        this.eManager = new AleEventManager();
        this.renderer = new AleRenderer();
        this.fManager = new AleFizika();
        this.deltaTime = 0;
        this.prevTime = 1000;
    }

    init(scenes){
        this.sManager = new AleSceneManager(scenes);
        let game = this.sManager.createEntity("Game", null, this.eManager);
        this.sManager.createEntity("L001", game, this.eManager);

        let player1 = this.sManager.createEntity("Player", game, this.eManager);

        this.eManager.updateEventKey(this.sManager, 'Player_0', 'Jump', localStorage.getItem("Player_0Jump"))
        this.eManager.updateEventKey(this.sManager, 'Player_0', 'GoLeft', localStorage.getItem("Player_0GoLeft"))
        this.eManager.updateEventKey(this.sManager, 'Player_0', 'Duck', localStorage.getItem("Player_0Duck"))
        this.eManager.updateEventKey(this.sManager, 'Player_0', 'GoRight', localStorage.getItem("Player_0GoRight"))
        this.eManager.updateEventKey(this.sManager, 'Player_0', 'eAttackSword', localStorage.getItem("Player_0eAttackSword"))
        this.eManager.updateEventKey(this.sManager, 'Player_0', 'eAttackBow', localStorage.getItem("Player_0eAttackBow"))

        let player2 = this.sManager.createEntity("Player", game, this.eManager);
        let player2Img = player2.getChildByTemplate("PlayerImage");

        player2.relPos.x = 400;
        player2Img.renderC.color = "yellow";

        this.eManager.updateEventKey(this.sManager, 'Player_1', 'Jump', "i")
        this.eManager.updateEventKey(this.sManager, 'Player_1', 'GoLeft', "j")
        this.eManager.updateEventKey(this.sManager, 'Player_1', 'Duck', "k")
        this.eManager.updateEventKey(this.sManager, 'Player_1', 'GoRight', "l")
        this.eManager.updateEventKey(this.sManager, 'Player_1', 'eAttackSword', "o")
        this.eManager.updateEventKey(this.sManager, 'Player_1', 'eAttackBow', "p")





        this.sManager.createEntity("Gui", game, this.eManager);
    }

    run(time) {
        //game.deltaTime = Number((time - game.prevTime) / 1000);
        //game.prevTime = time;
        //console.log(game.deltaTime);
        game.render();
        game.update();
        window.requestAnimationFrame(game.run);
    }

    render() {
        //console.log("render");
        this.renderer.render(this.sManager.eLoaded);
    }

    update() {
        this.eManager.solveEvents(this.sManager, this.fManager);
        this.fManager.update(this.sManager.eLoaded, this.deltaTime);
    }
}