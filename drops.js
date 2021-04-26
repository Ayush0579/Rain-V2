class Drop{
    constructor(x, y){
        this.body = Bodies.circle(random(0,400), random(0,400), 25);
        World.add(world, this.body);

        this.rain = loadImage("images/raindrop.png");
    }

    display(){
        imageMode(CENTER);
        image(this.rain, this.body.position.x, this.body.position.y, 5, 7.5);
    }

    update(){
        if(this.body.position.y > 710){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)})
        }
    }
}