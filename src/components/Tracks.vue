<template>
<div>
  <div>
    <select class="dropdown">
      <option value='' selected disabled hidden>Track</option> 
      <option 
      v-for="track in tracks" 
      :key="track.id"
      class="dropdown-item"
      >
      {{ track.name }}
      </option>
    </select>
  </div>
</div>

  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tracks: [],
    }
  },
  methods: {

  },
  created() {
    let uri = 'http://localhost:4000/get/acctracks';
    axios.get(uri)
    .then(res => {
      this.tracks = res.data;
      this.tracks.sort((a, b) => (a.name > b.name) ? 1 : -1);
      });
  }

}
</script>

<style scoped>

</style>