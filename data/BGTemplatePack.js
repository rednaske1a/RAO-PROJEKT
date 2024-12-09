const BGTemplatePack = [
    {

        "name": "L001BG",
        "type": "Node",
        "children": ["L001BG1","L001BG2","L001BG3","L001BG4","L001BG5","L001BG6",
            {"name" :"L001BGGrass1", "data":{"relPos": {"x": -300, "y":470}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":2}},{"name":"AleParalaxC","data":{"pTarget":"Camera_0","pStrength":0}}]}},
            {"name" :"L001BGGrass1", "data":{"relPos": {"x": -300 + 1000, "y":470}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":2}},{"name":"AleParalaxC","data":{"pTarget":"Camera_0","pStrength":0}}]}},
            {"name" :"L001BGGrass1", "data":{"relPos": {"x": -300 + 2000, "y":470}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":2}},{"name":"AleParalaxC","data":{"pTarget":"Camera_0","pStrength":0}}]}},
            
            {"name" :"L001BGGrass2", "data":{"relPos": {"x": 200 , "y":450}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":-5}},{"name":"AleParalaxC","data":{"pTarget":"Camera_0","pStrength":10}}]}},
            {"name" :"L001BGGrass2", "data":{"relPos": {"x": 200 + 1000, "y":450}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":-5}},{"name":"AleParalaxC","data":{"pTarget":"Camera_0","pStrength":10}}]}},
            {"name" :"L001BGGrass2", "data":{"relPos": {"x": 200 + 2000, "y":450}, "components": [{"name":"AleRenderC","data":{"color":"NONE","image":"../img/Ground/Grass.png","visible":true,"zLayer":-5}},{"name":"AleParalaxC","data":{"pTarget":"Camera_0","pStrength":10}}]}}
            
        ],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 0, "h": 0 },
        
        "components": []
    
        },
    {

        "name": "L001BG1",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": -200, "y": 1000 },
        "size": { "w": 3000, "h": 1000 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/BG/1.png",
                "visible": true,
                "zLayer": -50
            }
            },{
                "name": "AleParalaxC",
                "data": {
                    "pTarget": "Camera_0",
                    "pStrength": 100,
                }
                }]
    
        },{

            "name": "L001BG2",
            "type": "Image",
            "children": [],
        
            "relPos": {"x": -200, "y": 1000 },
            "size": { "w": 3000, "h": 1000 },
            
            "components": [{
                "name": "AleRenderC",
                "data": {
                    "color": "NONE",
                    "image": "../img/BG/2.png",
                    "visible": true,
                    "zLayer": -40
                }
                },{
                    "name": "AleParalaxC",
                    "data": {
                        "pTarget": "Camera_0",
                        "pStrength": 90,
                    }
                    }]
        
            },{

                "name": "L001BG3",
                "type": "Image",
                "children": [],
            
                "relPos": {"x": -200, "y": 1000 },
                "size": { "w": 3000, "h": 1000 },
                
                "components": [{
                    "name": "AleRenderC",
                    "data": {
                        "color": "NONE",
                        "image": "../img/BG/3.png",
                        "visible": true,
                        "zLayer": -30
                    }
                    },{
                        "name": "AleParalaxC",
                        "data": {
                            "pTarget": "Camera_0",
                            "pStrength": 75,
                        }
                        }]
            
                },{

                    "name": "L001BG4",
                    "type": "Image",
                    "children": [],
                
                    "relPos": {"x": -200, "y":1000 },
                    "size": { "w": 3000, "h": 1000 },
                    
                    "components": [{
                        "name": "AleRenderC",
                        "data": {
                            "color": "NONE",
                            "image": "../img/BG/4.png",
                            "visible": true,
                            "zLayer": -20
                        }
                        },{
                            "name": "AleParalaxC",
                            "data": {
                                "pTarget": "Camera_0",
                                "pStrength": 50,
                            }
                            }]
                
                    },{

                        "name": "L001BG5",
                        "type": "Image",
                        "children": [],
                    
                        "relPos": {"x": -200, "y": 1000 },
                        "size": { "w": 3000, "h": 1000 },
                        
                        "components": [{
                            "name": "AleRenderC",
                            "data": {
                                "color": "NONE",
                                "image": "../img/BG/5.png",
                                "visible": true,
                                "zLayer": -10
                            }
                            },{
                                "name": "AleParalaxC",
                                "data": {
                                    "pTarget": "Camera_0",
                                    "pStrength": 20,
                                }
                                }]
                    
                        },{

                            "name": "L001BG6",
                            "type": "Image",
                            "children": [],
                        
                            "relPos": {"x": -200, "y": -950 },
                            "size": { "w": 3000, "h": 1000 },
                            
                            "components": [{
                                "name": "AleRenderC",
                                "data": {
                                    "color": "NONE",
                                    "image": "../img/BG/6.png",
                                    "visible": true,
                                    "zLayer": 0
                                }
                                }]
                        
                            },{
    
                                "name": "L001BGGrass1",
                                "type": "Image",
                                "children": [],
                            
                                "relPos": {"x": -300, "y": 470 },
                                "size": { "w": 1000, "h": 625 },
                                "components": [{
                                    "name": "AleRenderC",
                                    "data": {
                                        "color": "NONE",
                                        "image": "../img/Ground/Grass.png",
                                        "visible": true,
                                        "zLayer": 2
                                    }
                                    },{
                                        "name": "AleParalaxC",
                                        "data": {
                                            "pTarget": "Camera_0",
                                            "pStrength": 0,
                                        }
                                        }]
                            
                                },{
    
                                    "name": "L001BGGrass2",
                                    "type": "Image",
                                    "children": [],
                                
                                    "relPos": {"x": 200, "y": 470 },
                                    "size": { "w": 1000, "h": 500 },
                                    "components": [{
                                        "name": "AleRenderC",
                                        "data": {
                                            "color": "NONE",
                                            "image": "../img/Ground/Grass.png",
                                            "visible": true,
                                            "zLayer": -5
                                        }
                                        },{
                                            "name": "AleParalaxC",
                                            "data": {
                                                "pTarget": "Camera_0",
                                                "pStrength": 10,
                                            }
                                            }]
                                
                                    }
];