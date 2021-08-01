var gameState = 0, playerCount, database;
var form, player, game, allPlayers;
var car1, car2, car3, car4, cars;
var c1, c2, c3, c4, t1, tJ, g;

function preload(){
    c1 = loadImage("car1.png");
    c2 = loadImage("car2.png");
    c3 = loadImage("car3.png");
    c4 = loadImage("car4.png");
    t1 = loadImage("track.png");
    tJ = loadImage("track.jpg");
    g = loadImage("ground.png");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
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

    if(gameState===2){
        game.end();
    }
}