<template>
  <div>
    <Header/>
    <section class="story scroll-background">
      <div id="profile-story" class="anchor-adjustment"/>
      <h2 class="heading__secondary u-mb-4">學經歷</h2>
      <div class="story__box fade-in-from">
        <svg class="story__icon">
          <use xlink:href="~assets/images/sprite.svg#icon-graduation-cap"></use>
        </svg>
        <div class="story__text">
          <h3 class="heading__tertiary u-mb-2">學歷</h3>
          <p class="story__title">學校名稱<span>：</span><span class="story__description">廈門大學</span></p>
          <p class="story__title">學歷<span>：</span><span class="story__description">大學</span></p>
          <p class="story__title">科系名稱<span>：</span><span class="story__description">國際經濟與貿易</span></p>
        </div>
        <svg class="story__icon">
          <use xlink:href="~assets/images/sprite.svg#icon-briefcase"></use>
        </svg>
        <div class="story__text">
          <h3 class="heading__tertiary u-mb-2">工作經歷</h3>
          <p class="story__title">公司名稱<span>：</span><span class="story__description">洋宏股份有限公司</span></p>
          <p class="story__title">總年資<span>：</span><span class="story__description">2年4個月</span></p>
          <p class="story__title">職務名稱<span>：</span><span class="story__description">船務部/文件部專員</span></p>
          <p class="story__title story__title--startalign">工作描述
            <span>：</span>
            <span class="story__description story__description--startalign">
              同國內外客戶及船東方溝通，協調航程詳情與運價合約。同時，處理進出口文件作業，製作各式報關所需單據。
            </span>
          </p>
        </div>
      </div>
    </section>
    <section class="projectCard">
      <div id="profile-projectCard" class="anchor-adjustment"/>
      <h2 class="heading__secondary u-mb-5">專案成就</h2>
      <div class="projectCard__box fade-in-from u-maxwidth-center">
        <ProjectCard
          project-name="e-website-user-interface"
          project-class-name="e-website"
          :project-description="['產品管理和展示', '購物車系統', '結帳系統']"></ProjectCard>
        <ProjectCard
          project-name="To-Do-List"
          project-class-name="todolist"
          :project-description="['項目新增(快捷/細項)', '項目細項修改', '項目間拖曳']"></ProjectCard>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import offset from '@/helper/offset.js';

export default {
  layout: 'base',
  mounted () {
    // 監聽滾動事件，執行視差滾動
    window.addEventListener('scroll', this.parallaxScrolling);
  },
  destroyed () {
    // 移除滾動監聽
    window.removeEventListener('scroll', this.parallaxScrolling);
  },
  methods: {
    parallaxScrolling () {
      const transformTarget = document.querySelector('.scroll-tranfrom');
      const backgroundTarget = document.querySelector('.scroll-background');
      const fadeInArray = [...document.querySelectorAll('.fade-in-from')];
      const windowHeight = window.screen.availHeight;
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      // Header部分
      transformTarget.setAttribute('style', `transform: translateY(${currentScroll / 18}rem)`);
      backgroundTarget.setAttribute('style', `background-position-y: -${currentScroll / 35}rem`);

      // section部分
      fadeInArray.forEach((currentElement) => {
        const targetScroll = offset(currentElement).top;
        const targetHeight = currentElement.scrollHeight;
        if ((currentScroll + windowHeight) >= targetScroll && currentScroll < (targetScroll + targetHeight)) {
          currentElement.classList.add('fade-in-to');
        }
      });
    },
  },
  components: {
    Header,
    ProjectCard,
  },
};
</script>
