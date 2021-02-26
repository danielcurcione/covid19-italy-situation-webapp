<template>
  <div id="vaccine-card">
    <h3 class="title"> {{ title }} </h3>

    <template v-for="(value, title) in values">
      <div class="mini-card" :key="value">
        <h2 class="mini-card-value vaccinati" v-bind:class="title"> {{ value | formatNumber }} </h2>
        <h4 class="mini-card-title vaccinati" v-bind:class="title"> {{ title | formatTitle }} </h4>
      </div>
    </template>

  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'VaccineCard',
  data() {
    return {
      title: 'Somministrazione vaccini',
      values: {
        prima_dose: null,
        seconda_dose: null
      }
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/somministrazioni-vaccini-summary-latest.json')
      .then(response => {
        this.values.prima_dose = 0;
        this.values.seconda_dose = 0;

        for (var i = 0; i < response.data.data.length; i++) {
            this.values.prima_dose += response.data.data[i].prima_dose;
            this.values.seconda_dose += response.data.data[i].seconda_dose;
        }
        // var path = response.data[(response.data.length)-1]
        // var path_before = response.data[(response.data.length)-2]

        // this.incr_values.infetti = path.nuovi_positivi
        // this.incr_values.guariti = path.dimessi_guariti - path_before.dimessi_guariti
      })
  },
  filters: {
    formatTitle: function (title) {
      return title.replace('_', ' ');
    }
  }
}

</script>


<style scoped>
#vaccine-card {
  background-color: rgb(42, 42, 42);
  width: 100%;
  height: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
  border-radius: 8px;
}

div.mini-card {
  width: 40%;
}
</style>