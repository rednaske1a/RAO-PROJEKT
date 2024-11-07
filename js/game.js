//import * as game from "..js/AleGame.js";
//import * as gameData from "gameData.js";

let allData = {};
allData.gameData = gameData;
allData.guiData = guiData;
allData.level1Data = level1Data;
allData.playerData = playerData;

const game = new AleGame();
game.init(allData);

/*
game.addSprite(new Sprite({ name: 'Gregor', color: 'White', pos: { x: 400, y: 50 }, size: { w: 50, h: 50 }, vel: { x: 0, y: 0 }, acc: { x: 0, y: game.gravity * 4 }, coll: true, collMask: [1, 0, 0, 0, 0, 0, 0, 0], children: [], keys: ['t','f','g','h'] }));
*/
