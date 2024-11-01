<template>

  <div class="banner-container flex flex-column items-center justify-center">
    <div>
      <slot></slot>
    </div>
    <div class="title-container"></div>

    <div class="image-container">
      <br>
      <br>
      <br>
      <br>
      <br>

      <q-separator color="orange" inset />
      <br>

      <br>
      <br>

      <br>
      <br>
      <div class="text-h5 text-white text-weight-bolder items-center justify-center">
        <div class="text-h3 text-weight-bolder flex flex-column items-center justify-center q-ma-md">
            LINGUAGENS DE PROGRAMAÇÃO
      </div>

        <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/javascript.png" alt="">
          <img src="/src/assets/img/php.png" alt="">
          <img src="/src/assets/img/python.png" alt="">
          <img src="/src/assets/img/rust.png" alt="">
          <img src="/src/assets/img/r_language.png" alt="">

        </div>
        <br />
        <br />
        <div class="text-h3 text-weight-bolder flex flex-column items-center justify-center q-ma-md">
        FRAMEWORKS
      </div>

        <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/vue.png" alt="">
          <img src="/src/assets/img/quasar.svg" alt="">
          <img src="/src/assets/img/laravel.png" alt="">
          <img src="/src/assets/img/fastapi.png" alt="">
          <img src="/src/assets/img/flask.png" alt="">
          <img src="/src/assets/img/django.png" alt="">
        </div>
        <br />
        <br />
        <div class="text-h3 text-weight-bolder flex flex-column items-center justify-center q-ma-xs">
        BANCO DE DADOS

      </div>

        <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/postgres.png" alt="">
          <img src="/src/assets/img/mysql.png" alt="">
          <img src="/src/assets/img/redis.png" alt="">
        </div>
        <br />
        <br />

          <div class="text-h3 text-weight-bolder flex flex-column items-center justify-center">
        FERRAMENTAS
      </div>

      <br />
        <div  class="flex flex-column items-center justify-center">
          <img src="/src/assets/img/nginx.png" alt="">
          <img src="/src/assets/img/gitlab.png" alt="">
          <img src="/src/assets/img/docker.png" alt="">
          <img src="/src/assets/img/node.png" alt="">
          <img src="/src/assets/img/npm.png" alt="">
          <img src="/src/assets/img/opencv.png" alt="">
          <img src="/src/assets/img/linux.png" alt="">
          <img src="/src/assets/img/aws.png" alt="">

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

</script>

<style scoped>
.banner-container {
  background-image: url("../assets/bg-banner.svg");
  background-color: aquamarine ;
  background-position: center;
  background-size: cover;
  height: 100%;
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

.image-container {
  /* display: flex;
  justify-content: center; */
}

img {
  position: relative;
  top: 10px;
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
