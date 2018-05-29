<template>
  <div class="column column-media">
    <div v-for="(media, index) in project.media" :key="index">

      <img v-if="media.type == 'image'" v-bind:src="'/img/work/'+project.slug+'/'+media.src">
      <video v-else v-bind:src="'/img/work/'+project.slug+'/'+media.src" v-bind:poster="'/img/work/'+project.slug+'/'+media.poster" autobuffer  controls></video>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkMedia',
  props: ['project']
}
</script>
