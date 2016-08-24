/*
*asyn说明动画的同步还是异步 true同步，false异步
*同步表明和后一帧动画同时开始
*/
function weH5Page(select,initop,options,speed,asyn){
	this.select=select;
	this.initop=initop;
	this.options=options;
	this.speed=speed;
	this.asyn=asyn;
}