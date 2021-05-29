class Ground{
    constructor(x , y){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x , y , 1200 , 20 , options)
        this.width = 1200;
        this.height = 20;
        World.add(world , this.body);
    }

    display(){
        var posX = this.body.position.x
        var posY = this.body.position.y
        rectMode(CENTER)
        rect(posX , posY , this.width , this.height)
    }

}