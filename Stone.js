class Stone
{
    constructor (x,y,width,height)
    {
var stoneOptions ={
    restitution:1,
    friction:1.0,
    density:2,
}

        this.stone = Bodies.rectangle(x,y,width,height,stoneOptions)
        World.add(myWorld, this.stone)

        this.width = width;
        this.height = height;
    }

    display()
    {
        var pos = this.stone.position;
        var angle = this.stone.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("gray")
        fill ("orange")
        rectMode (CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}