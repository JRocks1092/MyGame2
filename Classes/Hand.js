class Hand {

    constructor(x, y) {

        this.sprite = createSprite(x, y, 10, 32.5);
        this.handImageRight = loadImage("Images/CharacterHandStand.png");
        this.handImageLeft = loadImage("Images/CharacterHandStandL.png");
        this.height = 32.5;
        this.width = 10;  
        this.sprite.visible = false;
        this.sprite.setCollider("rectangle", -32.5, 0, 10, 65);        
    }
    display(angle){
        var pos = this.sprite;        

        if (isToRight) {

            push();

            imageMode(CENTER);
            translate(pos.x, pos.y);
            angleMode(DEGREES);
            rotate(angle - 90);
            image(this.handImageRight, 0, 32.5, 127, 135);

            pop();

        } 
        else {

            push();

            imageMode(CENTER);
            translate(pos.x, pos.y);
            angleMode(DEGREES);
            rotate(angle + 90);
            image(this.handImageLeft, 0, 32.5, 127, 135);

            pop();
        }

    }
}