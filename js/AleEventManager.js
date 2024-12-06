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
                //console.log("NORMAL EVENT")
                //console.log(newEvent);
                entity.eventC.events[index] = newEvent;
            })
        }
        if(entity.enemyAIC != null){
            entity.enemyAIC.events.forEach((event, index) =>{

                let newEvent = new AleEvent(event, sManager, entity);
                //console.log("AI EVENT")
                //console.log(newEvent);
                entity.enemyAIC.events[index] = newEvent;
            })
        }
    }

    updateEventKey(sManager, entityName, eName, newTrigger){
        let entity = sManager.getEntityByName(entityName);
        localStorage.setItem(entityName+eName, newTrigger)
        console.log(entity.name)
        console.log(newTrigger)
        entity.eventC.events.forEach(event =>{
            console.log(event.data.eName + "==" + eName)
            if(event.data.eName == eName){
                event.trigger = newTrigger;
            }
        })
    }

    updateMouseXY(event){
        this.screenMouseXY.x = event.clientX - this.canvas.offsetLeft;
        this.screenMouseXY.y = event.clientY - this.canvas.offsetTop;
    }

    getNewEvents(eList) {
        eList.forEach(entity => {
            if (entity.eventC != null) {
                entity.eventC.events.forEach((event, index) => {
                    if (event.type == "KEYBOARD") {
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

                    if (event.type == "MOUSE") {
                        if (this.tStates.has(event.type)) {
                            if (this.tStates.get(event.type).has(event.trigger)) {
                                // console.log(event)
                                if (this.tStates.get(event.type).get(event.trigger)[event.context] == true) {
                                    // console.log("type: " + event.type)
                                    // console.log("trigger: " + event.trigger)
                                    // console.log("context: " + event.context)
                                    if(this.AABBPoint(event.data.eTarget, this.screenMouseXY)){
                                        console.log("Click")
                                        this.validateEvent(event.data);
                                    }
                                    
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
                            //console.log(event.data.eData.triggered); BRUHH
                            if (event.data.eData.triggered == false) {
                                if (event.data.eData.start + event.data.eData.timeout < now) {
                                    event.data.eData.triggered = true;
                                    this.validateEvent(event.data);
                                }
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
            //console.log("Pressed LMB");
        }
        if (this.tStates.get("MOUSE").get("LMB").RELEASED == true){
           // console.log("Released LMB");
        }

        if(this.tStates.get("KEYBOARD").has("a")){
            if(this.tStates.get("KEYBOARD").get("a").RELEASED == true){
               // console.log("RELEASED a");
            }
        }
        if(this.tStates.get("KEYBOARD").has("a")){
            if(this.tStates.get("KEYBOARD").get("a").PRESSED == true){
                //console.log("PRESSED a");
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
                case "eAttackSword": this.eAttackSword(sManager, event); break;
                case "eAttackBow": this.eAttackBow(sManager, event); break;
                case "KillTrigger": Entity.removeEntity(event.eTrigger, sManager); break;
                case "KillTarget": Entity.removeEntity(event.eTarget, sManager); break;
                case "DealDamage": this.eDealDamage(event, sManager); break;
                case "eSlimeAttack": this.eSlimeAttack(sManager, event); break;
                case "eSetBestLVL": this.setBestLVL(sManager); break;
                case "eUpgradeSword": this.eUpgradeSword(sManager, event); break;
                case "eUpgradeBow": this.eUpgradeBow(sManager, event); break;
                case "eHeal": this.eHeal(sManager, event); break;
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
        let move = event.eTarget.getChildByTemplate("MoveIndicator")
        if(move.relPos != undefined){
            move.relPos.x = -100;
        }
        event.eTarget.playerC.lookingLeft = true;
        event.eTarget.playerC.lookingRight= false;
        event.eTarget.fizikaC.vel.x = -event.eTarget.playerC.moveSpeed;
    }

    eGoRight(event) {
        let move = event.eTarget.getChildByTemplate("MoveIndicator")
        if(move.relPos != undefined){
            move.relPos.x = 50;
        }
        event.eTarget.playerC.lookingLeft = false;
        event.eTarget.playerC.lookingRight= true;
        event.eTarget.fizikaC.vel.x = event.eTarget.playerC.moveSpeed;
    }

    eDealDamage(event, sManager){
        if(event.eTarget.playerC != null){
            event.eTarget.playerC.hp -= event.eTrigger.combatC.dmg;
            if(event.eTarget.templateName == "Player"){
                
            }

            if(event.eTarget.playerC.hp <= 0){
                if(event.eTarget.templateName.includes("Slime")){
                    console.log("kill")
                    event.eTrigger.parent.coinC.coins += 1;
                    let LVL = sManager.getEntityByName("LVLText_0");
                    let EXPUP = sManager.getEntityByName("EXPUPText_0");
                    let EXP = sManager.getEntityByName("EXPText_0");
                   let player = event.eTrigger.parent;

                    EXP.textC.value += 100;
                    if(EXP.textC.value >= EXPUP.textC.value){
                        EXP.textC.value -= EXPUP.textC.value;
                        LVL.textC.value++;
                        this.setBestLVL(sManager);
                        localStorage.setItem("BESTLVL", LVL.textC.value);
                        sManager.getEntitiesByTemplate("Player").forEach(player => {
                            player.playerC.maxhp += 10;
                            player.playerC.hp = player.playerC.maxhp;
                            this.updateHPBAR(player, sManager);
                        });
                        
                    }

                    sManager.getEntityByName("CoinsText_0").textC.value = event.eTrigger.parent.coinC.coins;
                }
                Entity.removeEntity(event.eTarget, sManager);
            } else {
               this.updateHPBAR(event.eTarget, sManager);
            }

        }
        
    }

    updateHPBAR(entity, sManager){
        let MAXHP = sManager.getEntityByName("MAXHPText_0");
        

        if(entity.templateName == "Player"){
            MAXHP.textC.value = entity.playerC.maxhp;
            if(entity.name == "Player_0"){
                let HP1 = sManager.getEntityByName("P1HPText_0");
                HP1.textC.value = entity.playerC.hp;
            } else if(entity.name == "Player_1"){
                let HP2 = sManager.getEntityByName("P2HPText_0");
                HP2.textC.value = entity.playerC.hp;
            }
        }
        let redHP = entity.getChildByTemplate("HPBarRed");
        let greenHP = entity.getChildByTemplate("HPBarGreen");
        greenHP.size.w = (entity.playerC.hp / entity.playerC.maxhp) * redHP.size.w;
    }

    closeGUI(event){
        this.recursiveSetGUI(event.target, false);
    }

    openGUI(event){
        this.recursiveSetGUI(event.target, true);
    }

    createSlime(sManager, event){
        let newEntity = {};
        switch(event.eData.string1){
            case "L1Slime": newEntity = sManager.createEntity("L1Slime", sManager.getEntityByTemplate("Game"), this); break;
            case "L2Slime": newEntity = sManager.createEntity("L2Slime", sManager.getEntityByTemplate("Game"), this);break;
            case "L3Slime": newEntity = sManager.createEntity("L3Slime", sManager.getEntityByTemplate("Game"), this);break;
        }
        let min = event.eData.int1;
        let max = event.eData.int2;
        
        newEntity.relPos.x += Math.floor(Math.random() * (max - min) + min);

        let redHP = newEntity.getChildByTemplate("HPBarRed");
        let greenHP = newEntity.getChildByTemplate("HPBarGreen");

        redHP.pos.x = newEntity.pos.x;
        redHP.pos.y = newEntity.pos.y;

        greenHP.pos.x = newEntity.pos.x;
        greenHP.pos.y = newEntity.pos.y;
    }

    setBestLVL(sManager) {
        let LVL = sManager.getEntityByName("LVLText_0");
        let bestlvl = localStorage.getItem("BESTLVL");
    
        if (bestlvl == null) {
            bestlvl = 1;
            console.log("Set to 1")
            localStorage.setItem("BESTLVL", bestlvl);
        } else {
            bestlvl = Number(bestlvl);
        }

        if (Number(LVL.textC.value) > bestlvl) {
            console.log("Set to " +  LVL.textC.value)
            localStorage.setItem("BESTLVL", LVL.textC.value);
            bestlvl = Number(LVL.textC.value);
        }
    
        let BESTLVL = sManager.getEntityByName("BESTLVLText_0");
        BESTLVL.textC.value = String(bestlvl);
    }
    

    eAttackSword(sManager, event){
        let newEntity = sManager.createEntity("DamageBox", event.eTrigger, this);
        newEntity.relPos.x = newEntity.parent.size.w;

        if(newEntity.parent.playerC.lookingRight){
            newEntity.relPos.x = 50;
        }
        if(newEntity.parent.playerC.lookingLeft){
            newEntity.relPos.x = -200;
        }

        let SDMG = sManager.getEntityByName("SDMGText_0");
        newEntity.combatC.dmg = SDMG.textC.value;
        newEntity.relPos.y = 0;
        newEntity.size.w = 200
        newEntity.size.h = 100;
       // newEntity.timedEventC.delay = 100;
    }

    eAttackBow(sManager, event){
        let newEntity = sManager.createEntity("DamageBox", event.eTrigger, this);

        if(newEntity.parent.playerC.lookingRight){
            newEntity.relPos.x = newEntity.parent.size.w;
            newEntity.fizikaC.vel.x = 30;
        }
        if(newEntity.parent.playerC.lookingLeft){
            newEntity.relPos.x = -500;
            newEntity.fizikaC.vel.x = -30;
        }

        let BDMG = sManager.getEntityByName("BDMGText_0");
        newEntity.combatC.dmg = BDMG.textC.value;
        newEntity.relPos.y = 50;
        newEntity.size.w = 20
        newEntity.size.h = 10;
        //newEntity.timedEventC.delay = 250;
        
    }

    eSlimeAttack(sManager, event){
        let newEntity = sManager.createEntity("DamageBox", event.eTrigger, this);
        newEntity.fizikaC.collMask = [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        newEntity.eventC.getEventByType("TIME").data.eData.timeout = 250;

        newEntity.combatC.dmg = 5;
        newEntity.relPos.y = -50;
        newEntity.relPos.x = -50;
        newEntity.size.w = event.eTrigger.size.w + 100
        newEntity.size.h = event.eTrigger.size.h + 100;
        //newEntity.timedEventC.delay = 250;
        
    }

    eUpgradeSword(sManager, event){
            let USBPrice = sManager.getEntityByName("USBPrice_0");
            let COINS = sManager.getEntityByName("CoinsText_0");
            let SDMG = sManager.getEntityByName("SDMGText_0");

            let coins = COINS.textC.value;
            console.log("hehe")
            console.log(coins + " " + USBPrice.textC.value)
            if(coins >= USBPrice.textC.value){
                console.log("hehe")
                COINS.textC.value -= USBPrice.textC.value;
                SDMG.textC.value += 5;
                USBPrice.textC.value = Math.floor(USBPrice.textC.value * 1.3);
            }
    }

    eUpgradeBow(sManager, event){
        let player = sManager.getEntityByTemplate("Player");

        let UBBPrice = sManager.getEntityByName("UBBPrice_0");
        let COINS = sManager.getEntityByName("CoinsText_0");
        let BDMG = sManager.getEntityByName("BDMGText_0");

        let coins = COINS.textC.value;
        console.log("hehe2")
        console.log(coins + " " + UBBPrice.textC.value)
        if(coins >= UBBPrice.textC.value){
            console.log("hehe2")
            COINS.textC.value -= UBBPrice.textC.value;
            BDMG.textC.value += 5;
            COINS.textC.value = player.coinC.coins;
            UBBPrice.textC.value = Math.floor(UBBPrice.textC.value * 1.3);
        }
    }

    eHeal(sManager, event){
        let players = sManager.getEntitiesByTemplate("Player");

        let HBPrice = sManager.getEntityByName("HBPrice_0");
        let COINS = sManager.getEntityByName("CoinsText_0");
        let coins = COINS.textC.value;

        console.log("hehe3");
        console.log(coins + " " + HBPrice.textC.value)
        if(coins >= HBPrice.textC.value){
            console.log("hehe3")
            COINS.textC.value -= HBPrice.textC.value;
            players.forEach(player =>{
                player.playerC.hp += 30;
                if(player.playerC.hp > player.playerC.maxhp){
                    player.playerC.hp = player.playerC.maxhp;
                }
                this.updateHPBAR(player, sManager);
            })
            
        }
    }
}

