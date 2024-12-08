const L001TemplatePack = [
    {

    "name": "L001",
    "type": "Node",
    "children": [
        {"name": "L001Wall", "data": {"relPos": {"x": -5000, "y": -2000}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * -1, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 0, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 1, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 2, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 3, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 4, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 5, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 6, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 7, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 8, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 9, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 10, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 11, "y": 0}}},
        {"name": "L001Chunk", "data": {"relPos": {"x": 3000 * 12, "y": 0}}},
        {"name": "L001Wall", "data": {"relPos": {"x": 20000, "y": -2000}}},

],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []

    },{

        "name": "L001Chunk",
        "type": "Node",
        "children": ["L001Ground","L001BG"],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 0, "h": 0 },
        
        "components": []
    
        },{

    "name": "L001Wall",
    "type": "Body",
    "children": ["L001WallImg"],

    "relPos": {"x": 0, "y": -2000 },
    "size": { "w": 5100, "h": 3000 },
    
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
    "name": "L001WallImg",
    "type": "Image",
    "children": [],

    "relPos": {"x": -700, "y": 450 },
    "size": { "w": 6500, "h": 2000 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "NONE",
            "image": "../img/Wall.png",
            "visible": true,
            "zLayer": 99
        }
        }]

    }
];