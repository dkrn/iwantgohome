function menuClose(){
	$('#menu-close').css({display:'none'});
	$('#menu').stop().animate({opacity:0},function(){
		$('#menu,#contact').css({display:'none'});
		$('#menu-list>h1').css({display:'block'});
	})
	$('.layer01>h1,#menu-open').css({display:'block'});
};

function contact(){
	$('#menu-list>h1').css({display:'none'});
	$('#contact').css({display:'block'});
}



$(function(){

	$('#fullpage').fullpage({
        slidesNavigation: false
	});

	$('#fullpage-sub').fullpage({
	    navigation: true,
	    navigationTooltips: ['INCREDIBLES 2', 'Renaultsamsung', 'Qahwah', 'Web Design'],
	    slidesNavigation: false,
	    showActiveTooltip: true,
	    scrollOverflow:true,
	    afterLoad:function(origin,destination,direction){
			if(destination.index == 0){
				$('#page01').find('.main_cmt').css({
					opacity:1,
					'transition-duration':'1.5s',
					transform:'translateX(0)'
				});
	        }else if(origin && origin.index == 0){
	         	$('#page01').find('.main_cmt').removeAttr('style').css({
	         		opacity:0,
	         		transform:'translateX(-100px)'
	         	});
	        }

	        if(destination.index == 1){
				$('#page02').find('.main_cmt').css({
					opacity:1,
					'transition-duration':'1.5s',
					transform:'translateX(0)',
				});
	        }else if(origin && origin.index == 1){
	         	$('#page02').find('.main_cmt').removeAttr('style').css({
	         		opacity:0,
	         		transform:'translateX(-100px)'
	         	});
	        }

	        if(destination.index == 2){
				$('#page03').find('.main_cmt').css({
					opacity:1,
					'transition-duration':'1.5s',
					transform:'translateX(0)',
				});
	        }else if(origin && origin.index == 2){
	         	$('#page03').find('.main_cmt').removeAttr('style').css({
	         		opacity:0,
	         		transform:'translateX(-100px)'
	         	});
	        }

	        if(destination.index == 3){
				$('#page04').find('.main_cmt').css({
					opacity:1,
					'transition-duration':'1.5s',
					transform:'translateX(0)',
				});
	        }else if(origin && origin.index == 3){
	         	$('#page04').find('.main_cmt').removeAttr('style').css({
	         		opacity:0,
	         		transform:'translateX(-100px)'
	         	});
	        }
		},
		onLeave: function(origin, destination, direction){
			var leavingSection = this;

			if(destination.index != 1){
				$('#fp-nav ul li a span,.fp-slidesNav ul li a span,#menu-open div').css({background:'#fff'});
				$('#fp-nav ul li .fp-tooltip').css({color:'#fff'});
				$('nav h1 a img').attr('src','./images/logo.png')
			}else if(destination.index == 1){
				$('#fp-nav ul li a span,.fp-slidesNav ul li a span,#menu-open div').css({background:'#000'});
				$('#fp-nav ul li .fp-tooltip').css({color:'#000'});
				$('nav h1 a img').attr('src','./images/logo_black.png')
			}
		}
	});



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
			$('.layer01>h1,#menu-open').css({display:'none'});
		}
	});

	$('#menu-close').on({
		click:function(){
			menuClose();
		}
	});

	$('.bt-line').on({
		mouseenter:function(){
			$('.bt-line span').addClass('add');
		},
		mouseleave:function(){
			$('.bt-line span').removeClass('add');
		}
	})
});