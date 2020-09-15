class Box  {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = rgb(random(0,255) , random(0,255) , random(0,255));
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
  }
};
