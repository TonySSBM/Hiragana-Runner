/******************************
 * Anthony Garcia-Cortes
 * anfagarc
 * Hiragana Runner
 * Total Time Spent: 16 hours
 * 
 * Github Repository: https://github.com/TonySSBM/Hiragana-Runner
 * Playable Game: https://tonyssbm.github.io/Hiragana-Runner/
 * 
 * Creative Tilt Justification:
 * I think the game does something technically interesting with its use of random sprite images, as instead of just having a random
 * object come into play, the game reuses the same sprite, but instead changes the image displayed to a random kana in an array.
 * For a specific programming technique I implemented, I had the idea to have a variable attached to each kana, and upon having a random
 * kana chosen as the correct answer, the game would change that kana's variable to be set to true, thus allowing me to do calculations for
 * a correct guess based on the position of the cursor and which kana was selected as the correct one.
 * 
 * I tried to make something a bit more unique with the endless runner format, by having it turn into a memorization game based on increasing
 * reading speed for hiragana (and could be easily modified to include katakana). Instead of having obstacles be enemies, I decided to have
 * the obstacles be the incorrect choices, which led to a take on endless runners that I think would stand out from the rest of the class.
 * I mainly chose to go with this decision as I'm currently learning Japanese, and thought it woudl be a helpful skill for those learning.
 * I also added an accessiblity feature for those not already familiar with the Hiragana, which helps serve as a way for the graders to
 * experience the game.
 * 
 * Citation List:
 * BGM by Seth_Makes_Sounds: https://freesound.org/people/Seth_Makes_Sounds/sounds/673355/
 * Menu SFX by Tissman: https://freesound.org/people/Tissman/sounds/443907/
 * Correct SFX by unadamlar: https://freesound.org/people/unadamlar/sounds/476178/
 * Wrong SFX by unadamlar: https://freesound.org/people/unadamlar/sounds/476177/
******************************/
let config = {
    type: Phaser.CANVAS,
    width: 360,
    height: 640,
    scene: [Menu, Play, Credits, Instructions],
}

let game = new Phaser.Game(config);

let keyLEFT, keyRIGHT, keyDOWN, keyUP, keyENTER, keyBACK;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//set game variables
let highScore = 0;
let accessibility = false;
