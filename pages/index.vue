<template>
  <div class="content">
    <h1 class="title">Vladimir Zurita</h1>
    <div class="columns">
      <div class="column is-2">
        <figure class="image is-128x128 avatar">
          <img src="/img/perfil2.jpg">
        </figure>
      </div>
      <div class="column is-8">
        <p class="content">
          Experiencia en desarrollo de software, implementación de proyectos, equipos de desarrollo, metodologías ágiles, integración de sistemas.
        </p>
      </div>
      <div class="column">
        <a href="https://www.linkedin.com/in/vladimir-zurita-manquian-0249691b/">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </div>
    <div class="columns" v-for="i in Math.ceil(skills.length / 4)">
      <div v-for="skill in skills.slice((i - 1) * 4, i * 4)" :key="skill.name" class="column">
        <skill :name="skill.name" :description="skill.description" :stars="skill.stars"/>
      </div>
    </div>
  </div>
</template>

<script>
import Skill from '~/components/Skill'
export default {
  data () {
    return {
      skills: [
        {
          name: 'PHP',
          description: 'Backend Language',
          stars: 10
        },
        {
          name: 'Laravel',
          description: 'PHP Framework',
          stars: 9
        },
        {
          name: 'Javascript',
          description: 'Script Language',
          stars: 7
        },
        {
          name: 'VueJS',
          description: 'Frontend Library',
          stars: 8
        },
        {
          name: 'MySQL',
          description: 'Database Engine',
          stars: 8
        },
        {
          name: 'ReactJS',
          description: 'Frontend Library',
          stars: 5
        },
        {
          name: 'Ruby',
          description: 'Backend Language',
          stars: 3
        },
        {
          name: 'Rails',
          description: 'Ruby Framework',
          stars: 3
        }
      ]
    }
  },
  components: { Skill }
}
</script>
