<template>
  <footer class="footer">
    <div class="footer__box u-maxwidth-center">
      <div class="footer__description">
        <h5 class="footer__heading u-mb-1">About</h5>
        <p class="footer__about">該網站用於介紹Charlie的簡介與專案</p>
      </div>
      <div class="footer__navigation">
        <p class="footer__copyright">Copyright &copy; 2021 All Rights Reserved by Charlie</p>
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link footer__link--facebook" target="_blank"
              href="https://facebook.com/profile.php?id=100054409786888">
              <svg class="footer__icon ">
                <use xlink:href="~assets/images/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link footer__link--twitter" target="_blank"
              href="https://twitter.com/chartlinx">
              <svg class="footer__icon">
                <use xlink:href="~assets/images/sprite.svg#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link footer__link--github" target="_blank"
              href="https://github.com/chartlines?tab=repositories">
              <svg class="footer__icon">
                <use xlink:href="~assets/images/sprite.svg#icon-github"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

};
</script>
