class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }

    preload(){
        this.load.image('arrow', './assets/arrow.png');
        this.load.image('a', './assets/a.png');
    }

    create(){
        //starfield
        //this.starfield = this.add.tileSprite(0,0,650, 480, 'starfield').setOrigin(0,0);
        this.cameras.main.setBackgroundColor('#D3D3D3');
        //arrow
        this.arrow = new Arrow(this, game.config.width / 2 - 15, game.config.height - (borderUISize * 3) - borderPadding, 'arrow').setOrigin(0.5, 0);
        //kana
        this.kana01 = new Kana(this, 50, 100, 'a', 0).setOrigin(0.5, 0);
        this.kana02 = new Kana(this, 150, 100, 'a', 0).setOrigin(0.5,0);
        this.kana03 = new Kana(this, 250, 100, 'a', 0).setOrigin(0.5,0);

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
        this.scoreLeft = this.add.text(borderPadding, borderUISize - borderPadding, this.p1Score, scoreConfig);
        this.scoreRight = this.add.text(game.config.width - borderUISize - borderPadding * 5, borderUISize - borderPadding, highScore, scoreConfig);
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
    }

    kanaHit(kana) {
        this.p1Score += 1;
        if(this.p1Score > highScore){
            highScore = this.p1Score;
            this.scoreRight.text = highScore; 
        }
        this.scoreLeft.text = this.p1Score;
        this.kana01.reset();
        this.kana02.reset();
        this.kana03.reset();
    }
}
