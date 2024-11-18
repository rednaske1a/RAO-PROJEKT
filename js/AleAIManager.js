class AleAIManager{
    constructor(){

    }

    static think(entityList){
        let actions = [];
        //console.log()
        entityList.forEach(entity => {
            if(entity.enemyAIC != null){
                let actionIndex = Math.floor(Math.random() * entity.enemyAIC.actions.length);
                actions.push(entity.enemyAIC.actions[actionIndex]);
                //console.log(entity.name);
            }
        });
        //console.log(actions);
        return actions;
    }
}