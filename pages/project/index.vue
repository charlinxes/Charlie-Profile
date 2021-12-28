<template>
  <section class="project">
    <div class="project__container u-maxwidth-center">
      <!-- 利用根元素繼承class的原理來暫避:style使用backgr-image錯誤 -->
      <ProjectTemp project-name="e-website-user-interface" class="project__img--esite">
        一個基於 Vue 2 和 BootStrap 構建的響應式電商網站，包含產品展示、購物車和結帳頁面。
        此外，可於對應的後台網站控制商品呈現內容和設置優惠卷，並查看訂單記錄。
      </ProjectTemp>
      <ProjectTemp project-name="To-Do-List" class="project__img--todolist">
        一個基於 Vue 2 和 Tailwind 構建的待辦事項清單，將所有事項分成未完成、進行中和已完成三類。
        除了可自由新增和修改事項，也可在通過拖曳事項來直覺地調整其類別。
      </ProjectTemp>
    </div>
  </section>
</template>

<script>
import ProjectTemp from '@/components/ProjectTemp.vue';

export default {
  layout: 'base',
  methods: {
  },
  components: {
    ProjectTemp,
  },
};
</script>
