const guiTemplatePack = [
    {
    "name": "Gui",
    "type": "Node",
    "children": ["MainMenu","StatusBars","SkillSlots"],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },
    {
    "name": "MainMenu",
    "type": "Node",
    "children": ["PFP","Map","Quest"],
    
    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
        
    "components": []
    },
    {
    "name": "PFP",
    "type": "GUI",
    "children": [],
    
    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 200, "h": 200 },
        
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
    "name": "Map",
    "type": "GUI",
    "children": [],

    "relPos": {"x": 210, "y": 10 },
    "size": { "w": 50, "h": 50 },
        
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
    "name": "Quest",
    "type": "GUI",
    "children": [],

    "relPos": {"x": 270, "y": 10 },
    "size": { "w": 50, "h": 50 },
        
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
    "name": "StatusBars",
    "type": "Node",
    "children": ["HPBar","MPBar"],

    "relPos": {"x": 10, "y": 426 },
    "size": { "w": 0, "h": 0 },
        
    "components": []
    },
    {
    "name": "HPBar",
    "type": "GUI",
    "children": [],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 460, "h": 25 },
        
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "005f73",
            "visible": true,
            "zLayer": 10
        }
    }]
    },
    {
    "name": "MPBar",
    "type": "GUI",
    "children": [],

    "relPos": {"x": 0, "y": 30 },
    "size": { "w": 460, "h": 25 },
        
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
    "name": "SkillSlots",
    "type": "Node",
    "children": ["SkillSlot1","SkillSlot2","SkillSlot3","SkillSlot4","SkillSlot5","SkillSlot6"],
    
    "relPos": {"x": 0, "y": 481 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },

    {
    "name": "SkillSlot1",
    "type": "GUI",
    "children": [],

    "relPos": {"x": 10, "y": 10},
    "size": {"w": 75, "h": 75},
    "components": [{
        "name": "AleRenderC",
        "data": {
            "color": "#005f73",
            "visible": true,
            "zLayer": 10
        }
    }/*,{
        "name": "AleEventC",
        "data": { "keys": {},
                "mouse": {
                    "down": [{"name": "CreateSlime", "contexts": ["InGame"], "target": "Slime"}],
                
                }
            }
        }*/]
    },
    {
    "name": "SkillSlot2",
    "type": "GUI",
    "children": [],

    "relPos": {"x": 87, "y": 10},
    "size": {"w": 75, "h": 75},
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
    "children": [],

    "relPos": {"x": 164, "y": 10},
    "size": {"w": 75, "h": 75},
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
    "children": [],

    "relPos": {"x": 241, "y": 10},
    "size": {"w": 75, "h": 75},
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
    "name": "SkillSlot5",
    "type": "GUI",
    "children": [],

    "relPos":{"x" :318,"y" :10},
    "size":{"w" :75,"h" :75},
    "components":[{ 
        "name":"AleRenderC", 
        "data":{
            "color":"#005f73", 
            "visible":"true", 
            "zLayer":"10"
        }
    }]
    },
    {
    "name":"SkillSlot6",
    "type":"GUI",
    "children": [],

    "relPos":{"x" :395,"y" :10},
    "size":{"w" :75,"h" :75},
    "components":[{ 
        "name":"AleRenderC", 
        "data":{
            "color":"#005f73", 
            "visible":"true", 
            "zLayer":"10"
        }
    }]
    }
];
