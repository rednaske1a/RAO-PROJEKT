//import * as game from "..js/AleGame.js";
//import * as gameData from "gameData.js";

console.log(gameData);
const game = new AleGame();
game.init(gameData);

/*
game.addSprite(new Sprite({ name: 'Gregor', color: 'White', pos: { x: 400, y: 50 }, size: { w: 50, h: 50 }, vel: { x: 0, y: 0 }, acc: { x: 0, y: game.gravity * 4 }, coll: true, collMask: [1, 0, 0, 0, 0, 0, 0, 0], children: [], keys: ['t','f','g','h'] }));
*/
