class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
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

        this.add.text(game.config.width / 2, game.config.height / 2 - borderUISize - borderPadding, 'ROCKET PATROL: Third Impact', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2, 'Use mouse to move & click to fire', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUISize + borderPadding, 'Press ← for Novice and → for Expert', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + (borderUISize * 2) + borderPadding, 'Press ↓ for 2P Easy and ↑ for 2P Hard', menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyBACK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACK);
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);
        keyY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y);
        keyU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyG = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G);
        keyH = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
        keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keyV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.V);
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        this.sound.volume -= 0.8;
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start('creditScene');    
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            this.scene.start('playScene');    
        }
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.scene.start('tutorialScene');    
        }
    }
}
