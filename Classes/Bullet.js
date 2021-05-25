class Bullet {

    constructor(x, y, width, height) {

       
        this.sprite = createSprite(x, y, width, height);

        this.sprite.setCollider("rectangle", 0, 0, width, height);
        this.width = width;
        this.height = height; 
        this.sprite.shapeColor = "black";
        
        BulletGroup.add(this.sprite);
    }
}