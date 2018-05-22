<template>
  <div id="app" class="wrapper">

    <header>
        
      <h1>Nicolas Pigelet</h1>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/">Works</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>

    </header>

    <router-view :key="$route.fullPath" />
    
    <footer>
      &copy; 2018 - <a href="mailto:nico@nicolaspigelet.com?subject=Take+my+money" target="_blank">Nicolas Pigelet</a>
    </footer>

  </div>
</template>

<script>
import Works from './components/Works.vue'

export default {
  name: 'app',
  components: {
    Works
  }
}
</script>

<style lang="scss">

  @import './assets/scss/fonts.scss';
  @import './assets/scss/reset.scss';
  @import './assets/scss/main.scss';
</style>
