const guiScene = [
    {
    "name": "guiScene",
    "type": "Node",
    "parent": "gameScene",

    "active": 1,

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },

    {
    "name": "SkillSlots",
    "type": "Node",
    "parent": "guiScene",

    "active": 1,

    "relPos": {"x": 10, "y": 466 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },

    {
    "name": "SkillSlot1",
    "type": "GUI",
    "parent": "SkillSlots",

    "active": 1,

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 100, "h": 100 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#005f73",
            "visible": true,
            "zLayer": 10
        }
        },
        {
            "name": "AleEventC",
            "data": { "keys": {},
                    "mouse": {
                        "down": [{"name": "Jump", "contexts": ["InGame"], "target": "playerScene", "trigger": "down"}],
                    }
                }
            }
    ]
    },
    
    {
    "name": "SkillSlot2",
    "type": "GUI",
    "parent": "SkillSlots",

    "active": 1,

    "relPos": {"x": 110, "y": 0 },
    "size": { "w": 100, "h": 100 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#005f73",
            "visible": true,
            "zLayer": 10
        }
        }]
    },

    {
    "name": "SkillSlot3",
    "type": "GUI",
    "parent": "SkillSlots",

    "active": 1,

    "relPos": {"x": 220, "y": 0 },
    "size": { "w": 100, "h": 100 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#005f73",
            "visible": true,
            "zLayer": 10
        }
        }]
    },
    
    {
    "name": "SkillSlot4",
    "type": "GUI",
    "parent": "SkillSlots",

    "active": 1,

    "relPos": {"x": 330, "y": 0 },
    "size": { "w": 100, "h": 100 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#005f73",
            "visible": true,
            "zLayer": 10
        }
        }]
    },
];
