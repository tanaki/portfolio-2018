<template>
  <div class="content-about">

    <div class="text-content">
      <div v-for="(block, index) in about" :key='index' class="block block-about">
        <h4 class="title">{{block.title}}</h4>
        <p class="text" v-html="block.text"></p>
      </div>
    </div>
    <router-link to="" class="close">&times;</router-link>
  </div>
</template>

<script>

import dataAbout from '../assets/texts/about.json';

export default {
  name: 'About',
  data () {
    return {
      about : dataAbout.blocks,
      modal : true
    }
  }
}
</script>
