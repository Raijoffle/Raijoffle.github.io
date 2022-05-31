<template>
  <div class="home">
    <div class="homePageBody row">
      <div class="slider col-sm-12">
        <!--Slider Start-->
        <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="../assets/spiderman.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="sliderHeadText">First slide label</h5>
                <p class="sliderText">
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="../assets/alucard.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="sliderHeadText">Second slide label</h5>
                <p class="sliderText">
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../assets/samurai.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5 class="sliderHeadText">Third slide label</h5>
                <p class="sliderText">
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <!--Slider End-->
      <div class="row whatisbgs">
        <div class="col-6">
          <div class="card" style="">
            <!-- <img src="../assets/logo.png" class="card-img-top" alt="..."> -->
            <h5 class="card-header">{{ $t("homePage.whatisbgsHouse") }}</h5>
            <div class="card-body cardbgshouse">
              <p class="card-text">
                {{ $t("homePage.bgshouseContent") }}
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <div class="card-subtitle kkk777">{{ $t("homePage.managementTeam") }}</div>
              <li class="list-group-item">
                <b
                  ><u>{{ $t("homePage.teamAuth.owner") }} :</u></b
                >
                <span class="adminName">{{ $t("homePage.teamName.hasan") }}</span>
              </li>
              <li class="list-group-item">
                <b
                  ><u>{{ $t("homePage.teamAuth.executive") }} :</u></b
                >
                <span class="adminName">{{ $t("homePage.teamName.sefa") }}</span>
              </li>
              <li class="list-group-item">
                <b
                  ><u>{{ $t("homePage.teamAuth.servitorship") }} :</u></b
                >
                <span class="adminName">{{ $t("homePage.teamName.hamdi") }}</span>
              </li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link btn btn-outline-info hover-glitch">{{
                $t("homePage.cLink")
              }}</a>
              <a href="#" class="card-link btn btn-outline-info hover-glitch">{{
                $t("homePage.aLink")
              }}</a>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card" style="">
            <!-- <img src="../assets/logo.png" class="card-img-top" alt="..."> -->
            <h5 class="card-header cardbgsgames">{{ $t("homePage.whatisbgsGames") }}</h5>
            <div class="card-body">
              <p class="card-text">{{ $t("homePage.bgsGamesContent") }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <div class="card-subtitle kkk777">{{ $t("homePage.managementTeam") }}</div>
              <li class="list-group-item">
                <b
                  ><u>{{ $t("homePage.teamAuth.owner") }} :</u></b
                >
                <span class="adminName">{{ $t("homePage.teamName.sefa") }}</span>
              </li>
              <li class="list-group-item">
                <b
                  ><u>{{ $t("homePage.teamAuth.executive") }} :</u></b
                >
                <span class="adminName">{{ $t("homePage.teamName.hasan") }}</span>
              </li>
              <li class="list-group-item">
                <b
                  ><u>{{ $t("homePage.teamAuth.servitorship") }} :</u></b
                >
                <span class="adminName">{{ $t("homePage.teamName.hamdi") }}</span>
              </li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link btn btn-outline-info hover-glitch">{{
                $t("homePage.cLink")
              }}</a>
              <a href="#" class="card-link btn btn-outline-info hover-glitch">{{
                $t("homePage.aLink")
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>{{ $t("homePage.opTeam") }}</h2>
      </div>
      <div class="col-md-3 pTeam">
        <div class="profile-card-2">
          <img src="../assets/faces/kendall.jpg" class="img img-responsive" />
          <div class="profile-name">JOHN DOE</div>
          <div class="profile-username">@johndoesurname</div>
          <div class="profile-icons">
            <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a
            ><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a
            ><a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 pTeam">
        <div class="profile-card-2">
          <img src="../assets/faces/camp.jpg" class="img img-responsive" />
          <div class="profile-name">JOHN DOE</div>
          <div class="profile-username">@johndoesurname</div>
          <div class="profile-icons">
            <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a
            ><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a
            ><a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 pTeam">
        <div class="profile-card-2">
          <img src="../assets/faces/christian.jpg" class="img img-responsive" />
          <div class="profile-name">JOHN DOE</div>
          <div class="profile-username">@johndoesurname</div>
          <div class="profile-icons">
            <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a
            ><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a
            ><a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 pTeam">
        <div class="profile-card-2">
          <img src="../assets/faces/card-profile1-square.jpg" class="img img-responsive" />
          <div class="profile-name">JOHN DOE</div>
          <div class="profile-username">@johndoesurname</div>
          <div class="profile-icons">
            <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a
            ><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a
            ><a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 pTeam">
        <div class="profile-card-2">
          <img src="../assets/faces/marc.jpg" class="img img-responsive" />
          <div class="profile-name">JOHN DOE</div>
          <div class="profile-username">@johndoesurname</div>
          <div class="profile-icons">
            <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a
            ><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a
            ><a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-3 pTeam">
        <div class="profile-card-2">
          <img src="../assets/faces/avatar.jpg" class="img img-responsive" />
          <div class="profile-name">JOHN DOE</div>
          <div class="profile-username">@johndoesurname</div>
          <div class="profile-icons">
            <a href="#" title="Instagram"><i class="fa fa-instagram"></i></a
            ><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a
            ><a href="#" title="LinkedIn"><i class="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
.homePageBody {
  padding: 0;
  margin-top: 3%;
  width: 100%;
  height: 100%;
}
.slider {
  text-align: center;
  width: fixed;
}
#carouselExampleDark {
  width: 50%;
  margin: 0 auto;
}
@media screen and (max-width: 1050px) {
  #carouselExampleDark {
    width: 100%;
    margin: 10px auto;
  }
}

div.carousel-item img {
  height: 100%;
  filter: blur(0.1);
  filter: contrast(103%);
}
div.carousel-item img:hover {
  filter: blur(1px);
  filter: contrast(100%);
}
h5.sliderHeadText {
  color: white;
  text-shadow: 2px 2px rgba(011, 011, 011, 1);
}

p.sliderText {
  color: rgb(187, 246, 250);
  text-shadow: 1px 1px rgba(255, 255, 255, 0.1);
}
.whatisbgs {
  margin-top: 3%;
  margin-bottom: 5%;
}
.card {
  margin: 0 !important;
  width: 60% !important;
}
.card-title {
  font-size: 2.3rem;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  line-height: 1.9rem;
  text-transform: capitalize;
}
.list-group-item {
  background: none;
  font-size: 0.9rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.card-text {
  text-align: left;
  overflow: hidden;
  line-height: 20px;
  font-size: 0.9rem;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  height: 120px;
}
.card-link {
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  color: rgba(0, 0, 0, 0.604);
  line-height: 12px;
  font-weight: 200;
}
.kkk777 {
  color: palevioletred;
  text-transform: capitalize;
  text-decoration: underline;
  font-size: 1.2rem;
  font-family: G-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}
.adminName {
  color: #05b0ff;
  font-size: 1rem;
  font-weight: 100;
  text-shadow: 1px 0 white;
  text-align: right;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}
b {
  color: rgba(151, 5, 255, 0.5);
  margin: 0 5%;
  font-weight: 100;
}
.list-group li {
  text-align: left;
}

.pTeam {
  max-width: 100%;
}

.profile-card-2 {
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  background-position: center;
  overflow: hidden;
  position: relative;
  margin: 10px auto;
  cursor: pointer;
  border-radius: 10px;
}
@media screen and (max-width: 1200px) {
  .profile-card-2 {
    width: 300px;
    margin-top: 0 auto;
  }
  .pTeam {
    display: flex;
    box-sizing: border-box;
    margin-right: 30px;
  }
  .profile-card-2 > img {
    width: 100%;
  }
  .profile-name {
    font-size: 18px !important;
  }
  .profile-username {
    font-size: 9px !important;
  }
}

@media screen and (max-width: 767px) {
  .profile-name {
    font-size: 30px !important;
  }
  .profile-username {
    font-size: 13px !important;
  }
}

.profile-card-2 img {
  transition: all linear 0.25s;
}

.profile-card-2 .profile-name {
  position: absolute;
  left: 30px;
  bottom: 70px;
  font-size: 30px;
  color: #fff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-icons {
  position: absolute;
  bottom: 30px;
  right: 30px;
  color: #fff;
  transition: all linear 0.25s;
}
.profile-card-2 .profile-icons i {
  color: #fff;
}

.profile-card-2 .profile-username {
  position: absolute;
  bottom: 50px;
  left: 30px;
  color: #fff;
  font-size: 13px;
  transition: all linear 0.25s;
}

.profile-card-2 .profile-icons .fa {
  margin: 5px;
}

.profile-card-2:hover img {
  filter: contrast(130%);
  filter: blur(0.9px);
}

.profile-card-2:hover .profile-name {
  bottom: 80px;
}

.profile-card-2:hover .profile-username {
  bottom: 60px;
}

.profile-card-2:hover .profile-icons {
  right: 40px;
}
</style>
