<template>
  <div id="app" class="wrapper" v-bind:class="{ about: isAboutVisible, touch : isTouchEnable }">

    <header>
        
      <h1><router-link to="/">Nicolas Pigelet</router-link></h1>
      <div class="menu-link link-work">
        <router-link to="/">Work</router-link>
      </div>
      <div class="menu-link link-about">
        <a v-on:click="showAbout">About</a>
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

    <About @hideAbout="onHideAbout" />

  </div>
</template>

<script>
import Works from './components/Works.vue'
import About from './components/About.vue'

export default {
  data () {
    return {
      transitionName: "fade",
      isAboutVisible : false,
      isTouchEnable : false
    }
  },
  name: 'app',
  components: {
    Works,
    About
  },
  methods : {
    showAbout () {
      this.isAboutVisible = true
    },
    onHideAbout () {
      this.isAboutVisible = false
    },
    escapeKeyListener: function(evt) {
      if (evt.keyCode === 27 && this.isAboutVisible) {
        this.isAboutVisible = false
      }
    }
  },
  created: function() {
    document.addEventListener('keyup', this.escapeKeyListener);
    this.isTouchEnable = 'ontouchstart' in document.documentElement;
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.escapeKeyListener);
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
  @import './assets/scss/touch.scss';

</style>
