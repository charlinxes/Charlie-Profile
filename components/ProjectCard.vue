<template>
  <div class="projectCard__item">
    <div class="projectCard__side projectCard__side--front">
      <div class="projectCard__picture u-mb-3" :class="[projectClass.picture]"/>
      <h4 class="projectCard__heading">
        <span class="projectCard__heading-text" :class="[projectClass.heading]">
          {{projectObject.name}}
        </span>
      </h4>
      <div class="projectCard__details">
        <ul class="projectCard__list">
          <li class="projectCard__list-item">{{projectObject.description}}</li>
          <li v-for="(item,index) in projectDescription" :key="index" class="projectCard__list-item">
            {{item}}
          </li>
        </ul>
      </div>
      <!-- 平板以下⬇ -->
      <div class="projectCard__linkBox" :class="[projectClass.linkBox]">
        <nuxt-link class="btn btn--white" to="/project">查閱詳情</nuxt-link>
      </div>
      <!-- 平板以下⬆ -->
    </div>
    <div class="projectCard__side projectCard__side--back" :class="[projectClass.backSide]">
      <div class="projectCard__back-content">
        <p class="projectCard__back-heading">{{projectObject.description}}</p>
        <nuxt-link class="btn btn--white" to="/project">查閱詳情</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    projectName: {
      type: String,
      required: true,
    },
    projectClassName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      projectClass: {
        picture: `projectCard__picture--${this.projectClassName}`,
        heading: `projectCard__heading-text--${this.projectClassName}`,
        linkBox: `projectCard__linkBox--${this.projectClassName}`,
        backSide: `projectCard__side--back-${this.projectClassName}`,
      },
    };
  },
  computed: {
    projectObject () {
      return this.$store.state.projectArray.find(currentValue => currentValue.name === this.projectName);
    },
  },
};
</script>
