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
        "data": { "keys": {
                "w": [{"name": "Jump", "contexts": ["InGame"], "target": "Player"}],
                "a": [{"name": "GoLeft", "contexts": ["InGame"], "target": "Player"}],
                "s": [{"name": "Duck", "contexts": ["InGame"], "target": "Player"}],
                "d": [{"name": "GoRight", "contexts": ["InGame"], "target": "Player"}]
                },
                "mouse": {}
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
    "size": { "w": 2048, "h": 1152 },
        
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
            "followOffset": {"x": -900, "y": -700 }
            }
        }]
    }
];