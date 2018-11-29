<? include_once('head.php'); ?>
	<script>
		$(function(){
			$('.nav-link').eq(0).addClass('active').css({'font-weight':'bold'})
		});
	</script>

	<section class="container-fluid coffee-header text-center text-light p-0">
		<div>
			<h1>Coffee</h1>
			<button class="btn btn-outline-light">커피이야기</button>
			<button class="btn btn-outline-light">내가 직접 만드는 커피</button>
			<button class="btn btn-outline-light">나와 어울리는 커피</button>
		</div>
	</section>
	<section class="container-fluid coffee-content01 text-light p-0">
		<div class="container">
			<h1>커피이야기</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>
	<section class="container-fluid coffee-content02 text-light p-0 text-right">
		<div class="container">
			<h1>내가 직접 만드는 커피</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>
	<section class="container-fluid coffee-content03 text-light p-0">
		<div class="container">
			<h1>나와 어울리는 커피</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>

<? include_once('footer.php'); ?>