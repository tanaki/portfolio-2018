<template>
  <div class="content-about">

    <div class="content-about-inner">
      <div class="col-left">
        <img src="/img/about.jpg" alt="About Nicolas Pigelet - preview of 6 projects">
      </div>
      <div class="col-right">
        <div class="text-content">
          <div v-for="(block, index) in about" :key='index' class="block block-about">
            <h4 class="title">{{block.title}}</h4>
            <p class="text" v-html="block.text"></p>
          </div>
        </div>
      </div>
    </div>
    <a class="close" v-on:click="hideAbout">&times;</a>
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
  },
  methods : {
    hideAbout () {
      this.$emit('hideAbout')
    }
  }
}
</script>
