class Kana extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.moveSpeed = 0.7;
        this.setScale(0.1);
        this.width = 20;
        this.height = 20;
        this.kanaArray = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to',
                     'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ra', 'ri', 'ru', 're', 'ro',
                     'ya', 'yu', 'yo', 'wa', 'wo', 'n'];
        
        this.hiraganaArray = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と',
                     'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'ら', 'り', 'る', 'れ', 'ろ',
                     'や', 'ゆ', 'よ', 'わ', 'を', 'ん'];
        this.currentKana = '';
        this.currentHiragana = '';
        this.randNum = 0;
        this.correctAnswer = false;
    }

    update(){
        this.y += this.moveSpeed;
    }

    reset(){
        this.y = 0;

        this.randNum = Phaser.Math.Between(0, 45);
        this.currentKana = this.kanaArray[this.randNum];
        this.currentHiragana = this.hiraganaArray[this.randNum];
        this.setTexture(this.currentKana);
        this.setScale(0.1);
        this.width = 20;
        this.height = 20;
        this.correctAnswer = false;
    }
}
