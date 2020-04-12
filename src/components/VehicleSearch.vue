<template>
<div>
<div class="">
  <button 
    class="dropdown-toggle"
    id="dropdownButton" 
    v-on:click="toggleDropdown">
    Cars
  </button>
  <div class="dropdown-menu" id="vehicle-dropdown-menu" >
    <ul>
      <li 
      v-for="car in cars" 
      :key="car.id">
      {{ car.name }}
      </li>
    </ul>
  </div>
</div>
</div>
  
</template>

<script>
export default {
  name: 'VehicleSearch',
  data() {
    return {
      cars: [
      {
        id: 1,
        name: 'Ford GT GTE'
      },
      {
        id: 2,
        name: 'BMW M8 GTE'
      },
      {
        id: 3,
        name: 'Porsche RSR GTE'
      },
      {
        id: 4,
        name: 'Ferrari 488 GTE'
      },
      ]
    }
  },
  methods: {
    toggleDropdown() {
      document.getElementById('vehicle-dropdown-menu').classList.toggle('show');
    },
    followLink() {
      let url = window.location.href;
      let dest = url + "'/' + {{car.name}}";
      console.log(dest);
      url = url.dest;
    }
  }

}
</script>

<style scoped>
  .dropdown-menu {
    display: none;
  }
  .show {
    display: block;
  }

</style>