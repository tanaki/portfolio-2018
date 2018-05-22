<template>
  <div class="about">
    <span v-html="about"></span>
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
