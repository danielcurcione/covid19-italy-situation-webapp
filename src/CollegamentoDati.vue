<template>
  <div id="dati">

    <h1>DATI SITUAZIONE COVID IN ITALIA</h1>
    

    <template v-for="(value, title) in values">
      <li :key="value"> {{ title }} : {{ value }} </li>
      
    </template>

  </div>
</template>

<script>

const axios = require('axios');

export default {
  name: 'Dati',
  data() {
    return {
      values: []
    }
  },
  mounted() {
        axios
          .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
          .then(response => {
              this.values = response.data[(response.data.length)-1]
              console.log(this.values)
          })
  },
}
</script>

<style scoped>

</style>
