class Entity {
    constructor({name, type, children, relPos, size, components}, sManager, parent){
       
        this.id = null;
        this.name = name;
        this.templateName = name;
        this.type = type;

        this.parent = parent || null;
        this.children = Entity.copy(children);

        this.pos = {x: null, y:null};

        this.relPos = {x:relPos.x, y:relPos.y};
        this.size = {w:size.w, h:size.h};

        this.fizikaC = null;
        this.eventC = null;
        this.renderC = null;
        this.cameraC = null;
        this.followC = null;
        this.playerC = null;
        this.combatC = null;
        this.guiC = null;
        this.enemyAIC = null;
        this.textC = null;
        this.coinC = null;
        this.animationC = null;
        
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
                case "AleFollowC": this.followC = new AleFollowC(component.data, sManager, this.parent); break;
                case "AleGUIC": this.guiC = new AleGUIC(component.data); break;
                case "AlePlayerC": this.playerC = new AlePlayerC(component.data); break;
                case "AleCombatC": this.combatC = new AleCombatC(component.data); break;
                case "AleEnemyAIC": this.enemyAIC = new AleEnemyAIC(component.data); break;
                case "AleTextC": this.textC = new AleTextC(component.data); break;
                case "AleCoinC": this.coinC = new AleCoinC(component.data); break;
                case "AleAnimationC": this.animationC = new AleAnimationC(component.data); break;
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

    getChildByTemplate(cName) {
        //console.log("HEHE");
        for (let child of this.children) {
            //console.log(cName + "==" + child.templateName);
            if (child.templateName === cName) {
                return child;
            }
        }
        //console.log("Not Found "+cName);
        return cName;
    }

    static addEntity(entityList, entity){
        entityList.push(new Entity(entity));
    }

    static removeEntity(entity, sManager){
        //console.log("REMOVING: " + entity.name);
        let removeEntities = Entity.getDescendants(entity, []);
        let removeN = 0;
        removeEntities.forEach(rEntity =>{
            //console.log("--removing: " + rEntity.name);
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
    static copy(object) {
        return structuredClone(object);
    }
/* JAZ SEM RETARDIRAN VES TA ČAS SEM IMEL ŽE VGRAJENO FUNKCIJO structuredClone
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
    */
    
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
