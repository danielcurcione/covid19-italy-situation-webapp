<template>
  <div id="main-chart">

    <h3 class="title"> {{ title }} </h3>
    
    <area-chart
      :data="infetti"
      width="100%" height="250px" :legend="false" min="0" :max="maxInfetti" thousands=" "
      :dataset="{ 
                  width:'100%',
                  height: '250px',
                  borderWidth: .2,
                  pointStyle: 'line',
                  borderColor: 'rgba(255, 255, 0, 1)',
                  backgroundColor: 'rgba(255, 210, 80, .6)'}">
    </area-chart>

  </div>
</template>


<script>
export default {
  name: 'MainChart',
  data() {
    return {
      title: 'Andamento infetti',
    }
  },
  props: ['infetti', 'maxInfetti']
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

h3.title {
  width: 100%;
  margin: 10px 0;
  padding: 0;
}
</style>
