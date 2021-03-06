class Iron
{
    constructor (x,y,width,height)
    {
var ironOptions ={
    restitution:1,
    friction:1.0,
    density:3,
}

        this.iron = Bodies.rectangle(x,y,width,height,ironOptions)
        World.add(myWorld, this.iron)

        this.width = width;
        this.height = height;
    }

    display()
    {
        var pos = this.iron.position;
        var angle = this.iron.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("green")
        fill ("pink")
        rectMode (CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}