class Kana extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 1;
        this.setScale(0.1);
        this.width = 20;
        this.height = 20;
    }

    update(){
        this.y += this.moveSpeed;
        if(this.y >= this.scene.arrow.y){
            this.scene.kanaHit(this);
        }
        
    }

    reset(){
        this.y = 0;
    }
}
