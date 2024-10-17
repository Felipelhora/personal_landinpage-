<template>
  <q-page class="flex flex-center">
    <div class="custom-gutter">
      <div class="q-row-gutter-md" style="display: flex; align-items: center">
        <div class="banner">
          <div
            class="q-row img-container"
            style="padding: 20px; flex-direction: column"
          >
            <q-img
              class="img-home"
              src="../assets/img/foto-nutri.png"
              alt="foto do nutricionista"
            >
              <div class="absolute-bottom text-h6 text-white">Luiza Souza</div>
            </q-img>
            <span class="gradient-border"></span>
          </div>

          <div class="q-row" style="padding: 20px; flex-direction: column">
            <div class="content-wrapper">
              <p class="text-body1 text-weight-medium q-pb-xl" shadow-2>
                Olá! Eu sou a Luiza Souza, nutricionista dedicada a ajudar você
                a alcançar um estilo de vida mais saudável e equilibrado.<br />
                Com anos de experiência na área de nutrição, meu objetivo é
                proporcionar a você um atendimento personalizado e de qualidade,
                focado nas suas necessidades individuais.
              </p>
            </div>
          </div>
        </div>
        <div class="page_body">
          <div
            class="q-row img-container"
            style="padding: 20px; flex-direction: column"
          >
            <q-img
              class="img-home"
              src="../assets/img/foto-nutri.png"
              alt="foto do nutricionista"
            >
              <div class="absolute-bottom text-h6 text-white">Luiza Souza</div>
            </q-img>
            <span class="gradient-border"></span>
          </div>

          <div class="q-row" style="padding: 20px; flex-direction: column">
            <div class="content-wrapper">
              <p class="text-body1 text-weight-medium q-pb-xl" shadow-2>
                Olá! Eu sou a Luiza Souza, nutricionista dedicada a ajudar você
                a alcançar um estilo de vida mais saudável e equilibrado.<br />
                Com anos de experiência na área de nutrição, meu objetivo é
                proporcionar a você um atendimento personalizado e de qualidade,
                focado nas suas necessidades individuais.
              </p>
            </div>
          </div>
        </div>
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
.custom-gutter {
  margin-left: auto;
  margin-right: auto;
  max-width: 75%;
  padding-left: 10%;
  padding-right: 10%;
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

.banner {
  background-color: var(--q-primary);
  width: 300px; /* Ajuste a largura conforme necessário */
  height: 120vh; /* Altura total da tela */
  position: absolute; /* Para posicionar corretamente */
  left: 0; /* Fixa no lado esquerdo */
  top: 0; /* Começa do topo */
  z-index: -1; /* Fica atrás do conteúdo */
}

.page_body {
  background-color: var(--q-primary);
  width: 300px; /* Ajuste a largura conforme necessário */
  height: 100vh; /* Altura total da tela */
  position: absolute; /* Para posicionar corretamente */
  left: 1; /* Fixa no lado esquerdo */
  top: 0; /* Começa do topo */
  z-index: -1; /* Fica atrás do conteúdo */
}
</style>
