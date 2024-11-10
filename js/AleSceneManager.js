class AleSceneManager {
    constructor(){
        this.sceneList = [];
        this.entityList = [];
    }

    setScenes(scenes){
        scenes.forEach(scene =>{

            let newScene = [];
            scene.forEach(entity =>{
                Entity.addEntity(newScene, entity);
            })
            Entity.setIDs(newScene);
            Entity.setPointers(newScene);
            console.log("Added scene: " + newScene[0].name);
            this.sceneList.push(newScene);
        })
    }

    loadScene(sceneName, eventManager){
        //NAJDE SCENE GLEDE NA IME
        let sceneToLoad = [];
        this.sceneList.forEach(scene =>{
            console.log(scene[0].name + " & " + sceneName);
            if(scene[0].name == sceneName){
                
                sceneToLoad = scene;
            }
        })

        //DODA SCENE V ENTITYLIST
        sceneToLoad.forEach(entity =>{
            console.log("pushed: " + entity.name)
            this.entityList.push(entity);
        })

        //IDJI MORAJO BITI SETANI DA SE BOJO POINTERJI PRAVILNO POSTAVILI !!!!!!
        Entity.setIDs(this.entityList);
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
        
        Entity.setIDs(this.entityList);
        Entity.setPointers(this.entityList);

        eventManager.initKeyTracking(this.entityList);
    }
}