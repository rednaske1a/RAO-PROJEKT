
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
    constructor({color, visible, zLayer}){
        this.color = color;
        this.visible = visible;
        this.zLayer = zLayer;
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
        console.log("FOLLWO");
        console.log(follow);
        console.log(this.follow);
        
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
    constructor({animations}) {
        this.animations = Entity.copy(animations);
        this.currAnimation = null;
        this.isPlaying = false;
        this.start = 0;
    }

    startAnimation(aName) {
        if (this.animations[aName]) {
            this.currAnimation = aName;
            this.isPlaying = true;
            this.start = Date.now();
        }
    }

    stopAnimation() {
        this.isPlaying = false;
        this.currAnimation = null;
    }

    getCurrFrame() {
        if (!this.isPlaying || !this.currAnimation) {
            return null;
        }

        let elapsedTime = Date.now() - this.start;
        let animation = this.animations[this.currAnimation];

        let totalFrames = animation.frames.length;
        let totalDuration = totalFrames * this.frameDuration;

        let currentFrameIndex = Math.floor((elapsedTime % totalDuration) / this.frameDuration);

        return animation.frames[currentFrameIndex];
    }
}