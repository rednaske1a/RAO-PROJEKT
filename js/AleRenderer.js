class AleRenderer {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.c = this.canvas.getContext('2d');
    }

    /*
    cameraControl(spriteList){
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = -Infinity;
        let minSprite = 0;
        let maxSprite = 0;
        let minSpriteY = 0;
        
        spriteList.forEach(sprite =>{
            if(sprite.name == "Player1" || sprite.name == "Player2" || sprite.name == "Player3" || sprite.name == "Player4"){
                this.lockedOn[sprite.name] = sprite;
                if(sprite.pos.x < minX){minX = sprite.pos.x; minSprite = sprite.name};
                if(sprite.pos.x > maxX){maxX = sprite.pos.x; maxSprite = sprite.name};
                if(sprite.pos.y > minY){minY = sprite.pos.y; minSpriteY = sprite.name};
            }
        });
       // console.log("MINSPRITEY: " + minSpriteY);
        this.cameraLeft.lockedOn = [minSprite];
        this.cameraRight.lockedOn = [maxSprite];

        let combinedPos = {x: 0, y: 0, n: 0};
        this.camera.lockedOn.forEach(locked =>{
            //console.log(locked);
            if(this.lockedOn[locked] != undefined){
                console.log(this.lockedOn[locked].vel);
                combinedPos.x += this.lockedOn[locked].pos.x;
                combinedPos.y += this.lockedOn[locked].pos.y;
                combinedPos.n++;
            }
        });

        let combinedPosLeft = {x: 0, y: 0, n: 0};
        this.cameraLeft.lockedOn.forEach(locked =>{
            if(this.lockedOn[locked] != undefined){
                combinedPosLeft.x += this.lockedOn[locked].pos.x;
                combinedPosLeft.y += this.lockedOn[locked].pos.y;
                combinedPosLeft.n++;
            }
        });

        let combinedPosRight = {x: 0, y: 0, n: 0};
        this.cameraRight.lockedOn.forEach(locked =>{
            if(this.lockedOn[locked] != undefined){
                combinedPosRight.x += this.lockedOn[locked].pos.x;
                combinedPosRight.y += this.lockedOn[locked].pos.y;
                combinedPosRight.n++;
            }
        });


        let cameraDistance = this.cameraRight.pos.x - this.cameraLeft.pos.x;

        if(cameraDistance >= this.canvas.width/2 ) {
            this.cameraMode = "SplitScreen";

        } else if (cameraDistance <= -this.canvas.width/2 ) {
            this.cameraMode = "SplitScreen";
        } else {
            this.cameraMode = "SingleScreen";
        }

        if(this.cameraMode == "SplitScreen"){
            
            if(Math.abs(cameraDistance) <= this.canvas.width/2 + 400){
                //console.log("TEST " + combinedPosLeft.y + " " + combinedPos.y);
                let a = ((Math.abs(cameraDistance) - this.canvas.width/2) / 400);
                //console.log("A " + a);
                combinedPosLeft.y = (combinedPos.y / combinedPos.n) + (combinedPosLeft.y - (combinedPos.y / combinedPos.n)) * a;
                //this.cameraLeft.pos.y = combinedPosLeft.y;
                combinedPosRight.y = (combinedPos.y / combinedPos.n) + (combinedPosRight.y - (combinedPos.y / combinedPos.n)) * a;
                //this.cameraRight.pos.y = combinedPosRight.y;
                
                //combinedPosRight.y += (combinedPosRight.y - (combinedPos.y / combinedPos.n)) * a;
            }
        }

        let distance = this.cameraRight.pos.x - this.cameraLeft.pos.x;
        //console.log(distance);


        this.camera.pos.x -= (this.camera.pos.x - combinedPos.x / combinedPos.n) / 10;
        
        
        this.cameraLeft.pos.x -= (this.cameraLeft.pos.x - combinedPosLeft.x ) / 10;
        this.cameraRight.pos.x -= (this.cameraRight.pos.x - combinedPosRight.x ) / 10;
        
        ///console.log(this.camera.pos.x + " " + this.camera.pos.y);
        if(this.cameraMode == "SingleScreen"){
            this.cameraLeft.pos.y = this.camera.pos.y;
            this.cameraRight.pos.y = this.camera.pos.y;
            this.camera.pos.y -= (this.camera.pos.y - combinedPos.y / combinedPos.n) / 10;
        } else {
            this.cameraLeft.pos.y -= (this.cameraLeft.pos.y - combinedPosLeft.y ) / 10;
            this.cameraRight.pos.y -= (this.cameraRight.pos.y - combinedPosRight.y ) / 10;
            this.camera.pos.y -= (this.camera.pos.y - this.lockedOn[minSpriteY].pos.y) / 10;
        }
    }
*/

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

        /*
        if(camera.name == this.cameraRight.name){
            let cameraDistance = this.cameraRight.pos.x - this.cameraLeft.pos.x;
            let a = ((Math.abs(cameraDistance) - this.canvas.width/2) / 400);

            this.c.fillStyle = 'White';
            this.c.fillRect(camera.sPos.x - 5 * Math.min(a,1) , camera.sPos.y, 10 * Math.min(a,1), camera.sSize.h);
        }
            */
        
    }
}