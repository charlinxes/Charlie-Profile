<template>
  <div class="project__box">
    <div class="project__edge-float"/>
    <ul class="project__list">
      <li class="project__item">
        <h3 class="project__heading">{{projectObject.description}}</h3>
      </li>
      <li class="project__item project__item--normalbreak">專案名稱：{{projectObject.name}}</li>
      <li class="project__item">Github 網址：<a :href="projectObject.url">{{projectObject.url}}</a></li>
      <li class="project__item">專案網址：<a :href="projectObject.homepage">{{projectObject.homepage}}</a></li>
      <li class="project__item">專案主題：
        <span v-for="(item,index) in projectObject.topics" :key="index" class="badge">{{item}}</span>
      </li>
      <li class="project__item">專案描述：<slot/></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ProjectTemp',
  data () {
    return {
    };
  },
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
  computed: {
    projectObject () {
      return this.$store.state.projectArray.find(currentValue => currentValue.name === this.projectName);
    },
  },
};
</script>
