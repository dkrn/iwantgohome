<? include_once('head.php'); ?>
	<script>
		$(function(){
			$('.nav-link').eq(1).addClass('active').css({'font-weight':'bold'})
		});
	</script>

	<section class="container-fluid menu-header text-center text-light p-0">
		<div>
			<h1>Menu</h1>
		</div>
	</section>
	<section class="menu-content01 p-0 text-center">
		<div class="container">
			<h4>추천 메뉴</h4>
			<div class="menu-slide">
				slide
			</div>
		</div>
	</section>
	<section class="menu-content02">
		<div class="container p-0">
			<div class="menu-check">
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
					<label class="form-check-label" for="inlineCheckbox1">Coffee</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
					<label class="form-check-label" for="inlineCheckbox2">Juice</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
					<label class="form-check-label" for="inlineCheckbox3">Food</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4">
					<label class="form-check-label" for="inlineCheckbox4">MD</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5">
					<label class="form-check-label" for="inlineCheckbox5">ICED</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6">
					<label class="form-check-label" for="inlineCheckbox6">HOT</label>
				</div>
			</div>
			<div class="menu-list text-center after">
				<div class="menu-list-item bg-light">
					<a href="#">
						<img src="./images/menu01.png" alt="">
						<p class="m-0">ICED 브라우니 쇼콜라</p>
					</a>	
				</div>
				<div class="menu-list-item bg-light">
					<a href="#">
						<img src="./images/menu01.png" alt="">
						<p class="m-0">ICED 브라우니 쇼콜라</p>
					</a>	
				</div>
				<div class="menu-list-item bg-light">
					<a href="#">
						<img src="./images/menu01.png" alt="">
						<p class="m-0">ICED 브라우니 쇼콜라</p>
					</a>	
				</div>
				<div class="menu-list-item bg-light">
					<a href="#">
						<img src="./images/menu01.png" alt="">
						<p class="m-0">ICED 브라우니 쇼콜라</p>
					</a>	
				</div>
			</div>
		</div>
	</section>

<? include_once('footer.php'); ?>