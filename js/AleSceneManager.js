class AleSceneManager {
    constructor(templatePacks){
        this.eLoaded = [];
        this.eStorage = [];

        this.nextID = 0;

        this.templates = [];
        this.unpackTemplates(templatePacks);
    }

    unpackTemplates(templatePacks){
        console.log("unpacking templates");
        console.log(templatePacks);

        templatePacks.forEach(pack =>{
            pack.forEach(template =>{
                this.templates.push({data: template, count:0});
            })
        })

        console.log("unpacking finished");
        console.log(this.templates);
    }

    createEntity(templateName, parent, eManager){
        console.log("Creating " + templateName);
        //console.log(parent)
        //console.log(eManager)
        let template = this.getTemplate(templateName);
        console.log(template);
        let entity = new Entity(template.data, this);
        console.log(template);
        //console.log(entity.children);
        entity.name = template.data.name + template.count;
        entity.parent = parent;
        entity.updatePos();
        entity.id = this.nextID;
        this.nextID++;
        template.count++;

        this.eStorage.push(entity);
        this.eLoaded.push(entity);

        console.log(entity.children);
        for(let child in entity.children){
            //console.log(template.children);
            entity.children[child] = this.createEntity(
                entity.children[child], entity, eManager
            )
            /*
            if(entity.children[child].templateName == undefined){ //BRUHHHHHHHHHHHHHHHH
                entity.children[child] = this.createEntity(
                    entity.children[child], entity, eManager
                )
            } else {
                entity.children[child] = this.createEntity(
                    entity.children[child].templateName, entity, eManager
                )
            }
            */
            //console.log(template.children);
        }

        eManager.bindEvents(entity, this);

        //console.log("Finish Creating " + templateName);
        console.log(entity);
        return entity;
    }

    killEntity(){ // >:)

    }

    loadEntity(name, eventManager){
        this.eStorage.forEach(entity =>{
            if(entity.name == name){
                Entity.getDescendants(entity, []).forEach(desc=>{
                    this.eLoaded.push(desc);
                })
            }
        })

        eventManager.initKeyTracking(this.eLoaded);
    }

    unloadEntity(name, eventManager){
        this.eLoaded.forEach(entity=>{
            if(entity.name == name){
                Entity.removeEntity(this.eLoaded, entity);
            }
        })

        eventManager.initKeyTracking(this.eLoaded);
    }

    getTemplate(templateName){
        let template = null;
        this.templates.forEach(fTemplate =>{
            if(fTemplate.data.name == templateName){
                template = fTemplate;
            }
        })
        return template;
    }

    getEntityByTemplate(templateName){
        //console.log("Searching for: " + templateName)
        let entity = templateName;
        this.eStorage.forEach(fEntity =>{
            //console.log("Search " + fEntity.templateName)
            if(fEntity.templateName == templateName){
                entity = fEntity;
                //console.log("Found");
                //console.log(entity);
            }
        })
        return entity;
    }

    getEntityByName(entityName){
        let entity = entityName;
        this.eStorage.forEach(fEntity =>{
            if(fEntity.name == entityName){
                entity = fEntity;

            }
        })
        return entity;
    }
}