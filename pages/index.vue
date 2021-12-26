<template>
  <div>
    <Header/>

    <section class="story scroll-background">
      <div id="profile-story" class="anchor-adjustment"/>
      <h2 class="heading__secondary" style="margin-bottom:4rem;">學經歷</h2>
      <div class="story__box fade-in-from">
        <!-- 這裡要用v-slot -->
        <svg class="story__icon">
          <use xlink:href="~assets/images/sprite.svg#icon-graduation-cap"></use>
        </svg>
        <div class="story__text">
          <h3 class="heading__tertiary" style="margin-bottom:2rem;">學歷</h3>
          <p class="story__title">學校名稱<span>：</span><span class="story__description">廈門大學</span></p>
          <p class="story__title">學歷<span>：</span><span class="story__description">大學</span></p>
          <p class="story__title">科系名稱<span>：</span><span class="story__description">國際經濟與貿易</span></p>
        </div>

        <svg class="story__icon">
          <use xlink:href="~assets/images/sprite.svg#icon-briefcase"></use>
        </svg>
        <div class="story__text">
          <h3 class="heading__tertiary" style="margin-bottom:2rem;">工作經歷</h3>
          <p class="story__title">公司名稱<span>：</span><span class="story__description">洋宏股份有限公司</span></p>
          <p class="story__title">總年資<span>：</span><span class="story__description">2年4個月</span></p>
          <p class="story__title">職務名稱<span>：</span><span class="story__description">船務部/文件部專員</span></p>
          <p class="story__title story__title--startalign">工作描述<span>：</span><span class="story__description story__description--startalign">同國內外客戶及船東方溝通，協調航程詳情與運價合約。同時，處理進出口文件作業，製作各式報關所需單據。</span></p>
        </div>
      </div>
    </section>

    <section class="projectCard">
      <div id="profile-projectCard" class="anchor-adjustment"/>
      <h2 class="heading__secondary" style="margin-bottom:6rem">專案成就</h2>
      <div class="projectCard__box fade-in-from u-maxwidth-center">
        <div class="projectCard__item">
          <div class="projectCard__side projectCard__side--front">
            <div class="projectCard__picture projectCard__picture--e-website" style="margin-bottom:3rem"></div>
            <h4 class="projectCard__heading">
              <span class="projectCard__heading-text projectCard__heading-text--e-website">e-website-user-interface</span>
            </h4>
            <div class="projectCard__details">
              <ul class="projectCard__list">
                <li class="projectCard__list-item">HOLO 電商網站前台專案</li>
                <li class="projectCard__list-item">產品管理和展示</li>
                <li class="projectCard__list-item">購物車系統</li>
                <li class="projectCard__list-item">結帳系統</li>
              </ul>
            </div>
            <!-- 平板以下 -->
            <div class="projectCard__linkBox projectCard__linkBox--e-website">
              <a href="#" class="btn btn--white">查閱詳情</a>
            </div>
          </div>
          <div class="projectCard__side projectCard__side--back projectCard__side--back-e-website">
            <div class="projectCard__back-content">
              <p class="projectCard__back-heading">HOLO 電商網站前台專案</p>
              <a href="#" class="btn btn--white">查閱詳情</a>
            </div>
          </div>
        </div>
        <div class="projectCard__item">
          <div class="projectCard__side projectCard__side--front">
            <div class="projectCard__picture projectCard__picture--todolist" style="margin-bottom:3rem"></div>
            <h4 class="projectCard__heading projectCard__heading--center">
              <span class="projectCard__heading-text projectCard__heading-text--todolist">To-Do-List</span>
            </h4>
            <div class="projectCard__details">
              <ul class="projectCard__list">
                <li class="projectCard__list-item">To-Do-List 專案</li>
                <li class="projectCard__list-item">項目新增/修改</li>
                <li class="projectCard__list-item">項目間拖曳</li>
              </ul>
            </div>
            <!-- 平板以下 -->
            <div class="projectCard__linkBox projectCard__linkBox--todolist">
              <a href="#" class="btn btn--white">查閱詳情</a>
            </div>
          </div>
          <div class="projectCard__side projectCard__side--back projectCard__side--back-todolist">
            <div class="projectCard__back-content">
              <p class="projectCard__back-heading">To-Do-List 專案</p>
              <a href="#" class="btn btn--white">查閱詳情</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <button @click="fetchData">toProduct</button>
  </div>
</template>

<script>
import { Octokit } from '@octokit/core';
import Header from '@/components/Header.vue';
import offset from '@/helper/offset.js';

/*
請寫一個純前端的網頁，並放在 GitHub 或類似的網站上。
使用 GitHub API：https://developer.github.com/v3/
網頁內容需要列表，列出自己的 GitHub public repo，列表內容至少要包括：name (標題)、description (專案描述)、url (專案網址)，其餘資訊自行決定
下面兩項技術二擇一，需要出現在網頁上
1. Infinite Scroll (無限滾動)
2. Parallax Scrolling (視差滾動)
以上兩項技術不可以使用套件完成，但網頁其餘部份，可使用套件
若使用現代前端框架尤佳，可以不用支援 IE
*/

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
    fetchData () {
      console.log(this.projectArray);
      // 這裡auth可用env代替
      const octokit = new Octokit({ auth: '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' });
      (async () => {
        const response = await octokit.request('GET /users/{username}/repos', {
          username: 'chartlines',
          // 依生成日期排序
          sort: 'created',
          // 以升序的方向，也即早前晚後
          direction: 'asc',
        });
        console.log(response.data);
      })();
    },
  },
  components: {
    Header,
  },
  computed: {
    projectArray () {
      return this.$store.state.projectArray;
    },
  },
};
</script>
