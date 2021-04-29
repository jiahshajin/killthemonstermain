class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:450
        }
        this.pointB=pointB
        this.sling=Constraint.create(options)
        World.add(world,this.sling)

       

    }
      attach(body){
        this.fly.bodyA = body;  

      }
      
         fly(){
        this.fly.bodyA = null;
    }

    display() {
        if (this.fly.bodyA) {
          var pointA = this.fly.bodyA.position;
          var pointB = this.pointB;
          push();
    
          stroke(48, 22, 8);
          strokeWeight(0);
    
          line(pointB.x, pointB.y, pointA.x, pointA.y);
    
          pop();
        }
      }
    }
    
