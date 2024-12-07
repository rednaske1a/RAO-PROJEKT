//import * as game from "..js/AleGame.js";
//import * as gameData from "gameData.js";

const game = new AleGame();

let templatePacks = [];

templatePacks.push(gameTemplatePack);
templatePacks.push(guiTemplatePack);
templatePacks.push(L001TemplatePack);
templatePacks.push(monsterTemplatePack);
templatePacks.push(playerTemplatePack);
templatePacks.push(combatTemplatePack);
templatePacks.push(BGTemplatePack);
templatePacks.push(GroudTemplatePack);


let audio = new Audio("/assets/menuTheme.mp3");

if(audio.isPaused)
    audio.play()


console.log(templatePacks);
game.init(templatePacks);
game.run();

