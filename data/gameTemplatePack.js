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
                {"type":"TIME","trigger":"TIME","context":"LOOP","eName":"CreateSlime","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData": {"start": null, "timeout": 5000, "triggered": false, "int1": 500, "int2": 10000, "string1": "L1Slime"}},
                {"type":"TIME","trigger":"TIME","context":"LOOP","eName":"CreateSlime","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData": {"start": null, "timeout": 15000, "triggered": false, "int1": 10000, "int2": 15000, "string1": "L2Slime"}},
                {"type":"TIME","trigger":"TIME","context":"LOOP","eName":"CreateSlime","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData": {"start": null, "timeout": 30000, "triggered": false, "int1": 15000, "int2": 20000, "string1": "L3Slime"}},
                {"type":"TIME","trigger":"TIME","context":"TIMEOUT","eName":"eSetBestLVL","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData": {"start": null, "timeout": 0, "triggered": false}},
                {"type":"KEYBOARD","trigger":"Escape","context":"PRESSED","eName":"eOpenSettings","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                {"type":"KEYBOARD","trigger":"Escape","context":"PRESSED","eName":"eCloseSettings","eTrigger":"SELF","eTarget":"SELF","eContexts":["INSETT"]}
            ]
            }
        }]
    },{
        "name": "HPBarRed",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 5000, "y": -10000 },
        "size": { "w": 100, "h": 20 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "red",
                "image": "NONE",
                "visible": true,
                "zLayer": 10
            }
            },{
            "name": "AleFollowC",
            "data": {
                "follow": "PARENT",
                "followStrength": 5,
                "followOffset": {"x": 0, "y": -90 }
                }
            }]
    },{
        "name": "HPBarGreen",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 5000, "y": -10000 },
        "size": { "w": 100, "h": 20 },
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "lime",
                "image": "NONE",
                "visible": true,
                "zLayer": 50
            }
            },{
            "name": "AleFollowC",
            "data": {
                "follow": "PARENT",
                "followStrength": 5,
                "followOffset": {"x": 0, "y": -90 }
                }
            }]
        }
];
