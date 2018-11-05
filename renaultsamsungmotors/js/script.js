$(function(){

	var menuCount = 0;
	var MSCount = 0;
	var WidthSize = window.outerWidth;
	var MSLength = $('#main_slide>ul>li').length;
	var allMenuHeight = $('#allMenu_wrap').height() + 100;
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
		$('#header_wrap').stop().animate({height:'80px'},300);
		$('#bg').stop().animate({opacity:0,'z-index':-1},300);
	};

	function MSMove(){
		$('#main_slide>ul').stop().animate({left:WidthSize*-1*MSCount},650);
		$('#O>span').html('<img src="./images/main_dot_off.png">');
		$('#O>span').eq(MSCount).html('<img src="./images/main_dot_on.png">');
	}

	function siteResize(){
		$('#main_slide>ul').css({width:WidthSize*5});
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
		var subHeight = $('.sub').eq($(this).index()).height() + 100;
		console.log(subHeight);

		$('#header_wrap').stop().animate({height:subHeight},300);
		$('#header_wrap').css({background:'white'});
		$('#bg').stop().show().css({'z-index':9}).animate({opacity:1},300);

		$('.sub').eq($(this).index()).show();
		$('#menu>ul>li>a').removeClass('active').eq($(this).index()).addClass('active');
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

		if(POS >= 81){
			// $('header').css({
			// 	position:'fixed',top:'-80px' // 외한번박에않되
			// }).animate({
			// 	top:0
			// });
			$('header').css({position:'fixed'});
			$('header').addClass('bg');
		}else if(POS == 0){
			$('header').css({position:'absolute'});
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
				mouseover:function(){clearInterval(slideInterval)},
				mouseout:function(){timer();}
			});

			$('#O>span').click(function(){
				MSCount = $(this).index();
				MSMove();
			});
		});