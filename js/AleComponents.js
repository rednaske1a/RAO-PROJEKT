
class AleFizikaC {
    constructor({vel, acc, trenje, collLayer, collMask, collide}){
        this.vel = Entity.copyObjectNoRef(vel);
        this.acc = Entity.copyObjectNoRef(acc);
        this.trenje = trenje;
        this.collLayer = Entity.copyObjectNoRef(collLayer);;
        this.collMask = Entity.copyObjectNoRef(collMask);;
        this.collide = collide;
    }
}

class AleEventC {
    constructor({keys, mouse}){
        this.keys = Entity.copyObjectNoRef(keys);;
        this.mouse = Entity.copyObjectNoRef(mouse);;
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
        this.sPos = Entity.copyObjectNoRef(sPos);
        this.sSize = Entity.copyObjectNoRef(sSize);
        
    }
}

class AleFollowC {
    constructor({follow, followStrength, followOffset}, sManager){
        this.follow = sManager.getEntityByTemplate(follow);
        this.followStrength = followStrength;
        this.followOffset = followOffset;
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

class AleEnemyAIC {
    constructor({actions,entity,sManager}){
        this.actions = Entity.copyObjectNoRef(actions.actions);
        //console.log("ACTIONS");
        //console.log(this.actions);
        /*
        for(let action in this.actions){
            this.actions[action].trigger = entity;
            this.actions[action].target = entity;
            this.actions[action].triggerKey = "ai";
        }*/
        this.actions.forEach((action, index) => {
            this.actions[index] = AleEventManager.formatEvent(action, entity, "ai", null, sManager);
        });
        //console.log("ACTIONS2");
        //console.log(this.actions);
        
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

class AleTimedEventC{
    constructor(data, entity, sManager){
        this.start = Date.now();
        this.delay = data.delay;
        this.events = Entity.copyObjectNoRef(data.events);
        this.events.forEach((event, index) => {
            this.events[index] = AleEventManager.formatEvent(event, entity, "timer", null, sManager);
        });
    }
}