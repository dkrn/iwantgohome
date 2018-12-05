$(function(){
	var lnbA = $('#lnb>ul>li>a')
	$('#visual_wrap').bxSlider({
		auto:true
	});

	$('.sub').hide();

	$('#lnb>ul>li').hover(function(){
		lnbA.eq($(this).index()).addClass('lnbhover');
		$('.sub').eq($(this).index()).stop().slideDown();
	},function(){
		lnbA.eq($(this).index()).removeClass('lnbhover');
		$('.sub').hide();
	});
});