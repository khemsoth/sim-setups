<template>
  <div>
    <p>This will be the ACC landing page</p>

    <Tracks />
    <VehicleSearch />

    <button>Search</button>
  </div>  
</template>

<script>
const axios = require('axios');

import Tracks from '../components/Tracks';
import VehicleSearch from '../components/VehicleSearch';

export default {
  name: 'ACCPage',
  components: {
    Tracks,
    VehicleSearch
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