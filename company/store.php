<? include_once('head.php'); ?>
	<script>
		$(function(){
			$('.nav-link').eq(4).addClass('active').css({'font-weight':'bold'})
		});
	</script>

	<section class="container-fluid store-header text-center text-light p-0">
		<div>
			<h1>Store</h1>
			<button class="btn btn-outline-light">매장찾기</button>
			<button class="btn btn-outline-light">가맹사업 안내</button>
		</div>
	</section>
	<section class="container-fluid store-content01 text-light p-0">
		<div class="container">
			<h1>매장찾기</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>
	<section class="container-fluid store-content02 text-light p-0 text-right">
		<div class="container">
			<h1>가맹사업 안내</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>

<? include_once('footer.php'); ?>