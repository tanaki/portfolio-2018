<template>
  <div class="project">
    
    <router-link :to="{ path: '/works/' + prev }">prev</router-link>
    <span>{{index}}/{{total}}</span>
    <router-link :to="{ path: '/works/' + next }">next</router-link>
    
    <div v-if="project">
      
      <div class="column column-text">
        <h1>{{project.title}}</h1>
        <p>{{project.type}}</p>
        <p>
          <span v-html="project.description"></span>
        </p>
      </div>

      <div class="column column-media">
        <div v-for="(media, index) in project.media" :key="index">

          <img v-if="media.type == 'image'" v-bind:src="'/img/work/'+project.slug+'/'+media.src">
          <video v-else v-bind:src="'/img/work/'+project.slug+'/'+media.src" autobuffer  controls></video>
          
        </div>
      </div>

    </div>
    
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
    let currentIndex = 1

    let projectDetail = projects.filter( function ( p, index ) {
        if ( p.slug == slug ) {
          prevSlug = (index > 0 ? projects[ index - 1 ] : projects[ maxLen - 1 ]).slug
          nextSlug = (index < maxLen - 1 ? projects[ index + 1 ] : projects[ 0 ]).slug
          currentIndex = index+1
        }
        return p.slug == slug
      } )[0]

    // eslint-disable-next-line
    if ( !projectDetail ) {
      router.push({ path : '/404' })
    }

    return {
      project : projectDetail,
      total : projects.length,
      index : currentIndex,
      next : nextSlug,
      prev : prevSlug
    }
  }
}
</script>
