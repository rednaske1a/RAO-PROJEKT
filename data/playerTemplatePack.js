const playerTemplatePack = [
    {
    "name": "Player",
    "type": "Body",
    "children": ["PlayerImage","Camera", "HPBarRed", "HPBarGreen"],

    "relPos": {"x": 200, "y": -100 },
    "size": { "w": 50, "h": 100 },
    
    "components": [{
        "name": "AleFizikaC",
        "data": {
            "vel" : {"x": 0, "y": 0},
            "acc" : {"x": 0, "y": 1},
            "trenje": 0.8,
            "collLayer" : [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "collMask" : [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
            "collide": true
        }
        },{
        "name": "AlePlayerC",
        "data": {
            "jumpSpeed": 10,
            "moveSpeed": 10,
            "maxhp": 100
        }
        },{
        "name": "AleEventC",
        "data": {
            "events":[
                {"type":"KEYBOARD","trigger":"w","context":"DOWN","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"a","context":"DOWN","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"s","context":"DOWN","eName":"Duck","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"d","context":"DOWN","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"a","context":"RELEASED","eName":"eForceAnimation","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData":{"string1":"idle", "string2": "PlayerImage"}},
                {"type":"KEYBOARD","trigger":"d","context":"RELEASED","eName":"eForceAnimation","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData":{"string1":"idle", "string2": "PlayerImage"}},
                {"type":"KEYBOARD","trigger":"r","context":"PRESSED","eName":"eAttackBow","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"f","context":"PRESSED","eName":"eAttackSword","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]}
            ]
            }
        },{
            "name": "AleCoinC",
            "data": {
                "coins": 100
                }
            }]
    },

    {
    "name": "PlayerImage",
    "type": "Image",
    "children": [],

    "relPos": {"x": 0, "y": -100 },
    "size": { "w": 100, "h": 200 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "NONE",
            "image": "NONE",
            "visible": true,
            "zLayer": 300
        }
        },{
        "name": "AleAnimationC",
        "data": {
            "animations":{
                "idle": {
                    "spritesheet": "../anims/P1/Idle.png",
                    "spritesheetSize": 32,
                    "spritesheetRows": 1,
                    "spritesheetCols": 1,
                    "frames": [0,1,2,3],
                    "duration": 250,
                    "type": "LOOP"
                },
                "jump": {
                    "spritesheet": "../anims/P1/Jump.png",
                    "spritesheetSize": 32,
                    "spritesheetRows": 1,
                    "spritesheetCols": 1,
                    "frames": [2,3,4,5,6,7],
                    "duration": 100,
                    "type": "ONCE"
                },
                "run": {
                    "spritesheet": "../anims/P1/Run.png",
                    "spritesheetSize": 32,
                    "spritesheetRows": 1,
                    "spritesheetCols": 1,
                    "frames": [0,1,2,3,4,5],
                    "duration": 100,
                    "type": "ONCE"
                },"sword": {
                    "spritesheet": "../anims/P1/Sword.png",
                    "spritesheetSize": 32,
                    "spritesheetRows": 1,
                    "spritesheetCols": 1,
                    "frames": [0,1,2,3,4,5],
                    "duration": 75,
                    "type": "ONCE"
                },"bow": {
                    "spritesheet": "../anims/P1/Bow.png",
                    "spritesheetSize": 32,
                    "spritesheetRows": 1,
                    "spritesheetCols": 1,
                    "frames": [0,1,2,3],
                    "duration": 50,
                    "type": "ONCE"
                },
            }
        }   
        }]
    },{
        "name": "MoveIndicator",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 50, "y": 50 },
        "size": { "w": 100, "h": 20 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Lime",
                "image": "NONE",
                "visible": true,
                "zLayer": 100
            }
            }]
        },{

    "name": "Camera",
    "type": "Node",
    "children": [],

    "relPos": {"x": -1024, "y": -700 },
    "size": { "w": 2048, "h": 1152 },
        
    "components": [{
        "name": "AleCameraC",
        "data": {
            "sPos": {"x": 0, "y": 0},
            "sSize": {"w": 1024, "h": 576},
            "follow": "Player",
            "followStrength": 20,
            "followOffset": {"x": 0, "y": -700 }
            }
        },{
        "name": "AleFollowC",
        "data": {
            "follow": "Player_0",
            "followStrength": 20,
            "followOffset": {"x": -1024, "y": -700 }
            }
        }]
    },{

        "name": "Died",
        "type": "GUI",
        "children": [],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 1024, "h": 576 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Die.png",
                "visible": false,
                "zLayer": 999
            }
            }]
        }
];