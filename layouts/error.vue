<template>
  <div class="error-page">
    <div class="error-page__decoration">
      <div class="error-page__circle error-page__circle--blue"/>
      <div class="error-page__circle error-page__circle--purple"/>
      <div class="error-page__circle error-page__circle--red"/>
      <div class="error-page__circle error-page__circle--orange"/>
      <div class="error-page__circle error-page__circle--green"/>
    </div>
    <div class="error-page__message">
      <h2 style="margin-bottom:6rem">
        <p style="margin-bottom:1rem">
          {{error.statusCode}}
        </p>
        {{error.message}}
      </h2>
      <!-- 使用a而非nuxt-link來避免javascript已崩潰無法運作 -->
      <a href="/" class="btn btn--primary">返回首頁</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
};
</script>
