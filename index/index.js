function canvasAnimate1(){
	var canvas=document.getElementById('canvas1');
	var context=canvas.getContext('2d');
	var balls=[];
	var angle=0;
	for(var i=0;i<8;i++){
		var radius=(-12/49)*i*(i-7);
		var ball=new Ball(100+20*Math.sin(angle),100+20*Math.cos(angle),radius,"#ffffff");
		balls.push(ball);
		angle+=Math.PI/4;
	}
	animateDraw();
	function animateDraw(){
		context.fillStyle="#2b3e51";
		context.fillRect(0,0,400,200);
		var ball_index=7;
		window.setInterval(function(){
			if(ball_index<=0){
				balls=attributechange(balls,"radius");
				ball_index=7;
			}
			draw(balls[ball_index],context);
			ball_index--;
		},15);
	}
}
function canvasAnimate2(){
	var thecanvas=document.getElementById('canvas2');
	var context=thecanvas.getContext("2d");
	var fadein=true;
	var alpha=0;
	var text="hello world";
	function gameloop(){
		window.setTimeout(gameloop,200);
		drawScreen();
	}
	function drawScreen(){
		context.clearRect(0,0,200,200);
		context.fillStyle="#d35000";
		context.fillRect(0,0,400,200);
		if(fadein){
			alpha+=0.1;
			if(alpha>1){
				alpha=1;
				fadein=false;
			}
		}else{
			alpha-=0.1;
			if(alpha<0){
				alpha=0;
				fadein=true;
			}
		}
		context.font="24px 微软雅黑";
		context.textBaseline="top";
		context.save();
		context.globalAlpha=alpha;
		context.fillStyle="#FFFFFF";
		context.fillText(text,40,80);
		context.restore();
	}
	gameloop();
}	
function canvasAnimate3(){
	var thecanvas=document.getElementById('canvas3');
	var context=thecanvas.getContext("2d");
	var clipvalue=false;
	function gameloop(){
		window.setTimeout(gameloop,600);
		drawScreen();
	}
	function drawScreen(){
		context.clearRect(0,0,200,200);
		context.fillStyle="#58a";
		context.fillRect(0,0,200,200);
		context.save();
		if(clipvalue){
			context.beginPath();
			context.strokeStyle="#fff";
			context.rect(10,10,100,100);
			context.stroke();
			context.closePath();
			context.clip();
			clipvalue=false;
		}else{
			clipvalue=true;
		}
		context.beginPath();
		context.strokeStyle="#d35000";
		context.lineWidth=5;
		context.arc(100,100,30,(Math.PI/180)*0,(Math.PI/180)*360,false);
		context.stroke();
		context.closePath();
		context.restore();
	}
	gameloop();
}	
function canvasAnimate4(){
	var thecanvas=document.getElementById('canvas4');
	var context=thecanvas.getContext("2d");
	// var angleInRadians=0;
	var endangle=Math.PI;
	var w=Math.PI/3;
	var a=Math.PI/6;
	var t=0;
	var startt=endangle/w;
	var endt=w/a+startt;
	var rectscale=0.03;
	function gameloop(){
		window.setTimeout(gameloop,30);
		drawScreen();
	}
	function drawScreen(){
		context.clearRect(0,0,200,200);
		context.fillStyle="#ffcc5c";
		context.fillRect(0,0,200,200);
		context.save();
		context.setTransform(1,0,0,1,0,0);
		context.translate(100,100);
		if(t<=startt){
			angleInRadians=w*t;
			t+=0.03;
			rectscale+=0.01;
		}else if(t<=endt&&t>startt){
			angleInRadians=(w-a*(t-startt)/2)*(t-startt)+endangle;
			t+=0.03;
			rectscale+=0.01;
		}
		context.rotate(angleInRadians);
		context.fillStyle="#2b3e51";
		context.scale(0.6,0.6);
		context.fillRect(-100,-100,200,200);
		context.fillStyle="blue";
		context.scale(rectscale,rectscale);
		context.fillRect(-25,-25,25,25);
		context.globalCompositeOperate="source-over";
		context.fillRect(5,-25,25,25);
		context.globalCompositeOperate="destination-atop";
		context.fillRect(5,5,25,25);
		context.globalAlpha=0.5;
		context.globalCompositeOperate="source-atop";
		context.fillRect(-25,5,25,25);
		context.restore();
	}
	gameloop();
}	
function canvasAnimate5(){
	var thecanvas=document.getElementById('canvas5');
	var context=thecanvas.getContext("2d");
	var message="HTML5 Canvas";
	var colorStops=new Array(
			{xcolor:"#FF0000",stopPrecent:0},
			{xcolor:"#FFFF00",stopPrecent:0.125},
			{xcolor:"#00FF00",stopPrecent:0.375},
			{xcolor:"#0000FF",stopPrecent:0.625},
			{xcolor:"#FF00FF",stopPrecent:0.875},
			{xcolor:"#FF0000",stopPrecent:1}
		);
	function gameloop(){
		window.setTimeout(gameloop,300);
		drawScreen();
	}
	function drawScreen(){
		context.fillStyle="#000000";
		context.fillRect(0,0,thecanvas.width,thecanvas.height);
		context.font="30px impact";
		context.textAlign="center";
		context.textBaseline="middle";
		var metrics=context.measureText(message);
		var textWidth=metrics.width;
		var xposition=thecanvas.width/2;
		var yposition=thecanvas.height/2;
		var gradient=context.createLinearGradient(xposition,-10,xposition,thecanvas.height);
		for(var i=0;i<colorStops.length;i++){
			var tempColorStop=colorStops[i];
			var tempColor=tempColorStop.xcolor;
			var tempStopPrecnet=tempColorStop.stopPrecent;
			gradient.addColorStop(tempStopPrecnet,tempColor);
			tempStopPrecnet+=0.15;
			if(tempStopPrecnet>1){
				tempStopPrecnet=0;
			}
			tempColorStop.stopPrecent=tempStopPrecnet;
			colorStops[i]=tempColorStop;
		}
		context.fillStyle=gradient;
		context.fillText(message,xposition,yposition);
	}
	gameloop();
}	