const gameData = {
    "levelData": {
        "level1": [
            {
                "id": 0,
                "name": "CaveGround23",
                "pos": { "x": 0, "y": 0 },
                "size": { "w": 1000, "h": 100 },
                "components": [
                    {
                        "name": "AleTextureC",
                        "data": {
                            "url": "CaveGround.png",
                            "fill": "stretch"
                        }
                    },{
                        "name": "AleFizikaC",
                        "data": {
                            "bb": {
                                "pos": {"x": 0, "y": 0},
                                "size": {"w": 1000, "h": 100}
                            },
                            "vel" : {"x": 0, "y": 0},
                            "acc" : {"x": 0, "y": 0},
                            "collLayer" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                            "collMask" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                        }
                    },{
                        "name": "AleRenderC",
                        "data": {
                            "zLayer": -10
                        }
                    }
                ]
            }
    ]
    },
    "UIData": {
        "MainMenu": []
    }
};

// EN(TITY) COMPONENT SYSTEM
class Entity {
    constructor({id, name, components}){
        this.id = id;
        this.name = name;
        this.pos = pos;
        this.size = size;
        this.textureC = null;
        this.fizikaC = null;
        this.eventC = null;
        this.renderC = null;
        
        this.addComponents(components);
    }

    addComponents(components){
        components.forEach(component =>{
            switch(component.name){
                case "AleTextureC": this.textureC = new AleTextureC(component.data); break;
                case "AleFizikaC": this.fizikaC = new AleFizikaC(component.data); break;
                case "AleEventC": this.eventC = new AleEventC(component.data); break;
                case "AleRenderC": this.renderC = new AleRenderC(component.data); break;
            }
        });
    }
}

class AleTextureC {
    constructor({url, fill}){
        this.url = url;
        this.fill = fill;
    }
}

class AleFizikaC {
    constructor({bb, vel, acc, collLayer, collMask}){
        this.bb = bb;
        this.vel = vel;
        this.acc = acc;
        this.collLayer = collLayer;
        this.collMask = collMask;
    }
}

class AleEventC {

}

class AleRenderC {

}

class AleFizika {

    constructor() {
        this.toSolve = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        this.collMaskLen = 8;
        this.trenje = 0.80;
    }

    //https://gamedev.net/tutorials/programming/general-and-gameplay-programming/swept-aabb-collision-detection-and-response-r3084/ NEDELA !!!!
    sweptAABB(b1, b2) {
        let xInvEntry, yInvEntry;
        let xInvExit, yInvExit;
        let normalx, normaly;

        // find the distance between the objects on the near and far sides for both x and y 
        if( (b1.pos.y <= b2.pos.y) && (b1.pos.y + b1.size.h <= b2.pos.y) ||
            (b2.pos.y <= b1.pos.y) && (b2.pos.y + b2.size.h <= b1.pos.y) ||
            b1.vel.x == 0
        ) { 
            xInvEntry = Infinity;
            xInvExit = Infinity;
        } else {
            if (b1.vel.x > 0) {
                xInvEntry = b2.pos.x - (b1.pos.x + b1.size.w);
                xInvExit = (b2.pos.x + b2.size.w) - b1.pos.x;
            } else {
                xInvEntry = (b2.pos.x + b2.size.w) - b1.pos.x;
                xInvExit = b2.pos.x - (b1.pos.x + b1.size.w);
            }
        }
       

        if( (b1.pos.x <= b2.pos.x) && (b1.pos.x + b1.size.w <= b2.pos.x) ||
            (b2.pos.x <= b1.pos.x) && (b2.pos.x + b2.size.w <= b1.pos.x) ||
            b1.vel.y == 0
        ) { 
            yInvEntry = Infinity;
            yInvExit = Infinity;
        } else {
            if (b1.vel.y > 0) {
                yInvEntry = b2.pos.y - (b1.pos.y + b1.size.h);
                yInvExit = (b2.pos.y + b2.size.h) - b1.pos.y;
            } else {
                yInvEntry = (b2.pos.y + b2.size.h) - b1.pos.y;
                yInvExit = b2.pos.y - (b1.pos.y + b1.size.h);
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

    update(spriteList) {
        //Popredalčka vse sprite glede na collision masko
        this.toSolve = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        spriteList.forEach(element => {
            for (let i = 0; i < this.collMaskLen; i++) {
                if (element.collMask[i] == 1) {
                    this.toSolve[i].push(element);
                }
            }
        });


        this.toSolve.forEach(maskGroup => {
            maskGroup.forEach(element1 => {
                let minColTime = {
                    x: 1,
                    y: 1,
                    nx: 0,
                    ny: 0
                }
                maskGroup.forEach(element2 => {
                    if (element1 != element2) {
                        
                        let collision = this.sweptAABB(element1, element2);
                        let collisionTime = collision.collisionTime;
                        let normalx = collision.normalx;
                        let normaly = collision.normaly;

                        minColTime.nx += normalx;
                        minColTime.ny += normaly;

                        if(collisionTime < 1){
                            if(normalx != 0 && collisionTime < minColTime.x){
                                minColTime.x = collisionTime;
                                //console.log("hit x " + collisionTime + " " + normalx + " " + normaly);                              
                            }
                            if(normaly != 0 && collisionTime < minColTime.y){
                                
                                minColTime.y = collisionTime;
                                //console.log("hit y " + collisionTime + " " + normalx + " " + normaly);                              
                            }
                        }
                    }
                });

                element1.pos.x += element1.vel.x * minColTime.x;
                element1.pos.y += element1.vel.y * minColTime.y;

                spriteList.forEach(element =>{
                    element1.children.forEach(child =>{
                        if(element.name == child){
                            element.pos.x += element1.vel.x * minColTime.x;
                            element.pos.y += element1.vel.y * minColTime.y;
                        }
                    });
                });

                if(minColTime.x == 0){
                    element1.vel.x = 0;
                } else {
                    element1.vel.x += element1.acc.x;
                }

                if(minColTime.y == 0){
                    element1.vel.y = 0;
                    element1.vel.x *= 1 - this.trenje;
                } else {
                    element1.vel.y += element1.acc.y;
                }

                if(minColTime.ny < 0 && minColTime.y == 0){
                    element1.isGrounded = true;
                    element1.isDucking = false;
                } else {
                    element1.isGrounded = false;
                }
                
                
            });
        });

    }
}

class AleCamera {
    constructor({name, pos, size, cpos, csize, ar, lockedOn}){
        this.name = name;
        this.pos = pos;
        this.size = size;
        this.cpos = cpos;
        this.csize = csize;

        this.ar = ar;
        this.lockedOn = lockedOn;
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
        this.spriteList = [];
        this.UIList = [];
        this.GUIList = [];
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

    addSprite(sprite) {
        this.spriteList.push(new Sprite(sprite));
    }

    addUI(UIElement) {
        this.UIList.push(new UI(UIElement));
    }

    addGUI(UIElement) {
        this.GUIList.push(new GUI(UIElement));
    }
}

console.log(gameData);

const game = new AleGame();


game.init(gameData);

/*
game.addSprite(new Sprite({ name: 'Gregor', color: 'White', pos: { x: 400, y: 50 }, size: { w: 50, h: 50 }, vel: { x: 0, y: 0 }, acc: { x: 0, y: game.gravity * 4 }, coll: true, collMask: [1, 0, 0, 0, 0, 0, 0, 0], children: [], keys: ['t','f','g','h'] }));
*/
