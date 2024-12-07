
class AleFizikaC {
    constructor({vel, acc, trenje, collLayer, collMask, collide}){
        this.vel = Entity.copy(vel);
        this.acc = Entity.copy(acc);
        this.trenje = trenje;
        this.collLayer = Entity.copy(collLayer);;
        this.collMask = Entity.copy(collMask);;
        this.collide = collide;
    }
}

class AleEventC {
    constructor(data){
        this.events = [];
        data.events.forEach(event =>{
            let newEvent = Entity.copy(event);
            this.events.push(newEvent);
        });
    }

    getEventByName(eName){ //PRVI FIND (RECOMMENDAL AI)
        let event = this.events.find(event => event.data.eName == eName);
        //console.log(eName);
        //console.log(event);
        return event;
    }

    getEventByType(eType){ //PRVI FIND (RECOMMENDAL AI)
        let event = this.events.find(event => event.type == eType);
        //console.log(eName);
        //console.log(event);
        return event;
    }
}

class AleRenderC {
    constructor({color, image, visible, zLayer}){
        this.color = color;
        this.imageurl = image;
        this.image = null;
        this.visible = visible;
        this.zLayer = zLayer;

        if(this.imageurl != "NONE"){
            this.setImage();
        }
    }

    setImage() {
        return new Promise((resolve, reject) => {
            this.image = new Image();
            this.image.onload = () => {
                resolve(this.image);
            };

            this.image.onerror = (error) => {
                console.error("Error loading image:", error);
                reject(new Error("Failed to load image at " + this.imageurl));
            };

            this.image.src = this.imageurl;
        });
    }
}

class AleCameraC {
    constructor({sPos, sSize}, sManager){
        this.sPos = Entity.copy(sPos);
        this.sSize = Entity.copy(sSize);
        
    }
}

class AleTextC {
    constructor({text, value, font_size}){
        this.text = text;
        this.value = value;
        this.font_size = font_size
    }
}

class AleFollowC {
    constructor({follow, followStrength, followOffset}, sManager, entity){
        if(follow == "PARENT"){
            this.follow = entity;
        } else {
            this.follow = sManager.getEntityByTemplate(follow);
        }
        //console.log("FOLLWO");
        //console.log(follow);
        //console.log(this.follow);
        
        this.followStrength = followStrength;
        this.followOffset = followOffset;
    }
}

class AleLevelC {
    constructor(data){
        this.exp = 0;
        this.level = 1;
        this.expPerLevel = 100;
    }
}

class AleCoinC {
    constructor({coins}){
        this.coins = coins;
    }
}

class AleStatsC {
    constructor(data){
        this.hp = 100;
        this.def = 10;
    }
}

class AlePlayerC {
    constructor({jumpSpeed, moveSpeed}){
        this.jumpSpeed = jumpSpeed;
        this.moveSpeed = moveSpeed;
        this.isGrounded = false;
        this.isDucking = false;
        this.lookingLeft = false;
        this.lookingRight = true;
        this.hp = 100;
        this.maxhp = 100;

        this.skill1 = true;
        this.skill2 = true;
        this.skill3 = true;
    }
}

class AleCombatC {
    constructor({dmg}){
        this.dmg = dmg;
    }
}

class AleGUIC{
    constructor({toggleLocked, toggleLockedBy}){
        this.toggleLocked = toggleLocked;
        this.toggleLockedBy = toggleLockedBy;
    }
}

class AleEnemyAIC {
    constructor(data){
        this.events = Entity.copy(data.events);
        //console.log("ACTIONS");
        //console.log(this.actions);
        /*
        for(let action in this.actions){
            this.actions[action].trigger = entity;
            this.actions[action].target = entity;
            this.actions[action].triggerKey = "ai";
        }*//*
        this.actions.forEach((action, index) => {
            this.actions[index] = AleEventManager.formatEvent(action, entity, "ai", null, sManager);
        });
        //console.log("ACTIONS2");
        //console.log(this.actions);
       */ 
    }
}

class AleHPC {
    constructor(data){
        this.maxHP = data.maxHP;
        this.currHP = data.currHP;
    }
}

class AleHitC {
    constructor(data){
       this.damage = data.damage;
    }
}

class AleAnimationC {
    constructor({ animations }) {
        this.animations = animations;
        this.currAnimation = null;
        this.animationDirection = true;
        this.isPlaying = false;
        this.start = 0;
        this.frames = {};
        this.framesR = {};
        this.aQueue = [];

        this.loadSpritesheets();
    }

    async loadSpritesheets() { //NEBOM NITI KOMENTIRAL
        const loadPromises = Object.keys(this.animations).map(async (animationName) => {
            const animationData = this.animations[animationName];
            const image = new Image();
            image.src = animationData.spritesheet;

            // Wait for the image to load before cropping frames
            await new Promise((resolve) => {
                image.onload = () => {
                    this.cropFrames(animationName, image, animationData);
                    resolve();
                };
                image.onerror = () => console.error(`Failed to load spritesheet: ${animationData.spritesheet}`);
            });
        });

        await Promise.all(loadPromises); // Wait for all images to load
    }

    cropFrames(aName, image, animation) {
        let frameWidth = animation.spritesheetSize;
        let frameHeight = animation.spritesheetSize;

        this.frames[aName] = [];
        this.framesR[aName] = [];

        for (let index of animation.frames) {
            console.log(index)
            let row = Math.floor(index / animation.spritesheetCols);
            let col = index % animation.spritesheetCols;

            let croppedFrameCanvas = new OffscreenCanvas(frameWidth, frameHeight);
            let c = croppedFrameCanvas.getContext('2d');
            c.drawImage(image,
                frameWidth * row,
                frameHeight * col,
                frameWidth,
                frameHeight,
                0,
                0,
                frameWidth,
                frameHeight
            );


            let croppedFrameCanvas2 = new OffscreenCanvas(frameWidth, frameHeight);
            let c2 = croppedFrameCanvas2.getContext('2d');
            c2.save();

            c2.translate(frameWidth, 0);
            c2.scale(-1, 1);
            c2.drawImage(image,
                frameWidth * row,
                frameHeight * col,
                frameWidth,
                frameHeight,
                0,
                0,
                frameWidth,
                frameHeight
            );

            c2.restore();

            this.frames[aName].push(croppedFrameCanvas);
            this.framesR[aName].push(croppedFrameCanvas2);

            //DEBUG
            /*
            croppedFrameCanvas.convertToBlob().then(blob => {
                const url = URL.createObjectURL(blob);
                const imgElement = document.createElement('img');
                imgElement.src = url;
                imgElement.style.width = `${frameWidth}px`;
                imgElement.style.height = `${frameHeight}px`;
                document.body.appendChild(imgElement); //
            });*/

        }
        if (!this.currAnimation) {
            this.queueAnimation(Object.keys(this.animations)[0]);
        }
    }

    playAnimation(aName) {
        this.aQueue.splice(0,1);
        if(this.currAnimation != aName){
            if (this.animations[aName]) {
                this.currAnimation = aName;
                this.isPlaying = true;
                this.start = Date.now();
            }
        }
        
    }
//HAHAHAHAHHAHH VSE TO SE MI JE NEKAKO USRALO IZ PRVE JE DELALO 
    queueAnimation(aName){
        if(this.aQueue[this.aQueue.length-1] != aName){ //PREPREČI PONAVLJANJE
            console.log("queue anim " + aName)
            this.aQueue.push(aName);
        }
    }

    stopAnimation() {
        this.isPlaying = false;
        this.currAnimation = null;
    }

    skipAnimation(){
        this.playAnimation(this.aQueue[0]);
    }

    forceAnimation(aName){
        this.aQueue.unshift(aName);
        this.playAnimation(aName);
    }

    getCurrentFrame() {
        if (!this.isPlaying || !this.currAnimation) {
            if(this.aQueue.length != 0){
                this.playAnimation(this.aQueue[0]);
            }
            return null;
        }
        
        
        let elapsedTime = Date.now() - this.start;
        let animation = this.animations[this.currAnimation];
        //console.log("e1: " + elapsedTime)
        if(this.aQueue.length != 0 && animation.type == "ONCE" && elapsedTime > animation.duration * animation.frames.length){
            console.log("e2: " + elapsedTime)
            console.log("ENDONCE")
            this.playAnimation(this.aQueue[0]);
            elapsedTime = Date.now() - this.start;
            animation = this.animations[this.currAnimation];
        } else if(animation.type == "ONCE" && elapsedTime > animation.duration * animation.frames.length){
            this.stopAnimation();
        }

        let totalFrames = animation.frames.length;

        if (totalFrames === 0 || animation.duration <= 0) {
            console.warn(`Invalid duration or frames for animation "${this.currAnimation}".`);
            return null;
        }
        let totalTime = animation.duration * totalFrames;
        let index = Math.floor((elapsedTime % totalTime) / animation.duration);

        console.log(this.animationDirection)
        if(this.animationDirection == true){
            return this.frames[this.currAnimation][index];
        } else {
            return this.framesR[this.currAnimation][index];
        }
        
    }
}