<template>
<div>
<div style="width: 40%; margin: 0 auto;" class="">
  <button 
    class="dropdown-toggle"
    id="dropdownButton" 
    v-on:click="toggleDropdown">
    Cars
  </button>
  <div class="dropdown-menu dropdown-list" id="vehicle-dropdown-menu" >
    <ul>
      <li 
      v-for="car in cars" 
      :key="car.id"
      class="dropdown-list-item">
      {{ car.make }} {{ car.model }}
      </li>
    </ul>
  </div>
</div>
</div>
  
</template>

<script>
import axios from 'axios';


export default {
  name: 'VehicleSearch',
  data() {
    return {
      cars: []
    }
  },
  methods: {
    toggleDropdown() {
      document.getElementById('vehicle-dropdown-menu').classList.toggle('show');
    },
  },
  created() {
    let uri = 'http://localhost:4000/get/acccars';
    axios.get(uri)
      .then(res =>{
        this.cars = res.data;
        this.cars.sort((a, b) => (a.name > b.name) ? 1 : -1);
      })
  }

}
</script>

<style scoped>

  .dropdown-toggle {
    background-color: #fff;
    border: #000 solid 1px;
    width: 100%;
  }
  
  .dropdown-menu {
    display: none;
  }
  .show {
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background-color: #fff;
    border: #000 solid 1px;
    width: inherit;
  }



</style>