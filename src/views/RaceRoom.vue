<template>
  <div>
    <p>This will be the R3E landing page</p>

    <Tracks />
    <VehicleSearch />
  </div>  
</template>

<script>
import Tracks from '../components/Tracks';
import VehicleSearch from '../components/VehicleSearch';

export default {
    components: {
      Tracks,
      VehicleSearch
  }

}
</script>

<style scoped>

</style>