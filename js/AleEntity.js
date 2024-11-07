class Entity {
    constructor({id, type, name, active, parent, relPos, size, components}){
        this.id = id;
        this.type = type;
        this.name = name;
        this.active = active;

        this.parent = parent;
        this.children = []

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

    setEntityPointers(entityList){
        entityList.forEach(entity =>{
            if(entity.name == this.parent){
                this.parent = entity;
            }
        });

        entityList.forEach(entityParent =>{
            entityList.forEach(entityChild =>{
                if(entityChild.parent.id == entityParent.id){
                    entityParent.children.push(entityChild);
                }
            })
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