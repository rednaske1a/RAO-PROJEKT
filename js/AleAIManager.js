class AleAIManager{
    constructor(){

    }

    static createActions(entityList){
        entityList.forEach(entity =>{
            if(entity.enemyAIC != null){
                for(let action in entity.enemyAIC.actions){
                    let newAction = entity.enemyAIC.actions[action];
                    newAction.trigger = entity;
                    entityList.forEach(tEntity =>{
                        if(newAction.target == tEntity.name){
                            newAction.target = tEntity;
                        }
                    })
                    newAction.triggerKey = "ai";
                    entity.enemyAIC.actions[action] = newAction;
                }
            }
        });
    }

    static think(entityList){
        let actions = [];
        entityList.forEach(entity => {
            if(entity.enemyAIC != null){
                let actionIndex = Math.floor(Math.random() * entity.enemyAIC.actions.length);
                actions.push(entity.enemyAIC.actions[actionIndex]);
            }
        });
        //console.log(actions);
        return actions;
    }
}