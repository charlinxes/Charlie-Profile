<template>
  <nav class="navigation__nav">
    <ul class="navigation__list u-maxwidth-center">
      <li class="navigation__item" @mouseenter="showSubNav = true" @mouseleave="showSubNav = false">
        <nuxt-link class="navigation__link" to="/">個人簡介</nuxt-link>
        <transition name="fade">
          <ul class="navigation__content-list" v-show="showSubNav">
            <li class="navigation__content-item">
              <nuxt-link class="navigation__content-link" to="/#profile-story">學經歷</nuxt-link>
            </li>
            <li class="navigation__content-item">
              <nuxt-link class="navigation__content-link" to="/#profile-projectCard">專案成就</nuxt-link>
            </li>
          </ul>
        </transition>
      </li>
      <li class="navigation__item">
        <nuxt-link class="navigation__link" to="/project">GitHub專案</nuxt-link>
      </li>

      <!-- 移動端 -->
      <li class="navigation__button" @click="showDropList = !showDropList">
        <div class="navigation__icon"/>
      </li>
      <li class="navigation__dropblock">
        <transition name="fade">
          <ul class="navigation__droplist" v-show="showDropList" @click="showDropList = !showDropList">
            <li class="navigation__droplist-item">
              <nuxt-link class="navigation__droplist-link" to="/">個人簡介</nuxt-link>
            </li>
            <li class="navigation__droplist-item">
              <nuxt-link class="navigation__droplist-sublink" to="/#profile-story">學經歷</nuxt-link>
            </li>
            <li class="navigation__droplist-item">
              <nuxt-link class="navigation__droplist-sublink" to="/#profile-projectCard">專案成就</nuxt-link>
            </li>
            <li class="navigation__droplist-item">
              <nuxt-link class="navigation__droplist-link" to="/project">GitHub專案</nuxt-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'TopNav',
  data () {
    return {
      showSubNav: false,
      showDropList: false,
    };
  },
  methods: {
  },
};
</script>
