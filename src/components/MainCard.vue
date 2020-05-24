<template>
    <div id="main-card">
      <h3> {{ title }} </h3>
      <hr>

      <MainData></MainData>
        
    </div>
</template>

<script>
import MainData from './MainData'

export default {
  name: 'MainCard',
  data() {
    return {
      title: 'Dati giornalieri'
    }
  },
  components: {
    MainData
  }
}

</script>

<style scoped>
#main-card {
  background-color: rgb(68, 68, 68);
  width: 90%;
  height: max-content;
  margin: 0 auto;
  border-radius: 10px;
}

h3 {
  text-align: center;
  line-height: 60px;
  font-weight: 600;
  margin: 0;
  color: white
}

hr {
  width: 90%;
  border: 0.5px solid white;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>