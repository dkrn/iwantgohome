$(function(){
	var menuPOS = $('#menu').offset().top;
	var widthSize = window.outerWidth;

	var hprev = $('#hprev>img');
	var hnext = $('#hnext>img');
	var prev = $('#slide_prev>img')
	var next = $('#slide_next>img')

	var slideInterval;
	var count = 0;
	var hcount = 0;

	function siteResize(){
		$('#slide>div').css('width',widthSize);
		$('#slide').css('width',widthSize*5);
	}

	function timer(){
		slideInterval = setInterval(function(){
			next.trigger('click');
		},5000);
	}

	siteResize();
	timer();

	$('#slide_wrap').on({
		mouseover:function(){clearInterval(slideInterval)},
		mouseout:function(){timer();}
	});

	$(window).resize(function(){
		widthSize = window.outerWidth;
		console.log(widthSize);

		siteResize();
		$('#slide').stop().animate({left:widthSize*count*-1},1);
	});

	$('#X').click(function(){
		$('#banner01').slideUp(800);
		menuPOS -= $('#banner01').height();
		console.log(menuPOS);
	});

	$(window).on('scroll',function(){
		var POS = window.pageYOffset;
		var scrollPOS = $(window).scrollTop() + 150;
		console.log(POS);

		if(POS >= menuPOS){
			$('#menu_wrap').removeClass('absolute').addClass('fixed');
			// $('#side_bar').removeClass('absolute').addClass('fixed')
			$('#side_bar').animate({top:scrollPOS + 'px'},1);
		}else{
			$('#menu_wrap').removeClass('fixed').addClass('absolute');
			// $('#side_bar').removeClass('fixed').addClass('absolute');
			$('#side_bar').animate({top:menuPOS + 150 + 'px'},1);	
		}

		$('.img').each(function(){
			if(POS >= $(this).offset().top - 800){
				if($(this).attr('class') == 'img imgL'){
					$(this).stop().animate({
						opacity:1,
						left:0
					},2000,'easeOutQuad');
				}else if($(this).attr('class') == 'img imgR'){
					$(this).stop().animate({
						opacity:1,
						right:0
					},2000,'easeOutQuad');
				}
			}
		});
	});

	function slideMove(){
		$('#slide').stop().animate({left:widthSize*count*-1},1500,'easeInOutQuart');
	}

	function hslideMove(){
		$('#hslide>ul').stop().animate({left:-1530*hcount},1500,'easeInOutQuart');
	}

	prev.on({
		mouseover:function(){
			$(this).attr('src','./images/btn_slide_prev_03.png');
		},
		mouseout:function(){
			$(this).attr('src','./images/btn_slide_prev_02.png');
		},
		click:function(){
			if(count>-1){
				count--;
				slideMove();

				if(count == -1){
					count = 4;
					slideMove();
				}
			}
		}
	})

	next.on({
		mouseover:function(){
			$(this).attr('src','./images/btn_slide_next_03.png');
		},
		mouseout:function(){
			$(this).attr('src','./images/btn_slide_next_02.png');
		},
		click:function(){
			if(count<5){
				count++;
				slideMove();

				if(count == 5){
					count = 0;
					slideMove();
				}
			}
		}
	})

	hprev.on({
		mouseover:function(){
			$(this).attr('src','./images/btn_mainslide_prev_active.png');
		},
		mouseout:function(){
			$(this).attr('src','./images/btn_mainslide_prev.png');
		},
		click:function(){
			if(hcount>-1){
				hcount--;
				hslideMove();

				if(hcount == -1){
					hcount = 2;
					hslideMove();
				}
			}
		}
	})

	hnext.on({
		mouseover:function(){
			$(this).attr('src','./images/btn_mainslide_next_active.png');
		},
		mouseout:function(){
			$(this).attr('src','./images/btn_mainslide_next.png');
		},
		click:function(){
			if(hcount<3){
				hcount++;
				hslideMove();

				if(hcount == 3){
					hcount = 0;
					hslideMove();
				}
			}
		}
	})

	$('#TOP').click(function(){
		$('html,body').stop().animate({scrollTop:0},1000,'easeInOutQuart');
	});

});