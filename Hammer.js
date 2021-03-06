class Hammer
{
    constructor (x,y)
    {
var hamOptions ={
    restitution:0.5,
    friction:1.0,
    density:2,
}

        this.ham = Bodies.rectangle(x,y,150,20,hamOptions)
        World.add(myWorld, this.ham)

        this.width = 150;
        this.height = 20;
    }

    display()
    {
        var pos = this.ham.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.ham.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("red")
        fill ("blue")
        rectMode (CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}