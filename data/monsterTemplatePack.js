const monsterTemplatePack = [
    {
    "name": "Slime",
    "type": "Body",
    "children": ["SlimeImage","SlimeHPBar"],

    "relPos": {"x": 1000, "y": -1000 },
    "size": { "w": 25, "h": 25 },
    
    "components": [{
        "name": "AleFizikaC",
        "data": {
            "vel" : {"x": 0, "y": 0},
            "acc" : {"x": 0, "y": 1},
            "trenje": 0.8,
            "collLayer" : [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "collMask" : [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "collide": true
        }
        },{
        "name": "AlePlayerC",
        "data": {
            "jumpSpeed": 30,
            "moveSpeed": 10,
            "isGrounded": false,
            "isDucking": false
        }
        },{
            "name": "AleEnemyAIC",
            "data": {
                "events":[
                    {"type":"KEYBOARD","trigger":"W","context":"DOWN","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":"INGAME"},
                    {"type":"KEYBOARD","trigger":"A","context":"DOWN","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":"INGAME"},
                    {"type":"KEYBOARD","trigger":"S","context":"DOWN","eName":"Duck","eTrigger":"SELF","eTarget":"SELF","eContexts":"INGAME"},
                    {"type":"KEYBOARD","trigger":"D","context":"DOWN","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":"INGAME"},
                    {"type":"KEYBOARD","trigger":"1","context":"PRESSED","eName":"UseSkill1","eTrigger":"SELF","eTarget":"SELF","eContexts":"INGAME"},
                    {"type":"KEYBOARD","trigger":"2","context":"PRESSED","eName":"UseSkill2","eTrigger":"SELF","eTarget":"SELF","eContexts":"INGAME"},
                    {"type":"KEYBOARD","trigger":"3","context":"PRESSED","eName":"UseSkill3","eTrigger":"SELF","eTarget":"SELF","eContexts":"INGAME"}
                ]
                }
            }]
    },

    {
    "name": "SlimeImage",
    "type": "Image",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 25, "h": 25 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#26C6DA",
            "visible": true,
            "zLayer": 5
        }
        }]
    },

    {
        "name": "SlimeHPBar",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": 10 },
        "size": { "w": 25, "h": 5 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "red",
                "visible": true,
                "zLayer": 10
            }
            },{
            "name": "AleFollowC",
            "data": {
                "follow": "Slime",
                "followStrength": 2,
                "followOffset": {"x": 0, "y": -10 }
                }
            }]
        }
];