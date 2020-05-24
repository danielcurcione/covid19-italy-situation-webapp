<template>
  <div id="main-data">
    
    <template v-for="(value, title) in values">
      <div class="mini-card" :key="value">
        <h3 class="mini-card-title" v-bind:class="title"> {{ title }} </h3>
        <h2 class="mini-card-value"> {{ value | formatNumber}} </h2>
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
  name: 'Dati',
  data() {
    return {
      values: {
        infetti: null,
        guariti: null,
        deceduti: null,

        isolamento: null,
        ospedalizzati: null,
        intensiva: null,

        tamponi: null
      }
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
      .then(response => {
        var path = response.data[(response.data.length)-1]
        this.values.infetti = path.totale_positivi
        this.values.guariti = path.dimessi_guariti
        this.values.deceduti = path.deceduti
        
        this.values.isolamento = path.isolamento_domiciliare
        this.values.ospedalizzati = path.totale_ospedalizzati
        this.values.intensiva = path.terapia_intensiva

        this.values.tamponi = path.tamponi
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
  margin-top: 5px;
  font-size: 22px;
  text-align: center;
  color: white;
  font-weight: 600;
}

h3.mini-card-title {
  margin: 0;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
}
.infetti {
  color: rgb(255, 217, 0);
}
.deceduti {
  color: rgb(255, 65, 65);
}
.guariti {
  color: rgb(0, 223, 0);
}
.isolamento, .ospedalizzati, .intensiva, .tamponi {
  color: darkgrey;
}
</style>