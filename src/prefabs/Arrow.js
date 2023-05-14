class Arrow extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.isFiring = false;
        this.setScale(0.05);
        this.width = 1;
        this.height = 1;
        this.pos = 2;
        this.LKD = false;
        this.RKD = false;
    }

    update(){
        if(!keyLEFT.isDown && this.LKD){
            this.LKD = false;
        }
        if(!keyRIGHT.isDown && this.RKD){
            this.RKD = false;
        }
        
        if(keyLEFT.isDown && this.pos != 1 && !this.LKD){
            this.x -= 100;
            this.pos -= 1;
            this.LKD = true;
        }else if(keyRIGHT.isDown && this.pos != 3 && !this.RKD){
            this.x += 100;
            this.pos += 1;
            this.RKD = true;
        }
    }
}
