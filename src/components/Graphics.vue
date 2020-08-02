<template>
  <div id="graphics">

    <MainChart></MainChart>

  </div>
</template>


<script>
import MainChart from './graphics/MainChart'

export default {
  name: 'Graphics',
  components: {
    MainChart
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
