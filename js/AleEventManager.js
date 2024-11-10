class AleEventManager{

    constructor(){
        this.eventList = [];
        this.canvas = document.querySelector('canvas');
        this.eventContext = "InGame";
        this.events = {keys: {}, mouse: {}};
        this.mouse = {down: false, up: true, wentDown: false, wentUp: false};
        this.screenMouseXY = {x:0, y:0};
        this.gameMouseXY = {x:0, y:0};
        window.addEventListener('keydown', (event) => this.updateKeys(event, 1));
        window.addEventListener('keyup', (event) => this.updateKeys(event, 0));
        window.addEventListener('mousemove', (event) => this.updateMouseXY(event));
        window.addEventListener("mousedown", (event) => this.mouseDown(event, 1));
        window.addEventListener("mouseup", (event) => this.mouseUp(event, 0));
    }

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
                    console.log(mouseMode);

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

            console.log(this.events);
        });
    }

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
        console.log(this.mouse);
    }

    resetMouse(){
        this.mouse.wentDown = false;
        this.mouse.wentUp = false;
    }

    getEvents(){
        this.eventList = [];
        //KEYBOARD EVENTS & UNLOCK BUTTONS
        //
        for (let key in this.events.keys) {
            if(this.events.keys[key].value == 1){
                this.events.keys[key].events.forEach(event =>{
                    console.log(key);
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
            console.log(mouseMode + " " + this.mouse[mouseMode]);
            if(this.mouse[mouseMode] == true){
                this.events.mouse[mouseMode].events.forEach(event =>{
                    console.log(event);
                    this.validateEvent(event);
                })
            }
        }

        this.resetMouse();
    }

    addEvent(event){

    }

    validateEvent(event){
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
            case "down": valid = this.AABBPoint(event.trigger, this.screenMouseXY) * valid; break;
        }

        if(valid == 1) {
          this.eventList.push(event);
        }
    }

    solveEvents(){
        this.getEvents();
        this.eventList.forEach(event => {
            switch(event.name){
                case "Jump": event.target.fizikaC.vel.y += -event.target.playerC.jumpSpeed; break;
                case "Duck": event.target.fizikaC.vel.y += event.target.playerC.jumpSpeed; break;
                case "GoLeft": event.target.fizikaC.vel.x = -event.target.playerC.moveSpeed; break;
                case "GoRight": event.target.fizikaC.vel.x = event.target.playerC.moveSpeed; break;
                case "ToggleGUI": this.toggleGUI(event); break;
                case "CloseGUI": this.closeGUI(event); break;
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
}