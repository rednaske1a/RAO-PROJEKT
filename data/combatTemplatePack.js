const combatTemplatePack = [{
    "name": "DamageBox",
    "type": "Body",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 200, "h": 100 },
    
    "components": [{
        "name": "AleEventC",
        "data": {
            "events":[
                {"type":"COLLISION","trigger":"COLLISION","context":"BODYENTER","eName":"Deal10Damage","eTrigger":"SELF","eTarget":"Enemy","eContexts":["INGAME"]},
                {"type":"COLLISION","trigger":"COLLISION","context":"BODYENTER","eName":"KYS","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]}
                ]
            }
        },{
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
        "collLayer" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "collMask" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
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
        "delay": 250,
        "events": [
            {"type":"OTHER","trigger":"OTHER","context":"OTHER","eName":"KYS","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]}
        ]
        }
    }
]
    }
];