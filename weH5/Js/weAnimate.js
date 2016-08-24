/*
*动画要配合样式使用
*
*/

function weAnimate(){
	this.queue=[];
	this.frame={};
}
weAnimate.prototype.next = function() {
	if(this.queue.length>0){
		this.frame=this.queue.shift();
		this.newAnimate.call(this);
	}
};
weAnimate.prototype.addFrame=function(frame){
	this.queue.push(frame);
	return this;
};
weAnimate.prototype.newAnimate=function(option){
	var select=this.frame.select;
	var _serf=this;
	var _item=$('.'+select);
	_item.css(this.frame.initop);
	_item.animate(this.frame.options,this.frame.speed,function(){
		if(!_serf.frame.asyn){
			_serf.next();
		}
	});
	if(this.frame.asyn){
		_serf.next();
	}
	return this;
}