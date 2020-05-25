<template>
    <div id="main-card">
      
      <h3> {{ title }} </h3>
      <MainData></MainData>
        
    </div>
</template>

<script>
import MainData from './MainData'

export default {
  name: 'MainCard',
  data() {
    return {
      title: 'Dati di oggi'
    }
  },
  components: {
    MainData
  }
}

</script>

<style scoped>
#main-card {
  background-color: white;
  width: 90%;
  height: max-content;
  margin: 0 auto;
}

h3 {
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: black;
}
</style>