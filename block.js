class Block{
    constructor(x , y){
      var options ={
          restituition : 0.4,
          density : 1,
          friction : 0.8,
          isStatic : false
      }
      this.body = Bodies.rectangle(x , y , 70 , 70 , options);
      this.width = 70;
      this.height = 70;
      this.body.color = "green";
      World.add(world,this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;

        rectMode(CENTER);
       rect(posX , posY , this.width , this.height);
    }
}