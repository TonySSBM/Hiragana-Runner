class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }

    preload(){
        this.load.image('arrow', './assets/arrow.png');
    }

    create(){
        this.cameras.main.setBackgroundColor('#D3D3D3');
        //arrow
        this.arrow = new Arrow(this, game.config.width / 2 - 15, game.config.height - (borderUISize * 3) - borderPadding, 'arrow').setOrigin(0.5, 0);
        //kana
        this.kana01 = new Kana(this, 85, 0, 'a', 0).setOrigin(0.5, 0);
        this.kana02 = new Kana(this, 185, 0, 'a', 0).setOrigin(0.5,0);
        this.kana03 = new Kana(this, 285, 0, 'a', 0).setOrigin(0.5,0);

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
        this.scoreLeft = this.add.text(borderPadding - 10, borderUISize - borderPadding, this.p1Score, scoreConfig);
        this.scoreRight = this.add.text(game.config.width - borderUISize - borderPadding * 5 + 10, borderUISize - borderPadding, highScore, scoreConfig);

        this.kana01.reset();
        this.kana02.reset();
        this.kana03.reset();
        while(this.kana02.currentKana == this.kana01.currentKana || this.kana03.currentKana == this.kana01.currentKana || this.kana03.currentKana == this.kana02.currentKana){
            this.kana01.reset();
            this.kana02.reset();
            this.kana03.reset();
        }

        this.rv = Phaser.Math.Between(1, 3);
        if(this.rv == 1){
            this.kana01.correctAnswer = true;
        }else if(this.rv == 2){
            this.kana02.correctAnswer = true;
        }else if(this.rv == 3){
            this.kana03.correctAnswer = true;
        }

        scoreConfig.fixedWidth = 50;

        if(this.kana01.correctAnswer){
            this.romaji = this.add.text(195, borderUISize - borderPadding, this.kana01.currentKana, scoreConfig);
            if(accessibility){
                this.romaji.text = this.kana01.currentHiragana;
            }
        }else if(this.kana02.correctAnswer){
            this.romaji = this.add.text(195, borderUISize - borderPadding, this.kana02.currentKana, scoreConfig);
            if(accessibility){
                this.romaji.text = this.kana02.currentHiragana;
            }
        }else{
            this.romaji = this.add.text(195, borderUISize - borderPadding, this.kana03.currentKana, scoreConfig);
            if(accessibility){
                this.romaji.text = this.kana03.currentHiragana;
            }
        }
        
        this.gameOver = false;

        this.sound.volume -= 0.8;

        /*this.backgroundMusic = this.sound.add('background_music');
        this.backgroundMusic.setLoop(true);
        this.backgroundMusic.setVolume(0.4);
        this.backgroundMusic.play();*/

        this.lives = 3;
        scoreConfig.fixedWidth = 75;
        this.livesText = this.add.text(115, borderUISize - borderPadding, '♡♡♡', scoreConfig);

    }

    update(){
        if(!this.gameOver){  
            this.arrow.update();
            this.kana01.update();
            this.kana02.update();
            this.kana03.update();

            
            if(this.kana01.y >= this.arrow.y){
                this.kanaHit();
            }

            if(this.p1Score > highScore){
                highScore = this.p1Score;
            }
        }
    }

    kanaHit() {
        if((this.arrow.pos == 1 && this.kana01.correctAnswer) || (this.arrow.pos == 2 && this.kana02.correctAnswer) || (this.arrow.pos == 3 && this.kana03.correctAnswer)){
            this.p1Score += 1;
            if(this.p1Score > highScore){
                highScore = this.p1Score;
                this.scoreRight.text = highScore; 
            }
            this.scoreLeft.text = this.p1Score;
        }else{
            this.lives -= 1;
            if(this.lives <= 0){
                this.scene.start('menuScene'); 
            }
            this.livesText.text = this.livesText.text.substring(0, this.lives);
        }
        this.kana01.reset();
        this.kana02.reset();
        this.kana03.reset();
        while(this.kana02.currentKana == this.kana01.currentKana || this.kana03.currentKana == this.kana01.currentKana || this.kana03.currentKana == this.kana02.currentKana){
            this.kana01.reset();
            this.kana02.reset();
            this.kana03.reset();
        }
        
        this.rv = Phaser.Math.Between(1, 3);
        if(this.rv == 1){
            this.kana01.correctAnswer = true;
            this.romaji.text = this.kana01.currentKana;
            if(accessibility){
                this.romaji.text = this.kana01.currentHiragana;
            }
        }else if(this.rv == 2){
            this.kana02.correctAnswer = true;
            this.romaji.text = this.kana02.currentKana;
            if(accessibility){
                this.romaji.text = this.kana02.currentHiragana;
            }
        }else if(this.rv == 3){
            this.kana03.correctAnswer = true;
            this.romaji.text = this.kana03.currentKana;
            if(accessibility){
                this.romaji.text = this.kana03.currentHiragana;
            }
        }
    }
}
