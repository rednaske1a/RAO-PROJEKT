
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