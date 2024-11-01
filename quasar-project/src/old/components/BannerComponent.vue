<template>
  <div class="banner-container">
    <div>
      <slot></slot>
    </div>
    <div class="title-container"></div>

    <div class="image-container">
      <br />
      <br />
      <br />
      <div class="text-h5 text-white text-weight-bolder">
        <br /><br /><br /><br />
        EDUCAÇÃO
        <br />
        <br /><br /><br /><br />
        <br />
        <br />
        <Ul> PÓS GRADUAÇÃO </Ul>
        <q-btn @click="teste">TESTE</q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
function teste() {
  const largura = window.innerWidth;
  console.log(largura);
  if (largura >= 1200) {
    alert("A tela é XL");
  } else if (largura >= 992) {
    alert("A tela é LG");
  } else if (largura >= 768) {
    alert("A tela é MD");
  } else if (largura >= 576) {
    alert("A tela é SM");
  } else {
    alert("A tela é XS");
  }
}
</script>

<style scoped>
.banner-container {
  background-image: url("../assets/bg-banner.svg");
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
  border-bottom: 3px solid #43ffa1;
}

.image-container {
  display: flex;
  justify-content: center;
}

img {
  position: relative;
  top: 50px;
  width: 400px;
  animation: mover 2s infinite alternate;
  z-index: 9;
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
