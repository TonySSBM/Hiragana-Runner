/******************************
 * Anthony Garcia-Cortes
 * anfagarc
 * Hiragana Runner
 * Total Time Spent: N/A hours
 * 
 * Github Repository: https://github.com/TonySSBM/Hiragana-Runner
 * Modified Game: https://tonyssbm.github.io/Hiragana-Runner/
 * 
 * Creative Tilt Justification:
 * N/A
 * 
 * Citation List:
 * N/A
******************************/
let config = {
    type: Phaser.CANVAS,
    width: 1280,
    height: 720,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let keyF, keyR, keyLEFT, keyRIGHT, keyDOWN, keyUP;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//set game variables
let highScore = 0;
let onePlayed = false;