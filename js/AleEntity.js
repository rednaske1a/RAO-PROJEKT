class Entity {
    constructor({name, type, parent, active, relPos, size, components}){
        this.id = null;

        this.name = name;
        this.type = type;
        this.parent = parent;
        this.children = []
        
        this.active = active;

        this.pos = {x: null, y:null};
        this.relPos = relPos;
        this.size = size;

        this.fizikaC = null;
        this.eventC = null;
        this.renderC = null;
        this.cameraC = null;
        this.playerC = null;
        this.guiC = null;
        
        this.addComponents(components);
    }

    addComponents(components){
        components.forEach(component =>{
            switch(component.name){
                case "AleFizikaC": this.fizikaC = new AleFizikaC(component.data); break;
                case "AleEventC": this.eventC = new AleEventC(component.data); break;
                case "AleRenderC": this.renderC = new AleRenderC(component.data); break;
                case "AleCameraC": this.cameraC = new AleCameraC(component.data); break;
                case "AleGUIC": this.guiC = new AleGUIC(component.data); break;
                case "AlePlayerC": this.playerC = new AlePlayerC(component.data); break;
            }
        });
    }

    static setParentPointers(entityList){
        entityList.forEach(entityChild =>{
            entityList.forEach(entityParent =>{
                if(entityChild.parent != null && entityParent.name == entityChild.parent){
                    entityChild.parent = entityParent;
                }
            })
        })
    }

    static setChildrenPointers(entityList){
        entityList.forEach(entityParent =>{
            entityParent.children = [];
            entityList.forEach(entityChild =>{
                if(entityChild.parent != null && entityChild.parent.id == entityParent.id){
                    //console.log("Parent: " + entityParent.name + " ID: " + entityParent.id);
                    //console.log("Child: " + entityChild.name + " ID: " + entityChild.id);
                    entityParent.children.push(entityChild);
                }
            })
        })
        //console.log("/////////////////////////////////////////////")
    }

    static setPointers(entityList){
        Entity.setParentPointers(entityList);
        Entity.setChildrenPointers(entityList);
    }

    static setIDs(entityList){
        let id = 0;
        entityList.forEach(entity =>{
            entity.id = id;
            id++;
        });
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

    static removeEntity(entityList, entity){
        let removeEntities = Entity.getDescendants(entity, []); //ukradel direkt iz robloxa
        let removeN = 0;
        removeEntities.forEach(rEntity =>{
            entityList.splice(rEntity.id - removeN, 1);
            removeN++;
        })
    }

    updatePos(){
        if(this.parent == null){
            this.pos.x = this.relPos.x;
            this.pos.y = this.relPos.y;
        } else {
            this.pos.x = this.parent.pos.x + this.relPos.x;
            this.pos.y = this.parent.pos.y + this.relPos.y;
        }
    }

}