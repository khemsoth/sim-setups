<template>
<div>
<div class="">
  <button 
    class=""
    id="dropdownButton" 
    v-on:click="toggleDropdown">
    Tracks
  </button>
  <div class="dropdown-menu" id="dropdown-menu" >
    <ul>
      <li 
      v-for="track in tracks" 
      :key="track.id">
      <router-link :to=track.name append>
        {{ track.name }}
      </router-link>


      </li>
    </ul>
  </div>
</div>
</div>
  
</template>

<script>
export default {
  name: 'TracksMenu',
  data() {
    return {
      tracks: [
      {
        id: 1,
        name: 'Barcelona'
      },
      {
        id: 2,
        name: 'Hungaroring'
      },
      {
        id: 3,
        name: 'Zolder'
      },
      {
        id: 4,
        name: 'Spa'
      },
      ]
    }
  },
  methods: {
    toggleDropdown() {
      document.getElementById('dropdown-menu').classList.toggle('show');
      console.log('toggle')
    },
    followLink() {
      let url = window.location.href;
      let dest = url + "'/' + {{track.name}}";
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