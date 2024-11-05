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
            "data": { "keys": {
                    "w": [{"name": "Jump", "contexts": ["InGame"], "target": "Player1", "trigger": "w"}],
                    "a": [{"name": "GoLeft", "contexts": ["InGame"], "target": "Player1", "trigger": "a"}],
                    "s": [{"name": "Duck", "contexts": ["InGame"], "target": "Player1", "trigger": "s"}],
                    "d": [{"name": "GoRight", "contexts": ["InGame"], "target": "Player1", "trigger": "d"}]
                    }
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
                "acc" : {"x": 0, "y": 1},
                "trenje": 0.8,
                "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collMask" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": true
            }
            },{
            "name": "AlePlayerC",
            "data": {
                "jumpSpeed": 10,
                "moveSpeed": 10,
                "isGrounded": false,
                "isDucking": false
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

        "parent": "Player1",
        "children": [],

        "pos": { "x": null, "y": null },
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 1024, "h": 576 },
        
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
        this.playerC = null;
        this.guiC = null;
        
        this.addComponents(components);
    }

    addComponents(components){
        components.forEach(component =>{
            switch(component.name){
                case "AleFizikaC": this.fizikaC = new AleFizikaC(component.data); break;
                case "AleEventC": this.eventC = new AleEventC(component.data); break;
                case "AleRenderC": this.renderC = new AleRenderC(component.data); break;
                case "AleCameraC": this.cameraC = new AleCameraC(component.data); break;
                case "AleGUIC": this.guiC = new AleGUIC(component.data); break;
                case "AlePlayerC": this.playerC = new AlePlayerC(component.data); break;
            }
        });
    }

    setEntityPointers(entityList){
        entityList.forEach(entity =>{
            //console.log(entity);
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

class AlePlayerC {
    constructor({jumpSpeed, moveSpeed, isGrounded, isDucking}){
        this.jumpSpeed = jumpSpeed;
        this.moveSpeed = moveSpeed;
        this.isGrounded = isGrounded;
        this.isDucking = isDucking;
    }
}

class AleGUIC{
    constructor({toggleLocked, toggleLockedBy}){
        this.toggleLocked = toggleLocked;
        this.toggleLockedBy = toggleLockedBy;
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
            xEntry = xInvEntry / entity1.fizikaC.vel.x;
            xExit = xInvExit / entity1.fizikaC.vel.x;
        }

        if (yInvEntry == Infinity) {
            yEntry = -Infinity
            yExit = Infinity
        } else {
            yEntry = yInvEntry / entity1.fizikaC.vel.y;
            yExit = yInvExit / entity1.fizikaC.vel.y;
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

    recursiveMinColTime(entity, minColTime){
        entity.children.forEach(child =>{
           // console.log(child);
            minColTime = this.recursiveMinColTime(child, minColTime);
        })

        if(entity.fizikaC != null){
            if(this.collStorage[entity.id] != undefined){
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
        }
        
        return minColTime;
    }

    update(entityList) {
        this.solveColl = []; // tabela vseh entitijev ki se bojo premaknili
        this.collStorage = []; // s kom se lahko vsak objekt collida za lažje premikanje childov entitija

        entityList.forEach(entity1 =>{ // napolni te dve tabeli z pointerji na objekte
            if(entity1.fizikaC != null){
                this.solveColl.push(entity1);
                for(let i=0; i<entity1.fizikaC.collMask.length; i++){

                    entityList.forEach(entity2 =>{
                        if(entity2.fizikaC != null && entity1.id != entity2.id &&
                            entity1.fizikaC.collide && entity2.fizikaC.collide){
                            
                            if(entity1.fizikaC.collMask[i] == 1 && entity2.fizikaC.collLayer[i] == 1){
                                if(this.collStorage[entity1.id] == undefined) {
                                    this.collStorage[entity1.id] = [entity2];
                                } else {
                                    this.collStorage[entity1.id].push(entity2);
                                }
                                
                            }
                        }
                    });

                }
            }
        });

        this.solveColl.forEach(entity =>{
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
    }

    /*
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
*/

    render(entityList) {

        entityList.forEach(cEntity =>{
            if(cEntity.cameraC != null && cEntity.active == 1){
                this.draw(cEntity, entityList);
            }
        })

    }

    draw(camera, entityList){
        this.c.save();
        this.c.beginPath();
        this.c.rect(camera.cameraC.sPos.x, camera.cameraC.sPos.y, camera.cameraC.sPos.x + camera.cameraC.sSize.w, camera.cameraC.sPos.y + camera.cameraC.sSize.h);
        
        this.c.clip();


        this.c.fillStyle = 'blue';
        this.c.fillRect(camera.cameraC.sPos.x, camera.cameraC.sPos.y, camera.cameraC.sPos.x + camera.cameraC.sSize.w, camera.cameraC.sPos.y + camera.cameraC.sSize.h);

        let renderList = [];
        entityList.forEach(entity =>{
            if(entity.renderC != null){
                renderList.push(entity);
            }
        })

        renderList.sort(function(a, b){return a.renderC.z_layer - b.renderC.z_layer});

        renderList.forEach(entity => {
            this.c.fillStyle = entity.renderC.color;

            if(entity.type == "GUI") {
                this.c.fillRect(
                    element.pos.x + camera.cameraC.sPos.x,
                    element.pos.y + camera.cameraC.sPos.y,
                    element.size.w,
                    element.size.h,
                );
            } else {
                this.c.fillRect(
                    (entity.pos.x + (camera.size.w / 2  - camera.pos.x )) * (camera.cameraC.sSize.w / camera.size.w) + camera.cameraC.sPos.x, 
                    (entity.pos.y + (camera.size.h / 2  - camera.pos.y )) * (camera.cameraC.sSize.h / camera.size.h) + camera.cameraC.sPos.y , 
                    entity.size.w * (camera.cameraC.sSize.w / camera.size.w), 
                    entity.size.h * (camera.cameraC.sSize.h / camera.size.h)
                 );
            }
            
        });
        this.c.restore();

        /*
        if(camera.name == this.cameraRight.name){
            let cameraDistance = this.cameraRight.pos.x - this.cameraLeft.pos.x;
            let a = ((Math.abs(cameraDistance) - this.canvas.width/2) / 400);

            this.c.fillStyle = 'White';
            this.c.fillRect(camera.sPos.x - 5 * Math.min(a,1) , camera.sPos.y, 10 * Math.min(a,1), camera.sSize.h);
        }
            */
        
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

    initKeyTracking(entityList){
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
                        combineEvents = this.keys[key].events;
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

class AleGame {
    constructor() {
        this.entityList = [];
        this.renderer = new AleRenderer();
        this.fizika = new AleFizika();
        this.eventManager = new AleEventManager();
        this.fps = 60;
        this.frameDuration = 1000 / this.fps;
        this.start = Date.now();
        this.elapsed = Date.now() - this.start;
        this.gameData = {};
    }

    init(gameData){
        this.gameData = gameData;

        this.loadEntities();

        this.eventManager.initKeyTracking(this.entityList);
        this.run();
    }

    loadEntities(){
        for(let key in this.gameData){
            this.addEntity(gameData[key]);
        }

        this.entityList.forEach(entity =>{
            entity.setEntityPointers(this.entityList);
        })
    }

    

    addEntity(entity){
        this.entityList.push(new Entity(entity));
    }

    run() {
        game.render();
        game.update();

        window.requestAnimationFrame(game.run);
    }

    render() {
        this.renderer.render(this.entityList);
    }

    update() {
        this.eventManager.solveEvents(this.entityList);
        this.fizika.update(this.entityList);
    }
}

console.log(gameData);

const game = new AleGame();


game.init(gameData);

/*
game.addSprite(new Sprite({ name: 'Gregor', color: 'White', pos: { x: 400, y: 50 }, size: { w: 50, h: 50 }, vel: { x: 0, y: 0 }, acc: { x: 0, y: game.gravity * 4 }, coll: true, collMask: [1, 0, 0, 0, 0, 0, 0, 0], children: [], keys: ['t','f','g','h'] }));
*/
