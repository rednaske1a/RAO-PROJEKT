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
                {"type":"COLLISION","trigger":"COLLISION","context":"BODYENTER","eName":"DealDamage","eTrigger":"NONE","eTarget":"NONE","eContexts":["INGAME"]},
                {"type":"COLLISION","trigger":"COLLISION","context":"BODYENTER","eName":"KillTrigger","eTrigger":"NONE","eTarget":"NONE","eContexts":["INGAME"]},
                {"type":"TIME","trigger":"TIME","context":"TIMEOUT","eName":"KillTrigger","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"], "eData": {"start": null, "timeout": 1000, "triggered": false}}
                ]
            }
        },{
        "name": "AleRenderC",
        "data": {
            "color": "NONE",
            "image": "NONE",
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
    "name": "AleCombatC",
    "data": {
        "dmg": 30
        }
    }]
    },
    {
        "name": "Rock",
        "type": "Body",
        "children": [{"name": "DamageBox", "data": {"size": {"w": 25, "h": 25}}}],
    
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 25, "h": 25 },
        
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Rock.png",
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
                "collMask" : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                "collide": false
            }
            }]
    }

];