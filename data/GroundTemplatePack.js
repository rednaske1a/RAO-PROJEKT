const GroudTemplatePack = [
    {

        "name": "L001Ground",
        "type": "Node",
        "children": ["L001GroundImg",
            {"name" :"L001GroundGrass", "data":{"relPos": {"x": -1200, "y":-300 + 800}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":10}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-10}}]}},
            {"name" :"L001GroundGrass", "data":{"relPos": {"x": 500, "y":-400+ 800}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":20}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-30}}]}},
            {"name" :"L001GroundGrass", "data":{"relPos": {"x": -500, "y":-500+ 800}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":30}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-50}}]}},
            {"name" :"L001GroundGrass", "data":{"relPos": {"x": -1200 + 1500, "y":-300+ 800}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":10}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-10}}]}},
            {"name" :"L001GroundGrass", "data":{"relPos": {"x": 500 + 1500, "y":-400+ 800}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":20}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-20}}]}},
            {"name" :"L001GroundGrass", "data":{"relPos": {"x": -500 + 1500, "y":-500+ 800}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":30}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-30}}]}},
            {"name" :"L001GroundGrassBlade", "data":{"relPos": {"x": 0, "y":-800+ 1400}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/GrassBlade.png","visible":true,"zLayer":300}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-100}}]}},
            {"name" :"L001GroundGrassBlade", "data":{"relPos": {"x": 1200, "y":-800+ 1350}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/GrassBlade.png","visible":true,"zLayer":300}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-140}}]}},
            {"name" :"L001GroundGrassBlade", "data":{"relPos": {"x": 1900, "y":-800+ 1300}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/GrassBlade.png","visible":true,"zLayer":300}},{"name":"AleParalaxC","data":{"pTarget":"Camera_1","pStrength":-120}}]}},
        ],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 3000, "h": 1000 },
        
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
            "size": { "w": 3000, "h": 500 },
            
            "components": [,{
                "name": "AleRenderC",
                "data": {
                    "color": "NONE",
                    "image": "../img/Ground/Ground.png",
                    "visible": true,
                    "zLayer": 5
                }
                }]
        
            },{
    
        "name": "L001GroundGrass",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": -400 },
        "size": { "w": 1500, "h": 1000 },
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
    
                "name": "L001GroundGrassBlade",
                "type": "Image",
                "children": [],
            
                "relPos": {"x": 0, "y": -800 },
                "size": { "w": 1500, "h": 1000 },
                "components": [{
                    "name": "AleRenderC",
                    "data": {
                        "color": "NONE",
                        "image": "../img/Ground/GrassBlade.png",
                        "visible": true,
                        "zLayer": 300
                    }
                    },{
                        "name": "AleParalaxC",
                        "data": {
                            "pTarget": "Camera_1",
                            "pStrength": -100,
                        }
                    }]
                }
];