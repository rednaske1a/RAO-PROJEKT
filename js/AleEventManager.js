class AleEvent{
    constructor({name, type, trigger, tContext, tEntity, target, eContexts}){
        this.name = name;       //Jump, UseSkill1, RunLeft

        this.type = type;       //COLLISION, KEYBOARD, MOUSE
        this.trigger = trigger; //Player, W, A, S, D, RMB, LMB
        this.context = tContext; //EnterBody, LeaveBody, Click, Release, Down, Up

        this.event = {
            trigger: tEntity,
            target: sManager.getEntityByName(target),
            contexts: eContexts
        }
        console.log("Created Event");
        console.log(this);
    }
}

//COLLISON //Player //ENTER
//KEYBOARD //W //CLICK
//MOUSE //RMB //RELEASE


//MAP PO triggerju
    //MAP po contextu
        //CE ZE OBSTAJA, DODA

class AleEventManager{
    constructor(){
        this.eventList = [];
        this.canvas = document.querySelector('canvas');
        this.aiManager = new AleAIManager();

        this.eventContext = "InGame";
        this.events = {}

        this.triggerStates = {
            pressed: new Set(),
            released: new Set(),
            up: new Set(),
            down: new Set(),
        }

        this.triggerCollector = {
            mouseState: new Map(),
            keyboardState: new Map()
        }

        this.triggerCollector.mouseState.set("LMB", {state: false, down: false, up: !false, pressed: false, released: false})
        this.triggerCollector.mouseState.set("RMB", {state: false, down: false, up: !false, pressed: false, released: false})
        this.triggerCollector.mouseState.set("MMB", {state: false, down: false, up: !false, pressed: false, released: false})

        this.screenMouseXY = {x:0, y:0};
        this.gameMouseXY = {x:0, y:0};
        window.addEventListener('keydown', (event) => this.setKeyboardState(event, 1));
        window.addEventListener('keyup', (event) => this.setKeyboardState(event, 0));
        window.addEventListener('mousemove', (event) => this.updateMouseXY(event));
        window.addEventListener("mousedown", (event) => this.setMouseState(event));
        window.addEventListener("mouseup", (event) => this.setMouseState(event));
    }

    setKeyboardState(event, value){
        let prevKey = false;
        if(this.triggerCollector.mouseState.has(event.key)){
            prevKey = this.triggerCollector.mouseState.get(event.key).state
        }

        let newKey = value;

        let pressedKey = ((prevKey == false) && (newKey == true))? true : false;
        let releasedKey = ((prevKey == true) && (newKey == false))? true : false;


        this.triggerCollector.keyboardState.set(event.key, {state: newKey, down: newKey, up: !newKey, pressed: pressedKey, released: releasedKey});
    }

    updateKeyboardState(){
        this.triggerCollector.keyboardState.forEach((key,index) =>{
            if(this.triggerCollector.keyboardState.has(key)){
            let newState = this.triggerCollector.keyboardState.get(key);
            newState.pressed = false;
            newState.released = false;
            }
            let newState = {state: false, down: false, up: !false, pressed: false, released: false};
            this.triggerCollector.keyboardState.set(key, newState);
        })
    }

    updateMouseState(){
        let newStateLMB = this.triggerCollector.mouseState.get("LMB");
        //console.log(newStateLMB);
        newStateLMB.pressed = false;
        newStateLMB.released = false;
        this.triggerCollector.mouseState.set("LMB", newStateLMB);
        let newStateRMB = this.triggerCollector.mouseState.get("RMB");
        newStateRMB.pressed = false;
        newStateRMB.released = false;
        this.triggerCollector.mouseState.set("RMB", newStateRMB);
        let newStateMMB = this.triggerCollector.mouseState.get("MMB");
        newStateMMB.pressed = false;
        newStateMMB.released = false;
        this.triggerCollector.mouseState.set("MMB", newStateMMB);
    }

    setMouseState(event){///FIXXXXXX
        let prevLMB = false;
        let prevRMB = false;
        let prevMMB = false;
        if(this.triggerCollector.mouseState.has("LMB")){
            prevLMB = this.triggerCollector.mouseState.get("LMB").state
        } 
        if(this.triggerCollector.mouseState.has("RMB")){
            prevRMB = this.triggerCollector.mouseState.get("RMB").state
        }
        if(this.triggerCollector.mouseState.has("MMB")){
            prevMMB = this.triggerCollector.mouseState.get("MMB").state
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

        this.triggerCollector.mouseState.set("LMB", {state: LMB, down: LMB, up: !LMB, pressed: pressedLMB, released: releasedLMB});
        this.triggerCollector.mouseState.set("RMB", {state: RMB, down: RMB, up: !RMB, pressed: pressedRMB, released: releasedRMB});
        this.triggerCollector.mouseState.set("MMB", {state: MMB, down: MMB, up: !MMB, pressed: pressedMMB, released: releasedMMB});
    }
    
    updateTriggerStates(){

    }

    /*
    bindEvents(entity, sManager){
        if(entity.eventC == null){
            return;
        }
        //console.log("binding events for " + entity.name);
        //console.log(entity.eventC);
        for(let key in entity.eventC.keys){
            //console.log("Key " + key);
            entity.eventC.keys[key].forEach(event=>{
                //console.log("Event " + event);
                //console.log()
                //console.log("EventTARGET:")
                //console.log(eventTarget);
                let newEvent = AleEventManager.formatEvent(event, entity, key, null, sManager);
                if(this.events.keys[key] == undefined){
                    this.events.keys[key] = {events: [], value:0};
                }
                this.events.keys[key].events.push(newEvent)
            });
        }

        for(let mouseMode in entity.eventC.mouse){
            //console.log("Mouse " + mouseMode);
            entity.eventC.mouse[mouseMode].forEach(event=>{
                //console.log("Event " + event);
                //console.log()
                //console.log("EventTARGET:")
                //console.log(eventTarget);
                let newEvent = AleEventManager.formatEvent(event, entity, null, mouseMode, sManager);
                if(this.events.mouse[mouseMode] == undefined){
                    this.events.mouse[mouseMode] = {events: [], value:0};
                }
                this.events.mouse[mouseMode].events.push(newEvent)
            });
        }
        console.log(this.events);
    }
*/
    static formatEvent(event, entity, key, mouseMode, sManager){
        let TK = key || mouseMode;

        let eventTarget = entity;
        if(event.target != "SELF"){
            eventTarget = sManager.getEntityByTemplate(event.target);
        } 

        let goodEvent = {name:event.name, contexts:event.contexts, trigger:entity, target:eventTarget, triggerKey:TK};
        return goodEvent;
    }
/*
    initKeyTracking(entityList){
        this.events.keys = {};
        this.events.mouse = {};
        entityList.forEach(entity =>{
            if(entity.eventC != null){
                //console.log("OKOK")
                //console.log(entity.eventC.keys);

                for(let key in entity.eventC.keys){
                    //console.log(key);

                    let newEvents = [];
                    entity.eventC.keys[key].forEach(event =>{

                        let target = event.target; //prevede imena targetov v pointerje
                        entityList.forEach(tEntity =>{
                            if(tEntity.name == target){
                                    target = tEntity;
                            }
                        })

                        newEvents.push({name:event.name, contexts:event.contexts, trigger: entity, target:target, triggerKey:key})
                    })

                    if(this.events.keys[key] == undefined){
                        this.events.keys[key] = {value: 0, events: newEvents};
                    } else {
                        let combineEvents = this.events.keys[key].events;
                        newEvents.forEach(event=>{
                            combineEvents.push(event);
                        });
                        this.events.keys[key] = {value: 0, events: combineEvents};
                    }
                }

                for(let mouseMode in entity.eventC.mouse){
                    //console.log(mouseMode);

                    let newEvents = [];
                    entity.eventC.mouse[mouseMode].forEach(event =>{

                        let target = event.target; //prevede imena targetov v pointerje
                        entityList.forEach(tEntity =>{
                            if(tEntity.name == target){
                                    target = tEntity;
                            }
                        })

                        newEvents.push({name:event.name, contexts:event.contexts, trigger: entity, target:target, triggerKey:mouseMode})
                    })

                    if(this.events.mouse[mouseMode] == undefined){
                        this.events.mouse[mouseMode] = {value: 0, events: newEvents};
                    } else {
                        let combineEvents = this.events.mouse[mouseMode].events;
                        newEvents.forEach(event=>{
                            combineEvents.push(event);
                        });
                        this.events.mouse[mouseMode] = {value: 0, events: combineEvents};
                    }
                }
            }

            //console.log(this.events);
        });
    }
*/
    updateKeys(event, setTo){
        if(this.events.keys[event.key] != undefined) this.events.keys[event.key].value = setTo;
    }

    updateMouseXY(event){
        this.screenMouseXY.x = event.clientX - this.canvas.offsetLeft;
        this.screenMouseXY.y = event.clientY - this.canvas.offsetTop;
    }

    mouseState(setTo){
        this.mouse.down = setTo;
        this.mouse.up = !setTo;
    }

    mouseUp(event){
        this.mouse.wentUp = true;
        this.mouseState(false);
    }

    mouseDown(event){
        this.mouse.wentDown = true;
        
        this.mouseState(true);
        //console.log(this.mouse);
    }

    resetMouse(){
        this.mouse.wentDown = false;
        this.mouse.wentUp = false;
    }

    getEvents(entityList){
        this.eventList = [];
        //let aiEvents = AleAIManager.think(entityList);
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
        //KEYBOARD EVENTS & UNLOCK BUTTONS
        //
        for (let key in this.events.keys) {
            if(this.events.keys[key].value == 1){
                this.events.keys[key].events.forEach(event =>{
                    //console.log(key);
                    this.validateEvent(event);
                })
            } else {
                this.events.keys[key].events.forEach(event=>{
                    if(event.target.guiC != null){
                        if(key == event.target.guiC.toggleLockedBy){
                            event.target.guiC.toggleLocked = 0;
                        }
                    }
                });
                
            }
        }
        //UI BUTTON EVENTS
        //

        for(let mouseMode in this.events.mouse){
            //console.log(mouseMode + " " + this.mouse[mouseMode]);
            if(this.mouse[mouseMode] == true){
                this.events.mouse[mouseMode].events.forEach(event =>{
                    //console.log(event);
                    this.validateEvent(event);
                })
            }
        }
        	*/
        if (this.triggerCollector.mouseState.get("LMB").pressed == true){
            console.log("Pressed LMB");
        }
        if (this.triggerCollector.mouseState.get("LMB").released == true){
            console.log("Released LMB");
        }
        if(this.triggerCollector.keyboardState.has("a")){
            if(this.triggerCollector.keyboardState.get("a").pressed == true){
                console.log("Pressed a");
            }
        }
        

        this.updateMouseState();
        this.updateKeyboardState();
        //console.log(this.triggerStates);

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

