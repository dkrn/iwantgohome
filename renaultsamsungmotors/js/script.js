$(function(){

	var menuCount = 0;
	var MSCount = 0;
	var FMCount = 0;
	var WidthSize = window.outerWidth;
	var MSLength = $('#main_slide>ul>li').length;
	var allMenuHeight = $('#allMenu_wrap').height() + 100;
	var MWHeight = $('#menu_wrap').height();
	var slideInterval;

	$('body').prepend('<div id="bg"></div>')
	$('#bg').hide();
	$('.sub').hide();
	$('#allMenu_wrap').hide();
	$('#main_slide>ul').css({width:WidthSize*MSLength});
	$('#main_slide>ul>li').css({width:WidthSize});



	function headerBye(){
		if(menuCount == 1){return false;}
		$('.sub').hide();
		$('#menu>ul>li>a').removeClass('active');
		$('#header_wrap').removeAttr('style');
		$('#header_wrap').stop().animate({height:MWHeight},300);
		$('#bg').stop().animate({opacity:0,'z-index':-1},300);
	};

	function MSMove(){
		$('#main_slide>ul').stop().animate({left:WidthSize*-1*MSCount},1250,'easeInOutQuart');
		$('#pager>span').html('<img src="./images/main_dot_off.png">');
		$('#pager>span').eq(MSCount).html('<img src="./images/main_dot_on.png">');
	}

	function siteResize(){
		if(WidthSize <= 1100){WidthSize = 1100;}
		$('#main_slide>ul').css({width:WidthSize*MSLength});
		$('#main_slide>ul>li').css({width:WidthSize});
	}

	function timer(){
		slideInterval = setInterval(function(){
			$('#next').trigger('click');
		},5000);
	}

	siteResize();
	timer();




	$('a').click(function(e){
		e.preventDefault();
	});

	$('#menu>ul>li').mouseenter(function(){
		if(menuCount == 1){return false;}
		var i = $(this).index();
		var subHeight = $('.sub').eq(i).height() + 100;
		console.log(subHeight);

		$('#header_wrap').stop().animate({height:subHeight},300);
		$('#header_wrap').css({background:'white'});
		$('#bg').stop().show().css({'z-index':9}).animate({opacity:1},300);

		$('.sub').eq(i).show();
		$('#menu>ul>li>a').removeClass('active').eq(i).addClass('active');
	});

	$('header').mouseleave(function(){
		headerBye();
	});

	$('#logo,#menu_btn,#login').mouseenter(function(){
		headerBye();
	})

	$('#menu>ul>li>a').mouseenter(function(){
		if(menuCount == 1){return false;}
		$('.sub').hide();
	});

	$('#menu_btn').click(function(){
		if(menuCount == 0){
			menuCount++;
			$('#header_wrap').stop().animate({height:allMenuHeight},300);
			$('#header_wrap').css({background:'white'}).addClass('border');
			$('#bg').stop().show().css({'z-index':9}).animate({opacity:1},300);
			$('#menu_btn').html('<img src="./images/gnb_all_on.png">');
			$('#allMenu_wrap').show();
		}else if(menuCount == 1){
			menuCount--;
			$('#header_wrap').removeClass('border')
			$('#menu_btn').html('<img src="./images/gnb_all.png">');
			$('#allMenu_wrap').hide();
			headerBye();
		}
	})

	$(window).scroll(function(){
		var POS = window.pageYOffset;
		console.log(POS);

		if(POS >= 2){
			$('header').addClass('bg');
		}else if(POS == 0){
			$('header').removeClass('bg');
		}
	});

	$(window).resize(function(){
		WidthSize = window.outerWidth;

		siteResize();
		$('#main_slide>ul').stop().animate({left:WidthSize*-1*MSCount},1);
	});

	$('#next').click(function(){
		MSCount++;
		if(MSCount == MSLength){
					MSCount = 0;
				}
				MSMove();
			});

	$('#prev').click(function(){
		MSCount--;
		if(MSCount == -1){
			MSCount = MSLength -1;
		}
		MSMove();
	});

	$('#main_slide').on({
		mouseenter:function(){clearInterval(slideInterval)},
		mouseleave:function(){timer();}
	});

	$('#pager>span').click(function(){
		MSCount = $(this).index();
		MSMove();
	});

	$('#FMcar_top>.FMcar').hover(function(){
		var i = $(this).index();

		$('#FMcar_top>.FMcar>.FMcar_img02').eq(i).stop().animate({
			opacity:1
		});
		$('#FMcar_top>.FMcar>ul').eq(i).stop().animate({
			bottom:'5px',
			opacity:1
		});
	},function(){
		var i = $(this).index();

		$('#FMcar_top>.FMcar>.FMcar_img02').eq(i).stop().animate({
			opacity:0
		});
		$('#FMcar_top>.FMcar>ul').eq(i).stop().animate({
			bottom:'-15px',
			opacity:0
		});
	});

	$('#FMcar_bottom>.FMcar').hover(function(){
		var i = $(this).index();

		$('#FMcar_bottom>.FMcar>.FMcar_img02').eq(i).stop().animate({
			opacity:1
		});
		$('#FMcar_bottom>.FMcar>ul').eq(i).stop().animate({
			bottom:'5px',
			opacity:1
		});
	},function(){
		var i = $(this).index();

		$('#FMcar_bottom>.FMcar>.FMcar_img02').eq(i).stop().animate({
			opacity:0
		});
		$('#FMcar_bottom>.FMcar>ul').eq(i).stop().animate({
			bottom:'-15px',
			opacity:0
		});
	});

	$('.sns').on({
		mouseenter:function(){
			$('.sns_title_bg').eq($(this).index()).stop().animate({width:'100%'});
		},
		mouseleave:function(){
			$('.sns_title_bg').eq($(this).index()).stop().animate({width:0});
		}
	});

	$('.news').on({
		mouseenter:function(){
			$('.news_title>h2>.sns_title_bg').eq($(this).index()).stop().animate({width:'100%'});
			$('.news>div').eq($(this).index()).css({'border-right':'1px solid #fff'});
		},
		mouseleave:function(){
			$('.news_title>h2>.sns_title_bg').eq($(this).index()).stop().animate({width:0});
			$('#NEWS>div').css({'border-right':'1px solid #ccc'});
		}
	});

	$('.family_btn').click(function(){
		if(FMCount == 0){
			$('.family_menu').stop().slideDown();
			$('.family_btn img').css({
				transform:'rotate(180deg)'
			});
			FMCount++;
		}else{
			$('.family_menu').stop().slideUp();
			$('.family_btn img').css({
				transform:'rotate(0deg)'
			});
			FMCount--;
		}

	});

	$('#TOP').click(function(){
		$('html,body').stop().animate({scrollTop:0},1000,'easeInOutQuart');
	});

});