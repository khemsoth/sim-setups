<template>
<div>
<div class="">
  <button 
    class="dropdown-toggle"
    id="dropdownButton" 
    v-on:click="toggleDropdown">
    Tracks
  </button>
  <div class="dropdown-menu" id="track-dropdown-menu" >
    <ul>
      <li 
      v-for="track in tracks" 
      :key="track.id">
      {{ track.name }}
      </li>
    </ul>
  </div>
</div>
</div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tracks: []
    }
  },
  methods: {
    toggleDropdown() {
      document.getElementById('track-dropdown-menu').classList.toggle('show');
    },
  },
  created() {
    let uri = 'http://localhost:4000/get/acctracks';
    axios.get(uri)
    .then(res => {this.tracks = res.data});
  }

}
</script>

<style scoped>
  .dropdown-toggle {
    background-color: #fff;
    border: #000 solid 1px;
    width: 40%;
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