class Arrow extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 4;
    }

    update(){
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width && !keyRIGHT.isDown){
                this.x -= this.moveSpeed;
            }else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width && !keyLEFT.isDown){
                this.x += this.moveSpeed;
            }
        }
    }
}
