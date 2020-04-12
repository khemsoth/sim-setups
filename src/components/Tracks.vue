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
      document.getElementById('track-dropdown-menu').classList.toggle('show');
    },
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