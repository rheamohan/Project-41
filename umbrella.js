class Umbrella{
    constructor(x,y,radius){
        var options={
            isStatic = true,
            resititution = 0.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("thunderbolt/1.png","thunderbolt/2.png","thunderbolt/3.png","thunderbolt/4.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
        pop();
    }
}