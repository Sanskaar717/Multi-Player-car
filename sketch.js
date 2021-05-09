var gameState = 0, playerCount, database;
var form, player, game, allPlayers;

function setup(){
    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }
}