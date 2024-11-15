class AleSceneManager {
    constructor(templates){
        this.loadedEntities = [];
        this.storedEntities = [];
        this.templates = templates;
        console.log(templates);
        this.lastID = 0;
    }

    createEntity(templateName, parent, eventManager){
        let template = null;
        this.templates.forEach(fTemplate =>{
            if(fTemplate.data.name == templateName){
                template = fTemplate;
            }
        })

        let entity = new Entity(template.data);
        entity.name = template.count;
        entity.parent = parent;
        template.count++;

        this.storedEntities.push(entity);
        for(let child in entity.children){
            entity.children[child] = this.createEntity(
                entity.children[child], entity, eManager
            )
        }
        return entity;
    }

    killEntity(){ // >:)

    }

    loadEntity(name, eventManager){
        this.storedEntities.forEach(entity =>{
            if(entity.name == name){
                Entity.getDescendants(entity, []).forEach(desc=>{
                    this.loadedEntities.push(desc);
                })
            }
        })

        eventManager.initKeyTracking(this.loadedEntities);
    }

    unloadEntity(name, eventManager){
        this.loadedEntities.forEach(entity=>{
            if(entity.name == name){
                Entity.removeEntity(this.loadedEntities, entity);
            }
        })

        eventManager.initKeyTracking(this.loadedEntities);
    }
}