class umbrella{
    constructor(x,y,width,height){

        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x, y, width, height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
} 
