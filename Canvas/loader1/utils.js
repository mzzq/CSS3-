function Ball(x=10,y=100,radius=5,color="#000000",alph=1){
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.color=color;
	this.alph=alph;
}
function draw(ball,context){
	context.fillStyle=ball.color;
	context.globalAlpha=ball.alph;
	context.beginPath();
	context.arc(ball.x,ball.y,ball.radius,0,2*Math.PI,true);
	context.fill();
	context.closePath();
	if(ball.alph>=1){
		ball.alph=0.2;
	}else{
		ball.alph+=0.2;
	}
}