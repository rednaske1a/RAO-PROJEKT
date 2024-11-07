const guiData = [
    {
    "name": "guiData",
    "type": "Node",
    "parent": "Game",

    "active": 1,

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },

    {
    "name": "SkillSlots",
    "type": "Node",
    "parent": "guiData",

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
        }]
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
