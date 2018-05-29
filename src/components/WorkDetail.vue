<template>
  <!-- TODO Bind class left / right aligned -->
  <div class="column column-text" v-bind:class="alignClass">

    <div class="block block-title">
      <h1>{{project.title}}</h1>
      <p>{{project.type}}</p>
    </div>

    <div class="block block-client">
      {{project.company}}
    </div>

    <div v-if="project.links" class="block block-links">
      <div v-for="(link, index) in project.links" :key="index">
        {{link.label}} - {{link.href}}
      </div>
    </div>

    <div class="block block-description">
      <p v-html="project.description"></p>
    </div>

    <div v-if="project.awards" class="block block-awards">
      <div v-for="(award, index) in project.awards" :key="index">
        <p>{{award.year}} - {{award.label}}</p>
        <p>{{award.category}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WorkDetail',
  props: ['project', 'alignClass']
}
</script>
