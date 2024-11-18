class AleRenderer {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.c = this.canvas.getContext('2d');
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
                this.c.fillRect(
                    entity.pos.x + camera.cameraC.sPos.x,
                    entity.pos.y + camera.cameraC.sPos.y,
                    entity.size.w,
                    entity.size.h,
                );
            } else {
                this.c.fillRect(
                    (entity.pos.x + (-camera.pos.x )) * (camera.cameraC.sSize.w / camera.size.w) + camera.cameraC.sPos.x, 
                    (entity.pos.y + (-camera.pos.y )) * (camera.cameraC.sSize.h / camera.size.h) + camera.cameraC.sPos.y , 
                    entity.size.w * (camera.cameraC.sSize.w / camera.size.w), 
                    entity.size.h * (camera.cameraC.sSize.h / camera.size.h)
                 );
            }
            
        });
        this.c.restore();
    }
}