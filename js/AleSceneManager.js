class AleSceneManager {
    constructor(scenes){
        this.loadedEntities = [];
        this.storedEntities = [];
        this.scenes = scenes;
        console.log(scenes);
        this.lastID = 0;
    }

    createEntity(name, parentName, eventManager){
        let newEntityList = [];
        this.scenes.forEach(scene =>{
            //console.log(scene[0].name);
            if(scene[0].name == name){
                
                scene.forEach(sEntity =>{
                    newEntityList.push(new Entity(sEntity));
                })
            }
        })
        
        let newName = name;
        if(parentName != null){
            let parent = null;
            this.storedEntities.forEach(fParent =>{
                if(fParent.name == parentName){
                    parent = fParent;
                }
            })

            if(parent == null){
                this.scenes.forEach(scene=>{
                    if(scene[0].name == parentName){
                        this.createEntity(scene[0].name, scene[0].parent, eventManager);
                    }
                })
            }

            newName = name + parent.children.length;
        }
        
        
        //console.log(newEntityList);
        newEntityList.forEach(entity =>{  
            this.storedEntities.push(entity)
            this.storedEntities.forEach(sEntity =>{
                this.renameEntity(sEntity, name, newName);
            })
        })

        Entity.setPointers(this.storedEntities);
        this.loadEntity(newEntityList[0].name, eventManager);
        console.log("created entity: " + name);
        console.log(newEntityList);
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

    renameEntity(entity, oldName, newName) { //pomagal AI ampak samo malo
        console.log(entity)
        if (typeof entity === 'object' && entity !== null) {
            for (let key in entity) {
                if(entity[key] != null && entity[key].id == undefined){
                    this.renameEntity(entity[key], oldName, newName);
                }
                if (entity[key] === oldName) {
                    entity[key] = newName;
                }
            }
        }
    }

}