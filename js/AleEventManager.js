class AleEvent{
    constructor({type, trigger, context, eName, eTrigger, eTarget, eContexts, eData}, sManager, eParent){
        this.type = type;       //COLLISION, KEYBOARD, MOUSE, AI
        this.trigger = trigger; //Player, W, A, S, D, RMB, LMB, AI
        this.context = context; //EnterBody, LeaveBody, Pressed, Release, Down, Up, AI

        if(eTrigger == "SELF"){
            eTrigger = eParent;
        } else {
            eTrigger == sManager.getEntityByName(eTrigger);
        }

        if(eTarget == "SELF"){
            eTarget = eParent;
        } else {
            eTarget = sManager.getEntityByName(eTarget);
        }

        this.data = {
            eName: eName,
            eTrigger: eTrigger,
            eTarget: eTarget,
            eContexts: Entity.copy(eContexts),
            eData: eData
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

        this.eventContext = "INGAME";
        this.events = [];

        this.tStates = new Map();

        this.tStates.set("MOUSE", new Map());
        this.tStates.set("KEYBOARD", new Map());
        this.tStates.set("COLLISION", new Map());

        this.tStates.get("MOUSE").set("LMB", {STATE: false, DOWN: false, UP: !false, PRESSED: false, RELEASED: false})
        this.tStates.get("MOUSE").set("RMB", {STATE: false, DOWN: false, UP: !false, PRESSED: false, RELEASED: false})
        this.tStates.get("MOUSE").set("MMB", {STATE: false, DOWN: false, UP: !false, PRESSED: false, RELEASED: false})

        this.screenMouseXY = {x:0, y:0};
        this.gameMouseXY = {x:0, y:0};

        window.addEventListener('keydown', (event) => this.setKeyboardState(event, 1));
        window.addEventListener('keyup', (event) => this.setKeyboardState(event, 0));
        window.addEventListener('mousemove', (event) => this.updateMouseXY(event));
        window.addEventListener("mousedown", (event) => this.setMouseState(event));
        window.addEventListener("mouseup", (event) => this.setMouseState(event));
    }

    

    setKeyboardState(event, value){
        console.log(event.key);
        let prevKey = false;

        if(this.tStates.get("KEYBOARD").has(event.key)){
            prevKey = this.tStates.get("KEYBOARD").get(event.key).STATE
        }

        let newKey = value;
        //console.log(prevKey + "prev, new" + newKey);
        let pressedKey = ((prevKey == false) && (newKey == true))? true : false;
        //console.log(pressedKey);
        let releasedKey = ((prevKey == true) && (newKey == false))? true : false;


        this.tStates.get("KEYBOARD").set(event.key, {STATE: newKey, DOWN: newKey, UP: !newKey, PRESSED: pressedKey, RELEASED: releasedKey});
    }

    updateKeyboardState(){
        //console.log("abcv")
        for (let [key, value] of this.tStates.get("KEYBOARD")) {
            let newState = this.tStates.get("KEYBOARD").get(key);
            newState.PRESSED = false;
            newState.RELEASED = false;
            this.tStates.get("KEYBOARD").set(key, newState);
        }
    }

    updateMouseState(){
        let newStateLMB = this.tStates.get("MOUSE").get("LMB");
        //console.log(newStateLMB);
        newStateLMB.PRESSED = false;
        newStateLMB.RELEASED = false;
        this.tStates.get("MOUSE").set("LMB", newStateLMB);
        let newStateRMB = this.tStates.get("MOUSE").get("RMB");
        newStateRMB.PRESSED = false;
        newStateRMB.RELEASED = false;
        this.tStates.get("MOUSE").set("RMB", newStateRMB);
        let newStateMMB = this.tStates.get("MOUSE").get("MMB");
        newStateMMB.PRESSED = false;
        newStateMMB.RELEASED = false;
        this.tStates.get("MOUSE").set("MMB", newStateMMB);
    }

    setMouseState(event){///FIXXXXXX
        let prevLMB = false;
        let prevRMB = false;
        let prevMMB = false;
        if(this.tStates.get("MOUSE").has("LMB")){
            prevLMB = this.tStates.get("MOUSE").get("LMB").STATE
        } 
        if(this.tStates.get("MOUSE").has("RMB")){
            prevRMB = this.tStates.get("MOUSE").get("RMB").STATE
        }
        if(this.tStates.get("MOUSE").has("MMB")){
            prevMMB = this.tStates.get("MOUSE").get("MMB").STATE
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

        this.tStates.get("MOUSE").set("LMB", {STATE: LMB, DOWN: LMB, UP: !LMB, PRESSED: pressedLMB, RELEASED: releasedLMB});
        this.tStates.get("MOUSE").set("RMB", {STATE: RMB, DOWN: RMB, UP: !RMB, PRESSED: pressedRMB, RELEASED: releasedRMB});
        this.tStates.get("MOUSE").set("MMB", {STATE: MMB, DOWN: MMB, UP: !MMB, PRESSED: pressedMMB, RELEASED: releasedMMB});
    }

    bindEvents(entity, sManager){
        if(entity.eventC != null){

            entity.eventC.events.forEach((event, index) =>{

                let newEvent = new AleEvent(event, sManager, entity);
                console.log("NORMAL EVENT")
                console.log(newEvent);
                entity.eventC.events[index] = newEvent;
            })
        }
        if(entity.enemyAIC != null){
            entity.enemyAIC.events.forEach((event, index) =>{

                let newEvent = new AleEvent(event, sManager, entity);
                console.log("AI EVENT")
                console.log(newEvent);
                entity.enemyAIC.events[index] = newEvent;
            })
        }
    }

    updateMouseXY(event){
        this.screenMouseXY.x = event.clientX - this.canvas.offsetLeft;
        this.screenMouseXY.y = event.clientY - this.canvas.offsetTop;
    }

    getNewEvents(eList) {
        eList.forEach(entity => {
            if (entity.eventC != null) {
                entity.eventC.events.forEach((event, index) => {
                    if (event.type == "KEYBOARD" || event.type == "MOUSE") {
                        if (this.tStates.has(event.type)) {
                            if (this.tStates.get(event.type).has(event.trigger)) {
                                // console.log(event)
                                if (this.tStates.get(event.type).get(event.trigger)[event.context] == true) {
                                    // console.log("type: " + event.type)
                                    // console.log("trigger: " + event.trigger)
                                    // console.log("context: " + event.context)
                                    this.validateEvent(event.data);
                                }
                            }
                        }   
                    }
    
                    if (event.type == "TIME") {
                        let now = Date.now();
                        if (event.data.eData.start == null) {
                            event.data.eData.start = Date.now();
                        }
                        if (event.context == "TIMEOUT") {
                            //console.log(event.data.eData.start);
                            //console.log(event.data.eData.timeout);
                            //console.log(now);
                            if (event.data.eData.start + event.data.eData.timeout < now) {
                                let newEvent = Entity.copy(event);
                                newEvent.data.eData.start = null;
                                this.validateEvent(newEvent.data);
                            }
                        }
                        if (event.context == "LOOP") {
                            let now = Date.now();
                            //console.log(event.data.eData.start);
                            //console.log(event.data.eData.timeout);
                            //console.log(now);
                            if (event.data.eData.start + event.data.eData.timeout < now) {
                               // let newEvent = Entity.copy(event);
                                event.data.eData.start = Date.now();
                                this.validateEvent(event.data);
                            }
                        }
                    }
    
                    if (event.type == "COLLISION") {
                        eList.forEach(entity2 => {
                            if (entity.fizikaC != null && entity2.fizikaC != null) {
                                for (let index = 0; index < entity.fizikaC.collLayer.length; index++) {
                                    if (entity.fizikaC.collMask[index] == 1 &&
                                        entity2.fizikaC.collLayer[index] == 1) {
                                        if (AleFizika.AABB(entity, entity2) == true) {
                                            let newEvent = Entity.copy(event);
                                            newEvent.trigger = entity.name;
                                            newEvent.data.eTarget = entity2;
                                            newEvent.data.eTrigger = entity;
                                            this.validateEvent(newEvent.data);
                                        }
                                    }
                                }
                            }
                        });
                    }
                });
            }
        });
    }

    getAIEvents(eList){
        let AIEvents = AleAIManager.think(eList);
        AIEvents.forEach(event =>{
            this.validateEvent(event.data);
        })
    }
    

    getEvents(eList, fManager){
        this.eventList = [];
        this.getNewEvents(eList);
        this.getAIEvents(eList);
        //console.log(aiEvents);
        

        if (this.tStates.get("MOUSE").get("LMB").PRESSED == true){
            console.log("Pressed LMB");
        }
        if (this.tStates.get("MOUSE").get("LMB").RELEASED == true){
            console.log("Released LMB");
        }

        if(this.tStates.get("KEYBOARD").has("a")){
            if(this.tStates.get("KEYBOARD").get("a").RELEASED == true){
                console.log("RELEASED a");
            }
        }
        if(this.tStates.get("KEYBOARD").has("a")){
            if(this.tStates.get("KEYBOARD").get("a").PRESSED == true){
                console.log("PRESSED a");
            }
        }
        
        this.updateMouseState();
        this.updateKeyboardState();
        //console.log(this.tStates);

    }

    addEvent(event){

    }

    validateEvent(event){
        //console.log(event)
        let valid = 0;
        
        event.eContexts.forEach(context =>{
            if(context == this.eventContext){
                valid = 1;
            }
        });

        if(valid == 0) return;

        switch(event.eName){
            case "Jump": if (event.eTarget.playerC.isGrounded == false) valid = 0; break;
            case "Duck": if (event.eTarget.playerC.isDucking == true) valid = 0; break;
            case "GoLeft": if (event.eTarget.playerC.isGrounded == false) valid = 0; break;
            case "GoRight": if (event.eTarget.playerC.isGrounded == false) valid = 0; break;
            case "ToggleGUI": if(event.eTarget.guiC.toggleLocked == 1){console.log("ToggleGUI locked"); valid = 0;} break;
        }

        if(valid == 1) {
          this.eventList.push(event);
        }
    }

    solveEvents(sManager, fManager){
        this.getEvents(sManager.eLoaded, fManager);
        this.eventList.forEach(event => {
            switch(event.eName){
                case "Jump": this.eJump(event); break;
                case "Duck": this.eDuck(event); break;
                case "GoLeft": this.eGoLeft(event); break;
                case "GoRight": this.eGoRight(event); break;

                case "ToggleGUI": this.toggleGUI(event); break;
                case "CloseGUI": this.closeGUI(event); break;
                case "CreateSlime": this.createSlime(sManager, event); break;
                case "UseSkill1": this.useSkill1(sManager, event); break;
                case "UseSkill2": this.useSkill2(sManager, event); break;
                case "UseSkill3": this.useSkill3(sManager, event); break;
                case "KillTrigger": Entity.removeEntity(event.eTrigger, sManager); break;
                case "KillTarget": Entity.removeEntity(event.eTarget, sManager); break;
                case "DealDamage": this.eDealDamage(event, sManager); break;
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

    eJump(event) {
        event.eTarget.fizikaC.vel.y += -event.eTarget.playerC.jumpSpeed;
    }

    eDuck(event) {
        event.eTarget.fizikaC.vel.y += event.eTarget.playerC.jumpSpeed;
    }

    eGoLeft(event) {
        event.eTarget.getChildByTemplate("MoveIndicator").relPos.x = -100;
        event.eTarget.playerC.lookingLeft = true;
        event.eTarget.playerC.lookingRight= false;
        event.eTarget.fizikaC.vel.x = -event.eTarget.playerC.moveSpeed;
    }

    eGoRight(event) {
        event.eTarget.getChildByTemplate("MoveIndicator").relPos.x = 50;
        event.eTarget.playerC.lookingLeft = false;
        event.eTarget.playerC.lookingRight= true;
        event.eTarget.fizikaC.vel.x = event.eTarget.playerC.moveSpeed;
    }

    eDealDamage(event, sManager){
        if(event.eTarget.playerC != null){
            event.eTarget.playerC.hp -= event.eTrigger.combatC.dmg;

            if(event.eTarget.playerC.hp <= 0){
                Entity.removeEntity(event.eTarget, sManager);
            } else {
                let redHP = event.eTarget.getChildByTemplate("HPBarRed");
                let greenHP = event.eTarget.getChildByTemplate("HPBarGreen");
                greenHP.size.w = (event.eTarget.playerC.hp / event.eTarget.playerC.maxhp) * redHP.size.w;
            }

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

        if(newEntity.parent.playerC.lookingRight){
            newEntity.relPos.x = 50;
        }
        if(newEntity.parent.playerC.lookingLeft){
            newEntity.relPos.x = -200;
        }

        newEntity.combatC.dmg = 30;
        newEntity.relPos.y = 0;
        newEntity.size.w = 200
        newEntity.size.h = 50;
       // newEntity.timedEventC.delay = 100;
    }

    useSkill2(sManager, event){
        let player = sManager.getEntityByTemplate("Player");
        let newEntity = sManager.createEntity("DamageBox", player, this);
            

        if(player.playerC.lookingRight && player.playerC){
            player.fizikaC.vel.x = 10;
            player.fizikaC.vel.y = -30;
        }

        if(player.playerC.lookingLeft && player.playerC){
            player.fizikaC.vel.x = -10;
            player.fizikaC.vel.y = -30;
        }
        
        newEntity.combatC.dmg = 50;
        newEntity.relPos.x = -newEntity.parent.size.w;
        newEntity.relPos.y = newEntity.parent.size.h/2;
        newEntity.size.w = newEntity.parent.size.w * 3
        newEntity.size.h = newEntity.parent.size.h;
        //newEntity.timedEventC.delay = 1000;
    }

    useSkill3(sManager, event){
        let newEntity = sManager.createEntity("DamageBox", sManager.getEntityByTemplate("Player"), this);

        if(newEntity.parent.playerC.lookingRight){
            newEntity.relPos.x = newEntity.parent.size.w;
            newEntity.fizikaC.vel.x = 30;
        }
        if(newEntity.parent.playerC.lookingLeft){
            newEntity.relPos.x = -500;
            newEntity.fizikaC.vel.x = -30;
        }

        newEntity.combatC.dmg = 5;
        newEntity.relPos.y = -400;
        newEntity.size.w = 500
        newEntity.size.h = 500;
        //newEntity.timedEventC.delay = 250;
        
    }
}

