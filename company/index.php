<? include_once('head.php'); ?>

    <header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div class="carousel-item active" style="background-image: url('./images/slide02.jpg')">
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('./images/slide01.jpg')">
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('./images/slide04.jpg')">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>

    <!-- Page Content -->
    <section class="main-contents">
      <div class="container after p-0 text-light">
         <div class="coffee-news bg-dark">
            <h3 class="pt-3 pb-5">Qahwah News
               <span><a href="#">More +</a></span>
            </h3>
            <ul>
               <li>
                  <a href="#">Lorem ipsum dolor sit amet.</a>
                  <span>2018-11-28</span>
               </li>
               <li>
                  <a href="#">Placeat pariatur reiciendis velit.</a>
                  <span>2018-11-28</span>
               </li>
               <li>
                  <a href="#">Modi facere odit asperiores.</a>
                  <span>2018-11-28</span>
               </li>
               <li>
                  <a href="#">Eos, dolorem reprehenderit quae.</a>
                  <span>2018-11-28</span>
               </li>
               <li>
                  <a href="#">Obcaecati eum in expedita modi.</a>
                  <span>2018-11-28</span>
               </li>
            </ul>
         </div>
         <div class="create-coffee d-none d-xl-block">
            <h3 class="pt-3 pb-4">내가 직접<br>만드는 커피</h3>
            <p>로스팅부터 추출 과정까지<br>커피가 만들어지는 과정을 한 눈에 볼 수 있어요.</p>
         </div>
         <div class="find-coffee d-none d-xl-block bg-light text-dark">
            <h3 class="pt-3 pb-4">나와 어울리는<br>커피</h3>
            <p>나의 입맛에 맞는 커피를 찾고 할인 쿠폰을 받아보세요.</p>
         </div>
         <div class="coffee-story">
            <h3>커피<br>이야기</h3>
         </div>
         <div class="find-store bg-light text-dark">
            <h3 class="pt-3">매장찾기</h3>
            <form class="form-inline my-2 my-lg-0">
               <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
               <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
         </div>
         <div style="height: 150px;" class="menu-go">
            <h3 class="pt-1">Menu</h3>
            <p>메뉴 바로가기 ></p>
         </div>
         <div style="height: 150px;" class="members-go bg-dark">
            <h3 class="pt-1">Members</h3>
            <p>멤버스 바로가기 ></p>
         </div>
      </div>
    </section>
    <section class="container-fluid text-center text-light content01" style="height: 550px;">
       <div class="container">
         <h1>홈카페 바리스타</h1>
         <h3 class="pt-5">집에서 즐기는 맛있는 커피</h3>
         <p class="pt-1">집에서 손쉽게 나만의 커피를 즐겨보세요.</p>
         <button class="btn btn-outline-light mt-3">강좌 신청하기</button>
       </div>
    </section>
    <section class="text-center content02">
       <div class="container-fluid after p-0">
          <h2>Qahwah SNS</h2>
          <!-- <div class="sns-slide-wrap">
             <div class="sns-slide">
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
                <div class="after">
                   <div><img src="./images/img02.jpg" alt="" style="width:350px"></div>
                </div>
             </div>
             <span class="prev"><img src="./images/prev.png" alt=""></span>
             <span class="next"><img src="./images/next.png" alt=""></span>
          </div> -->
       </div>
    </section>

    <!-- Footer -->
<? include_once('footer.php'); ?>