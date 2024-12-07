const L001TemplatePack = [
    {

    "name": "L001",
    "type": "Node",
    "children": ["L001Ground", "L001WallLeft","L001BG", "L001WallLeft2"],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []

    },{

    "name": "L001WallLeft",
    "type": "Body",
    "children": ["L001WallLeftImg"],

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

    },{

        "name": "L001WallLeft2",
        "type": "Body",
        "children": ["L001WallLeftImg"],
    
        "relPos": {"x": -1500, "y": -2000 },
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
    
        },{

    "name": "L001WallLeftImg",
    "type": "Image",
    "children": [],

    "relPos": {"x": 300, "y": 450 },
    "size": { "w": 2000, "h": 2000 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "NONE",
            "image": "../img/WallLeft.png",
            "visible": true,
            "zLayer": 200
        }
        }]

    }
];