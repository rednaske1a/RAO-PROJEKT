
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
    constructor({sPos, sSize, follow, followStrength}){
        this.sPos = sPos;
        this.sSize = sSize;
        this.follow = follow;
        this.followStrength = followStrength;
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