<template>
  <footer class="new_footer_area bg_color">
    <div class="new_footer_top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div
              class="f_widget company_widget wow fadeInLeft"
              data-wow-delay="0.2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft"
            >
              <h3 class="f-title f_600 t_color f_size_18 hover-glitch">Get in Touch</h3>
              <p class="hover-glitch">
                Don’t miss any updates of our new templates and extensions.!
              </p>
              <form
                action="#"
                class="f_subscribe_two mailchimp"
                method="post"
                novalidate="true"
                _lpchecked="1"
              >
                <button
                  type="button"
                  class="btn btn-outline-info"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="bi bi-send"></i> Bize Bir Mesaj Bırakın
                </button>
                <p class="mchimp-errmessage hover-glitch" style="display: none"></p>
                <p class="mchimp-sucmessage hover-glitch" style="display: none"></p>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div
              class="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.4s"
              style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft"
            >
              <h3 class="f-title f_600 t_color f_size_18 hover-glitch">Download</h3>
              <ul class="list-unstyled f_list">
                <li class="hover-glitch"><a href="#">Company</a></li>
                <li class="hover-glitch"><a href="#">Android App</a></li>
                <li class="hover-glitch"><a href="#">ios App</a></li>
                <li class="hover-glitch"><a href="#">Desktop</a></li>
                <li class="hover-glitch"><a href="#">Projects</a></li>
                <li class="hover-glitch"><a href="#">My tasks</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div
              class="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.6s"
              style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft"
            >
              <h3 class="f-title f_600 t_color f_size_18 hover-glitch">Help</h3>
              <ul class="list-unstyled f_list">
                <li class="hover-glitch"><a href="#">FAQ</a></li>
                <li class="hover-glitch">
                  <a href="#">Term &amp; conditions</a>
                </li>
                <li class="hover-glitch"><a href="#">Reporting</a></li>
                <li class="hover-glitch"><a href="#">Documentation</a></li>
                <li class="hover-glitch"><a href="#">Support Policy</a></li>
                <li class="hover-glitch"><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div
              class="f_widget social-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.8s"
              style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft"
            >
              <h3 class="f-title f_600 t_color f_size_18 hover-glitch">Team Solutions</h3>
              <div class="f_social_icon">
                <a href="https://www.reddit.com/user/BGSHouse" target="_blank" class=""
                  ><i class="bi bi-reddit hover-glitch"></i
                ></a>
                <a href="https://twitter.com/bgs_house" target="_blank" class=""
                  ><i class="bi bi-twitter hover-glitch"></i
                ></a>
                <a href="https://www.linkedin.com/in/bgs-house-7a5b64220/" target="_blank" class=""
                  ><i class="bi bi-linkedin hover-glitch"></i
                ></a>
                <a href="https://discord.gg/Z9zqsmGstC" target="_blank" class=""
                  ><i class="bi bi-discord hover-glitch"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bg">
        <div class="footer_bg_one"></div>
        <div class="footer_bg_two"></div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-7">
            <p class="mb-0 f_400 hover-glitch">© cakecounter Inc.. 2019 All rights reserved.</p>
          </div>
          <div class="col-lg-6 col-sm-5 text-right">
            <p class="hover-glitch">
              Made with
              <i class="bi bi-bookmark-heart-fill" style="font-size: 0.9rem"></i>
              in
              <a href="https://vuejs.org/" id="footerVueJsLink">VueJs</a>
            </p>
          </div>
        </div>
        <p>
          <a href="#" id="gothetop">Back to Top <i class="bi bi-arrow-up-circle-fill"></i></a>
        </p>
      </div>
    </div>
  </footer>

  <!-- Modal -->
  <div
    class="modal fade bd-example-modal-lg"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">İletişim</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-6">
              <label class="float-start">Ad Soyad</label>
              <input type="text" class="form-control" placeholder="Hasan Çağrı Bozaklı" />
            </div>
            <div class="col-6">
              <label class="float-start">E-mail</label>
              <input type="email" class="form-control" placeholder="ssssssss@hotmail.com" />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-6">
              <label class="float-start">Telefon</label>
              <input type="tel" class="form-control" placeholder="05550841098" />
            </div>
            <div class="col-6">
              <label class="float-start">İletişim Nedeni</label>
              <select
                name="iletisimNedeni"
                id="iNeden"
                style="width: 100%; height: 60%"
                class="form-control"
              >
                <option value="null">Choose...</option>
                <option value="bugReport">Bir Hata Bildirmek...</option>
                <option value="recommendation">Öneride Bulunmak...</option>
                <option value="other">Diğer...</option>
              </select>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-12">
              <label class="float-center">Mesaj</label>
              <textarea style="width: 100%; height: 150px"></textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">İptal</button>
          <button type="button" class="btn btn-primary">Gönder</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myjs from "../myApp.js";

export default {
  name: "BGSFooter",
  props: {
    msg: String,
  },
};

myjs.footerVueJs();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #fbfbfd;
}
input::-webkit-input-placeholder {
  color: black; /*Change the placeholder color*/
  opacity: 0.3; /*Change the opacity between 0 and 1*/
}
.new_footer_area {
  background: #fbfbfd;
}

.new_footer_top {
  padding: 120px 0px 270px;
  position: relative;
  overflow-x: hidden;
}
.new_footer_area .footer_bottom {
  padding-top: 5px;
  padding-bottom: 50px;
}
.footer_bottom {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #7f88a6;
  padding: 27px 0px;
}
.new_footer_top .company_widget p {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  color: #6a7695;
  margin-bottom: 20px;
}
.new_footer_top .company_widget .f_subscribe_two .btn_get {
  border-width: 1px;
  margin-top: 20px;
}
.btn_get_two:hover {
  background: transparent;
  color: #5e2ced;
}
.btn_get:hover {
  color: #fff;
  background: #6754e2;
  border-color: #6754e2;
  -webkit-box-shadow: none;
  box-shadow: none;
}
a:hover,
a:focus,
.btn:hover,
.btn:focus,
button:hover,
button:focus {
  text-decoration: none;
  outline: none;
}
.new_footer_top .f_widget.about-widget .f_list li a:hover {
  color: #5e2ced;
}
.new_footer_top .f_widget.about-widget .f_list li {
  margin-bottom: 11px;
}
.f_widget.about-widget .f_list li:last-child {
  margin-bottom: 0px;
}
.f_widget.about-widget .f_list li {
  margin-bottom: 15px;
}
.f_widget.about-widget .f_list {
  margin-bottom: 0px;
}
.new_footer_top .f_social_icon a {
  width: 44px;
  height: 44px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 1px solid #e2e2eb;
  font-size: 28px;
}
.f_social_icon a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 45px;
  color: #858da8;
  display: inline-block;
  background: #ebeef5;
  text-align: center;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.ti-facebook:before {
  content: "\e741";
}
.ti-twitter-alt:before {
  content: "\e74b";
}
.ti-vimeo-alt:before {
  content: "\e74a";
}
.ti-pinterest:before {
  content: "\e731";
}

.btn_get_two {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #5e2ced;
  border-color: #5e2ced;
  color: #fff;
}

.btn_get_two:hover {
  background: transparent;
  color: #5e2ced;
}

.new_footer_top .f_social_icon a:hover {
  background: #5e2ced;
  border-color: #5e2ced;
  color: white;
}
.new_footer_top .f_social_icon a + a {
  margin-left: 4px;
}
.new_footer_top .f-title {
  margin-bottom: 30px;
  color: #263b5e;
}
.f_600 {
  font-weight: 600;
}
.f_size_18 {
  font-size: 18px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #4b505e;
}
.new_footer_top .f_widget.about-widget .f_list li a {
  color: #6a7695;
}
.bi-send {
  color: #0dcaf0;
  font-size: 1.3rem;
}

.new_footer_top .footer_bg {
  position: absolute;
  bottom: 0;
  background: url("http://droitthemes.com/html/saasland/img/seo/footer_bg.png") no-repeat scroll
    center 0;
  width: 100%;
  height: 266px;
}

.new_footer_top .footer_bg .footer_bg_one {
  background: url("https://1.bp.blogspot.com/-mvKUJFGEc-k/XclCOUSvCnI/AAAAAAAAUAE/jnBSf6Fe5_8tjjlKrunLBXwceSNvPcp3wCLcBGAsYHQ/s1600/volks.gif")
    no-repeat center center;
  width: 330px;
  height: 105px;
  background-size: 100%;
  position: absolute;
  bottom: 0;
  left: 30%;
  -webkit-animation: myfirst 22s linear infinite;
  animation: myfirst 22s linear infinite;
}

.new_footer_top .footer_bg .footer_bg_two {
  background: url("https://1.bp.blogspot.com/-hjgfxUW1o1g/Xck--XOdlxI/AAAAAAAAT_4/JWYFJl83usgRFMvRfoKkSDGd--_Sv04UQCLcBGAsYHQ/s1600/cyclist.gif")
    no-repeat center center;
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 0;
  left: 38%;
  position: absolute;
  -webkit-animation: myfirst 30s linear infinite;
  animation: myfirst 30s linear infinite;
}

.footer_bottom {
  padding-bottom: 0 !important;
}

@-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

/*************footer End*****************/
i {
  color: #9175f9;
  margin: 0;
  padding: 0;
  font-size: 1.9rem;
  text-shadow: 1px 1px black;
}
#gothetop {
  text-decoration: none;
  color: #9175f9;
  margin: 0;
  padding: 0;
  font-size: 18px;
  word-spacing: -1px;
  letter-spacing: -1px;
  line-height: 1.5rem;
  position: relative;
  animation: push ease 1.5s alternate infinite;
  animation-delay: 1.5s;
}
#gothetop i {
  font-size: 1.1rem;
  text-shadow: none;
}

@keyframes push {
  0% {
    left: 0;
    top: 0;
  }

  50% {
    left: 10px;
    top: -10px;
  }
  100% {
    top: -10px;
    left: -10px;
  }
}
</style>
