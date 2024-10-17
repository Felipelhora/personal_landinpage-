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
      </div>

      <!-- Conteúdo fora do banner -->
      <div class="content-wrapper">
        <p class="text-body1 text-weight-medium q-pb-xl" shadow-2>
          testtatdtadtasdtatdatda
        </p>

        <!-- Exemplo de uma lista -->
        <ul class="text-body1 text-weight-medium">
          <li>Consulta personalizada</li>
          <li>Planos alimentares</li>
          <li>Acompanhamento nutricional</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "IndexPage",
});
</script>

<style>
.banner {
  background-color: rgb(4, 5, 49);
  width: 300px; /* Ajuste a largura conforme necessário */
  height: 91vh; /* Altura total da tela */
  position: absolute; /* Para que o banner não tenha margens */
  left: 0; /* Coloca o banner no extremo esquerdo */
  top: 0; /* Começa do topo */
}

.content-wrapper {
  margin-left: 320px; /* Espaço para não sobrepor o banner */
  padding: 20px;
  z-index: 2; /* Fica acima do banner */
  background-color: bisque;
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
