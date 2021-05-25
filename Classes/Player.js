class Player {
    //#region classes  

    #i = 0;

    constructor(x, y) {

        this.sprite = createSprite(x, y, 20, 135);
        this.hand = new Hand(x, y - 30);

        this.width = 20;
        this.height = 135;

        this.sprite.setCollider("rectangle", 0, 0, 30, 135);

        this.isGrounded = false;
        isToRight = true;
        moving = false;
        this.climb = false;

        this.standRight;
        this.standLeft;
        this.runRight;
        this.runLeft;
        this.climbR;
        this.climbL;

        this.assignAnimations();
    }

    display() {

        this.setAnimations();
    }

    //#endregion

    //#region animations

    assignAnimations() {

        this.standRight = loadAnimation("Images/CharacterStand.png");
        this.standLeft = loadAnimation("Images/CharacterStandL.png");
        this.climbR = loadAnimation("Images/PlayerClimb1.png", "Images/PlayerClimb2.png");
        this.climbL = loadAnimation("Images/PlayerClimbL1.png", "Images/PlayerClimbL2.png");
        
        this.runRight = loadAnimation(

            "Images/CharacterR1.png",
            "Images/CharacterR2.png",
            "Images/CharacterR3.png",
            "Images/CharacterR4.png",
            "Images/CharacterR5.png",
            "Images/CharacterR6.png",

        );

        this.runLeft = loadAnimation(

            "Images/CharacterL1.png",
            "Images/CharacterL2.png",
            "Images/CharacterL3.png",
            "Images/CharacterL4.png",
            "Images/CharacterL5.png",
            "Images/CharacterL6.png",

        );

        this.sprite.addAnimation("runningRight", this.runRight);
        this.sprite.addAnimation("runningLeft", this.runLeft);
        this.sprite.addAnimation("climbR", this.climbR);
        this.sprite.addAnimation("climbL", this.climbL);
        
        this.sprite.addAnimation("standStillRight", this.standRight);
        this.sprite.addAnimation("standStillLeft", this.standLeft);

    }

    setAnimations() {

        if (moving) {

            if (isToRight) {

                this.sprite.changeAnimation("runningRight", this.runRight);


            } else {

                this.sprite.changeAnimation("runningLeft", this.runLeft);

            }

        } else {

            if (isToRight) {

                this.sprite.changeAnimation("standStillRight", this.standRight);

            }
            else {

                this.sprite.changeAnimation("standStillLeft", this.standLeft);

            }
        }

        if(this.climb){

            if(isToRight){

                this.sprite.addAnimation("climbR", climbR);

            }
            else{

                this.sprite.addAnimation("climbL", climbL);

            }

        }

        if(!this.isGrounded && !this.climb){

            this.sprite.addAnimation("standStillLeft", this.standLeft);

        }

    }

    //#endregion

    //#region movements

    playerMovements() {

        console.log(this.climb);

        //this.rotateArm();
        this.checkCollisions();

        //gravity
        
        if(!this.climb){
        this.sprite.y = this.sprite.y + 10;
        }

        this.move();

    }

    rotateArm() {
        this.hand.sprite.x = this.sprite.x;
        this.hand.sprite.y = this.sprite.y - 30;

        //  var mousex = mouseX - this.hand.sprite.x;
        //var mousey = mouseY - this.hand.sprite.y;
        //console.log(mousex);

        var slope = (this.hand.sprite.y - mouseY) / (mouseX - this.hand.sprite.x);
        var angleRadian = Math.atan(slope);
        var angleDegree = -angleRadian * 180 / PI;

        console.log("player.sprite.x : " + this.sprite.x, "mouse : " + mouseX);

        this.hand.display(angleDegree);

    }

    move() {

        if (this.isGrounded) {

            this.sprite.velocityX = 0;
            this.sprite.velocityY = 0;

            if (keyDown("space")) {

                moving = true;

            } else {

                moving = false;
            }

            if (-mouseX > this.sprite.x || keyIsDown(RIGHT_ARROW)) {

                isToRight = true;

                if (moving) {

                    this.sprite.velocityX = 10;

                }
                else {

                    this.sprite.velocityX = 0;
                }

            } else {

                isToRight = false;

                if (moving) {

                    this.sprite.velocityX = -10;

                } else {

                    this.sprite.velocityX = 0;
                }

            }
            
        } else {

            if(moving){
            
                if(isToRight){

                    this.sprite.velocityX = 20;

                }else{

                    this.sprite.velocityX = -20;

                }
                
                
            }

            this.sprite.velocityY = this.sprite.velocityY + 5;

        }

        if (keyDown(UP_ARROW) && this.climb || keyDown(UP_ARROW) && this.isGrounded) {

            this.sprite.velocityY = -50;

        }

        if(this.climb){

            if(keyDown("space")){

                if(isToRight){

                    this.sprite.velocityX = -50;

                }
                else if(!isToRight){

                    this.sprite.velocityX = 50;

                }                
            }

            if(keyDown(UP_ARROW)){

                this.sprite.velocityY = -10;

            }
            else if(keyDown(DOWN_ARROW)){

                this.sprite.velocityY = 10;

            }
            else{

                this.sprite.velocityY = 0;

            }
        }
        console.log(this.isGrounded)
    }

    //#endregion   

    //#region grounded


    checkCollisions() {

        if (this.sprite.isTouching(platFormGroup[this.#i])) {

            console.log(platFormGroup[this.#i].y);            

            if(platFormGroup[this.#i].y > this.sprite.y){

                this.isGrounded = true;

                

            }else if(platFormGroup[this.#i].y-platFormGroup[this.#i].height/2 < this.sprite.y){

                this.climb = true;

                if(platFormGroup[this.#i].x < this.sprite.x){

                    isToRight = true;

                }else{

                    isToRight = false;

                }

            }
            else {

                this.isGrounded = false;
                this.climb = false;
                this.#i++;
    
                if (this.#i > platFormGroup.length - 1) {
    
                    this.#i = 0;
    
                }
    
            }

        }
        

        this.sprite.collide(platFormGroup);
    }

    //#endregion
}