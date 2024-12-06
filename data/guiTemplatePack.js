const guiTemplatePack = [
    {
    "name": "Gui",
    "type": "Node",
    "children": ["Info","Shop"],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },{
        "name": "Info",
        "type": "GUI",
        "children": ["CoinsText","EXPText","LVLText","HPText","SDMGText","BDMGText","EXPUPText","MAXHPText","BESTLVLText"],
        
        "relPos": {"x": 10, "y": 10 },
        "size": { "w": 0, "h": 0 },
            
        "components": []
    },{
        "name": "Shop",
        "type": "GUI",
        "children": ["UpgradeSwordButton", "UpgradeBowButton", "HealButton"],
        
        "relPos": {"x": 10, "y": 410 },
        "size": { "w": 0, "h": 0 },
            
        "components": []
    },{
        "name": "CoinsText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "tomato",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Coins: ",
                "font_size": 50,
                "value": 100
            }
        }]
    },{
        "name": "EXPText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 0, "y": 50 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "royalblue",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "EXP: ",
                "font_size": 50,
                "value": 0
            }
        }]
    },{
        "name": "EXPUPText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 200, "y": 50 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "royalblue",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "EXPUP: ",
                "font_size": 50,
                "value": 1000
            }
        }]
    },{
        "name": "LVLText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 0, "y": 100 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "black",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "LVL: ",
                "font_size": 50,
                "value": 1
            }
        }]
    },{
        "name": "BESTLVLText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 200, "y": 100 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "black",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "BESTLVL: ",
                "font_size": 50,
                "value": 1
            }
        }]
    },{
        "name": "HPText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 0, "y": 150 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Lime",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "HP: ",
                "font_size": 50,
                "value": 100
            }
        }]
    },{
        "name": "MAXHPText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 200, "y": 150 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Lime",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "MAXHP: ",
                "font_size": 50,
                "value": 100
            }
        }]
    },{
        "name": "SDMGText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 0, "y": 200 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Lime",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "SDMG: ",
                "font_size": 50,
                "value": 10
            }
        }]
    },{
        "name": "BDMGText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 200, "y": 200 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "Lime",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "BDMG: ",
                "font_size": 50,
                "value": 5
            }
        }]
    },{
        "name": "UpgradeSwordButton",
        "type": "GUI",
        "children": ["USBPrice"],
        
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "tomato",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleEventC",
            "data": {
                "events": [
                    {"type":"MOUSE","trigger":"LMB","context":"PRESSED","eName":"eUpgradeSword","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                ]
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Upgrade Sword",
                "font_size": 50,
                "value": null
            }
        }]
    },{
        "name": "USBPrice",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 200, "y": 0 },
        "size": { "w": 50, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "tomato",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "",
                "font_size": 50,
                "value": 10
            }
        }]
    },{
        "name": "UpgradeBowButton",
        "type": "GUI",
        "children": ["UBBPrice"],
        
        "relPos": {"x": 0, "y": 50 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "tomato",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleEventC",
            "data": {
                "events": [
                    {"type":"MOUSE","trigger":"LMB","context":"PRESSED","eName":"eUpgradeBow","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                ]
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Upgrade Bow",
                "font_size": 50,
                "value": null
            }
        }]
    },{
        "name": "UBBPrice",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 200, "y": 0 },
        "size": { "w": 50, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "tomato",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "",
                "font_size": 50,
                "value": 20
            }
        }]
    },{
        "name": "HealButton",
        "type": "GUI",
        "children": ["HBPrice"],
        
        "relPos": {"x": 0, "y": 100 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "tomato",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleEventC",
            "data": {
                "events": [
                    {"type":"MOUSE","trigger":"LMB","context":"PRESSED","eName":"eHeal","eTrigger":"SELF","eTarget":"SELF","eContexts":["INGAME"]},
                ]
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Heal",
                "font_size": 50,
                "value": null
            }
        }]
    },{
        "name": "HBPrice",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 200, "y": 0 },
        "size": { "w": 50, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "tomato",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "",
                "font_size": 50,
                "value": 20
            }
        }]
    }
];
