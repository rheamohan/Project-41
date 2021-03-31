class Drop{
    constructor(x,y){
        var options={
            isStatic : false,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,50,options);
        this.radius = 5;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        //strokeWeight(7);
        fill("blue");
        stroke(0);

        ellipseMode(RADIUS);
        ellipse(x,y,this.radius,this.radius);
        pop();
    }
}