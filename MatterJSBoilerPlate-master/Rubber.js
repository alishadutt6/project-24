class Rubber {
    constructor(x, y,r) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("yellow");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };