
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
    constructor({keys, mouse}){
        this.keys = keys;
        this.mouse = mouse;
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
    constructor({sPos, sSize, follow, followStrength, followOffset}){
        this.sPos = sPos;
        this.sSize = sSize;
        this.follow = follow;
        this.followStrength = followStrength;
        this.followOffset = followOffset;
        this.active = active;
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
        this.active = active;
    }
}

class AleEnemyAIC {
    constructor({actions}){
        this.actions = actions;
    }
}