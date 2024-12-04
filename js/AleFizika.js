class AleFizika {

    constructor() {
        this.solveColl = [];
        this.collStorage = [];
    }

    static AABB(entity1, entity2) {
        return !(
            entity1.pos.x + entity1.size.w <= entity2.pos.x ||
            entity1.pos.x >= entity2.pos.x + entity2.size.w ||
            entity1.pos.y + entity1.size.h <= entity2.pos.y ||
            entity1.pos.y >= entity2.pos.y + entity2.size.h
        );
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
        //console.log(entity);
        entity.children.forEach(child =>{    
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

    update(entityList, deltaTime) {
        this.solveColl = []; // tabela vseh entitijev ki se bojo premaknili
        this.collStorage = []; // s kom se lahko vsak objekt collida za lažje premikanje childov entitija
        //console.log(this.collStorage);

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
            //console.log(entity.name + " " + entity.relPos.x + " " + entity.relPos.y);

            if(minColTime.x == 0) { //ustavi playerja da ne pospešuje v tla in strop
                entity.fizikaC.vel.x = 0;
            } else {
                entity.fizikaC.vel.x += entity.fizikaC.acc.x;
            } 
                
            if(minColTime.y == 0){ //ustavi playerja da ne pospešuje v zide
                entity.fizikaC.vel.y = 0;
                entity.fizikaC.vel.x *= 1 - (entity.fizikaC.trenje);
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
            //console.log(entity)
            entity.updatePos();
        })

        //cameraFollow
        entityList.forEach(entity =>{
            //console.log(entity);
            if(entity.followC != null && entity.followC.follow != null){
                entity.relPos.x -= (entity.pos.x - entity.followC.follow.pos.x - entity.followC.followOffset.x) / entity.followC.followStrength;
                entity.relPos.y -= (entity.pos.y - entity.followC.follow.pos.y - entity.followC.followOffset.y) / entity.followC.followStrength;
                entity.updatePos();
            }
        })
    }
}