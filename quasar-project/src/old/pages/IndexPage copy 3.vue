<template>
  <q-page class="flex flex-center">
    <div class="all_page">
      <div class="banner">
        <div
          class="q-row img-container"
          style="padding: 20px; flex-direction: column"
        >
          <q-img class="img-home" src="../assets/img/face.jpg" alt="">
            <div class="absolute-bottom text-h6 text-white">NOME</div>
          </q-img>
          <span class="gradient-border"></span>
        </div>
        <div class="text-positive text-weight-bolder text-h5">QUEM EU SOU</div>
        <br />
        <div class="text-white text-weight-bolder text-justify">
          Quem sou "Apaixonado por tecnologia e com experiência mais 6 anos na
          área de desenvolvimento que me trouxeram vivências que vão desde
          infraestrutura e bancos de dados até desenvolvimento back-end e
          front-end."
        </div>
        <br />
        <div class="text-positive text-weight-bolder text-h5">
          O QUE EU BUSCO
        </div>
        <br />
        <div class="text-white text-weight-bolder text-justify">
          Busco a oportunidade de aprender e crescer junto com a empresa,
          aplicando meus conhecimentos para assim, juntos, alcançarmos nossos
          objetivos.
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <body_context></body_context>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";
import body_context from "src/components/Body_context.vue";

defineComponent({
  name: "IndexPage",
});
</script>

<style>
.banner {
  background-color: rgb(4, 5, 49);
  width: 330px;
  height: 91vh;
  position: absolute;
  left: 0;
  top: 0;
}

.content-wrapper {
  margin-left: 330px;
  padding: 20px;
  position: relative;
  z-index: 2;
}

.img-home {
  width: 250px;
  border-radius: 40px 10px 40px 10px;
  height: 350px;
}

.gradient-border {
  display: inline-block;
  width: 50px;
  height: 15px;
  margin-bottom: 30px;
  border: none;
  background: linear-gradient(to right, #ffffff, #26a69a);
  border-image: linear-gradient(to right, #ffffff, #26a69a);
  border-image-slice: 1;
  border-radius: 80px;
  margin-top: 20px;
}
</style>
