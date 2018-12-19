function menuClose(){
	$('#menu-close').css({display:'none'});
	$('#menu').stop().animate({opacity:0},function(){
		$('#menu').css({display:'none'});
	})
	$('.layer>h1,#menu-open').css({display:'block'});
};

$(function(){
	$('#menu-open').on({
		mouseenter:function(){
			$('#menu-open>div').eq(0).stop().animate({right:'5px'},500,'easeOutElastic');
			$('#menu-open>div').eq(1).stop().animate({left:'5px'},500,'easeOutElastic');
			$('#menu-open>div').eq(2).stop().animate({right:'5px'},500,'easeOutElastic');
		},
		mouseleave:function(){
			$('#menu-open>div').eq(0).stop().animate({right:0});
			$('#menu-open>div').eq(1).stop().animate({left:0});
			$('#menu-open>div').eq(2).stop().animate({right:0});
		},
		click:function(){
			$('#menu,#menu-close').css({display:'block'});
			$('#menu').stop().animate({opacity:'1'});
			$('.layer>h1,#menu-open').css({display:'none'});
		}
	});

	$('#menu-close').on({
		click:function(){
			menuClose();
		}
	});
});