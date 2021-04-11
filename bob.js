class bob {
    constructor(x,y,radius){
        var options={
      isStatic: false,
      restitution:0.3,
      friction:0.5,
      density:0.1
        }
      this.x=x
      this.y=y
      this.radius=radius
      this.body=Bodies.circle(this.x,this.y,this.radius,options);
      
    
     
    
      World.add(world,this.body);
    }
    display(){
    
    
      push();
      ellipseMode(RADIUS);
      fill("red");
      ellipse(this.body.position.x,this.body.position.y,25,25);
       pop();
        
    }
}