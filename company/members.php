<? include_once('head.php'); ?>
	<script>
		$(function(){
			$('.nav-link').eq(2).addClass('active').css({'font-weight':'bold'})
		});
	</script>

	<section class="container-fluid members-header text-center text-light p-0">
		<div>
			<h1>Members</h1>
			<button class="btn btn-outline-light">멤버스 소개</button>
			<button class="btn btn-outline-light">My Members</button>
			<button class="btn btn-outline-light">Qahwah 카드 소개</button>
		</div>
	</section>
	<section class="container-fluid members-content01 text-light p-0">
		<div class="container">
			<h1>멤버스 소개</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>
	<section class="container-fluid members-content02 text-light p-0 text-right">
		<div class="container">
			<h1>My Members</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>
	<section class="container-fluid members-content03 text-light p-0">
		<div class="container">
			<h1>Qahwah 카드 소개</h1>
			<p class="pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, officia!</p>
			<button class="btn btn-outline-light mt-5">바로가기　></button>
		</div>
	</section>

<? include_once('footer.php'); ?>