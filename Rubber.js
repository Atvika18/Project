class Rubber
{
    constructor (x,y,radius)
    {
var rubOptions ={
    restitution:0.3,
    friction:5,
    density:1,
}

        this.rub = Bodies.circle(x,y,radius,rubOptions)
        World.add(myWorld, this.rub)
this.radius = radius
        
    }

    display()
    {
        var pos = this.rub.position;
        var angle = this.rub.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("grey")
        fill("purple")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius, this.radius)
        pop()
    }
}