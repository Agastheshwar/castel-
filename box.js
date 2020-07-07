class Box{
    constryctor(x,y,width,hegint){
        var option = {
            'restitution':option,
            'frition':1.0,
            'density':1.0,
        }
        this.body = Bodies.rectamgle(x.y.width,height,options);
        this.width = width;  
        this.height = height;


        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        sTROKEwEIGHT(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();

    }
}