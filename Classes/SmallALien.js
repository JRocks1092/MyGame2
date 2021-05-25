class SmallAlien {

    constructor(x, y, width, height) {

       
        this.sprite = createSprite(x, y, width, height);

        this.sprite.setCollider("rectangle", 0, 0, width, height);
        this.width = width;
        this.height = height; 
        this.sprite.shapeColor = "black";
        this.animation = loadAnimation("Images/Alien21.png");
        this.deadAnim = loadAnimation("Images/Alien21.png" , "Images/Alien22.png","Images/Alien23.png");
        this.sprite.addAnimation("i", this.animation);
        this.sprite.addAnimation("dead", this.deadAnim);
        
        smallAlienGroup.add(this.sprite);
    }

    dead(){

        if(bulletGroup.isTouching(this.sprite)){

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