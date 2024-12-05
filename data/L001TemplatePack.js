const L001TemplatePack = [
    {

    "name": "L001",
    "type": "Node",
    "children": ["L001Ground", "L001WallLeft","L002Ground","L003Ground"],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []

    },{

    "name": "L001Ground",
    "type": "Body",
    "children": ["L001GroundImg"],

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

    },{

    "name": "L001GroundImg",
    "type": "Image",
    "children": [],

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

    "name": "L001WallLeftImg",
    "type": "Image",
    "children": [],

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




    ,{

        "name": "L002Ground",
        "type": "Body",
        "children": ["L002GroundImg"],
    
        "relPos": {"x": 10000, "y": 0 },
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
    
        },{
    
        "name": "L002GroundImg",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 10000, "h": 1000 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "#469e1a",
                "visible": true,
                "zLayer": 10
            }
            }]
    
        },
    
        ,{

            "name": "L003Ground",
            "type": "Body",
            "children": ["L003GroundImg"],
        
            "relPos": {"x": 20000, "y": 0 },
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
        
            },{
        
            "name": "L003GroundImg",
            "type": "Image",
            "children": [],
        
            "relPos": {"x": 0, "y": 0 },
            "size": { "w": 10000, "h": 1000 },
            
            "components": [{
                "name": "AleRenderC",
                "data": {
                    "color": "#286808",
                    "visible": true,
                    "zLayer": 10
                }
                }]
        
            },
];