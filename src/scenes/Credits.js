class Credits extends Phaser.Scene{
    constructor(){
        super('creditScene');
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
            align: 'center',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 0
        }

        this.add.text(game.config.width / 2, game.config.height / 2 - (borderUISize * 3) - borderPadding, 'Credits', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize + borderPadding, 'Update Later', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Update Later', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 2) + borderPadding, 'Press ← to go back\nto main menu', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start('menuScene'); 
        }
    }
}
