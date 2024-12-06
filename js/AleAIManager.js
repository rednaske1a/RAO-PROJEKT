class AleAIManager{
    constructor(){

    }

    static think(eList){
        let events = [];
        eList.forEach(entity => {
            if(entity.enemyAIC != null){
                //TUKAJ TUJI VIRI ODLOČAJO


                /* 10 IQ
                let eventIndex = Math.floor(Math.random() * entity.enemyAIC.events.length);
                events.push(entity.enemyAIC.events[eventIndex]);

                */

                // 50IQ

                



                //console.log(entity.name);
            }
        });
        //console.log(actions);
        return events;
    }
}