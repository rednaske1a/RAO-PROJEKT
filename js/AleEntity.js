class Entity {
    constructor({id, type, name, active, parent, children, pos, relPos, size, components}){
        this.id = id;
        this.type = type;
        this.name = name;
        this.active = active;

        this.parent = parent;
        this.children = children;

        this.pos = pos;
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
            //console.log(entity);
            if(entity.name == this.parent){
                this.parent = entity;
            }
            for(let key in this.children) {
                if(this.children[key] == entity.name){
                    this.children[key] = entity;
                }
            }
        });
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