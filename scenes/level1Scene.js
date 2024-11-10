const level1Scene = [
    {
        "name": "level1Scene",
        "type": "Node",
        "parent": "gameScene",

        "active": 1,

        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 0, "h": 0 },
        
        "components": []
    },
    
    {
        "name": "Ground",
        "type": "Body",
        "parent": "level1Scene",

        "active": 1,

        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 10000, "h": 1000 },
        
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
        "size": { "w": 10000, "h": 1000 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Green",
                "visible": true,
                "zLayer": 10
            }
            }]
    },{
        "name": "WallLeft",
        "type": "Body",
        "parent": "level1Scene",

        "active": 1,

        "relPos": {"x": -1000, "y": -2000 },
        "size": { "w": 1000, "h": 3000 },
        
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
        "name": "WallLeftImg",
        "type": "Image",
        "parent": "WallLeft",
        
        "active": 1,

        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 1000, "h": 3000 },
        
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