<template>
  <div id="webMenu">
    <span class="float-start mt-3" id="headerIcon">
      <a href="/"><img alt="BGS logo" src="../assets/logo.png" /></a>
    </span>

    <section class="user float-end" id="avatarCircle">
      <div class="userAvatar">
        <div class="userImage">
          <img src="../assets/images.jpg" alt="{{user.name}}" title="{{user.name}}" />
        </div>
      </div>
      <div class="userSettings">
        <ul>
          <li>
            <a href="/${uid}/profile" class=""
              ><span class="icon float-start"><i class="bi bi-person-circle"></i></span>
              <span> {{ $t("userSettings.profile") }} </span></a
            >
          </li>
          <li>
            <a href="/${uid}/settings" class=""
              ><span class="icon float-start"><i class="bi bi-gear"></i></span>
              <span> {{ $t("userSettings.settings") }}</span></a
            >
          </li>
          <li>
            <a href="/${uid}/ticket" class=""
              ><span class="icon float-start"><i class="bi bi-ticket-perforated-fill"></i></span>
              <span> {{ $t("userSettings.report") }} </span></a
            >
          </li>
          <li>
            <a href="/${uid}/logout" class=""
              ><span class="icon float-start"><i class="bi bi-door-open-fill"></i></span>
              <span> {{ $t("userSettings.logout") }}</span></a
            >
          </li>
        </ul>
      </div>
    </section>

    <div id="nav" class="mt-3">
      <span class="float-md-end mt-3 m-2">
        <router-link to="/">{{ $t("nav.home") }}</router-link> |
        <router-link to="/about">{{ $t("nav.about") }}</router-link> |
        <router-link to="/login">{{ $t("nav.login") }}</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import myjs from "../myApp.js";

export default {
  name: "BGSHeader",
  props: {
    msg: String,
  },
};

myjs.headerVueJs();
myjs.PhoneNav();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0px;
}
a {
  color: #42b983;
}
img {
  width: 150px;
  padding: 0;
  margin: 0;
}
.userSettings a {
  width: 100%;
  text-decoration: none;
  color: #2c3e50;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
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
.user {
  widows: fixed;
}
.userAvatar {
  width: 50px;
  height: 50px;
  background-color: red;
  margin-left: 1%;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.userImage img {
  position: absolute;
  top: 0px;
  right: 0px;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  background-size: 50px 50px;
  cursor: pointer;
}
.userSettings {
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
.userSettings > ul > li {
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

.user:hover .userSettings {
  display: inline-block;
  position: absolute; /*Bu Kısıma Bakılacak user settingsin hizalanmasıyla alaklı bir sıkıntı var*/
  z-index: 6;
  margin-left: -48px !important;
  margin-top: 0px !important;
}
section {
  position: relative;
}
</style>
