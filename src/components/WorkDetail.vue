<template>
  <!-- TODO Bind class left / right aligned -->
  <div class="column column-text" v-bind:class="alignClass">

    <div class="block block-title">
      <h1>{{project.title}}</h1>
      <p>{{project.type}}</p>
    </div>

    <div class="block block-client">
      <a :href="project.company_detail" target="_blank">{{project.company}}</a><br>
      {{project.context}}
    </div>

    <div v-if="project.links" class="block block-links">
      <div v-for="(link, index) in project.links" :key="index">
        <a :href="link.src" target="_blank">{{link.label}}</a>
      </div>
    </div>

    <div class="block block-description">
      <p v-html="project.description"></p>
    </div>

    <div v-if="project.awards" class="block block-awards">
      <h3>Awards</h3>
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
