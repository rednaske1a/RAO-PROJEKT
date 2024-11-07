const gameData = {
    0: {
        "id": 0,
        "type": "Node",
        "name": "Game",
        "active": 1,

        "parent": null,

        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 0, "h": 0 },
        
        "components": [{
            "name": "AleEventC",
            "data": { "keys": {
                    "w": [{"name": "Jump", "contexts": ["InGame"], "target": "Player1", "trigger": "w"}],
                    "a": [{"name": "GoLeft", "contexts": ["InGame"], "target": "Player1", "trigger": "a"}],
                    "s": [{"name": "Duck", "contexts": ["InGame"], "target": "Player1", "trigger": "s"}],
                    "d": [{"name": "GoRight", "contexts": ["InGame"], "target": "Player1", "trigger": "d"}]
                    }
                }
            }]
        },
    1: {
        "id": 1,
        "type": "Box2d",
        "name": "Player1",
        "active": 1,

        "parent": "Game",

        "relPos": {"x": 500, "y": -500 },
        "size": { "w": 50, "h": 100 },
        
        "components": [{
            "name": "AleFizikaC",
            "data": {
                "vel" : {"x": 0, "y": 0},
                "acc" : {"x": 0, "y": 1},
                "trenje": 0.8,
                "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collMask" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": true
            }
            },{
            "name": "AlePlayerC",
            "data": {
                "jumpSpeed": 10,
                "moveSpeed": 10,
                "isGrounded": false,
                "isDucking": false
            }
            }]
        },
    3: {
        "id": 3,
        "type": "Image",
        "name": "Player1BodyImg",
        "active": 1,

        "parent": "Player1",

        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 50, "h": 100 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Red",
                "visible": true,
                "zLayer": 10
            }
            }]
        },
    4: {
        "id": 4,
        "type": "Box2d",
        "name": "Camera1",
        "active": 1,

        "parent": "Player1",

        "relPos": {"x": -512 + 50, "y": -288 -100 },
        "size": { "w": 1024, "h": 576 },
        
        "components": [{
            "name": "AleCameraC",
            "data": {
                "sPos": {"x": 0, "y": 0},
                "sSize": {"w": 1024, "h": 576},
            }
            }]
        },
    5: {
        "id": 5,
        "type": "Box2d",
        "name": "Ground",
        "active": 1,

        "parent": "Game",

        "relPos": {"x": 0, "y": 1000 },
        "size": { "w": 10000, "h": 100 },
        
        "components": [{
            "name": "AleFizikaC",
            "data": {
                "vel" : {"x": 0, "y": 0},
                "acc" : {"x": 0, "y": 0},
                "trenje": 0.8,
                "collLayer" : [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collMask" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": true
            }
            }]
        },
    7: {
        "id": 7,
        "type": "Image",
        "name": "Ground1Img",
        "active": 1,

        "parent": "Ground",

        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 10000, "h": 100 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Green",
                "visible": true,
                "zLayer": 10
            }
            }]
        },
    8: {
        "id": 8,
        "type": "GUI",
        "name": "SkillSlots",
        "active": 1,

        "parent": "Game",

        "relPos": {"x": 10, "y": 466 },
        "size": { "w": 0, "h": 0 },
        
        "components": []
        },
    9: {
        "id": 9,
        "type": "GUI",
        "name": "SkillSlot1",
        "active": 1,

        "parent": "SkillSlots",

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
    10: {
        "id": 10,
        "type": "GUI",
        "name": "SkillSlot2",
        "active": 1,

        "parent": "SkillSlots",

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
    11: {
        "id": 11,
        "type": "GUI",
        "name": "SkillSlot3",
        "active": 1,

        "parent": "SkillSlots",

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
    12: {
        "id": 12,
        "type": "GUI",
        "name": "SkillSlot4",
        "active": 1,

        "parent": "SkillSlots",

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
};