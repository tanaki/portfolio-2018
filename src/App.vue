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

    <!-- <router-view :key="$route.fullPath" /> -->
    <transition :name="transitionName">
      <router-view :key="$route.fullPath" />
    </transition>
    
    <footer>
      &copy; <a href="mailto:nico@nicolaspigelet.com?subject=Take+my+money" target="_blank">Nicolas Pigelet</a> - 2018
    </footer>

    <About />

  </div>
</template>

<script>
import Works from './components/Works.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    Works,
    About
  },
  data () {
    return {
      transitionName : ''
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'

      // eslint-disable-next-line
      console.log('watch', this.transitionName)
    }
  }
}
</script>

<style lang="scss">

  @import './assets/scss/fonts.scss';
  @import './assets/scss/reset.scss';
  @import './assets/scss/main.scss';
  @import './assets/scss/projects.scss';
  @import './assets/scss/project.scss';
</style>
