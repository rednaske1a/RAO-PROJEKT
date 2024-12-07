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

        let test = localStorage.getItem("Player_0w");
        if(test == null){
            console.log("set normal0")
            this.eManager.updateEventKey(this.sManager, 'Player_0', "w", "w", "w")
            this.eManager.updateEventKey(this.sManager, 'Player_0', "a", "a", "a")
            this.eManager.updateEventKey(this.sManager, 'Player_0', "s", "s", "s")
            this.eManager.updateEventKey(this.sManager, 'Player_0', "d", "d", "d")
            this.eManager.updateEventKey(this.sManager, 'Player_0', "f", "f", "f")
            this.eManager.updateEventKey(this.sManager, 'Player_0', "r", "r", "r")
        } else {
            console.log("set already0")
            this.eManager.updateEventKey(this.sManager, 'Player_0',"w", localStorage.getItem("Player_0w"), "w");
            this.eManager.updateEventKey(this.sManager, 'Player_0',"a", localStorage.getItem("Player_0a"), "a");
            this.eManager.updateEventKey(this.sManager, 'Player_0',"s", localStorage.getItem("Player_0s"), "s");
            this.eManager.updateEventKey(this.sManager, 'Player_0',"d", localStorage.getItem("Player_0d"), "d");
            this.eManager.updateEventKey(this.sManager, 'Player_0',"f", localStorage.getItem("Player_0f"), "f");
            this.eManager.updateEventKey(this.sManager, 'Player_0',"r", localStorage.getItem("Player_0r"), "r");
        }

        let player2 = this.sManager.createEntity("Player", game, this.eManager);
        let player2Img = player2.getChildByTemplate("PlayerImage");

        player2.relPos.x = 400;
        //player2Img.renderC.color = "yellow";

        let test2 = localStorage.getItem("Player_1w");
        if(test2 == null){
            console.log("set normal1")
            this.eManager.updateEventKey(this.sManager, 'Player_1', "w", "i", "w")
            this.eManager.updateEventKey(this.sManager, 'Player_1', "a", "j", "a")
            this.eManager.updateEventKey(this.sManager, 'Player_1', "s", "k", "s")
            this.eManager.updateEventKey(this.sManager, 'Player_1', "d", "l", "d")
            this.eManager.updateEventKey(this.sManager, 'Player_1', "f", "o", "f")
            this.eManager.updateEventKey(this.sManager, 'Player_1', "r", "p", "r")
        } else {
            console.log("set already1")
            this.eManager.updateEventKey(this.sManager, 'Player_1',"w", localStorage.getItem("Player_1w"), "w");
            this.eManager.updateEventKey(this.sManager, 'Player_1',"a", localStorage.getItem("Player_1a"), "a");
            this.eManager.updateEventKey(this.sManager, 'Player_1',"s", localStorage.getItem("Player_1s"), "s");
            this.eManager.updateEventKey(this.sManager, 'Player_1',"d", localStorage.getItem("Player_1d"), "d");
            this.eManager.updateEventKey(this.sManager, 'Player_1',"f", localStorage.getItem("Player_1f"), "f");
            this.eManager.updateEventKey(this.sManager, 'Player_1',"r", localStorage.getItem("Player_1r"), "r");
        }


        //player2Img.animationC.startAnimation("idle");
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