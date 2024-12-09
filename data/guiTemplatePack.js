const guiTemplatePack = [
    {
    "name": "Gui",
    "type": "Node",
    "children": ["CoinsText","Shop","LVLInfo","HPInfo"],

    "relPos": {"x": 0, "y": 0 },
    "size": { "w": 0, "h": 0 },
    
    "components": []
    },{
        "name": "Shop",
        "type": "GUI",
        "children": ["SDMGText", "BDMGText", "UpgradeSwordButton", "UpgradeBowButton", "HealButton"],
        
        "relPos": {"x": 10, "y": 410 },
        "size": { "w": 0, "h": 0 },
            
        "components": []
    },{
        "name": "LVLInfo",
        "type": "GUI",
        "children": ["EXPText","LVLText","EXPUPText","BESTLVLText"],
        
        "relPos": {"x": 400, "y": 400 },
        "size": { "w": 0, "h": 0 },
            
        "components": []
    },{
        "name": "HPInfo",
        "type": "GUI",
        "children": ["P1HPText","P2HPText","MAXHPText"],
        
        "relPos": {"x": 10, "y": 10 },
        "size": { "w": 0, "h": 0 },
            
        "components": []
    },{
        "name": "CoinsText",
        "type": "GUI",
        "children": [],

        "relPos": {"x": 10, "y": 70 },
        "size": { "w": 200, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
                "color": "NONE",
                "image": "../img/Holder.png",
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
        "size": { "w": 400, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "EXP to LVLup: ",
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
                "color": "NONE",
                "image": "../img/Holder.png",
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
                "color": "NONE",
                "image": "../img/Holder.png",
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
        "name": "P1HPText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 300, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Player1 HP: ",
                "font_size": 50,
                "value": 100
            }
        }]
    },{
        "name": "P2HPText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 350, "y": 0 },
        "size": { "w": 300, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Player2 HP: ",
                "font_size": 50,
                "value": 100
            }
        }]
    },{
        "name": "MAXHPText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 700, "y": 0 },
        "size": { "w": 300, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
        
        "relPos": {"x": 0, "y": -110 },
        "size": { "w": 250, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Punch DMG: ",
                "font_size": 50,
                "value": 10
            }
        }]
    },{
        "name": "BDMGText",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 0, "y": -60 },
        "size": { "w": 250, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
                "visible": true,
                "zLayer": 300
            }
        },{
            "name": "AleTextC",
            "data": {
                "text": "Rock DMG: ",
                "font_size": 50,
                "value": 5
            }
        }]
    },{
        "name": "UpgradeSwordButton",
        "type": "GUI",
        "children": ["USBPrice"],
        
        "relPos": {"x": 0, "y": 0 },
        "size": { "w": 250, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
                "text": "Upgrade Punch",
                "font_size": 50,
                "value": null
            }
        }]
    },{
        "name": "USBPrice",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 250, "y": 0 },
        "size": { "w": 75, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
        "size": { "w": 250, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
                "text": "Upgrade Rock",
                "font_size": 50,
                "value": null
            }
        }]
    },{
        "name": "UBBPrice",
        "type": "GUI",
        "children": [],
        
        "relPos": {"x": 250, "y": 0 },
        "size": { "w": 75, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
        "size": { "w": 250, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
        
        "relPos": {"x": 250, "y": 0 },
        "size": { "w": 75, "h": 50 },
            
        "components": [{
            "name": "AleRenderC",
            "data": {
                "color": "NONE",
                "image": "../img/Holder.png",
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
