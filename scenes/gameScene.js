const gameScene = [{
    "name": "gameScene",
    "type": "Node",
    "parent": null,

    "active": 1,

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": [{
        "name": "AleEventC",
        "data": { "keys": {
                "w": [{"name": "Jump", "contexts": ["InGame"], "target": "playerScene", "trigger": "w"}],
                "a": [{"name": "GoLeft", "contexts": ["InGame"], "target": "playerScene", "trigger": "a"}],
                "s": [{"name": "Duck", "contexts": ["InGame"], "target": "playerScene", "trigger": "s"}],
                "d": [{"name": "GoRight", "contexts": ["InGame"], "target": "playerScene", "trigger": "d"}]
                },
                "mouse": {}
            }
        }]
    },
    {
        "name": "Camera1",
        "type": "Node",
        "parent": "gameScene",

        "active": 1,

        "relPos": {"x": 200, "y": -300 },
        "size": { "w": 1024, "h": 576 },
        
        "components": [{
            "name": "AleCameraC",
            "data": {
                "sPos": {"x": 0, "y": 0},
                "sSize": {"w": 1024, "h": 576},
                "follow": "playerScene",
                "followStrength": 20,
                "followOffset": {"x": -512 + 50, "y": -300 }
            }
            }]
    }
];
