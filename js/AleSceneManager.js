class AleSceneManager {
    constructor(){
        this.sceneList = []; //NAREDI OBJEKTE ZATO DA SE SHRANIJO PODATKI V STALNIH OBJEKTIH
        this.entityList = [];
        this.recepti = []; //SE UPORABI ZA DINAMIČNO KREIRAJE OBJEKTOV NA PRIMER POŠASTI()
    }

    setScenes(scenes){
        scenes.forEach(scene =>{
            this.recepti.push(scene);
            console.log(scene);
            let newScene = [];
            scene.forEach(entity =>{
                Entity.addEntity(newScene, entity);
            })
            //Entity.setPointers(newScene); PUSTI ZAKOMENTIRANO
            //console.log("Added scene: " + newScene[0].name);
            this.sceneList.push(newScene);
        })
    }

    renameScene(entity, oldName, newName) { //pomagal AI
        if (typeof entity === 'object' && entity !== null) {
            for (let key in entity) {
                this.renameScene(entity[key], oldName, newName);
                if (entity[key] === oldName) {
                    entity[key] = newName;
                }
            }
        }
    }

    createScene(sceneName, newName){
        let newScene = [];
        this.recepti.forEach(recept =>{
            if(recept[0].name == sceneName){
                recept.forEach(entity =>{
                    newScene.push(new Entity(entity));
                })
            }
        })

        newScene.forEach(entity =>{
            this.renameScene(entity, sceneName, newName);
        });

        return newScene;
    }

    loadScene(sceneName, eventManager){
        //NAJDE SCENE GLEDE NA IME
        let sceneToLoad = [];
        this.sceneList.forEach(scene =>{
            //console.log(scene[0].name + " & " + sceneName);
            if(scene[0].name == sceneName){
                
                sceneToLoad = scene;
            }
        })

        //DODA SCENE V ENTITYLIST
        sceneToLoad.forEach(entity =>{
            //console.log("pushed: " + entity.name)
            this.entityList.push(entity);
        })

        //IDJI MORAJO BITI SETANI DA SE BOJO POINTERJI PRAVILNO POSTAVILI !!!!!!
        Entity.setPointers(this.entityList);
    
        eventManager.initKeyTracking(this.entityList);
    }

    unloadScene(sceneName, eventManager){
        let sceneToLoad = [];
        this.sceneList.forEach(scene =>{
            if(scene[0].name == sceneName){
                sceneToLoad = scene;
            }
        })

        sceneToLoad.forEach(entity =>{
            if(entity.name == data[0].name){
                Entity.removeEntity(this.entityList, entity);
            }
        })
        
        Entity.setPointers(this.entityList);

        eventManager.initKeyTracking(this.entityList);
    }
}