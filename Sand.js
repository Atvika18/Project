class Sand
{
    constructor (x,y,radius)
    {
var sandOptions ={
    restitution:0.3,
    friction:5,
    density:1,
}

        this.sand = Bodies.circle(x,y,radius,sandOptions)
        World.add(myWorld, this.sand)
this.radius = radius;
        
    }

    display()
    {
        var pos = this.sand.position;
        var angle = this.sand.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("brown")
        fill("green")
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}