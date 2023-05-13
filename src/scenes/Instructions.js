class Instructions extends Phaser.Scene{
    constructor(){
        super('tutorialScene');
    }

    preload(){
        /*
        this.load.audio
        this.load.image
        */
    }

    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'How to Play', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Use arrows (← →) to move left and right', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 2) + borderPadding, 'Match the arrow with the correct hiragana before the options reach you!', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 3) + borderPadding, 'Press ← to go back to main menu', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start('menuScene'); 
        }
    }
}
