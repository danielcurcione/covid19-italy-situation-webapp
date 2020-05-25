<template>
  <div id="summary-card">
    <h3 class="title"> {{ title }} </h3>

    <template v-for="(value, title) in values">
      <div class="mini-card" :key="value">
        <h2 class="mini-card-value" v-bind:class="title"> {{ value | formatNumber }} </h2>
        <h4 class="mini-card-title" v-bind:class="title"> {{ title }} </h4>
      </div>
    </template>
      
  </div>
</template>


<script>
const axios = require('axios');

export default {
  name: 'SummaryCard',
  data() {
    return {
      title: 'Dati complessivi',
      values: {
        infetti: null,
        guariti: null,
        deceduti: null,
        isolati: null,
        ospedalizzati: null,
        gravi: null,
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
        this.values.isolati = path.isolamento_domiciliare
        this.values.ospedalizzati = path.totale_ospedalizzati
        this.values.gravi = path.terapia_intensiva
        this.values.tamponi = path.tamponi 
      })
  }
}
</script>


<style scoped>
#summary-card {
  background-color: white;
  width: 90%;
  height: max-content;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.1);
}
</style>