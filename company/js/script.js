$(function(){
;
	var mainSlideCount = 1;
	var menuSlideCount = 0;

	function mainSlideMove(){
		$('.content02 .menu-slide').stop().animate({'left':380*mainSlideCount*-1+'px'},350);
	};

	function menuSlideMove(){
		$('.menu-content01 .menu-slide').stop().animate({'left':330*menuSlideCount*-1+'px'},350);
	};

	$('.content02 .next').click(function(){
		if(mainSlideCount >= 2){
			return false;
		}
		mainSlideCount++;
		console.log(mainSlideCount);
		mainSlideMove();
	});

	$('.content02 .prev').click(function(){
		if(mainSlideCount == 0){
			return false;
		}
		mainSlideCount--;
		console.log(mainSlideCount);
		mainSlideMove();
	});

	$('.menu-content01 .next').click(function(){
		if(menuSlideCount >= 2){
			return false;
		}
		menuSlideCount++;
		console.log(menuSlideCount);
		menuSlideMove();
	});

	$('.menu-content01 .prev').click(function(){
		if(menuSlideCount == -0){
			return false;
		}
		menuSlideCount--;
		console.log(menuSlideCount);
		menuSlideMove();
	});

});