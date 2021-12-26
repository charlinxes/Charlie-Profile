<template>
  <footer class="footer">
    <div class="footer__box u-maxwidth-center">
      <div class="footer__description">
        <h5 class="footer__heading" style="margin-bottom:1rem">About</h5>
        <p class="footer__about">該網站用於介紹Charlie的簡介與專案</p>
      </div>
      <div class="footer__navigation">
        <p class="footer__copyright">Copyright &copy; 2021 All Rights Reserved by Charlie</p>
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link footer__link--facebook" href="#">
              <svg class="footer__icon ">
                <use xlink:href="~assets/images/sprite.svg#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link footer__link--twitter" href="#">
              <svg class="footer__icon">
                <use xlink:href="~assets/images/sprite.svg#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link footer__link--github" href="#">
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
