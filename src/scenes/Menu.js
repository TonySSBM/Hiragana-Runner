class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene');
    }

    preload(){
        /*this.load.image('a', './assets/a.png');
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
        this.load.image('n', './assets/n.png');*/
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
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyBACK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACK);
        this.sound.volume -= 0.8;
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keyDOWN)){
            this.scene.start('creditScene');    
        }
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            this.scene.start('playScene');   //add accessibility settings for those who don't know hiragana yet
        }
        if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            this.scene.start('playScene');    
        }
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.scene.start('tutorialScene');    
        }
    }
}
