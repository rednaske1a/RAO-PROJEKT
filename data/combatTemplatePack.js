const combatTemplatePack = [{
    "name": "DamageBox",
    "type": "Body",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 200, "h": 100 },
    
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "purple",
            "visible": true,
            "zLayer": 10
        }
    },{
    "name": "AleFizikaC",
    "data": {
        "vel" : {"x": 0, "y": 0},
        "acc" : {"x": 0, "y": 0},
        "trenje": 1,
        "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        "collMask" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "collide": false
    }
    },{
    "name": "AleHitC",
    "data": {
        "damage": 30
        }
    },{
    "name": "AleTimedEventC",
    "data": {
        "delay": 3000,
        "events": [
            {"name": "KYS", "contexts": ["InGame"], "target": "SELF"}
        ]
        }
    }
]
    }
];
