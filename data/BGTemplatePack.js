const BGTemplatePack = [
    {

        "name": "L001BG",
        "type": "Node",
        "children": ["L001BG1","L001BG2","L001BG3","L001BG4","L001BG5","L001BG6","L001BGGrass1_0","L001BGGrass1_1","L001BGGrass1_2","L001BGGrass2_0","L001BGGrass2_1","L001BGGrass2_2"],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 0, "h": 0 },
        
        "components": []
    
        },
    {

        "name": "L001BG1",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": -200, "y": -900 },
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
                    "pTarget": "Camera_1",
                    "pStrength": 0,
                }
                }]
    
        },{

            "name": "L001BG2",
            "type": "Image",
            "children": [],
        
            "relPos": {"x": -200, "y": -900 },
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
                        "pTarget": "Camera_1",
                        "pStrength": 5,
                    }
                    }]
        
            },{

                "name": "L001BG3",
                "type": "Image",
                "children": [],
            
                "relPos": {"x": -200, "y": -900 },
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
                            "pTarget": "Camera_1",
                            "pStrength": 8,
                        }
                        }]
            
                },{

                    "name": "L001BG4",
                    "type": "Image",
                    "children": [],
                
                    "relPos": {"x": -200, "y":-900 },
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
                                "pTarget": "Camera_1",
                                "pStrength": 12,
                            }
                            }]
                
                    },{

                        "name": "L001BG5",
                        "type": "Image",
                        "children": [],
                    
                        "relPos": {"x": -200, "y": -900 },
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
                                    "pTarget": "Camera_1",
                                    "pStrength": 13,
                                }
                                }]
                    
                        },{

                            "name": "L001BG6",
                            "type": "Image",
                            "children": [],
                        
                            "relPos": {"x": -200, "y": -900 },
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
    
                                "name": "L001BGGrass1_0",
                                "type": "Image",
                                "children": [],
                            
                                "relPos": {"x": -300, "y": -400 },
                                "size": { "w": 1250, "h": 625 },
                                "components": [{
                                    "name": "AleRenderC",
                                    "data": {
                                        "color": "NONE",
                                        "image": "../img/Ground/Grass.png",
                                        "visible": true,
                                        "zLayer": 10
                                    }
                                    },{
                                        "name": "AleParalaxC",
                                        "data": {
                                            "pTarget": "Camera_1",
                                            "pStrength": 0,
                                        }
                                        }]
                            
                                },{
    
                                    "name": "L001BGGrass1_1",
                                    "type": "Image",
                                    "children": [],
                                
                                    "relPos": {"x": -300 + 1250, "y": -400 },
                                    "size": { "w": 1250, "h": 625 },
                                    "components": [{
                                        "name": "AleRenderC",
                                        "data": {
                                            "color": "NONE",
                                            "image": "../img/Ground/Grass.png",
                                            "visible": true,
                                            "zLayer": 10
                                        }
                                        },{
                                            "name": "AleParalaxC",
                                            "data": {
                                                "pTarget": "Camera_1",
                                                "pStrength": 0,
                                            }
                                            }]
                                
                                    },{
    
                                        "name": "L001BGGrass1_2",
                                        "type": "Image",
                                        "children": [],
                                    
                                        "relPos": {"x": -300 + 1250 + 1250, "y": -400 },
                                        "size": { "w": 1250, "h": 625 },
                                        "components": [{
                                            "name": "AleRenderC",
                                            "data": {
                                                "color": "NONE",
                                                "image": "../img/Ground/Grass.png",
                                                "visible": true,
                                                "zLayer": 10
                                            }
                                            },{
                                                "name": "AleParalaxC",
                                                "data": {
                                                    "pTarget": "Camera_1",
                                                    "pStrength": 0,
                                                }
                                                }]
                                    
                                        },{
    
                                    "name": "L001BGGrass2_0",
                                    "type": "Image",
                                    "children": [],
                                
                                    "relPos": {"x": -100, "y": -350 },
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
                                                "pTarget": "Camera_1",
                                                "pStrength": 10,
                                            }
                                            }]
                                
                                    },{
    
                                        "name": "L001BGGrass2_1",
                                        "type": "Image",
                                        "children": [],
                                    
                                        "relPos": {"x": 900, "y": -350 },
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
                                                    "pTarget": "Camera_1",
                                                    "pStrength": 10,
                                                }
                                                }]
                                    
                                        },{
    
                                            "name": "L001BGGrass2_2",
                                            "type": "Image",
                                            "children": [],
                                        
                                            "relPos": {"x": 1900, "y": -350 },
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
                                                        "pTarget": "Camera_1",
                                                        "pStrength": 10,
                                                    }
                                                    }]
                                        
                                            },
];