<template>
  <div class="projects">
    <ul>
      <li v-for="(project, index) in projects" :key='index' class="project">
        <router-link v-bind:to="{ path: '/works/' + project.slug }" class="project-link">
          <span class="titles">
            <span class="h3">{{project.title}}</span>
            <span class="h4">{{project.type}}</span>
          </span>
          <img v-bind:src="'/img/work/'+project.slug+'/'+project.cover" >
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import dataProjects from '../assets/texts/projects.json';

export default {
  name: 'Works',
  data () {
    return {
      projects : dataProjects.projects
    }
  }
}
</script>
