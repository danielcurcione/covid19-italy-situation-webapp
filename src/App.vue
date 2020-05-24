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
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
}

h1 {
  text-align: center;
  color: red;
  font-weight: 800;
}
</style>
