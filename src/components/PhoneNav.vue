<template>
  <div>
    <div>
      <!-- SOCIAL PANEL HTML -->
      <div class="nav-panel-container">
        <div class="nav-panel">
          <section class="userPhoneNav float-end" id="avatarCircle">
            <div class="userPhoneNavAvatar">
              <div class="userPhoneNavImage">
                <img
                  src="../assets/images.jpg"
                  alt="{{userPhoneNav.name}}"
                  title="{{userPhoneNav.name}}"
                />
              </div>
            </div>
            <div class="userPhoneNavSettings">
              <ul>
                <li>
                  <a href="/${uid}/profile" class=""
                    ><span class="icon float-start"
                      ><i class="bi bi-person-circle"></i
                    ></span>
                    <span> Profile </span></a
                  >
                </li>
                <li>
                  <a href="/${uid}/settings" class=""
                    ><span class="icon float-start"
                      ><i class="bi bi-gear"></i
                    ></span>
                    <span> Settings</span></a
                  >
                </li>
                <li>
                  <a href="/${uid}/ticket" class=""
                    ><span class="icon float-start"
                      ><i class="bi bi-ticket-perforated-fill"></i
                    ></span>
                    <span> Ticket </span></a
                  >
                </li>
                <li>
                  <a href="/${uid}/logout" class=""
                    ><span class="icon float-start"
                      ><i class="bi bi-door-open-fill"></i
                    ></span>
                    <span> LogOut</span></a
                  >
                </li>
              </ul>
            </div>
          </section>

          <button class="close-btn" @click="closeBtn">
            <i class="bi bi-x-lg"></i>
          </button>
          <span class="float-md-start">
            <router-link to="/" class="NavLink">Anasayfa</router-link> <br />
            <br />
            <router-link to="/about" class="NavLink">Hakkımızda</router-link>
            <br />
            <br />
            <router-link to="/login" class="NavLink">Login</router-link>
          </span>
        </div>
      </div>
      <button class="floating-btn-nav" id="pNavMenu" @click="floatingBtn">
        <i class="bi bi-justify"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "GetInTouch",

  methods: {
    floatingBtn() {
      document
        .querySelector(".nav-panel-container")
        .classList.toggle("visible");
    },
    closeBtn() {
      document
        .querySelector(".nav-panel-container")
        .classList.remove("visible");
    },
  },
};
</script>
<style scope>
.bi-reddit {
  color: #f73e18;
}
.bi-instagram {
  height: 25px !important;
  width: 25px !important;
  line-height: 25px !important;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  color: #fff;
  vertical-align: middle;
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
}
.bi-linkedin {
  color: #3da4ed;
}
.bi-suit-heart-fill {
  background-color: none;
  color: red;
  text-shadow: 0.5px 0.5px white;
  cursor: cell;
}
.bi-justify {
  font-size: 1.9rem;
  color: coral;
}
@font-face {
  font-family: "Muli";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40eiNxw.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Muli";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50eiNxw.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Muli";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30eg.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

* {
  box-sizing: border-box;
}

/* INSERT CSS HERE */

/* SOCIAL PANEL CSS */
.nav-panel-container {
  z-index: 20;
  position: fixed;
  left: -800px;
  top: 0px;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;
}

.nav-panel-container.visible {
  transform: translateX(800px);
}

.nav-panel {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
  border: 3px solid #42b983;
  display: flex;
  flex-direction: column;
  justify-content: none;
  align-items: center;
  font-family: "Muli";
  position: relative;
  height: 490px;
  width: 250px;
  max-width: calc(100% - 10px);
}

.nav-panel button.close-btn {
  height: 30px;
  width: 30px;
  border: 0;
  color: #97a5ce;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  border-radius: 50%;
  top: 5px;
  right: 5px;
}
.bi-x-lg {
  color: black;
  font-weight: 900;
}
.nav-panel button.close-btn:focus {
  color: #001f61;
}
.nav-panel button.close-btn:hover {
  background-color: #ac1818;
}
.nav-panel button.close-btn:hover .bi-x-lg {
  color: white;
}

.floating-btn-nav {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  padding: 0px 0px;
  position: fixed;
  top: 15px;
  left: 0px;
  z-index: 2;
  animation: push ease-in-out 1s alternate infinite;
  animation-delay: 1.5s;
  border: none;
  background: transparent;
  margin: 15px !important;
}

@media screen and (max-width: 480px) {
  .nav-panel-container.visible {
    transform: translateX(0px);
  }

  .floating-btn-nav {
    right: 10px;
  }
}
.floating-btn-nav:focus {
  animation: none;
  animation-delay: none;
}

@keyframes push {
  0% {
    right: 5px;
    bottom: 5px;
  }

  50% {
    right: 15px;
    bottom: 15px;
  }
  100% {
    bottom: 5px;
    right: 5px;
  }
}

.NavLink {
  font-weight: bold;
  color: #2c3e50;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
}
.NavLink a.router-link-exact-active {
  color: #42b983 !important;
}

#pNavMenu {
  display: none;
}

.userPhoneNavSettings a {
  width: 100%;
  text-decoration: none;
  color: #2c3e50;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.icon {
  line-height: 18px;
}
.icon i {
  color: #42b983;
  text-shadow: 1px #8fdbfa;
  font-size: 22px;
}
.ol,
ul {
  padding: 0rem !important;
  margin: 0rem !important;
}
.userPhoneNav {
  widows: fixed;
}
.userPhoneNavAvatar {
  width: 50px;
  height: 50px;
  background-color: red;
  margin-left: 1%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.userPhoneNavImage img {
  position: absolute;
  top: 0px;
  right: 0px;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  background-size: 50px 50px;
  cursor: pointer;
}
.userPhoneNavSettings {
  padding: 0px !important;
  margin: 0px !important;
  height: fixed;
  width: 100px;
  text-align: center;
  display: none;
  z-index: -5;
  border: #42b983 solid 1px;
  border-radius: 5px;
}
.userPhoneNavSettings > ul > li {
  margin: 0;
  list-style: none;
  border: solid 1px #42b983;
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 5px;
  z-index: -1;
  margin-top: 7px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
}

.userPhoneNav:active .userPhoneNavSettings {
  display: inline-block;
  position: absolute; /*Bu Kısıma Bakılacak userPhoneNav settingsin hizalanmasıyla alaklı bir sıkıntı var*/
  z-index: 6;
  margin-left: -48px !important;
  margin-top: 0px !important;
}
section {
  position: relative;
}
</style>
