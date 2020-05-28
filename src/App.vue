<template>
  <div id="app">

    <h1>{{ title }}</h1>

    <DailyCard></DailyCard>

    <SummaryCard></SummaryCard>

    <RegionsCard></RegionsCard>

  </div>
</template>


<script>
import Vue from 'vue'
import DailyCard from './components/DailyCard'
import SummaryCard from './components/SummaryCard'
import RegionsCard from './components/RegionsCard'

export default {
  name: 'App',
  data() {
    return {
      title: 'Covid-19'
    }
  },
  components: {
    DailyCard,
    SummaryCard,
    RegionsCard
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
  margin: 0;
  padding: 0;
  padding-bottom: 50px;
  background-color: #000000;
}

h1 {
  color: white;
  font-size: 35px;
  line-height: 100px;
  font-weight: bold;
  text-align: center;
  margin: 0;
}
</style>
