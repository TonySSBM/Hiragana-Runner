class Credits extends Phaser.Scene{
    constructor(){
        super('creditScene');
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

        this.add.text(game.config.width / 2, game.config.height / 2 - (borderUISize * 3) - borderPadding, 'Credits', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width / 2, game.config.height / 2 - (borderUISize * 2) + borderPadding, 'Symbols from Wikipedia\nCommons: Public Domain', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + borderPadding, 'BGM by Seth_Makes_Sounds', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Menu SFX by Tissman', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 2) + borderPadding, 'Correct SFX by unadamlar', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 3) + borderPadding, 'Incorrect SFX by unadamlar', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 5) + borderPadding, 'Press ← to go back\nto main menu', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

        this.sound.volume = 0.3;
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.sound.play('sfx_menu');
            this.scene.start('menuScene'); 
        }
    }
}
