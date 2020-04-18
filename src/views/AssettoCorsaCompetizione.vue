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
  methods: {

  }



}
</script>

<style>
.btn {
  width: 60%;
  margin-bottom: 1rem;
}

.btn-secondary {
  background-color: #fff;
  color: #444;
}

.dropdown-menu {
  width: 60%;
}

.dropdown-menu ul {
    list-style-type: none;
    text-align: center;
}

.dropdown-list-item:hover {
  background-color: #ddd;
  cursor: pointer;
}

.dropdown {
  width: 50%;
  text-align: center;
}


</style>