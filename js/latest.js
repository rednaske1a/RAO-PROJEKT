const gameData = {
    0: {
        "id": 0,
        "type": "Node",
        "name": "Game",
        "active": 1,

        "parent": null,
        "children": ["Player", "Camera", "Ground"],

        "pos": { "x": null, "y": null },
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 0, "h": 0 },
        
        "components": [{
            "name": "AleEventC",
            "data": {
                "w": [{"name": "Jump", "contexts": ["InGame"], "target": "Player1", "trigger": "w"}],
                "a": [{"name": "GoLeft", "contexts": ["InGame"], "target": "Player1", "trigger": "a"}],
                "s": [{"name": "Duck", "contexts": ["InGame"], "target": "Player1", "trigger": "s"}],
                "d": [{"name": "GoRight", "contexts": ["InGame"], "target": "Player1", "trigger": "d"}],
                }
            }]
        },
    1: {
        "id": 1,
        "type": "Box2d",
        "name": "Player1",
        "active": 1,

        "parent": "Game",
        "children": ["Player1BodyImg"],

        "pos": { "x": null, "y": null },
        "relPos": {"x": 500, "y": -500 },
        "size": { "w": 50, "h": 100 },
        
        "components": [{
            "name": "AleFizikaC",
            "data": {
                "vel" : {"x": 0, "y": 0},
                "acc" : {"x": 0, "y": 0},
                "trenje": 0.8,
                "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collMask" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": true
            }
            }]
        },
    3: {
        "id": 3,
        "type": "Image",
        "name": "Player1BodyImg",
        "active": 1,

        "parent": "Player1",
        "children": [],

        "pos": { "x": null, "y": null },
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 50, "h": 100 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Red",
                "visible": true,
                "zLayer": 10
            }
            }]
        },
    4: {
        "id": 4,
        "type": "Box2d",
        "name": "Camera1",
        "active": 1,

        "parent": "Game",
        "children": [],

        "pos": { "x": null, "y": null },
        "relPos": {"x": 500, "y": -500 },
        "size": { "w": 50, "h": 100 },
        
        "components": [{
            "name": "AleCameraC",
            "data": {
                "sPos": {"x": 0, "y": 0},
                "sSize": {"w": 1024, "h": 576},
            }
            }]
        },
    5: {
        "id": 5,
        "type": "Box2d",
        "name": "Ground",
        "active": 1,

        "parent": "Game",
        "children": ["Ground1Img"],

        "pos": { "x": null, "y": null },
        "relPos": {"x": 0, "y": 1000 },
        "size": { "w": 1000, "h": 100 },
        
        "components": [{
            "name": "AleFizikaC",
            "data": {
                "vel" : {"x": 0, "y": 0},
                "acc" : {"x": 0, "y": 0},
                "trenje": 0.8,
                "collLayer" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collMask" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": true
            }
            }]
        },
    7: {
        "id": 7,
        "type": "Image",
        "name": "Ground1Img",
        "active": 1,

        "parent": "Ground",
        "children": [],

        "pos": { "x": null, "y": null },
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 1000, "h": 100 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Green",
                "visible": true,
                "zLayer": 10
            }
            }]
        },
};


// EN(TITY) COMPONENT SYSTEM
class Entity {
    constructor({id, type, name, active, parent, children, pos, relPos, size, components}){
        this.id = id;
        this.type = type;
        this.name = name;
        this.active = active;

        this.parent = parent;
        this.children = children;

        this.pos = pos;
        this.relPos = relPos;
        this.size = size;

        this.fizikaC = null;
        this.eventC = null;
        this.renderC = null;
        this.cameraC = null;
        
        this.addComponents(components);
    }

    addComponents(components){
        components.forEach(component =>{
            switch(component.name){
                case "AleFizikaC": this.fizikaC = new AleFizikaC(component.data); break;
                case "AleEventC": this.eventC = new AleEventC(component.data); break;
                case "AleRenderC": this.renderC = new AleRenderC(component.data); break;
                case "AleCameraC": this.cameraC = new AleCameraC(component.data); break;
            }
        });
    }

    setPointers(entityList){
        entityList.forEach(entity =>{
            if(entity.name == this.parent){
                this.parent = entity;
            }
            for(let key in this.children) {
                if(this.children[key] == entity.name){
                    this.children[key] = entity;
                }
            }
        });
    }

    updatePos(){
        if(this.parent == null){
            this.pos.x = this.relPos.x;
            this.pos.y = this.relPos.y;
        } else {
            this.pos.x = this.parent.pos.x + this.relPos.x;
            this.pos.y = this.parent.pos.y + this.relPos.y;
        }
    }

}

class AleFizikaC {
    constructor({vel, acc, trenje, collLayer, collMask, collide}){
        this.vel = vel;
        this.acc = acc;
        this.trenje = trenje;
        this.collLayer = collLayer;
        this.collMask = collMask;

        this.collide = collide;
    }
}

class AleEventC {
    constructor({keys}){
        this.keys = keys;
    }
}

class AleRenderC {
    constructor({color, visible, zLayer}){
        this.color = color;
        this.visible = visible;
        this.zLayer = zLayer;
    }
}

class AleCameraC {
    constructor({sPos, sSize}){
        this.sPos = sPos;
        this.sSize = sSize;
    }
}

class AleFizika {

    constructor() {
        this.solveColl = [];
        this.collStorage = [];
    }

    sweptAABB(entity1, entity2) {
        let xInvEntry, yInvEntry;
        let xInvExit, yInvExit;
        let normalx, normaly;

        if( (entity1.pos.y <= entity2.pos.y) && (entity1.pos.y + entity1.size.h <= entity2.pos.y) ||
            (entity2.pos.y <= entity1.pos.y) && (entity2.pos.y + entity2.size.h <= entity1.pos.y) ||
            entity1.fizikaC.vel.x == 0
        ) { 
            xInvEntry = Infinity;
            xInvExit = Infinity;
        } else {
            if (entity1.fizikaC.vel.x > 0) {
                xInvEntry = entity2.pos.x - (entity1.pos.x + entity1.size.w);
                xInvExit = (entity2.pos.x + entity2.size.w) - entity1.pos.x;
            } else {
                xInvEntry = (entity2.pos.x + entity2.size.w) - entity1.pos.x;
                xInvExit = entity2.pos.x - (entity1.pos.x + entity1.size.w);
            }
        }
       
        if( (entity1.pos.x <= entity2.pos.x) && (entity1.pos.x + entity1.size.w <= entity2.pos.x) ||
            (entity2.pos.x <= entity1.pos.x) && (entity2.pos.x + entity2.size.w <= entity1.pos.x) ||
            entity1.fizikaC.vel.y == 0
        ) { 
            yInvEntry = Infinity;
            yInvExit = Infinity;
        } else {
            if (entity1.fizikaC.vel.y > 0) {
                yInvEntry = entity2.pos.y - (entity1.pos.y + entity1.size.h);
                yInvExit = (entity2.pos.y + entity2.size.h) - entity1.pos.y;
            } else {
                yInvEntry = (entity2.pos.y + entity2.size.h) - entity1.pos.y;
                yInvExit = entity2.pos.y - (entity1.pos.y + entity1.size.h);
            }
        }

        let xEntry, yEntry;
        let xExit, yExit;

        if (xInvEntry == Infinity) {
            xEntry = -Infinity;
            xExit = Infinity;
        } else {
            xEntry = xInvEntry / b1.vel.x;
            xExit = xInvExit / b1.vel.x;
        }

        if (yInvEntry == Infinity) {
            yEntry = -Infinity
            yExit = Infinity
        } else {
            yEntry = yInvEntry / b1.vel.y;
            yExit = yInvExit / b1.vel.y;
        }

        let entryTime = Math.max(xEntry, yEntry);
        let exitTime = Math.min(xExit, yExit);

        //console.log(b1.name + ": x " + xEntry + " y " + yEntry);

        if (entryTime > exitTime || xEntry < 0 && yEntry < 0 || entryTime > 1 ) {
            normalx = 0;
            normaly = 0;
            return {collisionTime: 1, normalx: 0, normaly: 0};
        } else {
            if (xEntry > yEntry) {
                if (xInvEntry < 0) {
                    normalx = 1;
                    normaly = 0;
                } else {
                    normalx = -1;
                    normaly = 0;
                }
            } else if (xEntry < yEntry){
                if (yInvEntry < 0) {
                    normalx = 0;
                    normaly = 1;
                } else {
                    normalx = 0;
                    normaly = -1;
                }
            }
            
            return {collisionTime: entryTime, normalx: normalx, normaly: normaly};
        }
    }

    recursiveMinEntry(entity, minColTime){
        entity.children.forEach(child =>{
            console.log(child.name);
            minColTime = recursiveMinEntry(child, minColTime);
        })

        if(entity.fizikaC != null){
            this.collStorage[entity.id].forEach(entity2 => {
                let collision = this.sweptAABB(entity, entity2);

                let ct = collision.collisionTime;
                let normalx = collision.normalx;
                let normaly = collision.normaly;

                if(ct < 1){
                    if(normalx != 0 && ct < minColTime.x){
                        minColTime.x = ct;
                        minColTime.nx = normalx;
                                           
                    }
                    if(normaly != 0 && ct < minColTime.y){
                        minColTime.y = ct;
                        minColTime.ny = normaly;                     
                    }
                }
            })
        }
        
        return minColTime;
    }

    update(entityList) {
        this.solveColl = []; // tabela vseh entitijev ki se bojo premaknili
        this.collStorage = []; // s kom se lahko vsak objekt collida za lažje premikanje childov entitija

        entityList.forEach(entity1 =>{ // napolni te dve tabeli z pointerji na objekte
            if(entity1.fizikaC != null){
                solveColl.push(entity1);
                for(let i=0; i<entity1.collMask.length; i++){

                    entityList.forEach(entity2 =>{
                        if(entity2.fizikaC != null && entity1.id != entity2.id &&
                            entity1.fizikaC.collide && entity2.fizikaC.collide){
                            
                            if(entity1.collMask[i] == 1 && entity2.collLayer[i] == 1){
                                collStorage[entity1.id].push(entity2);
                            }
                        }
                    });

                }
            }
        });

        solveColl.forEach(entity =>{
            let minColTime = this.recursiveMinColTime(entity, {x: 1, y: 1, nx: 0, ny: 0});
            entity.relPos.x += entity.fizikaC.vel.x * minColTime.x;
            entity.relPos.y += entity.fizikaC.vel.y * minColTime.y;

            if(minColTime.x == 0) { //ustavi playerja da ne pospešuje v tla in strop
                entity.fizikaC.vel.x = 0;
            } else {
                entity.fizikaC.vel.x += entity.fizikaC.acc.x;
            } 
                
            if(minColTime.y == 0){ //ustavi playerja da ne pospešuje v zide
                entity.fizikaC.vel.y = 0;
                entity.fizikaC.vel.x *= 1 - entity.fizikaC.trenje;
            } else {
                entity.fizikaC.vel.y += entity.fizikaC.acc.y;
            }
               
            if(entity.playerC != null){
                if(minColTime.ny < 0 && minColTime.y == 0){
                    entity.playerC.isGrounded = true;
                    entity.playerC.isDucking = false;
                } else {
                    entity.playerC.isGrounded = false;
                }
            }
            
        })

        entityList.forEach(entity =>{
            entity.updatePos();
        })
    }
}

class AleRenderer {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.c = this.canvas.getContext('2d');
        this.cameraMode = "SingleScreen";
        this.lockedOn = {};
        this.camera = new AleCamera({
            name: 'mainCamera',
            pos: {x: this.canvas.width/2, y:this.canvas.height/2},
            size:{ w: this.canvas.width, h:this.canvas.height},
            cpos: {x: 0, y:0},
            csize:{ w: this.canvas.width, h:this.canvas.height},
            ar: (this.canvas.width/this.canvas.height),
            lockedOn: ['Player1', 'Player2']
        });
        this.cameraLeft = new AleCamera({
            name: 'cameraLeft',
            pos: {x: this.canvas.width/2, y:this.canvas.height/2},
            size:{ w: this.canvas.width/2, h:this.canvas.height},
            cpos: {x: 0, y:0},
            csize:{ w: this.canvas.width/2, h:this.canvas.height},
            ar: (this.canvas.width/this.canvas.height * 2),
            lockedOn: ['Player1']
        });
        this.cameraRight = new AleCamera({
            name: 'cameraRight',
            pos: {x: this.canvas.width/2, y:this.canvas.height/2},
            size:{ w: this.canvas.width/2, h:this.canvas.height},
            cpos: {x: this.canvas.width/2, y:0},
            csize:{ w: this.canvas.width/2, h:this.canvas.height},
            ar: (this.canvas.width/this.canvas.height * 2),
            lockedOn: ['Player2']
        });
    }

    cameraControl(spriteList){
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = -Infinity;
        let minSprite = 0;
        let maxSprite = 0;
        let minSpriteY = 0;
        
        spriteList.forEach(sprite =>{
            if(sprite.name == "Player1" || sprite.name == "Player2" || sprite.name == "Player3" || sprite.name == "Player4"){
                this.lockedOn[sprite.name] = sprite;
                if(sprite.pos.x < minX){minX = sprite.pos.x; minSprite = sprite.name};
                if(sprite.pos.x > maxX){maxX = sprite.pos.x; maxSprite = sprite.name};
                if(sprite.pos.y > minY){minY = sprite.pos.y; minSpriteY = sprite.name};
            }
        });
       // console.log("MINSPRITEY: " + minSpriteY);
        this.cameraLeft.lockedOn = [minSprite];
        this.cameraRight.lockedOn = [maxSprite];

        let combinedPos = {x: 0, y: 0, n: 0};
        this.camera.lockedOn.forEach(locked =>{
            //console.log(locked);
            if(this.lockedOn[locked] != undefined){
                console.log(this.lockedOn[locked].vel);
                combinedPos.x += this.lockedOn[locked].pos.x;
                combinedPos.y += this.lockedOn[locked].pos.y;
                combinedPos.n++;
            }
        });

        let combinedPosLeft = {x: 0, y: 0, n: 0};
        this.cameraLeft.lockedOn.forEach(locked =>{
            if(this.lockedOn[locked] != undefined){
                combinedPosLeft.x += this.lockedOn[locked].pos.x;
                combinedPosLeft.y += this.lockedOn[locked].pos.y;
                combinedPosLeft.n++;
            }
        });

        let combinedPosRight = {x: 0, y: 0, n: 0};
        this.cameraRight.lockedOn.forEach(locked =>{
            if(this.lockedOn[locked] != undefined){
                combinedPosRight.x += this.lockedOn[locked].pos.x;
                combinedPosRight.y += this.lockedOn[locked].pos.y;
                combinedPosRight.n++;
            }
        });


        let cameraDistance = this.cameraRight.pos.x - this.cameraLeft.pos.x;

        if(cameraDistance >= this.canvas.width/2 ) {
            this.cameraMode = "SplitScreen";

        } else if (cameraDistance <= -this.canvas.width/2 ) {
            this.cameraMode = "SplitScreen";
        } else {
            this.cameraMode = "SingleScreen";
        }

        if(this.cameraMode == "SplitScreen"){
            
            if(Math.abs(cameraDistance) <= this.canvas.width/2 + 400){
                //console.log("TEST " + combinedPosLeft.y + " " + combinedPos.y);
                let a = ((Math.abs(cameraDistance) - this.canvas.width/2) / 400);
                //console.log("A " + a);
                combinedPosLeft.y = (combinedPos.y / combinedPos.n) + (combinedPosLeft.y - (combinedPos.y / combinedPos.n)) * a;
                //this.cameraLeft.pos.y = combinedPosLeft.y;
                combinedPosRight.y = (combinedPos.y / combinedPos.n) + (combinedPosRight.y - (combinedPos.y / combinedPos.n)) * a;
                //this.cameraRight.pos.y = combinedPosRight.y;
                
                //combinedPosRight.y += (combinedPosRight.y - (combinedPos.y / combinedPos.n)) * a;
            }
        }

        let distance = this.cameraRight.pos.x - this.cameraLeft.pos.x;
        //console.log(distance);


        this.camera.pos.x -= (this.camera.pos.x - combinedPos.x / combinedPos.n) / 10;
        
        
        this.cameraLeft.pos.x -= (this.cameraLeft.pos.x - combinedPosLeft.x ) / 10;
        this.cameraRight.pos.x -= (this.cameraRight.pos.x - combinedPosRight.x ) / 10;
        
        ///console.log(this.camera.pos.x + " " + this.camera.pos.y);
        if(this.cameraMode == "SingleScreen"){
            this.cameraLeft.pos.y = this.camera.pos.y;
            this.cameraRight.pos.y = this.camera.pos.y;
            this.camera.pos.y -= (this.camera.pos.y - combinedPos.y / combinedPos.n) / 10;
        } else {
            this.cameraLeft.pos.y -= (this.cameraLeft.pos.y - combinedPosLeft.y ) / 10;
            this.cameraRight.pos.y -= (this.cameraRight.pos.y - combinedPosRight.y ) / 10;
            this.camera.pos.y -= (this.camera.pos.y - this.lockedOn[minSpriteY].pos.y) / 10;
        }
    }


    render(spriteList, UIList) {
        
        this.cameraControl(spriteList);

        if(this.cameraMode == "SingleScreen"){
            this.draw(this.camera, spriteList);
        } else if(this.cameraMode == "SplitScreen"){
            
            this.draw(this.cameraLeft, spriteList);
            this.draw(this.cameraRight, spriteList);
        }

        this.drawUI(this.camera, UIList);
    }

    draw(camera, spriteList){
        this.c.save();
        this.c.beginPath();
        this.c.rect(camera.cpos.x, camera.cpos.y, camera.cpos.x + camera.csize.w, camera.cpos.y + camera.csize.h);
        
        this.c.clip();


        this.c.fillStyle = 'blue';
        this.c.fillRect(camera.cpos.x, camera.cpos.y, camera.cpos.x + camera.csize.w, camera.cpos.y + camera.csize.h);

        spriteList.sort(function(a, b){return a.z_layer - b.z_layer});

        spriteList.forEach(element => {
            this.c.fillStyle = element.color;
            this.c.fillRect(
               (element.pos.x + (camera.size.w / 2  - camera.pos.x )) * (camera.csize.w / camera.size.w) + camera.cpos.x, 
               (element.pos.y + (camera.size.h / 2  - camera.pos.y )) * (camera.csize.h / camera.size.h) + camera.cpos.y , 
                element.size.w * (camera.csize.w / camera.size.w), 
                element.size.h * (camera.csize.h / camera.size.h)
            );
        });
        this.c.restore();

        if(camera.name == this.cameraRight.name){
            let cameraDistance = this.cameraRight.pos.x - this.cameraLeft.pos.x;
            let a = ((Math.abs(cameraDistance) - this.canvas.width/2) / 400);

            this.c.fillStyle = 'White';
            this.c.fillRect(camera.cpos.x - 5 * Math.min(a,1) , camera.cpos.y, 10 * Math.min(a,1), camera.csize.h);
        }
        
    }

    drawUI(camera, UIList){
        UIList.sort(function(a, b){return a.z_layer - b.z_layer});

        UIList.forEach(element => {
            if(element.active == 1){
                this.c.fillStyle = element.color;
            this.c.fillRect(
                element.pos.x + camera.cpos.x,
                element.pos.y + camera.cpos.x,
                element.size.w,
                element.size.h,
            );
            }
        });
    }
}

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

    initKeyTracking(spriteList, UIList){
        spriteList.forEach(sprite =>{
            sprite.keys.forEach(key => {
                let createEvent = {contexts: key.event.contexts, name: key.event.name, target:sprite, trigger:key.key};
                    if(this.keys[key.key] == undefined){
                        let newEvents = [createEvent];
                        this.keys[key.key] = {value: 0, events: newEvents};
                    } else {
                        let newEvents = this.keys[key.key].events;
                        newEvents.push(createEvent);
                        this.keys[key.key] = {value: 0, events: newEvents};
                    }
            });
        });
        UIList.forEach(UIElement =>{
            UIElement.keys.forEach(key => {
                let createEvent = {contexts: key.event.contexts, name: key.event.name, target:UIElement, trigger:key.key, targetGUI:key.event.targetGUI};
                    if(this.keys[key.key] == undefined){
                        let newEvents = [createEvent];
                        this.keys[key.key] = {value: 0, events: newEvents};
                    } else {
                        let newEvents = this.keys[key.key].events;
                        newEvents.push(createEvent);
                        this.keys[key.key] = {value: 0, events: newEvents};
                    }
            });
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
        this.keys["click"].value = setTo;
    }


    getEvents(){
        this.eventList = [];
        //KEYBOARD EVENTS & UNLOCK BUTTONS
        //
        for (let key in this.keys) {
            if(this.keys[key].value == 1){
                this.keys[key].events.forEach(event =>{
                    this.validateEvent(event);
                })
            } else {
                this.keys[key].events.forEach(event=>{
                    if(key == event.target.lockedBy){
                        event.target.locked = 0;
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
            case "Jump": if (event.target.isGrounded == false) valid = 0; break;
            case "Duck": if (event.target.isDucking == true) valid = 0; break;
            case "GoLeft": if (event.target.isGrounded == false) valid = 0; break;
            case "GoRight": if (event.target.isGrounded == false) valid = 0; break;
            case "ToggleGUI": if(event.target.locked == 1){console.log("ToggleGUI locked"); valid = 0;} break;
        }

        switch(event.trigger){
            case "click": valid = this.AABBPoint(event.target, this.screenMouseXY); break;
        }

        if(valid == 1) {
          this.eventList.push(event);
        }
    }

    solveEvents(spriteList, UIList, GUIList){
        this.getEvents();
        this.eventList.forEach(event => {
            switch(event.name){
                case "Jump": event.target.vel.y += -event.target.jumpSpeed; break;
                case "Duck": event.target.vel.y += event.target.jumpSpeed; break;
                case "GoLeft": event.target.vel.x = -event.target.moveSpeed; break;
                case "GoRight": event.target.vel.x = event.target.moveSpeed; break;
                case "ToggleGUI": this.toggleGUI(event, event.targetGUI, GUIList, UIList); break;
                case "CloseGUI": this.closeGUI(event, event.targetGUI, GUIList, UIList); break;
            }
        });
    }

    AABBPoint(target, point){
        return ( point.x > target.pos.x && point.x < target.pos.x + target.size.w &&
            point.y > target.pos.y && point.y < target.pos.y + target.size.h)?1:0;
    }

    toggleGUI(event, targetGUI, GUIList, UIList){
        GUIList.forEach(GUI =>{
            targetGUI.forEach(tGUI =>{
                if(GUI.name == tGUI){
                    UIList.forEach(UIElement=>{
                        GUI.items.forEach(GUIItem =>{
                            if(UIElement.name == GUIItem){
                                UIElement.active = 1 - UIElement.active;
                                if(UIElement.active == 1){
                                    this.eventContext = "InGUI";
                                }else{
                                    this.eventContext = "InGame";
                                }
                            }
                        })
                    });
                }
            })
        })
        event.target.locked = 1;
        event.target.lockedBy = event.trigger;
        console.log("LOCKED " + event.target.name + " BY " + event.trigger);
    }

    closeGUI(event, targetGUI, GUIList, UIList){
        GUIList.forEach(GUI =>{
            targetGUI.forEach(tGUI =>{
                if(GUI.name == tGUI){
                    UIList.forEach(UIElement=>{
                        GUI.items.forEach(GUIItem =>{
                            if(UIElement.name == GUIItem){
                                UIElement.active = 0;
                            }
                        })
                    });
                }
            })
        })
    }
}

class AleGame {
    constructor() {
        this.entityList
        this.renderer = new AleRenderer();
        this.fizika = new AleFizika();
        this.eventManager = new AleEventManager();
        this.gravity = 1;
        this.fps = 60;
        this.frameDuration = 1000 / this.fps;
        this.start = Date.now();
        this.elapsed = Date.now() - this.start;
        this.gameData = {};
        this.player1 = {};
        this.player2 = {};
    }

    init(gameData){
        this.gameData = gameData;
        this.player1 = {

        };

        game.load("startCave");
        game.addSprite(this.player1);
        console.log(this.player1);
        game.loadUI("MainMenu");
        this.eventManager.initKeyTracking(this.spriteList, this.UIList);
        this.run();
    }

    load(level){
        this.gameData.levelData[level].forEach(sprite =>{
            this.addSprite(sprite);
        });
    }

    loadUI(UI){
        this.gameData.UIData[UI].forEach(UIElement =>{
            if(UIElement.type == "GUI"){
                this.addGUI(UIElement);
            } else {
                this.addUI(UIElement);
            }
            
        });
    }

    run() {
        game.render();
        game.update();

        window.requestAnimationFrame(game.run);
    }

    render() {
        this.renderer.render(this.spriteList, this.UIList);
    }

    update() {
        this.eventManager.solveEvents(this.spriteList, this.UIList, this.GUIList);
        this.fizika.update(this.spriteList);
    }
}

console.log(gameData);

const game = new AleGame();


game.init(gameData);

/*
game.addSprite(new Sprite({ name: 'Gregor', color: 'White', pos: { x: 400, y: 50 }, size: { w: 50, h: 50 }, vel: { x: 0, y: 0 }, acc: { x: 0, y: game.gravity * 4 }, coll: true, collMask: [1, 0, 0, 0, 0, 0, 0, 0], children: [], keys: ['t','f','g','h'] }));
*/
