<template>
  <div id="daily-card">
    <h3 class="title"> {{ title }} </h3>

    <template v-for="(value, title) in incr_values">
      <div class="mini-card" :key="value">
        <h2 class="mini-card-value" v-bind:class="title"> +{{ value | formatNumber }} </h2>
        <h4 class="mini-card-title" v-bind:class="title"> {{ title }} </h4>
      </div>
    </template>

  </div>
</template>


<script>
const axios = require('axios');

export default {
  name: 'DailyCard',
  data() {
    return {
      title: 'Dati di oggi',
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
#daily-card {
  background-color: white;
  width: 90%;
  height: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
}
</style>