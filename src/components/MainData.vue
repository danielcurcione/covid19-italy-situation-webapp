<template>
  <div id="main-data">
    
    <template v-for="(value, title) in incr_values">
      <div class="mini-card" :key="value">
        <h2 class="mini-card-value" v-bind:class="title"> +{{ value | formatNumber }} </h2>
        <h3 class="mini-card-title" v-bind:class="title"> {{ title }} </h3>
      </div>
    </template>

  </div>
</template>

<script>
import Vue from 'vue'
var numeral = require("numeral");

Vue.filter("formatNumber", function (value) {
  return numeral(value).format("0,0");
});

const axios = require('axios');

export default {
  name: 'MainData',
  data() {
    return {
      values: {
        infetti: null,
        guariti: null,
        deceduti: null
      },
      incr_values: {
        infetti: null,
        guariti: null,
        deceduti: null
      }
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
      .then(response => {
        var path = response.data[(response.data.length)-1]
        var path_before = response.data[(response.data.length)-2]

        this.incr_values.infetti = path.nuovi_positivi
        this.incr_values.guariti = path.dimessi_guariti - path_before.dimessi_guariti
        this.incr_values.deceduti = path.deceduti - path_before.deceduti
      })
  },
}
</script>

<style scoped>
#main-data {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

div.mini-card {
  width: 30%;
  height: max-content;
  margin-bottom: 15px;
}

h2.mini-card-value {
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
}

h3.mini-card-title {
  margin: 0;
  font-size: 15px;
  text-align: center;
}
.infetti {
  color: #FF9D00;
}
.deceduti {
  color: #FF0000;
}
.guariti {
  color: #0A8B1E;
}
.isolamento, .ospedalizzati, .intensiva, .tamponi {
  color: darkgrey;
}
</style>