const level1Scene = [
    {
        "name": "level1Scene",
        "type": "Node",
        "parent": "gameScene",

        "active": 1,

        "relPos": {"x": -512 + 50, "y": -288 -100 },
        "size": { "w": 1024, "h": 576 },
        
        "components": [{
            "name": "AleCameraC",
            "data": {
                "sPos": {"x": 0, "y": 0},
                "sSize": {"w": 1024, "h": 576},
            }
            }]
    },
    
    {
        "name": "Ground",
        "type": "Body",
        "parent": "level1Scene",

        "active": 1,

        "relPos": {"x": 0, "y": 1000 },
        "size": { "w": 10000, "h": 100 },
        
        "components": [{
            "name": "AleFizikaC",
            "data": {
                "vel" : {"x": 0, "y": 0},
                "acc" : {"x": 0, "y": 0},
                "trenje": 0.8,
                "collLayer" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collMask" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": true
            }
            }]
    },

    {
        "name": "Ground1Img",
        "type": "Image",
        "parent": "Ground",
        
        "active": 1,

        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 10000, "h": 100 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Green",
                "visible": true,
                "zLayer": 10
            }
            }]
    }
];