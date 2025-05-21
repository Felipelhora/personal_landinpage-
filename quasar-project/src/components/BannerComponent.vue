<template>

  <div class="banner-container flex flex-column items-center justify-center">
    <div>
      <slot></slot>
    </div>
    <div class="title-container"></div>

    <div class="image-container">
      <br>
      <br v-if="!$q.screen.xs"/>
      <br v-if="!$q.screen.xs"/>
      <br v-if="!$q.screen.xs"/>
      <br v-if="!$q.screen.xs"/>
      <q-separator color="orange" inset />
      <br v-if="!$q.screen.xs"/>
      <br v-if="!$q.screen.xs"/>
      <br>
      <br>
      <br>
      <div class="text-h3 text-white text-weight-bolder text-center">
          {{ props.languageTexts.programming_languages }}
        <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/javascript.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/php.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/python.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/rust.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/r_language.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
        </div>
        <br />
        <br />
        <div class="text-h3 text-white text-weight-bolder text-center">
          {{ props.languageTexts.frameworks }}
      </div>

        <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/vue.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/quasar.svg" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/laravel.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/fastapi.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/flask.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/django.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
        </div>
        <br />
        <br />
        <div class="text-h3 text-white text-weight-bolder text-center">
          {{ props.languageTexts.data_bases }}

        </div>

        <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/postgres.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/mysql.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/redis.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
        </div>
        <br />
        <br />
        <br v-if="$q.screen.xs"/>
          <div class="text-h3 text-white text-weight-bolder text-center">
            {{ props.languageTexts.tools }}
      </div>
      <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/nginx.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/gitlab.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/docker.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/node.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/npm.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/opencv.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/linux.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">
          <img src="/src/assets/img/aws.png" alt="" :class="[$q.screen.xs ? 'imgPhone' : 'img']">

        </div>
        <br>
        <br>
        <q-separator color="orange" inset />
        <br>
<br>


      </div>
    </div>
  </div>

</template>

<script setup>
import {defineProps} from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const props = defineProps({
  languageTexts: Object,
});


</script>

<style scoped>
.banner-container {
  background-image: url("../assets/bg-banner.svg");
  background-color: aquamarine ;
  background-position: center;
  background-size: cover;
  height: 50%;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

h1 {
  color: #fff;
  font-size: 60px;
  font-weight: 500;
  max-width: 15ch;
  text-align: center;
}

h1 span {
  border-bottom: 3px solid #410196;
}



img {
  position: relative;
  top: 10px;
  width: 100px;
  animation: mover 2s infinite alternate;
  z-index: 9;
  margin: 10px; /* Adiciona espaço entre as imagens */
}

.imgPhone {
  position: relative;
  top: 5px;
  width: 100px;
  animation: mover 2s infinite alternate;
  z-index: 9;
  margin: 10px; /* Adiciona espaço entre as imagens */

}

@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

@media only screen and (max-width: 767px) {
  h1 {
    font-size: 40px;
  }
  img {
    width: 200px;
  }
}
</style>
