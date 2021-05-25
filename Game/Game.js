class Game {

    constructor() {

        this.form = new Form();         
    }

    createGameObjects() {

        player = new Player(1200, 500);             

        p1 = new Platform(1200, 800, 600, 50);
        p2 = new Platform(1900, 800, 50, 800);
        p3 = new Platform(1200, 1200, 50, 800);/*        
        p4 = new Platform(875, 400, 600, 50);
        p5 = new Platform(600, 300, 600, 50);
        p6 = new Platform(600, 300, 600, 50);
        p7 = new Platform(600, 300, 600, 50);        
        p8 = new Platform(875, 400, 600, 50); 
        p9 = new Platform(600, 300, 600, 50);                
        p10 = new Platform(600, 300, 600, 50);
        p11 = new Platform(600, 300, 600, 50);
        p12 = new Platform(600, 300, 600, 50);        
        p13 = new Platform(875, 400, 600, 50); 
        p14 = new Platform(600, 300, 600, 50);
        p15 = new Platform(600, 300, 600, 50);
        p16 = new Platform(600, 300, 600, 50);        
        p17 = new Platform(875, 400, 600, 50); 
        p18 = new Platform(600, 300, 600, 50);
        p19 = new Platform(600, 300, 600, 50);
        p20 = new Platform(600, 300, 600, 50);        
        p21 = new Platform(600, 300, 600, 50);
        p22 = new Platform(600, 300, 600, 50);        
        p23 = new Platform(875, 400, 600, 50); 
        p24 = new Platform(600, 300, 600, 50);
        p25 = new Platform(600, 300, 600, 50);*/
           
        
        
    }

    start() {

        gameState = 0;                  

    }

    gameManager(){

        if(gameState === 1){

            this.play();
        }
    }

    display() {

        background(255, 255, 255);          

        player.display();        
    }
    play() {
                        
        this.display();        
        player.playerMovements();        

    }

}