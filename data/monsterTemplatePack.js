const monsterTemplatePack = [
    {
    "name": "L1Slime",
    "type": "Body",
    "children": ["L1SlimeImage", "HPBarRed", "HPBarGreen","MoveIndicator"],

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
                "maxhp": 100
            }
        },{
            "name": "AleEnemyAIC",
            "data": {
                "events":[
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},/*
                    {"type":"AI","trigger":"AI","context":"AI","eName":"eSlimeAttack","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},*/
                   
                ]
                }
            }]
    },

    {
    "name": "L1SlimeImage",
    "type": "Image",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 100, "h": 100 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#26C6DA",
            "visible": true,
            "zLayer": 5
        }
        }]
    },{
        "name": "L2Slime",
        "type": "Body",
        "children": ["L2SlimeImage", "HPBarRed", "HPBarGreen","MoveIndicator"],
    
        "relPos": {"x": 1000, "y": -200 },
        "size": { "w": 200, "h": 200 },
        
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
                    "maxhp": 300
                }
            },{
                "name": "AleEnemyAIC",
                "data": {
                    "events":[
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},/*
                    {"type":"AI","trigger":"AI","context":"AI","eName":"eSlimeAttack","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},*/
                   
                ]
                    }
                }]
        },
    
        {
        "name": "L2SlimeImage",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 200, "h": 200 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "#1a4902",
                "visible": true,
                "zLayer": 5
            }
            }]
        },{
            "name": "L3Slime",
            "type": "Body",
            "children": ["L3SlimeImage", "HPBarRed", "HPBarGreen","MoveIndicator"],
        
            "relPos": {"x": 1000, "y": -300 },
            "size": { "w": 300, "h": 300 },
            
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
                        "moveSpeed": 15,
                        "maxhp": 1000,
                    }
                },{
                    "name": "AleEnemyAIC",
                    "data": {
                        "events":[
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},/*
                    {"type":"AI","trigger":"AI","context":"AI","eName":"eSlimeAttack","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},*/
                   
                ]
                        }
                    }]
            },
        
            {
            "name": "L3SlimeImage",
            "type": "Image",
            "children": [],
        
            "relPos": {"x": 0, "y": 0 },
            "size": { "w": 300, "h": 300 },
            
            "components": [{
                "name": "AleRenderC",
                "data": {
                    "color": "#d64022",
                    "visible": true,
                    "zLayer": 5
                }
                }]
            }
];