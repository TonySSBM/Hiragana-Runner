class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }

    preload(){
        this.load.image('arrow', './assets/arrow.png');
    }

    create(){
        //starfield
        //this.starfield = this.add.tileSprite(0,0,650, 480, 'starfield').setOrigin(0,0);
        this.cameras.main.setBackgroundColor('#FFFFFF');
        //arrow
        this.arrow = new Arrow(this, game.config.width / 2, game.config.height - borderUISize - borderPadding, 'arrow').setOrigin(0.5, 0);
        //kana
        this.kana01 = new Kana(this, game.config.width + borderUISize * 6, borderUISize * 4, 'a', 0, 30).setOrigin(0, 0);
        this.kana02 = new Kana(this, game.config.width + borderUISize * 3, borderUISize * 5 + borderPadding * 2, 'a', 0, 20).setOrigin(0,0);
        this.kana03 = new Kana(this, game.config.width, borderUISize * 6 + borderPadding * 4, 'a', 0, 10).setOrigin(0,0);

        //input
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.p1Score = 0;
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'middle',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 100
        }
        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding * 2, this.p1Score, scoreConfig);
        this.scoreRight = this.add.text(game.config.width - borderUISize - borderPadding * 10, borderUISize + borderPadding * 2, highScore, scoreConfig);
        this.gameOver = false;

        scoreConfig.fixedWidth = 0;
        this.sound.volume -= 0.8;
        
        /*this.backgroundMusic = this.sound.add('background_music');
        this.backgroundMusic.setLoop(true);
        this.backgroundMusic.setVolume(0.4);
        this.backgroundMusic.play();*/

    }

    update(){
        if(!this.gameOver){  
            this.arrow.update();
            this.kana01.update();
            this.kana02.update();
            this.kana03.update();
            if(this.p1Score > highScore){
                highScore = this.p1Score;
            }
        }

        //collision checker
        if(this.checkCollision(this.arrow, this.kana03)){
            this.kanaHit(this.kana03);
        }
        if(this.checkCollision(this.arrow, this.kana02)){
            this.kanaHit(this.kana02);
        }
        if(this.checkCollision(this.arrow, this.kana01)){
            this.kanaHit(this.kana01);
        }
    }

    checkCollision(arrow, kana){
        if(arrow.x < kana.x + kana.width && arrow.x + arrow.width > kana.x && arrow.y < kana.y + kana.height && arrow.height + arrow.y > kana.y){
            return true;
        }else{
            return false;
        }
    }

    kanaHit(kana) {
        this.p1Score += 1;
        if(this.p1Score > highScore){
            highScore = this.p1Score;
            this.scoreRight.text = highScore; 
        }
        this.scoreLeft.text = this.p1Score;
    }
}
