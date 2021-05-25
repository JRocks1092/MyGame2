class GiantAlien {

    constructor(x, y, width, height) {

       
        this.sprite = createSprite(x, y, width, height);

        this.sprite.setCollider("rectangle", 0, 0, width, height);
        this.width = width;
        this.height = height; 
        this.animation = loadAnimation("Images/Alien1.png");
        this.deadAnim = loadAnimation("Images/Alien1.png" , "Images/Alien2.png","Images/Alien3.png", "Images/Alein4.png");
        this.sprite.addAnimation("i", this.animation);
        this.sprite.addAnimation("dead", this.deadAnim);        
        
        giantAlienGroup.add(this.sprite);
    }

    dead(){

        if(HeavyObjectGroup.isTouching(this.sprite)){

            this.changeAnimation("dead", this.deadAnim);
            const fr = framecount;

            if(fr+10===framecount){

                this.sprite.destroy();

            }

        }else{

            this.changeAnimation("i", this.animation);

        }
       
    }
}