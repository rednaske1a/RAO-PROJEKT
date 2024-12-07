const GroudTemplatePack = [
    {

        "name": "L001Ground",
        "type": "Node",
        "children": ["L001GroundImg","L001GroundGrass1", "L001GroundGrass2", "L001GroundGrass3"],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 2000, "h": 1000 },
        
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
            "type": "Body",
            "children": [],
        
            "relPos": {"x": 0, "y": 0 },
            "size": { "w": 2000, "h": 1000 },
            
            "components": [,{
                "name": "AleRenderC",
                "data": {
                    "color": "Green",
                    "image": "../img/Ground/Ground.png",
                    "visible": true,
                    "zLayer": 50
                }
                }]
        
            },{
    
        "name": "L001GroundGrass1",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": -200, "y": -400 },
        "size": { "w": 2000, "h": 1000 },
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Ground/Grass.png",
                "visible": true,
                "zLayer": 50
            }
            },{
                "name": "AleParalaxC",
                "data": {
                    "pTarget": "Camera_1",
                    "pStrength": -10,
                }
                }]
    
        },{
    
            "name": "L001GroundGrass2",
            "type": "Image",
            "children": [],
        
            "relPos": {"x": -500, "y": -300 },
            "size": { "w": 2000, "h": 1000 },
            "components": [{
                "name": "AleRenderC",
                "data": {
                    "color": "NONE",
                    "image": "../img/Ground/Grass.png",
                    "visible": true,
                    "zLayer": 60
                }
                },{
                    "name": "AleParalaxC",
                    "data": {
                        "pTarget": "Camera_1",
                        "pStrength": -20,
                    }
                    }]
        
            },{
    
                "name": "L001GroundGrass3",
                "type": "Image",
                "children": [],
            
                "relPos": {"x": -300, "y": -200 },
                "size": { "w": 2000, "h": 1000 },
                "components": [{
                    "name": "AleRenderC",
                    "data": {
                        "color": "NONE",
                        "image": "../img/Ground/Grass.png",
                        "visible": true,
                        "zLayer": 70
                    }
                    },{
                        "name": "AleParalaxC",
                        "data": {
                            "pTarget": "Camera_1",
                            "pStrength": -50,
                        }
                        }]
            
                },
];