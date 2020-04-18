<template>
<div>
  <div>
    <select class="dropdown">
      <option value='' selected disabled hidden>Car</option> 
      <option 
      v-for="car in cars" 
      :key="car.id"
      class="dropdown-item">
      {{ car.make }} {{ car.model }}
      </option>
    </select>
  </div>
</div>
  
</template>

<script>
import axios from 'axios';


export default {
  name: 'VehicleSearch',
  props: {
    sim: String
  },
  data() {
    return {
      cars: []
    }
  },
  methods: {

  },
  created() {
    let uri = 'http://localhost:4000/get/' + this.sim + '-cars';
    console.log(this.sim);
    axios.get(uri)
      .then(res =>{
        this.cars = res.data;
        this.cars.sort((a, b) => (a.name > b.name) ? 1 : -1);
      })
  }

}
</script>

<style scoped>

</style>