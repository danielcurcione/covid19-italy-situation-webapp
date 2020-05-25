<template>
  <div id="app">

    <h1> {{ title }} </h1>

    <DailyCard></DailyCard>

    <SummaryCard></SummaryCard>

  </div>
</template>


<script>
import Vue from 'vue'
import DailyCard from './components/DailyCard'
import SummaryCard from './components/SummaryCard'

export default {
  name: 'App',
  data() {
    return {
      title: 'Covid-19'
    }
  },
  components: {
    DailyCard,
    SummaryCard
  }
}

var numeral = require("numeral");
Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0");
});
</script>


<style scoped>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #294181;
}

h1 {
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  line-height: 100px;
}
</style>
