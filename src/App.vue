<template>
  <div id="app">

    <h1> {{ title }} </h1>

    <MainCard></MainCard>

  </div>
</template>

<script>

import MainCard from './components/MainCard'

export default {
  name: 'App',
  data() {
    return {
      title: 'Covid-19'
    }
  },
  components: {
    MainCard
  }
}

</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #294181;
}

h1 {
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  line-height: 100px;
}
</style>
