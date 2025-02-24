<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="">
      <q-tabs
        v-model="state.tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="home" label="HOME" />
        <q-tab name="portifolio" label="PORTIFÓLIO" />
        <q-tab name="contato" label="CONTATO" />
      </q-tabs>

      <q-separator />

      <q-select
        v-model="state.idioma"
        filled
        label="PROFISSÃO"
        :options="idiomaOptions"
      ></q-select>

      <q-tab-panels v-model="state.tab" animated>
        <q-tab-panel name="home">
          <about :languageTexts="languageTexts"></about>
          <banner class="full-height full-width"></banner>
          <slider class="full-height full-width"></slider>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h6">Alarms</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
      <q-separator />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import about from "/src/components/AboutComponent.vue";
import banner from "/src/components/BannerComponent.vue";
import slider from "/src/components/SliderComponent.vue";
import language from "/src/language.json";
import config from "src/configApp.json";

const activeTab = ref("Home");

// CONSTS

//// LAYOUT
const fontText = config.fontTexts || "Arial, sans-serif";
const fontSizeText = config.sizeFontTexts || "18px";
const confiFontText = {
  fontFamily: fontText,
  fontSize: fontSizeText,
};

//// IDIOMA
const idiomaOptions = [
  { label: "Português", value: "portugues" },
  { label: "Inglês", value: "ingles" },
];

///// VAR SISTEMA
const languageTexts = reactive({
  idioma: "portugues",
  language: "portugues",
  text_about_me: language["portugues"]["about"]["text_about_me"],
  title_about_me: language["portugues"]["about"]["title_about_me"],
});

const state = reactive({ tab: "home", idioma: "portugues" });

const chooseLanguage = () => {
  lang.text_about_me =
    language[languageTexts.idioma["value"]]["about"]["text_about_me"];
  lang.title_about_me =
    language[languageTexts.idioma["value"]]["about"]["title_about_me"];
};
</script>

<style>
.all_page {
  /* background-color: rgb(22, 194, 108); */
  /* background-size: cover; rgb(4, 5, 49);*/
  /* background-position: center; */
}
</style>
