class Entity {
    constructor({name, type, children, relPos, size, components}, sManager){
       
        this.id = null;
        this.name = name;
        this.templateName = name;
        this.type = type;

        this.parent = null;
        this.children = Entity.copyObjectNoRef(children);

        this.pos = {x: null, y:null};

        this.relPos = {x:relPos.x, y:relPos.y};
        this.size = {w:size.w, h:size.h};

        this.fizikaC = null;
        this.eventC = null;
        this.renderC = null;
        this.cameraC = null;
        this.followC = null;
        this.playerC = null;
        this.guiC = null;
        this.enemyAIC = null;
        this.HPC = null;
        this.HitC = null
        this.timedEventC = null;
        
        //console.log(sManager);
        this.addComponents(components, sManager);
    }

    addComponents(components, sManager){
        components.forEach(component =>{
            switch(component.name){
                case "AleFizikaC": this.fizikaC = new AleFizikaC(component.data); break;
                case "AleEventC": this.eventC = new AleEventC(component.data); break;
                case "AleRenderC": this.renderC = new AleRenderC(component.data); break;
                case "AleCameraC": this.cameraC = new AleCameraC(component.data); break;
                case "AleFollowC": this.followC = new AleFollowC(component.data, sManager); break;
                case "AleGUIC": this.guiC = new AleGUIC(component.data); break;
                case "AlePlayerC": this.playerC = new AlePlayerC(component.data); break;
                case "AleEnemyAIC": this.enemyAIC = new AleEnemyAIC({actions:component.data, entity:this, sManager:sManager}); break;
                case "AleHPC": this.HPC = new AleHPC(component.data); break;
                case "AleHitC": this.HitC = new AleHitC(component.data); break;
                case "AleTimedEventC": this.timedEventC = new AleTimedEventC(component.data, this, sManager); break;
            }
        });
    }

    static duplicateEntity(entityList, entity){
        let newEntity = new Entity(entity)
    }

    static updatePosAll(entityList){
        entityList.forEach(entity =>{
            entity.updatePos();
        })
    }

    static getDescendants(entity, descList){
        descList.push(entity);
        entity.children.forEach(child =>{
            Entity.getDescendants(child, descList);
        })
        return descList;
    }

    static addEntity(entityList, entity){
        entityList.push(new Entity(entity));
    }

    static removeEntity(entity, sManager){
        console.log("removing");
        console.log(entity)
        let removeEntities = Entity.getDescendants(entity, []);
        let removeN = 0;
        removeEntities.forEach(rEntity =>{
            sManager.eLoaded.forEach((fEntity,index) =>{
                if(rEntity.name == fEntity.name){
                    sManager.eLoaded.splice(index,1);
                }
            })
            sManager.eStorage.forEach((fEntity,index) =>{
                if(rEntity.name == fEntity.name){
                    sManager.eLoaded.splice(index,1);
                }
            })
            rEntity.parent.children.forEach((rChild, index) =>{
                if(rChild.name == rEntity.name){
                    rEntity.parent.children.splice(index,1);
                }
            })
        })
    }

    //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    static copyObjectNoRef(object) {
        return Entity.copyObjectNoRefRecursive({}, object);
    }

        //UPAM DA UNI KI SI JE ZMISLIL JS UMRE
    static copyObjectNoRefRecursive(newObject, object) {
        if (Array.isArray(object)) {
            newObject = [];
            for (let i = 0; i < object.length; i++) {
                const value = object[i];
                if (typeof value === 'object' && value !== null) {
                    newObject[i] = Entity.copyObjectNoRefRecursive({}, value);
                } else {
                    newObject[i] = value;
                }
            }
        } else {
            for (let key in object) {
                const value = object[key];
                if (typeof value === 'object' && value !== null) {
                    newObject[key] = Entity.copyObjectNoRefRecursive({}, value);
                } else {
                    newObject[key] = value;
                }
            }
        }
        return newObject;
    }    
    
    
    updatePos(){
        if(this.parent == null || this.followC != null){
            this.pos.x = this.relPos.x;
            this.pos.y = this.relPos.y;
        } else {
            this.pos.x = this.parent.pos.x + this.relPos.x;
            this.pos.y = this.parent.pos.y + this.relPos.y;
        }
    }

}
