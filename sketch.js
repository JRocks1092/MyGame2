var gameState;
var player;
var isToRight, moving;
var canvas;
var p1, p2, p3, p4,p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25;
var platFormGroup;
var giantAlienGroup, smallAlienGroup, bulletGroup, HeavyObjectGroup;
var Occupy;

function preload() {



}

function setup() {

    canvas = createCanvas(1200, 700);   
    platFormGroup = new Group();
    giantAlienGroup = new Group();
    smallAlienGroup = new Group();
    bulletGroup = new Group();
    HeavyObjectGroup = new Group();

    game = new Game();
    game.createGameObjects();    

    game.start();        
}

function draw() {  
    
    background("white");   

    camera.position.x = player.sprite.x;
    camera.position.y = player.sprite.y;

    game.gameManager();

    game.form.display();

    drawSprites();
}