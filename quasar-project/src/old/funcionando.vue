<template>
  <div class="all_page" style="background-color: transparent">
    <q-layout view="lHh Lpr lFf">
      <q-header
        elevated
        class="text-white flex flex-center justify-center"
        shadow-2
        style="background-color: aquamarine"
      >
        <div class="flex justify-center q-pa-md">
          <q-toolbar>
            <q-toolbar-title class="text-purple-10" style="margin-left: 10px">
              <span class="text-white text-weight-bolder text-h5"
                >Minha Aplicação</span
              >
            </q-toolbar-title>

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
          </q-toolbar>
        </div>
      </q-header>

      <q-separator />

      <q-select
        v-model="languageTexts.idioma"
        filled
        label="IDIOMA"
        :options="idiomaOptions"
        @update:model-value="chooseLanguage"
        class="col-xl-2 q-pa-sm"
      />

      <q-page-container>
        <q-tab-panels v-model="state.tab" animated>
          <q-tab-panel name="home">
            <about :languageTexts="languageTexts"></about>
            <banner class="full-height full-width"></banner>
            <slider class="full-height full-width"></slider>
          </q-tab-panel>

          <q-tab-panel name="portifolio">
            <div class="text-h6">Portfólio</div>
            <p>Conteúdo do portfólio...</p>
          </q-tab-panel>

          <q-tab-panel name="contato">
            <div class="text-h6">Contato</div>
            <p>Informações de contato...</p>
          </q-tab-panel>
        </q-tab-panels>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import about from "/src/components/AboutComponent.vue";
import banner from "/src/components/BannerComponent.vue";
import slider from "/src/components/SliderComponent.vue";
import language from "/src/language.json";
import config from "src/configApp.json";

const state = reactive({
  tab: "home",
});

const fontText = config.fontTexts || "Arial, sans-serif";
const fontSizeText = config.sizeFontTexts || "18px";
const confiFontText = {
  fontFamily: fontText,
  fontSize: fontSizeText,
};

const idiomaOptions = [
  { label: "Português", value: "portugues" },
  { label: "Inglês", value: "ingles" },
];

const languageTexts = reactive({
  idioma: "portugues",
  language: "portugues",
  text_about_me: language["portugues"]["about"]["text_about_me"],
  title_about_me: language["portugues"]["about"]["title_about_me"],
});

const chooseLanguage = () => {
  languageTexts.text_about_me =
    language[languageTexts.idioma]["about"]["text_about_me"];
  languageTexts.title_about_me =
    language[languageTexts.idioma]["about"]["title_about_me"];
};
</script>

<style>
.all_page {
  background-color: transparent !important;
}
</style>
