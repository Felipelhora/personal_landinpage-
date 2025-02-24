<script setup>
import { reactive, watch, onMounted } from "vue";
import config from "src/language.json";

const idiomaOptions = [
  { label: "Português", value: "portugues" },
  { label: "Inglês", value: "ingles" },
];

const state = reactive({
  idioma: "portugues",
  language: "portugues",
  text_about_me: "", // Inicializa vazio para evitar erro
  title_about_me: "",
});

// Função para atualizar os textos
const realizarAcao = () => {
  console.log(state);
  state.text_about_me = config[state.idioma]["about"]["text_about_me"];
  state.title_about_me = config[state.idioma]["about"]["title_about_me"];
  console.log(config[state.idioma]["about"]);
};
</script>

<template>
  <q-select
    filled
    stack-label
    v-model="state.idioma"
    label="Idioma"
    option-value="value"
    emit-value
    map-options
    :options="idiomaOptions"
    @update:model-value="realizarAcao"
  />
  <div>
    <h1>{{ state.title_about_me }}</h1>
  </div>

  <p>{{ state.text_about_me }}</p>
</template>
