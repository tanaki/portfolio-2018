<template>
  <div id="app" class="wrapper" v-bind:class="{ about : ($route.hash == '#about') }">

    <header>
        
      <h1>Nicolas Pigelet</h1>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/">Works</router-link>
          </li>
          <li>
            <router-link to="#about">About</router-link>
          </li>
        </ul>
      </div>

    </header>

    <router-view :key="$route.fullPath" />
    
    <footer>
      &copy; <a href="mailto:nico@nicolaspigelet.com?subject=Take+my+money" target="_blank">Nicolas Pigelet</a> - 2018
    </footer>

    <About />

  </div>
</template>

<script>
import About from './components/About.vue'
import Works from './components/Works.vue'

export default {
  name: 'app',
  components: {
    Works,
    About
  }
}
</script>

<style lang="scss">

  @import './assets/scss/fonts.scss';
  @import './assets/scss/reset.scss';
  @import './assets/scss/main.scss';
</style>
