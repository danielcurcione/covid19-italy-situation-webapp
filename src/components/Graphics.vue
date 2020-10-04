<template>
  <div id="graphics">

    <MainChart :infetti="infetti" :key="1"></MainChart>
    <SecondaryChart :guariti="guariti" :deceduti="deceduti" :key="2"></SecondaryChart>

  </div>
</template>


<script>
import axios from 'axios'
import MainChart from './graphics/MainChart'
import SecondaryChart from './graphics/SecondaryChart'

export default {
  name: 'Graphics',
  components: {
    MainChart,
    SecondaryChart
  },
  data() {
    return {
      infetti: [],
      guariti: [],
      deceduti: [],
      chartData: [
        {name: 'Infetti', data: []},
        {name: 'Deceduti', data: []},
        {name: 'Guariti', data: []}
      ]
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
      .then(response => {
        for (var i = 1; i < response.data.length; i++) {
          var data = response.data[i].data.split('T')[0]
          var infetti = response.data[i].totale_positivi
          var deceduti = response.data[i].deceduti - response.data[i-1].deceduti
          var guariti = response.data[i].dimessi_guariti - response.data[i-1].dimessi_guariti
          
          this.infetti.push([data, infetti])
          this.deceduti.push([data, deceduti])
          this.guariti.push([data, guariti])
        }
      })
  }
}
</script>


<style scoped>
#graphics {
  padding: 0;
  width: 90%;
  margin: 0 auto;
}
</style>
