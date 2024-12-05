const monsterTemplatePack = [
    {
    "name": "Slime",
    "type": "Body",
    "children": ["SlimeImage", "HPBarRed", "HPBarGreen","MoveIndicator"],

    "relPos": {"x": 1000, "y": -1000 },
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
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"Wait","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                    {"type":"AI","trigger":"AI","context":"AI","eName":"eSlimeAttack","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                   
                ]
                }
            }]
    },

    {
    "name": "SlimeImage",
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
    }
];