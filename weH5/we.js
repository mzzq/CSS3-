function weH5(len){
	this.i=0;
	this.len=len;
	this.animates=[];
	this._time=false;
}
weH5.prototype.push= function(select,func,speed) {
	var obj={
		select:select,
		func:func,
		speed:speed
	}
	this.animates.push(obj);
};
weH5.prototype.next = function() {
	var me=this;
	if(this.len<=0){
		return;
	}
	var temp=this.animates.shift();
	temp.func(temp.select,temp.func,temp.speed);
	if(!this._time){
		var me=this;
		this._time=window.setInterval(function(){
			if(!me.next()){
				clearInterval(me._time);
			}
		},3000);
	}
	this.len--;
	return this;
};
weH5.prototype.slideDown = function(select,speed) {
	var reg=/[0-9]*$/;
	var num=select.match(reg);
	$('.'+select+' p').addClass('content_'+num);
	$('.'+select).animate({
		opacity:1,
	},2000,function(){

	});
};
weH5.prototype.slideUp = function(select,speed) {
	var reg=/[0-9]*$/;
	var num=select.match(reg);
	$('.'+select+' p').addClass('content_'+num);
	$('.'+select).animate({
		opacity:1,
	},2000,function(){
	});
};
weH5.prototype.fadeOut = function(select,speed) {
	var reg=/[0-9]*$/;
	var num=select.match(reg);
	$('.'+select+' p').addClass('content_'+num);
	$('.'+select).animate({
		opacity:1,
	},2000,function(){
	});
};
weH5.prototype.hide = function(select,speed) {
	var reg=/[0-9]*$/;
	var num=select.match(reg);
	$('.'+select+' p').addClass('content_'+num);
	$('.'+select).animate({
		opacity:1,
	},2000,function(){
		
	});
};