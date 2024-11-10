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
    }
];
