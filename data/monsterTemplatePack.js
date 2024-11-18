const monsterTemplatePack = [
    {
    "name": "Slime",
    "type": "Body",
    "children": ["SlimeImage","SlimeHPBar"],

    "relPos": {"x": 1000, "y": -1000 },
    "size": { "w": 200, "h": 200 },
    
    "components": [{
        "name": "AleFizikaC",
        "data": {
            "vel" : {"x": 0, "y": 0},
            "acc" : {"x": 0, "y": 1},
            "trenje": 0.8,
            "collLayer" : [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "collMask" : [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "collide": true
        }
        },{
        "name": "AlePlayerC",
        "data": {
            "jumpSpeed": 30,
            "moveSpeed": 10,
            "isGrounded": false,
            "isDucking": false
        }
        },{
        "name": "AleEnemyAIC",
        "data": {
            "actions": [
                {"name": "Jump", "contexts": ["InGame"], "target": "Slime"},
                {"name": "GoLeft", "contexts": ["InGame"], "target": "Slime"},
                {"name": "GoLeft", "contexts": ["InGame"], "target": "Slime"},
                {"name": "GoLeft", "contexts": ["InGame"], "target": "Slime"},
                //{"name": "Duck", "contexts": ["InGame"], "target": "Slime"},
                {"name": "GoRight", "contexts": ["InGame"], "target": "Slime"},
                {"name": "GoRight", "contexts": ["InGame"], "target": "Slime"},
                {"name": "GoRight", "contexts": ["InGame"], "target": "Slime"},
                {"name": "Wait", "contexts": ["InGame"], "target": "Slime"},
                {"name": "Wait", "contexts": ["InGame"], "target": "Slime"},
                {"name": "Wait", "contexts": ["InGame"], "target": "Slime"}

            ]
        }
        }]
    },

    {
    "name": "SlimeImage",
    "type": "Image",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 200, "h": 200 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#26C6DA",
            "visible": true,
            "zLayer": 5
        }
        }]
    },

    {
        "name": "SlimeHPBar",
        "type": "Image",
        "children": [],
    
        "relPos": {"x": 0, "y": 50 },
        "size": { "w": 200, "h": 50 },
        
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
                "follow": "Slime",
                "followStrength": 5,
                "followOffset": {"x": 0, "y": -75 }
                }
            }]
        }
];

