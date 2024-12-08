const monsterTemplatePack = [
    {
    "name": "L1Slime",
    "type": "Body",
    "children": ["L1SlimeImage", "HPBarRed", "HPBarGreen"],

    "relPos": {"x": 1000, "y": -100 },
    "size": { "w": 100, "h": 100 },
    
    "components": [{
        "name": "AleFizikaC",
        "data": {
            "vel" : {"x": 0, "y": 0},
            "acc" : {"x": 0, "y": 1},
            "trenje": 0.8,
            "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            "collMask" : [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "collide": true
        }
        },{
            "name": "AlePlayerC",
            "data": {
                "jumpSpeed": 30,
                "moveSpeed": 10,
                "maxhp": 100,
                "coinDrop": 2
            }
        },{
            "name": "AleEnemyAIC",
            "data": {
                "events":[
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"eSlimeAttack","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"],"eData":{"int1": 1}},
                   
                ]
                }
            }]
    },

    {
    "name": "L1SlimeImage",
    "type": "Image",
    "children": [],

    "relPos": {"x": -100, "y": -100 },
    "size": { "w": 200, "h": 200 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "NONE",
            "image": "NONE",
            "visible": true,
            "zLayer": 5
        }
        },{
            "name": "AleAnimationC",
            "data": {
                "animations":{
                    "idle": {
                        "spritesheet": "../anims/Slime/Slime.png",
                        "spritesheetSize": 24,
                        "spritesheetRows": 3,
                        "spritesheetCols": 3,
                        "frames": [7,8],
                        "duration": 500,
                        "type": "LOOP"
                    },
                    "jump": {
                        "spritesheet": "../anims/Slime/Slime.png",
                        "spritesheetSize": 24,
                        "spritesheetRows": 3,
                        "spritesheetCols": 3,
                        "frames": [7,8,8,7],
                        "duration": 200,
                        "type": "ONCE"
                    },
                    "run": {
                        "spritesheet": "../anims/Slime/Slime.png",
                        "spritesheetSize": 24,
                        "spritesheetRows": 3,
                        "spritesheetCols": 3,
                        "frames": [4,5,6,5],
                        "duration": 100,
                        "type": "ONCE"
                    }
                }
            }   
            }]
    },{
        "name": "L2Slime",
        "type": "Body",
        "children": ["L2SlimeImage", "HPBarRed", "HPBarGreen"],
    
        "relPos": {"x": 1000, "y": -100 },
        "size": { "w": 100, "h": 100 },
        
        "components": [{
            "name": "AleFizikaC",
            "data": {
                "vel" : {"x": 0, "y": 0},
                "acc" : {"x": 0, "y": 1},
                "trenje": 0.8,
                "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                "collMask" : [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": true
            }
            },{
                "name": "AlePlayerC",
                "data": {
                    "jumpSpeed": 40,
                    "moveSpeed": 10,
                    "maxhp": 500,
                    "coinDrop": 20
                }
            },{
                "name": "AleEnemyAIC",
                "data": {
                    "events":[
                        {"type":"AI","trigger":"AI","context":"AI","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                        {"type":"AI","trigger":"AI","context":"AI","eName":"eSlimeAttack","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"],"eData":{"int1": 10}},
                       
                    ]
                    }
                }]
        },
    
        {
        "name": "L2SlimeImage",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": -100, "y": -100 },
        "size": { "w": 100, "h": 100 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "NONE",
                "visible": true,
                "zLayer": 5
            }
            },{
                "name": "AleAnimationC",
                "data": {
                    "animations":{
                        "idle": {
                            "spritesheet": "../anims/Slime/Slime2.png",
                            "spritesheetSize": 24,
                            "spritesheetRows": 3,
                            "spritesheetCols": 3,
                            "frames": [7,8],
                            "duration": 500,
                            "type": "LOOP"
                        },
                        "jump": {
                            "spritesheet": "../anims/Slime/Slime2.png",
                            "spritesheetSize": 24,
                            "spritesheetRows": 3,
                            "spritesheetCols": 3,
                            "frames": [7,8,8,7],
                            "duration": 200,
                            "type": "ONCE"
                        },
                        "run": {
                            "spritesheet": "../anims/Slime/Slime2.png",
                            "spritesheetSize": 24,
                            "spritesheetRows": 3,
                            "spritesheetCols": 3,
                            "frames": [4,5,6,5],
                            "duration": 100,
                            "type": "ONCE"
                        }
                    }
                }   
                }]
        },{
            "name": "L3Slime",
            "type": "Body",
            "children": ["L1SlimeImage", "HPBarRed", "HPBarGreen"],
        
            "relPos": {"x": 1000, "y": -100 },
            "size": { "w": 100, "h": 100 },
            
            "components": [{
                "name": "AleFizikaC",
                "data": {
                    "vel" : {"x": 0, "y": 0},
                    "acc" : {"x": 0, "y": 1},
                    "trenje": 0.8,
                    "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
                    "collMask" : [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                    "collide": true
                }
                },{
                    "name": "AlePlayerC",
                    "data": {
                        "jumpSpeed": 50,
                        "moveSpeed": 10,
                        "maxhp": 2000,
                        "coinDrop": 50
                    }
                },{
                    "name": "AleEnemyAIC",
                    "data": {
                        "events":[
                            {"type":"AI","trigger":"AI","context":"AI","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                            {"type":"AI","trigger":"AI","context":"AI","eName":"eSlimeAttack","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"],"eData":{"int1": 20}},
                           
                        ]
                        }
                    }]
            },
        
            {
            "name": "L3SlimeImage",
            "type": "Image",
            "children": [],
        
            "relPos": {"x": -100, "y": -100 },
            "size": { "w": 100, "h": 100 },
            
            "components": [{
                "name": "AleRenderC",
                "data": {
                    "color": "NONE",
                    "image": "NONE",
                    "visible": true,
                    "zLayer": 5
                }
                },{
                    "name": "AleAnimationC",
                    "data": {
                        "animations":{
                            "idle": {
                                "spritesheet": "../anims/Slime/Slime3.png",
                                "spritesheetSize": 24,
                                "spritesheetRows": 3,
                                "spritesheetCols": 3,
                                "frames": [7,8],
                                "duration": 500,
                                "type": "LOOP"
                            },
                            "jump": {
                                "spritesheet": "../anims/Slime/Slime3.png",
                                "spritesheetSize": 24,
                                "spritesheetRows": 3,
                                "spritesheetCols": 3,
                                "frames": [7,8,8,7],
                                "duration": 200,
                                "type": "ONCE"
                            },
                            "run": {
                                "spritesheet": "../anims/Slime/Slime3.png",
                                "spritesheetSize": 24,
                                "spritesheetRows": 3,
                                "spritesheetCols": 3,
                                "frames": [4,5,6,5],
                                "duration": 100,
                                "type": "ONCE"
                            }
                        }
                    }   
                    }]
            }
];