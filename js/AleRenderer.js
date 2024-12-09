class AleRenderer {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.c = this.canvas.getContext('2d');
        this.c.font = "20px serif";
    }

    render(entityList, sManager) {
        entityList.forEach(cEntity => {
            if (cEntity.cameraC != null) {
                this.draw(cEntity, entityList, sManager);
            }
        });
    }

    draw(camera, entityList, sManager) {
        this.c.save();
        this.c.beginPath();
        this.c.rect(camera.cameraC.sPos.x, camera.cameraC.sPos.y, camera.cameraC.sSize.w, camera.cameraC.sSize.h);
        
        this.c.clip();

        this.c.fillStyle = 'blue';
        this.c.fillRect(camera.cameraC.sPos.x, camera.cameraC.sPos.y, camera.cameraC.sSize.w, camera.cameraC.sSize.h);

        let renderList = [];
        entityList.forEach(entity => {
            if (entity.renderC != null && entity.renderC.visible == true) {
                renderList.push(entity);
            }
        });

        renderList.sort(function(a, b) { return a.renderC.zLayer - b.renderC.zLayer; });

        renderList.forEach(entity => {
            this.c.fillStyle = entity.renderC.color;

            let x, y;
            if (entity.type === "GUI" && entity.renderC.color != "NONE") {
                x = entity.pos.x + camera.cameraC.sPos.x;
                y = entity.pos.y + camera.cameraC.sPos.y;

                this.c.fillRect(x, y, entity.size.w, entity.size.h);

            } else if (entity.renderC.color != "NONE") {
                x = (entity.pos.x + (-camera.pos.x)) * (camera.cameraC.sSize.w / camera.size.w) + camera.cameraC.sPos.x;
                y = (entity.pos.y + (-camera.pos.y)) * (camera.cameraC.sSize.h / camera.size.h) + camera.cameraC.sPos.y;

                this.c.fillRect(x, y, entity.size.w * (camera.cameraC.sSize.w / camera.size.w), entity.size.h * (camera.cameraC.sSize.h / camera.size.h));
                
            }
            
            if(entity.renderC.image != "NONE"){
                let image = sManager.images.get(entity.templateName);
                //console.log(image);
                

                if(image != null){
                    if(entity.type === "GUI"){
                        x = entity.pos.x + camera.cameraC.sPos.x;
                        y = entity.pos.y + camera.cameraC.sPos.y;
                        this.c.drawImage(image, x, y, entity.size.w, entity.size.h);
                
                    } else {
                        x = (entity.pos.x + (-camera.pos.x)) * (camera.cameraC.sSize.w / camera.size.w) + camera.cameraC.sPos.x;
                        y = (entity.pos.y + (-camera.pos.y)) * (camera.cameraC.sSize.h / camera.size.h) + camera.cameraC.sPos.y;
                        this.c.drawImage(image, x, y, entity.size.w * (camera.cameraC.sSize.w / camera.size.w), entity.size.h * (camera.cameraC.sSize.h / camera.size.h));
            
                    }
                    
                }
                }

            if (entity.textC != null) {
                x = entity.pos.x + camera.cameraC.sPos.x;
                y = entity.pos.y + camera.cameraC.sPos.y;
                this.c.fillStyle = 'white';
                this.c.font = `${entity.textC.font_size - 20}px serif`;

                let newText = "";
                if(entity.textC.value != null){
                    newText = entity.textC.text + entity.textC.value;
                } else {
                    newText = entity.textC.text;
                }
                
                this.c.fillText(newText, x + 20, y + 35, entity.size.w);
                this.c.font = "20px serif";
            }

            if (entity.animationC != null) {
                let frame = entity.animationC.getCurrentFrame();
                    if (frame != null) {
                        x = (entity.pos.x + (-camera.pos.x)) * (camera.cameraC.sSize.w / camera.size.w) + camera.cameraC.sPos.x;
                        y = (entity.pos.y + (-camera.pos.y)) * (camera.cameraC.sSize.h / camera.size.h) + camera.cameraC.sPos.y;
                        let w = entity.size.w * (camera.cameraC.sSize.w / camera.size.w);
                        let h = entity.size.h * (camera.cameraC.sSize.h / camera.size.h);
                        this.c.drawImage(frame, x, y, w, h);
                    }
            }
        });

        this.c.restore();
    }
}
