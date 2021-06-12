class Holder{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.holder = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.holder);

    }
    fly(){
        this.holder.bodyA =null;   
    }
    display(){
        if(this.holder.bodyA){
        var pointA = this.holder.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
