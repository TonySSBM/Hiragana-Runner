class Play extends Phaser.Scene{
    constructor(){
        super('playScene');
    }

    preload(){
        this.load.image('arrow', './assets/arrow.png');
        this.load.image('a', './assets/a.png');
        this.load.image('i', './assets/i.png');
        this.load.image('u', './assets/u.png');
        this.load.image('e', './assets/e.png');
        this.load.image('o', './assets/o.png');
        this.load.image('ka', './assets/ka.png');
        this.load.image('ki', './assets/ki.png');
        this.load.image('ku', './assets/ku.png');
        this.load.image('ke', './assets/ke.png');
        this.load.image('ko', './assets/ko.png');
        this.load.image('sa', './assets/sa.png');
        this.load.image('shi', './assets/shi.png');
        this.load.image('su', './assets/su.png');
        this.load.image('se', './assets/se.png');
        this.load.image('so', './assets/so.png');
        this.load.image('ta', './assets/ta.png');
        this.load.image('chi', './assets/chi.png');
        this.load.image('tsu', './assets/tsu.png');
        this.load.image('te', './assets/te.png');
        this.load.image('to', './assets/to.png');
        this.load.image('na', './assets/na.png');
        this.load.image('ni', './assets/ni.png');
        this.load.image('nu', './assets/nu.png');
        this.load.image('ne', './assets/ne.png');
        this.load.image('no', './assets/no.png');
        this.load.image('ha', './assets/ha.png');
        this.load.image('hi', './assets/hi.png');
        this.load.image('fu', './assets/fu.png');
        this.load.image('he', './assets/he.png');
        this.load.image('ho', './assets/ho.png');
        this.load.image('ma', './assets/ma.png');
        this.load.image('mi', './assets/mi.png');
        this.load.image('mu', './assets/mu.png');
        this.load.image('me', './assets/me.png');
        this.load.image('mo', './assets/mo.png');
        this.load.image('ra', './assets/ra.png');
        this.load.image('ri', './assets/ri.png');
        this.load.image('ru', './assets/ru.png');
        this.load.image('re', './assets/re.png');
        this.load.image('ro', './assets/ro.png');
        this.load.image('ya', './assets/ya.png');
        this.load.image('yu', './assets/yu.png');
        this.load.image('yo', './assets/yo.png');
        this.load.image('wa', './assets/wa.png');
        this.load.image('wo', './assets/wo.png');
        this.load.image('n', './assets/n.png');
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
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

        this.p1Score = 0;
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
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

        this.backgroundMusic = this.sound.add('background_music');
        this.backgroundMusic.setLoop(true);
        this.backgroundMusic.setVolume(0.8);
        this.backgroundMusic.play();

        this.lives = 3;
        scoreConfig.fixedWidth = 75;
        this.livesText = this.add.text(115, borderUISize - borderPadding, '♡♡♡', scoreConfig);
        scoreConfig.fixedWidth = 100;

        this.sound.volume = 0.3;

    }

    update(){
        if(!this.gameOver){  
            this.arrow.update();
            this.kana01.update();
            this.kana02.update();
            this.kana03.update();

            
            if(this.kana01.y >= this.arrow.y - 45){
                this.kanaHit();
            }

            if(this.p1Score > highScore){
                highScore = this.p1Score;
            }

            if(this.lives <= 0){
                this.gameOver = true;
            }
        }else{
            if(Phaser.Input.Keyboard.JustDown(keyUP)){
                this.sound.play('sfx_menu');
                this.backgroundMusic.stop();
                this.scene.restart();
            }else if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
                this.sound.play('sfx_menu');
                this.backgroundMusic.stop();
                this.scene.start('menuScene');
            }
        }
    }

    kanaHit() {
        if(!this.gameOver){
            if((this.arrow.pos == 1 && this.kana01.correctAnswer) || (this.arrow.pos == 2 && this.kana02.correctAnswer) || (this.arrow.pos == 3 && this.kana03.correctAnswer)){
                this.sound.play('sfx_correct');
                this.p1Score += 1;
                if(this.p1Score > highScore){
                    highScore = this.p1Score;
                    this.scoreRight.text = highScore; 
                }
                this.scoreLeft.text = this.p1Score;
                if(this.kana01.moveSpeed < 1.4){
                    this.kana01.moveSpeed += 0.05;
                    this.kana02.moveSpeed += 0.05;
                    this.kana03.moveSpeed += 0.05;
                }
            }else{
                this.sound.play('sfx_incorrect');
                this.lives -= 1;
                if(this.lives <= 0){
                    let scoreConfig = {
                        fontFamily: 'Courier',
                        fontSize: '28px',
                        backgroundColor: '#F3B141',
                        color: '#843605',
                        align: 'center',
                        padding: {
                          top: 5,
                          bottom: 5,
                        },
                    }

                    this.gameOver = true;
                    this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
                    this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press ↑ to Restart\nor ↓ for Menu', scoreConfig).setOrigin(0.5);
                }
                this.livesText.text = this.livesText.text.substring(0, this.lives);
                this.kana01.moveSpeed = 0.7;
                this.kana02.moveSpeed = 0.7;
                this.kana03.moveSpeed = 0.7;
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
}
