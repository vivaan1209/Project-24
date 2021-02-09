class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':5,
          'density':1.0,
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(225);
      ellipse(0, 0, this.radius );
      pop();
    }
  };