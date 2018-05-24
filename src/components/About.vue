<template>
  <div class="content-about">
    <span v-html="about"></span>
    <router-link to="">&times;</router-link>
  </div>
</template>

<script>

import dataAbout from '../assets/texts/about.json';

export default {
  name: 'About',
  data () {
    return {
      about : dataAbout.about
    }
  }
}
</script>
