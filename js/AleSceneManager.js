class AleSceneManager {
    constructor(templatePacks){
        this.eLoaded = [];
        this.eStorage = [];
        this.treeHTML = document.querySelector("#tree");

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

    createEntity(templateName, parent, eManager) {

        let template = {};
        let ogTemplate = {};
        
        if(typeof templateName === 'string'){
           template = this.getTemplate(templateName).data;
           ogTemplate = this.getTemplate(templateName);
        } else if(typeof templateName === 'object'){
            template = templateName;
            ogTemplate = this.getTemplate(templateName.name);
        }

        template = Entity.copy(template);

        //console.log("Template:");
        //console.log(template);
        let entity = new Entity(template, this, parent);

        entity.name = template.name + "_" + ogTemplate.count;
        entity.parent = parent;
    
        if (parent != null && parent.parent == null) {
            parent.children.push(entity);
        }

        entity.id = this.nextID;
        this.nextID++;
        ogTemplate.count++;
    
        this.eStorage.push(entity);
        this.eLoaded.push(entity);

        entity.children.forEach((child, index) => {
            console.log("CHILD");
            console.log(child);
            if (typeof child === 'object') {
                let newTemplate = Entity.copy(this.getTemplate(child.name).data);
                
                Object.assign(newTemplate, child.data);
                let newEntity = this.createEntity(newTemplate, entity, eManager);
                
                entity.children[index] = newEntity;
                console.log("Updated Child (Object):", entity.children[index]);
        
            } else if (typeof child === 'string') {
                let newEntity = this.createEntity(child, entity, eManager);
                entity.children[index] = newEntity;
                console.log("Updated Child (String):", entity.children[index]);
            }
        });
        
    
        eManager.bindEvents(entity, this);
        console.log("CREATEDE ENTITY")
        console.log(entity);
        return entity;
    }
    


    createTree(){
        let data = this.getEntityByTemplate("Game");
        let tree = document.createElement('ul');
        tree.appendChild(this.createTreeRecursive(data));
        this.treeHTML.innerHTML = "";
        this.treeHTML.appendChild(tree);
    }

    createTreeRecursive(data) {
        let li = document.createElement('li');
        li.textContent = data.name;

        console.log("DATA")
        console.log(data);
        if (data.children && data.children.length > 0) {
            let ul = document.createElement('ul');
            data.children.forEach(child => {
                ul.appendChild(this.createTreeRecursive(child));
            });
            li.appendChild(ul);
        }

        return li;
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
            //console.log(templateName + " == " + fTemplate.data.name)
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

    getEntitiesByTemplate(templateName){
        //console.log("Searching for: " + templateName)
        let entities = [];
        this.eStorage.forEach(fEntity =>{
            //console.log("Search " + fEntity.templateName)
            if(fEntity.templateName == templateName){
                entities.push(fEntity);
                //console.log("Found");
                //console.log(entity);
            }
        })
        return entities;
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