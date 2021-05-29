class Bob{
	constructor(x,y ,width , height ,angle){
		 var options ={

	frictionAir: 0.005,
	density: 0.8,
	
		 }
		 this.width = width ;
		 this.height = height;
		 this.body = Bodies.rectangle(x,y,width , height,options)
		 World.add(world,this.body)
	}
	display(){
		var angle = this.body.angle;
		push();
		// translate(this.body.position.x , this.body.position.y)
		rotate(angle)
		fill ("red");

		 ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
		 pop()
	}
	}



