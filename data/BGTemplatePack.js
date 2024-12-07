const BGTemplatePack = [
    {

        "name": "L001BG",
        "type": "Node",
        "children": ["L001BG1","L001BG2","L001BG3","L001BG4","L001BG5","L001BG6"],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 0, "h": 0 },
        
        "components": []
    
        },
    {

        "name": "L001BG1",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": -900 },
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
        
            "relPos": {"x": 0, "y": -900 },
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
            
                "relPos": {"x": 0, "y": -900 },
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
                
                    "relPos": {"x": 0, "y": -900 },
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
                    
                        "relPos": {"x": 0, "y": -900 },
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
                                    "pStrength": 18,
                                }
                                }]
                    
                        },{

                            "name": "L001BG6",
                            "type": "Image",
                            "children": [],
                        
                            "relPos": {"x": 0, "y": -900 },
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
                        
                            }
];