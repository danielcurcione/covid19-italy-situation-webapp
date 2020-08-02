<template>
  <div id="regions-card">
    <h3 class="title"> {{ title }} </h3>

    <div class="index">
      <div class="title">
        <h5> infetti attuali </h5>
        <h5> guariti totali </h5>
        <h5> deceduti totali </h5>
      </div>
    </div>

    <template v-for="obj in regions_values">
      <div class="mini-card" :key="obj.name">
        <h4 class="mini-card-title"> {{ obj.name }} </h4>
        <h2 class="mini-card-value infetti"> {{ obj.infetti | formatNumber }} </h2>
        <h2 class="mini-card-value guariti"> {{ obj.guariti | formatNumber }} </h2>
        <h2 class="mini-card-value deceduti"> {{ obj.deceduti | formatNumber }} </h2>
      </div>
    </template>

  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'RegionsCard',
  data() {
    return {
      title: 'Dati per regione',
      regions_values: []
    }
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
      .then(response => {
        for (var i = 1; i < 22; i++) {
          var x = {
            name: response.data[response.data.length-i].denominazione_regione,
            infetti: response.data[response.data.length-i].totale_positivi,
            guariti: response.data[response.data.length-i].dimessi_guariti,
            deceduti: response.data[response.data.length-i].deceduti
          }

          this.regions_values.push(x);
          this.regions_values.sort(this.reverse_sort)
        }
      })
  },
  methods: {
    reverse_sort: function(a, b){
      if(a.infetti > b.infetti){
        return -1;
      }else if(a.infetti < b.infetti){
        return 1;
      }else{
        return 0;
      }
    }
  },
}
</script>


<style scoped>
#regions-card {
  background-color: rgb(42, 42, 42);
  width: 100%;
  height: max-content;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.1);
  border-radius: 8px;
}

div.index {
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

div.index div.title {
  width: 57%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

div.index div.title h5 {
  color: grey;
  width: 100%;
  margin: 0 5px;
  text-align: center;
  font-size: 12px;
}

div.mini-card {
  width: 95%;
  height: max-content;
  margin: 0 auto;
  padding: 0;
  text-align: start;
  display: flex;
  flex-direction: row;
}

h4 {
  width: 45%;
  margin: 5px;
  margin-left: 0;
  margin-bottom: 15px;
  color: white;
}

h2 {
  text-align: center;
  width: 20%;
  font-size: 15px;
  margin: 5px 0;
  margin-bottom: 15px;
}
</style>
