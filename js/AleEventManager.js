class AleEvent{
    constructor({name, type, trigger, tContext, tEntity, target, eContexts}, sManager){
        this.name = name;       //Jump, UseSkill1, RunLeft

        this.type = type;       //COLLISION, KEYBOARD, MOUSE
        this.trigger = trigger; //Player, W, A, S, D, RMB, LMB
        this.context = tContext; //EnterBody, LeaveBody, Pressed, Release, Down, Up

        this.data = {
            trigger: tEntity,
            target: sManager.getEntityByName(target),
            contexts: eContexts
        }
    }
}

//COLLISON //Player //ENTER
//KEYBOARD //W //CLICK
//MOUSE //RMB //RELEASE


class AleEventManager{
    constructor(){
        this.eventList = [];
        this.canvas = document.querySelector('canvas');
        this.aiManager = new AleAIManager();

        this.eventContext = "InGame";
        this.events = [];

        this.tStates = new Map();

        this.tStates.set("MOUSE", new Map());
        this.tStates.set("KEYBOARD", new Map());
        this.tStates.set("COLLISION", new Map());

        this.tStates.get("MOUSE").set("LMB", {state: false, down: false, up: !false, pressed: false, released: false})
        this.tStates.get("MOUSE").set("RMB", {state: false, down: false, up: !false, pressed: false, released: false})
        this.tStates.get("MOUSE").set("MMB", {state: false, down: false, up: !false, pressed: false, released: false})

        this.screenMouseXY = {x:0, y:0};
        this.gameMouseXY = {x:0, y:0};

        window.addEventListener('keydown', (event) => this.setKeyboardState(event, 1));
        window.addEventListener('keyup', (event) => this.setKeyboardState(event, 0));
        window.addEventListener('mousemove', (event) => this.updateMouseXY(event));
        window.addEventListener("mousedown", (event) => this.setMouseState(event));
        window.addEventListener("mouseup", (event) => this.setMouseState(event));
    }

    

    setKeyboardState(event, value){
        //console.log(event.key);
        let prevKey = false;
        if(this.tStates.get("KEYBOARD").has(event.key)){
            prevKey = this.tStates.get("KEYBOARD").get(event.key).state
        }

        let newKey = value;
        //console.log(prevKey + "prev, new" + newKey);
        let pressedKey = ((prevKey == false) && (newKey == true))? true : false;
        //console.log(pressedKey);
        let releasedKey = ((prevKey == true) && (newKey == false))? true : false;


        this.tStates.get("KEYBOARD").set(event.key, {state: newKey, down: newKey, up: !newKey, pressed: pressedKey, released: releasedKey});
    }

    updateKeyboardState(){
        //console.log("abcv")
        for (let [key, value] of this.tStates.get("KEYBOARD")) {
            let newState = this.tStates.get("KEYBOARD").get(key);
            newState.pressed = false;
            newState.released = false;
            this.tStates.get("KEYBOARD").set(key, newState);
        }
    }

    updateMouseState(){
        let newStateLMB = this.tStates.get("MOUSE").get("LMB");
        //console.log(newStateLMB);
        newStateLMB.pressed = false;
        newStateLMB.released = false;
        this.tStates.get("MOUSE").set("LMB", newStateLMB);
        let newStateRMB = this.tStates.get("MOUSE").get("RMB");
        newStateRMB.pressed = false;
        newStateRMB.released = false;
        this.tStates.get("MOUSE").set("RMB", newStateRMB);
        let newStateMMB = this.tStates.get("MOUSE").get("MMB");
        newStateMMB.pressed = false;
        newStateMMB.released = false;
        this.tStates.get("MOUSE").set("MMB", newStateMMB);
    }

    setMouseState(event){///FIXXXXXX
        let prevLMB = false;
        let prevRMB = false;
        let prevMMB = false;
        if(this.tStates.get("MOUSE").has("LMB")){
            prevLMB = this.tStates.get("MOUSE").get("LMB").state
        } 
        if(this.tStates.get("MOUSE").has("RMB")){
            prevRMB = this.tStates.get("MOUSE").get("RMB").state
        }
        if(this.tStates.get("MOUSE").has("MMB")){
            prevMMB = this.tStates.get("MOUSE").get("MMB").state
        }

        let LMB = false;
        let RMB = false;
        let MMB = false;
        switch(event.buttons){
            case 0: LMB = false; RMB = false; MMB = false; break;
            case 1: LMB = true; RMB = false; MMB = false; break;
            case 2: LMB = false; RMB = true; MMB = false; break;
            case 3: LMB = true; RMB = true; MMB = false; break;
            case 4: LMB = false; RMB = false; MMB = true; break;
            case 5: LMB = true; RMB = false; MMB = true; break;
            case 6: LMB = false; RMB = true; MMB = true; break;
            case 7: LMB = true; RMB = true; MMB = true; break;
        }

        let pressedLMB = ((prevLMB == false) && (LMB == true))? true : false;
        let pressedRMB = ((prevRMB == false) && (RMB == true))? true : false;
        let pressedMMB = ((prevMMB == false) && (MMB == true))? true : false;

        let releasedLMB = ((prevLMB == true) && (LMB == false))? true : false;
        let releasedRMB = ((prevRMB == true) && (RMB == false))? true : false;
        let releasedMMB = ((prevMMB == true) && (MMB == false))? true : false;

        this.tStates.get("MOUSE").set("LMB", {state: LMB, down: LMB, up: !LMB, pressed: pressedLMB, released: releasedLMB});
        this.tStates.get("MOUSE").set("RMB", {state: RMB, down: RMB, up: !RMB, pressed: pressedRMB, released: releasedRMB});
        this.tStates.get("MOUSE").set("MMB", {state: MMB, down: MMB, up: !MMB, pressed: pressedMMB, released: releasedMMB});
    }

    bindEvents(entity){
        entity.eventC.events.forEach(event =>{
            let newEvent = new AleEvent(event, sManager);
            this.events.push(newEvent)
        });
    }

    updateMouseXY(event){
        this.screenMouseXY.x = event.clientX - this.canvas.offsetLeft;
        this.screenMouseXY.y = event.clientY - this.canvas.offsetTop;
    }

    getNewEvents(){
        this.events.forEach(event =>{
            if(this.tStates.get(event.type).get(event.trigger)[event.context] == true){
                this.eventList.push(event.data);
            }
        });
    }

    getEvents(entityList){
        this.eventList = [];
        this.getNewEvents();


        let aiEvents = AleAIManager.think(entityList);
        //console.log(aiEvents);
        /*
        aiEvents.forEach(event =>{
            //console.log("AI EVENT");           
            //console.log(entityList);
            //console.log(event);
            this.validateEvent(event);
        })

        entityList.forEach(entity =>{
            if(entity.timedEventC != null){
                let now = Date.now();
                console.log(now);
                if(now >= entity.timedEventC.start + entity.timedEventC.delay){
                    entity.timedEventC.events.forEach(event =>{
                        this.validateEvent(event);
                    })
                }
            }
        })
        */



        if (this.tStates.get("MOUSE").get("LMB").pressed == true){
            console.log("Pressed LMB");
        }
        if (this.tStates.get("MOUSE").get("LMB").released == true){
            console.log("Released LMB");
        }
        if(this.tStates.get("KEYBOARD").has("a")){
            if(this.tStates.get("KEYBOARD").get("a").pressed == true){
                console.log("Pressed a");
            }
        }
        
        this.updateMouseState();
        this.updateKeyboardState();
        //console.log(this.tStates);

    }

    addEvent(event){

    }

    validateEvent(event){
        console.log(event)
        let valid = 0;
        
        event.contexts.forEach(context =>{
            if(context == this.eventContext){
                valid = 1;
            }
        });

        if(valid == 0) return;

        switch(event.name){
            case "Jump": if (event.target.playerC.isGrounded == false) valid = 0; break;
            case "Duck": if (event.target.playerC.isDucking == true) valid = 0; break;
            case "GoLeft": if (event.target.playerC.isGrounded == false) valid = 0; break;
            case "GoRight": if (event.target.playerC.isGrounded == false) valid = 0; break;
            case "ToggleGUI": if(event.target.guiC.toggleLocked == 1){console.log("ToggleGUI locked"); valid = 0;} break;
        }

        switch(event.triggerKey){
            case "wentDown":
            case "down": valid = this.AABBPoint(event.trigger, this.screenMouseXY) * valid; break;
        }

        if(valid == 1) {
          this.eventList.push(event);
        }
    }

    solveEvents(sManager){
        this.getEvents(sManager.eLoaded);
        this.eventList.forEach(event => {
            switch(event.name){
                case "Jump": event.target.fizikaC.vel.y += -event.target.playerC.jumpSpeed; break;
                case "Duck": event.target.fizikaC.vel.y += event.target.playerC.jumpSpeed; break;
                case "GoLeft": event.target.fizikaC.vel.x = -event.target.playerC.moveSpeed; break;
                case "GoRight": event.target.fizikaC.vel.x = event.target.playerC.moveSpeed; break;
                case "ToggleGUI": this.toggleGUI(event); break;
                case "CloseGUI": this.closeGUI(event); break;
                case "CreateSlime": this.createSlime(sManager, event); break;
                case "UseSkill1": this.useSkill1(sManager, event); break;
                case "UseSkill2": this.useSkill2(sManager, event); break;
                case "UseSkill3": this.useSkill3(sManager, event); break;
                case "KYS": Entity.removeEntity(event.target, sManager); break;
            }
        });
    }

    AABBPoint(target, point){
        return ( point.x > target.pos.x && point.x < target.pos.x + target.size.w &&
            point.y > target.pos.y && point.y < target.pos.y + target.size.h)?1:0;
    }

    toggleGUI(event){
        this.recursiveSetGUI(event.target, !event.target.renderC.visible);


        event.target.toggleLocked = 1;
        event.target.toggleLockedBy = event.trigger;
        console.log("LOCKED " + event.target.name + " BY " + event.trigger);
    }

    recursiveSetGUI(entity, setTo){
        entity.children.forEach(child=>{
            this.recursiveSetGUI(child, setTo);
        })
        if(entity.renderC != null){
            entity.renderC.visible = setTo;
        }
    }

    closeGUI(event){
        this.recursiveSetGUI(event.target, false);
    }

    openGUI(event){
        this.recursiveSetGUI(event.target, true);
    }

    createSlime(sManager, event){
        let newEntity = sManager.createEntity("Slime", sManager.getEntityByTemplate("Game"), this);
        newEntity.relPos.x += Math.floor(Math.random() * (200 + 200 + 1) - 200);
    }

    useSkill1(sManager, event){
        let newEntity = sManager.createEntity("DamageBox", sManager.getEntityByTemplate("Player"), this);
        newEntity.relPos.x = newEntity.parent.size.w;
        newEntity.relPos.y = 0;
        newEntity.size.w = 200
        newEntity.size.h = 50;
        newEntity.timedEventC.delay = 100;
    }

    useSkill2(sManager, event){
        let player = sManager.getEntityByTemplate("Player");
        player.fizikaC.vel.x = 20;
        player.fizikaC.vel.y = -20;
        let newEntity = sManager.createEntity("DamageBox", player, this);
        newEntity.relPos.x = -newEntity.parent.size.w;
        newEntity.relPos.y = newEntity.parent.size.h/2;
        newEntity.size.w = newEntity.parent.size.w * 3
        newEntity.size.h = newEntity.parent.size.h/2;
        newEntity.timedEventC.delay = 1000;
    }

    useSkill3(sManager, event){
        let newEntity = sManager.createEntity("DamageBox", sManager.getEntityByTemplate("Player"), this);
        newEntity.relPos.x = newEntity.parent.size.w;
        newEntity.relPos.y = -400;
        newEntity.size.w = 500
        newEntity.size.h = 500;
        newEntity.timedEventC.delay = 200;
        newEntity.fizikaC.vel.x = 100;
    }
}

