const playerScene = [
    {
    "name": "playerScene",
    "type": "Body",
    "parent": "gameScene",

    "active": 1,

    "relPos": {"x": 200, "y": -100 },
    "size": { "w": 50, "h": 100 },
    
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
        }]
    },

    {
    "name": "Player1BodyImg",
    "type": "Image",
    "parent": "playerScene",
    
    "active": 1,

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
    }
];