<template>
  <div>
    <div>
      <!-- SOCIAL PANEL HTML -->
      <div class="social-panel-container">
        <div class="social-panel">
          <p>
            Raijuu <i class="bi bi-suit-heart-fill"></i>
            <a target="_blank" href="https://www.instagram.com/son_hak_shogun/">Web Developer</a>
          </p>
          <button class="close-btn" @click="closeBtn">
            <i class="bi bi-x-lg"></i>
          </button>
          <h4>Get in touch on</h4>
          <ul>
            <li>
              <a href="https://github.com/hasanreus1" target="_blank">
                <i class="fbi bi-github"></i>
              </a>
              <span class="linktext">GitHub</span>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hasan-%C3%A7a%C4%9Fr%C4%B1-bozakl%C4%B1-197987204/"
                target="_blank"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <span class="linktext">LinkedIn</span>
            </li>
            <li>
              <a href="https://www.instagram.com/son_hak_shogun/" target="_blank">
                <i class="bi bi-instagram"></i>
              </a>
              <span class="linktext">Instagram</span>
            </li>
            <li>
              <a href="https://www.reddit.com/user/BGSHouse" target="_blank">
                <i class="bi bi-reddit"></i>
              </a>
              <span class="linktext">Reddit</span>
            </li>
          </ul>
          <!-- Change Lang -->
          <div class="locale-changer">
            <select v-model="$i18n.locale">
              <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                {{ lang }}
              </option>
            </select>
          </div>
          <!-- Change Lang End -->
        </div>
      </div>
      <button class="floating-btn" @click="floatingBtn">
        <i class="bi bi-share-fill"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "GetInTouch",

  data() {
    return { langs: ["tr", "en"] };
  },
  methods: {
    floatingBtn() {
      document.querySelector(".social-panel-container").classList.toggle("visible");
    },
    closeBtn() {
      document.querySelector(".social-panel-container").classList.remove("visible");
    },
  },
};
</script>
<style type="text/css">
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
@font-face {
  font-family: "Muli";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk40eiNxw.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0,
    U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Muli";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk50eiNxw.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113,
    U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Muli";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/muli/v22/7Aulp_0qiz-aVz7u3PJLcUMYOFnOkEk30eg.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F,
    U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

* {
  box-sizing: border-box;
}

/* INSERT CSS HERE */

/* SOCIAL PANEL CSS */
.social-panel-container {
  z-index: 20;
  position: fixed;
  right: 0;
  bottom: 80px;
  transform: translateX(100%);
  transition: transform 0.4s ease-in-out;
}

.social-panel-container.visible {
  transform: translateX(-10px);
}

.social-panel {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
  border: 5px solid #001f61;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Muli";
  position: relative;
  height: 169px;
  width: 370px;
  max-width: calc(100% - 10px);
}

.social-panel button.close-btn {
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
.social-panel button.close-btn:focus {
  color: #001f61;
}
.social-panel button.close-btn:hover {
  background-color: #ac1818;
}
.social-panel button.close-btn:hover .bi-x-lg {
  color: white;
}

.social-panel p {
  background-color: #001f61;
  border-radius: 0 0 10px 10px;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  padding: 2px 17px 6px;
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0;
  transform: translateX(-50%);
  text-align: center;
  width: 270px;
}

.social-panel p i {
  margin: 0 5px;
}

.social-panel p a {
  color: #ff7500;
  text-decoration: none;
}

.social-panel h4 {
  margin: 20px 0;
  color: #97a5ce;
  font-family: "Muli";
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
}

.social-panel ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.social-panel ul li {
  margin: 0 10px;
}

.social-panel ul li a {
  border: 1px solid #dce1f2;
  border-radius: 50%;
  color: #001f61;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  text-decoration: none;
}

.social-panel ul li a:hover {
  border-color: #ff6a00;
  box-shadow: 0 9px 12px -9px #ff6a00;
}
.social-panel ul li:hover .linktext {
  color: black;
}
.linktext {
  color: #c6c6c6;
  font-size: 0.8rem;
  line-height: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
}
.floating-btn {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #001f61;
  border: 1px solid #001f61;
  box-shadow: 0 16px 22px -17px #03153b;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  padding: 0px 0px;
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 999;
  animation: push ease-in-out 1s alternate infinite;
  animation-delay: 1.5s;
}

.floating-btn:hover {
  background-color: #ffffff;
  color: #001f61;
}

.floating-btn:focus {
  outline: none;
}

@media screen and (max-width: 480px) {
  .social-panel-container.visible {
    transform: translateX(0px);
  }

  .floating-btn {
    right: 10px;
  }
}
.floating-btn:focus {
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
</style>
