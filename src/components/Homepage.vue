<template>
  <div id="homepage">

    <VaccineCard></VaccineCard>
    <DailyCard></DailyCard>
    <SummaryCard></SummaryCard>
    <RegionsCard></RegionsCard>

  </div>
</template>


<script>
import VaccineCard from './homepage/VaccineCard'
import DailyCard from './homepage/DailyCard'
import SummaryCard from './homepage/SummaryCard'
import RegionsCard from './homepage/RegionsCard'

export default {
  name: 'Homepage',
  components: {
    VaccineCard,
    DailyCard,
    SummaryCard,
    RegionsCard
  }
}
</script>


<style scoped>
#homepage {
  padding: 0;
  width: 90%;
  margin: 0 auto;
}
</style>
