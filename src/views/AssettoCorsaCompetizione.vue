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
    clickOut() {
      window.onclick(function() {
        document.getElementById('dropdown-menu').classList.toggle('dropdown-menu')
      })
    }
  }



}
</script>

<style>
  .dropdown-list {
    max-height: 30%;
    overflow: scroll;
  }

  .dropdown-menu {
    display: none;
  }

  .dropdown-list-item:hover {
    background-color: #ccc;
    cursor: pointer;
  }
</style>