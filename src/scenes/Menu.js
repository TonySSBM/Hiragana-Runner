class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){
        this.load.audio('sfx_correct', './assets/476178__unadamlar__correct-choice.wav');
        this.load.audio('sfx_incorrect', './assets/476177__unadamlar__wrong-choice.wav');
        this.load.audio('sfx_menu', './assets/443907__tissman__menu-click.wav');
        this.load.audio('background_music', './assets/673355__seth_makes_sounds__cool-video-music.wav');
    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'center',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width / 2, game.config.height / 2 - (borderUISize * 3) - borderPadding, 'Hiragana Runner', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize + borderPadding, 'Press ← for Accessible Mode\n  → for Normal Mode', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Press ↑ for Tutorial\n     ↓ for Credits', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 3) + borderPadding, 'Accessible Mode shows\ncorrect answer for\nnon-Japanese players', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.sound.volume = 0.3;
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            this.sound.play('sfx_menu');
            this.scene.start('creditScene');    
        }
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.sound.play('sfx_menu');
            this.scene.start('playScene');
            accessibility = true;
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            this.sound.play('sfx_menu');
            this.scene.start('playScene');    
            accessibility = false;
        }
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.sound.play('sfx_menu');
            this.scene.start('tutorialScene');    
        }
    }
}
