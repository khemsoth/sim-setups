<template>
  <div class="home">
    <h2>Choose a Simulator:</h2>
    <div class="sim-list">
      <router-link to="/assetto-corsa">
        <img src="../assets/assetto-corsa-logo.jpg" class="logo img-fluid" alt="AC logo">
      </router-link>
      <router-link to="/acc">
        <img src="../assets/acc-logo.webp" class="logo img-fluid" alt="ACC logo">
      </router-link>
      <router-link to="/iracing">
        <img src="../assets/iracing-logo.jpg" class="logo img-fluid" alt="iRacing logo">
      </router-link>
      <router-link to="/raceroom">  
        <img src="../assets/raceroom-logo.png" class="logo img-fluid" alt="RaceRoom logo">
      </router-link>  
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
  .sim-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    max-width: 400px;
    margin: .5rem;
    padding: .5rem;
  }

  .logo:hover {
    cursor: pointer;
  }
</style>
