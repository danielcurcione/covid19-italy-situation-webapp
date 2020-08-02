<template>
  <div id="main-chart">

    <h3 class="title"> {{ title }} </h3>
    
    <area-chart :width="large + '%'" height="300px" id="chart" :data="chartData" :legend="false" :max="120000" thousands=" "
      :dataset="{ 
                  width: large + '%',
                  height: '300px',
                  borderWidth: .2,
                  pointStyle: 'line',
                  borderColor: 'rgba(255, 255, 0, 1)',
                  backgroundColor: 'rgba(255, 210, 80, .6)',
                  stepSize: '0.5'}">
    </area-chart>



  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'MainChart',
  data() {
    return {
      title: 'Infetti',
      large: 100,
      chartData: []
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json')
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          var data = response.data[i].data.split('T')[0] // data (string)
          var infetti = response.data[i].totale_positivi // infetti (number)
          var values = [data, infetti]

          this.chartData.push(values)
        }
      })
  }
}
</script>


<style scoped>
#main-chart {
  background-color: rgb(42, 42, 42);
  width: 100%;
  height: max-content;
  padding: 10px 0;
  margin: 0 auto;
  box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
  border-radius: 8px;
}

#chart {
  height: 500px;
}

h3.title {
  width: 100%;
  margin: 10px 0;
  padding: 0;
}
</style>
