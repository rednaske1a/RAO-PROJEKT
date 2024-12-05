const gameTemplatePack = [{
    "name": "Game",
    "type": "Node",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },{
        "name": "HPBarRed",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 100, "h": 20 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "red",
                "visible": true,
                "zLayer": 10
            }
            },{
            "name": "AleFollowC",
            "data": {
                "follow": "PARENT",
                "followStrength": 5,
                "followOffset": {"x": -25, "y": -70 }
                }
            }]
    },{
        "name": "HPBarGreen",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 100, "h": 20 },
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "lime",
                "visible": true,
                "zLayer": 50
            }
            },{
            "name": "AleFollowC",
            "data": {
                "follow": "PARENT",
                "followStrength": 5,
                "followOffset": {"x": -25, "y": -70 }
                }
            }]
        }
];
