const gameTemplatePack = [{
    "name": "Game",
    "type": "Node",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": [,{
        "name": "AleEventC",
        "data": {
            "events":[
                {"type":"TIME","trigger":"TIME","context":"LOOP","eName":"CreateSlime","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData": {"start": null, "timeout": 10000, "triggered": false, "int1": 500, "int2": 1000}},
                {"type":"TIME","trigger":"TIME","context":"LOOP","eName":"CreateSlime","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData": {"start": null, "timeout": 5000, "triggered": false, "int1": 2000, "int2": 5000}},
            ]
            }
        }]
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
