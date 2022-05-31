<template>
  <PhoneNav />
  <div class="container" align="center">
    <BGSHeader msg="Welcome to Your Vue.js App" />

    <router-view />
  </div>

  <BGSFooter class="" />
  <!-- https://codepen.io/baahubali92/pen/KbRBxJ  <--Normal Bir Footer    https://codepen.io/tgeorgetom/pen/LYEOLNv <-- Kullandığım Footer      -->
  <GetInTouch />
</template>

<script>
// @ is an alias to /src
import BGSHeader from "@/components/BGSHeader.vue";
import BGSFooter from "@/components/BGSFooter.vue";
import GetInTouch from "@/components/GetInTouch.vue";
import PhoneNav from "@/components/PhoneNav.vue";

export default {
  name: "Home",
  components: {
    BGSHeader,
    BGSFooter,
    GetInTouch,
    PhoneNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
  width: 100%;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.hover-glitch:hover {
  animation: glitch 0.2s 0.2s steps(100);
  backface-visibility: hidden;
}
/* h1{
  font-size:1.9rem; 
  padding-top:.3rem;
  font-family: Courier;
  font-weight:900;
  font-style: italic;
  background: #121FCF;
  background: -webkit-linear-gradient(to bottom right, #121FCF 0%, #CF1512 93%);
  background: -moz-linear-gradient(to bottom right, #121FCF 0%, #CF1512 93%);
  background: linear-gradient(to bottom right, #121FCF 0%, #CF1512 93%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
} */

@keyframes glitch {
  0% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  1% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  2% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  3% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  4% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  5% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  6% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  7% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  8% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  9% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  10% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  11% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  12% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  13% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  14% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  15% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  16% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  17% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  18% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  19% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  20% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  21% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  22% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  23% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  24% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  25% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  26% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  27% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  28% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  29% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  30% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  31% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  32% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  33% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  34% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  35% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  36% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  37% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  38% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  39% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  40% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  41% {
    text-shadow: 45px 0 0 cyan, -45px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  42% {
    text-shadow: 0 0 0 cyan, 0 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  43% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  44% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  45% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  46% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  47% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  48% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  49% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  50% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  51% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  52% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  53% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  54% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  55% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  56% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  57% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  58% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  59% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  60% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  61% {
    text-shadow: 30px 0 0 #ff0, -30px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  62% {
    text-shadow: 0 0 0 #ff0, 0 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  63% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  64% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  65% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  66% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 cyan;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  67% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  68% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  69% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  70% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  71% {
    text-shadow: 50px 0 0 #ff0, -50px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  72% {
    text-shadow: 0 0 0 #ff0, 0 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  73% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  74% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  75% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  76% {
    text-shadow: 3px 0 0 #ff0, -3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  77% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  78% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  79% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  80% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  81% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  82% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  83% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  84% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  85% {
    text-shadow: 1px 0 0 #ff0, -1px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  86% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  87% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0.5px);
    filter: blur(0.5px);
  }
  88% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  89% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  90% {
    text-shadow: -3px 0 0 #ff0, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  91% {
    text-shadow: 60px 0 0 #f0f, -60px 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  92% {
    text-shadow: 0 0 0 #f0f, 0 0 0 cyan;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  92% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  93% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  94% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  95% {
    text-shadow: 0.8px 0 0 cyan, -0.8px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  96% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  97% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  98% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  99% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  100% {
    text-shadow: -3px 0 0 cyan, 3px 0 0 #f0f;
    -webkit-filter: blur(0);
    filter: blur(0);
  }
}
</style>
