const slimeScene = [
    {
    "name": "slimeScene",
    "type": "Body",
    "parent": "gameScene",

    "active": 1,

    "relPos": {"x": 1000, "y": -1000 },
    "size": { "w": 50, "h": 50 },
    
    "components": [{
        "name": "AleFizikaC",
        "data": {
            "vel" : {"x": 0, "y": 0},
            "acc" : {"x": 0, "y": 1},
            "trenje": 0.8,
            "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "collMask" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
        "name": "AleEnemyAIC",
        "data": {
            "actions": [
                {"name": "Jump", "contexts": ["InGame"], "target": "slimeScene"},
                {"name": "GoLeft", "contexts": ["InGame"], "target": "slimeScene"},
                {"name": "Duck", "contexts": ["InGame"], "target": "slimeScene"},
                {"name": "GoRight", "contexts": ["InGame"], "target": "slimeScene"}
            ]
        }
        }]
    },

    {
    "name": "SlimeBodyImg",
    "type": "Image",
    "parent": "slimeScene",
    
    "active": 1,

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 50, "h": 50 },
    
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