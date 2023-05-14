class Kana extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = 5;
    }

    update(){
        if(this.flipX){
            this.x += this.moveSpeed;
            if(this.x >= game.config.width + this.width){
                this.x = 0;
            }
        }else{
            this.x -= this.moveSpeed;
            if(this.x <= 0 - this.width){
                this.x = game.config.width;
            }  
        }
        
    }

    reset(){
        this.x = game.config.width;
    }
}
