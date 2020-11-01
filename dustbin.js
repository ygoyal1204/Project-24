class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.thickness=17;
        this.angle=0;

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true});
        World.add(world, this.bottomBody);

        this.leftBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true});
        Matter.Body.setAngle(this.leftBody, this.angle);
        World.add(world, this.leftBody);

        this.rightBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true});
        Matter.Body.setAngle(this.rightBody, -1*this.angle);
        World.add(world, this.rightBody);

    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftBody.position;
        var posRight = this.rightBody.position;

        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("white")
        noStroke()
        rotate(this.angle)
        rect(0,0,this.thickness, this.height);
        pop()

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill("white")
        noStroke()
        rotate(-1*this.angle)
        rect(0,0,this.thickness, this.height);
        pop()

        push()
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        noStroke()
        angleMode(RADIANS)
        fill("white")
        rect(0,0,this.width, this.thickness);
        pop()
    }
}