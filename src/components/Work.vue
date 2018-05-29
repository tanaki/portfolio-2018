<template>
  <div class="project-view project">
    
    <div class="project-nav">
      <router-link :to="{ path: '/works/' + prev }">prev</router-link>
      <span>{{index}}/{{total}}</span>
      <router-link :to="{ path: '/works/' + next }">next</router-link>
    </div>
    
    <div class="project-content" v-if="project">

      <WorkMedia v-if="!isLeftColTemplate" :project="project"></WorkMedia>
      <WorkDetail :project="project" :alignClass="alignClass"></WorkDetail>
      <WorkMedia v-if="isLeftColTemplate" :project="project"></WorkMedia>

    </div>
    
  </div>
</template>

<script>
import router from '../router';  
import dataProjects from '../assets/texts/projects.json';

import WorkDetail from '../components/WorkDetail.vue';
import WorkMedia from '../components/WorkMedia.vue';

export default {
  name: 'Work',
  data () {
    
    let slug = this.$route.params.slug
    let prevSlug = null
    let nextSlug = null
    let projects = dataProjects.projects
    let maxLen = projects.length
    let currentIndex = 1

    let projectDetail = projects.filter( function ( p, index ) {
        if ( p.slug == slug ) {
          prevSlug = (index > 0 ? projects[ index - 1 ] : projects[ maxLen - 1 ]).slug
          nextSlug = (index < maxLen - 1 ? projects[ index + 1 ] : projects[ 0 ]).slug
          currentIndex = index+1
        }
        return p.slug == slug
      } )[0]

    if ( !projectDetail ) {
      router.push({ path : '/404' })
    }

    let isLeftColTemplate = (currentIndex % 2 === 0)

    return {
      project : projectDetail,
      total : projects.length,
      index : currentIndex,
      next : nextSlug,
      prev : prevSlug,
      isLeftColTemplate : isLeftColTemplate,
      alignClass : (isLeftColTemplate ? 'left-aligned' : 'right-aligned')
    }
  },
  components: {
    WorkDetail,
    WorkMedia
  }
}
</script>
