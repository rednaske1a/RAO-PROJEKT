class AleAIManager{
    constructor(){

    }

    static think(eList){
        let events = [];
        eList.forEach(entity => {
            if(entity.enemyAIC != null){
                let eventIndex = Math.floor(Math.random() * entity.enemyAIC.events.length);
                events.push(entity.enemyAIC.events[eventIndex]);
                //console.log(entity.name);
            }
        });
        //console.log(actions);
        return events;
    }
}