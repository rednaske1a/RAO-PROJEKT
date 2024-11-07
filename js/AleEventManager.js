class AleEventManager{

    constructor(){
        this.eventList = [];
        this.canvas = document.querySelector('canvas');
        this.eventContext = "InGame";
        this.keys = {};
        this.screenMouseXY = {x:0, y:0};
        this.gameMouseXY = {x:0, y:0};
        window.addEventListener('keydown', (event) => this.updateKeys(event, 1));
        window.addEventListener('keyup', (event) => this.updateKeys(event, 0));
        window.addEventListener('mousemove', (event) => this.updateMouseXY(event));
        window.addEventListener('click', (event) => this.setClicked(1));
    }

    initKeyTracking(entityList){
        this.keys = {};
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

                        newEvents.push({name:event.name, contexts:event.contexts, target:target, trigger:key})
                    })

                    if(this.keys[key] == undefined){
                        this.keys[key] = {value: 0, events: newEvents};
                    } else {
                        let combineEvents = this.keys[key].events;
                        newEvents.forEach(event=>{
                            combineEvents.push(event);
                        });
                        this.keys[key] = {value: 0, events: combineEvents};
                    }
                }
            }
        });
    }

    updateKeys(event, setTo){
        if(this.keys[event.key] != undefined) this.keys[event.key].value = setTo;
    }

    updateMouseXY(event){
        this.screenMouseXY.x = event.clientX - this.canvas.offsetLeft;
        this.screenMouseXY.y = event.clientY - this.canvas.offsetTop;
    }

    setClicked(setTo){
        if(this.keys.click != undefined){
            this.keys["click"].value = setTo;
        }
    }


    getEvents(){
        this.eventList = [];
        //KEYBOARD EVENTS & UNLOCK BUTTONS
        //
        for (let key in this.keys) {
            if(this.keys[key].value == 1){
                this.keys[key].events.forEach(event =>{
                    console.log(key);
                    this.validateEvent(event);
                })
            } else {
                this.keys[key].events.forEach(event=>{
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

        this.setClicked(0);
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

        switch(event.trigger){
            case "click": valid = this.AABBPoint(event.target, this.screenMouseXY); break;
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