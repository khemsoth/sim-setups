<template>
  <div>
    <p>This will be the AC landing page</p>

    <Tracks />
    <VehicleSearch sim='assetto-corsa'/>
  </div>  
</template>

<script>
import Tracks from '../components/Tracks';
import VehicleSearch from '../components/VehicleSearch';

export default {
  components: {
    Tracks,
    VehicleSearch
  },
  props: {
    sim: String
  },
  data() {
    return{
      tracks: [],
      cars: []
   }
  },


}
</script>

<style scoped>

</style>