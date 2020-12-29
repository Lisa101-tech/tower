class Polygon {
  constructor(x,y,) {
      var options = {
          isStatic: false
      }
      this.body = bodies.rectangle(x,y,50,50,options)
      this.width = 50
      this.height = 50
      World.add(world,this.body)


        this.image = loadImage("polygon.png");
        //this.visibility = 255
      }
    display(){
         imageMode(CENTER)
         image(this.image,this.body.position.x,this.body.position.y,50,50)
       //pop ();
  }
    
};
 





