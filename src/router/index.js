import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import iRacing from '../views/iRacing';
import AssettoCorsa from '../views/AssettoCorsa';
import AssettoCorsaCompetizione from '../views/AssettoCorsaCompetizione';
import RaceRoom from '../views/RaceRoom';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/iracing',
    name: 'iRacing',
    component: iRacing
  },
  {
    path: '/assetto-corsa',
    name: 'Assetto Corsa',
    component: AssettoCorsa
  },
  {
    path: '/acc',
    name: 'Assetto Corsa Competizione',
    component: AssettoCorsaCompetizione
  },
  {
    path: '/raceroom',
    name: 'RaceRoom',
    component: RaceRoom
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
