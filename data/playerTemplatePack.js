const playerTemplatePack = [
    {
    "name": "Player",
    "type": "Body",
    "children": ["PlayerImage","Camera"],

    "relPos": {"x": 200, "y": -100 },
    "size": { "w": 50, "h": 100 },
    
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
            "jumpSpeed": 10,
            "moveSpeed": 10,
            "isGrounded": false,
            "isDucking": false
        }
        },{
        "name": "AleEventC",
        "data": {
            "events":[
                {"type":"KEYBOARD","trigger":"w","context":"DOWN","eName":"Jump","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"a","context":"DOWN","eName":"GoLeft","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"s","context":"DOWN","eName":"Duck","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"d","context":"DOWN","eName":"GoRight","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"1","context":"PRESSED","eName":"UseSkill1","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"2","context":"PRESSED","eName":"UseSkill2","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"3","context":"PRESSED","eName":"UseSkill3","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]}
            ]
            }
        }]
    },

    {
    "name": "PlayerImage",
    "type": "Image",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 50, "h": 100 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "Red",
            "visible": true,
            "zLayer": 10
        }
        }]
    },{

    "name": "Camera",
    "type": "Node",
    "children": [],

    "relPos": {"x": 900, "y": -900 },
    "size": { "w": 4096, "h": 2304 },
        
    "components": [{
        "name": "AleCameraC",
        "data": {
            "sPos": {"x": 0, "y": 0},
            "sSize": {"w": 1024, "h": 576},
            "follow": "Player",
            "followStrength": 20,
            "followOffset": {"x": -900, "y": -700 }
            }
        },{
        "name": "AleFollowC",
        "data": {
            "follow": "Player",
            "followStrength": 20,
            "followOffset": {"x": -900, "y": -1400 }
            }
        }]
    }
];