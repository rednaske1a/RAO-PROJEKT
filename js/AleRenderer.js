class AleRenderer {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.c = this.canvas.getContext('2d');
        this.c.font = "20px serif";
    }

    render(entityList) {

        entityList.forEach(cEntity =>{
            if(cEntity.cameraC != null //&& cEntity.active == 1

            ){
                this.draw(cEntity, entityList);
            }
        })
    }

    draw(camera, entityList){
        //console.log(camera)
        this.c.save();
        this.c.beginPath();
        this.c.rect(camera.cameraC.sPos.x, camera.cameraC.sPos.y, camera.cameraC.sPos.x + camera.cameraC.sSize.w, camera.cameraC.sPos.y + camera.cameraC.sSize.h);
        
        this.c.clip();

        this.c.fillStyle = 'blue';
        this.c.fillRect(camera.cameraC.sPos.x, camera.cameraC.sPos.y, camera.cameraC.sPos.x + camera.cameraC.sSize.w, camera.cameraC.sPos.y + camera.cameraC.sSize.h);

        let renderList = [];
        entityList.forEach(entity =>{
            if(entity.renderC != null){
                renderList.push(entity);
            }
        })

        renderList.sort(function(a, b){return a.renderC.z_layer - b.renderC.z_layer});

        renderList.forEach(entity => {
            this.c.fillStyle = entity.renderC.color;

            if(entity.type == "GUI") {
                let x = entity.pos.x + camera.cameraC.sPos.x;
                let y = entity.pos.y + camera.cameraC.sPos.y;
                this.c.fillRect(
                    x,
                    y,
                    entity.size.w,
                    entity.size.h,
                );

                this.c.fillStyle = 'white';
                this.c.fillText(entity.name, entity.pos.x + camera.cameraC.sPos.x, entity.pos.y + camera.cameraC.sPos.y, entity.size.w)
            
            } else {

                let x = (entity.pos.x + (-camera.pos.x )) * (camera.cameraC.sSize.w / camera.size.w) + camera.cameraC.sPos.x;
                let y = (entity.pos.y + (-camera.pos.y )) * (camera.cameraC.sSize.h / camera.size.h) + camera.cameraC.sPos.y;
                this.c.fillRect(
                    x, 
                    y, 
                    entity.size.w * (camera.cameraC.sSize.w / camera.size.w), 
                    entity.size.h * (camera.cameraC.sSize.h / camera.size.h)
                 );

                 this.c.fillStyle = 'white';
                 this.c.fillText(entity.name, x, y, entity.size.w)
            }

            if(entity.textC != null){
                this.c.fillStyle = 'white';
                this.c.font = entity.textC.font_size + "px serif";

                let newText = entity.textC.text  + entity.textC.value
                if(entity.textC.value == null){
                    newText = entity.textC.text
                }
                this.c.fillText(newText, entity.pos.x + camera.cameraC.sPos.x, entity.pos.y + camera.cameraC.sPos.y + entity.size.h, entity.size.w)
                this.c.font = "20px serif";
            }
            
        });
        this.c.restore();
    }
}