<template>
  <div id="app">

    <h1>{{ title }}</h1>
    <h3>{{ fase }}</h3>
    
    <SectionSwitch></SectionSwitch>

    <div id="credits">
      <h4> Powered by Daniel Curcione </h4>
      <a href="https://www.linkedin.com/in/danielcurcione/">  <img src="./assets/linkedin-logo.svg">  </a>
      <a href="https://www.github.com/danielcurcione/">       <img src="./assets/github-logo.svg">    </a>
      <a href="https://www.facebook.com/daniel.curcione.1">   <img src="./assets/facebook-logo.svg">  </a>
      <a href="https://www.instagram.com/daniel_curcione/">   <img src="./assets/instagram-logo.svg"> </a>
    </div>

  </div>
</template>


<script>
import Vue from 'vue'
import SectionSwitch from './components/SectionSwitch'

export default {
  name: 'App',
  data() {
    return {
      title: 'Covid-19 Italia',
      fase: 'FASE 4'
    }
  },
  components: {
    SectionSwitch
  }
}

var numeral = require("numeral");
Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0");
});

Vue.filter("formatDate", function (value) {
  var today = new Date().getDate();
  if (value == today) return 'oggi'
  else return 'ieri'
});
</script>


<style scoped>
#app {
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 40px;
  background-color: #000000;
}

h1 {
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding-top: 50px;
}

h3 {
  margin: 0;
  text-align: center;
  color: rgb(72, 215, 237);
  animation: title-anim 2s infinite;
  padding-top: 10px;
  padding-bottom: 50px;
  font-weight: bold;
}

#credits {
  text-align: center;
}

h4 {
  color: white;
  margin-top: 40px;
  margin-bottom: 25px;
  text-align: center;
}

img {
  margin: 0 15px;
  height: 20px;
}

@keyframes title-anim {
  0% {
    color: rgb(72, 215, 237);
  }

  50% {
    color: white;
  }
}
</style>
