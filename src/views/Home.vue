<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Choose a Simulator:</h2>
    <div class="sim-list">
      <img src="../assets/assetto-corsa-logo.jpg" class="logo img-fluid" alt="Responsive image">
      <img src="../assets/acc-logo.webp" class="logo img-fluid" alt="Responsive image">
      <img src="../assets/iracing-logo.jpg" class="logo img-fluid" alt="Responsive image">
      <img src="../assets/raceroom-logo.png" class="logo img-fluid" alt="Responsive image">
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
