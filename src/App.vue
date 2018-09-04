<template>
  <div id="app" class="wrapper" v-bind:class="{ about : ($route.hash == '#about') }">

    <header>
        
      <h1><router-link to="/">Nicolas Pigelet</router-link></h1>
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

    <!-- mode="out-in" -->
    <!-- name="fadeAndTranslate" -->
    <transition appear :name="transitionName">
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
  data () {
    return {
      transitionName: "fade"
    }
  },
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
  @import './assets/scss/variables.scss';
  @import './assets/scss/main.scss';
  @import './assets/scss/projects.scss';
  @import './assets/scss/project.scss';
  @import './assets/scss/responsive.scss';

</style>
