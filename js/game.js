//import * as game from "..js/AleGame.js";
//import * as gameData from "gameData.js";

const game = new AleGame();

let scenes = [];

scenes.push(gameScene);
scenes.push(guiScene);
scenes.push(level1Scene);
scenes.push(playerScene);

console.log(scenes);
game.init(scenes);
game.run();

