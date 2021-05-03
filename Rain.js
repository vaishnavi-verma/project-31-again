class Rain{

    constructor(x, y, r){

        var options = {

            'friction': 1
            

        }

        this.body = Bodies.circle(x, y, r, options);
        this.r = r
        World.add(world, this.body);
    }


    updateY(){

        if (this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x: random(0, 900), y: random(0, 10)})
        }

        Matter.Body.setVelocity(this.body, {x: 0, y: 18})
    }



    display(){

        
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}