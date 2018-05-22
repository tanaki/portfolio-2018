<template>
  <div class="project">
    <router-link :to="{ path: '/works/' + prev }">prev</router-link>
    <div v-if="project">
      <h1>{{project.title}}</h1>
    </div>
    <router-link :to="{ path: '/works/' + next }">next</router-link>
  </div>
</template>

<script>
import router from '../router';  
import dataProjects from '../assets/texts/projects.json';

export default {
  name: 'Work',
  data () {
    
    let slug = this.$route.params.slug
    let prevSlug = null
    let nextSlug = null
    let projects = dataProjects.projects
    let maxLen = projects.length

    let projectDetail = projects.filter( function ( p, index ) {
        if ( p.slug == slug ) {
          prevSlug = (index > 0 ? projects[ index - 1 ] : projects[ maxLen - 1 ]).slug
          nextSlug = (index < maxLen - 1 ? projects[ index + 1 ] : projects[ 0 ]).slug
        }
        return p.slug == slug
      } )[0]

    // eslint-disable-next-line
    if ( !projectDetail ) {
      router.push({ path : '/404' })
    }

    return {
      project : projectDetail,
      next : nextSlug,
      prev : prevSlug
    }
  }
}
</script>
