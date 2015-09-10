function SlidingDiv(bodyHeight){
    this.randPosY = Math.floor((Math.random()*bodyHeight));
    this.startPos = ($ (window).width() );
    this.$div = $("<div>").addClass('box').appendTo('.outer');
    this.$div.prepend('<img src="animals/kangaroo.gif" />')
    this.slide()
};

SlidingDiv.prototype.slide = function(){
    this.$div.css('top', this.randPosY);
    this.$div.css('left', this.startPos);
    var timer = Math.floor(5000+(Math.random()*10000))
    this.$div.animate({left: '-133px'}, timer);
};

$(document).ready(function(){
    $(document).click(function(){
        var bodyHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
        var div = new SlidingDiv(bodyHeight);
        div.slide();
    });
});
