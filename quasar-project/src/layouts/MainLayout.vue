<template>
    <q-layout view="lHh Lpr lFf">
      <q-header
        elevated
        class="text-white flex flex-center justify-center"
        shadow-2
        style="background-color: aquamarine"
      >
        <div class="flex justify-center q-pa-md">
          <q-toolbar class="full-width bg-mint text-dark">
            <div class="toolbar-inner row items-center justify-between q-px-md">
              <q-tabs
                v-model="state.tab"
                dense
                filled
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab name="home" label="HOME" />
                <q-tab name="portifolio" label="PORTFÓLIO" />
                <q-tab name="contato" label="CONTATO" />
              </q-tabs>
            </div>
          </q-toolbar>
        </div>

        <div v-if="!$q.screen.xs" class="q-ml-auto">
          <q-select
            class="q-pa-sm"
            filled
            label="IDIOMA"
            v-model="languageTexts.idioma"
            :options="idiomaOptions"
            @update:model-value="chooseLanguage"
            :style="confiFontText"
          />
        </div>

        <div v-if="$q.screen.xs">
          <q-select
            class="q-pa-sm"
            filled
            label="IDIOMA"
            v-model="languageTexts.idioma"
            :options="idiomaOptions"
            @update:model-value="chooseLanguage"
            :style="confiFontText"
          />
        </div>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <q-tab-panels
            v-model="state.tab"
            animated
            style="background-color: #24053e"
          >
            <q-tab-panel name="home">
              <about
                :languageTexts="languageTexts.homeLanguage"
                :idioma="languageTexts.idioma"

              />
              <banner
                :languageTexts="languageTexts.homeLanguage"
              />
              <slider
                :languageTexts="languageTexts.homeLanguage"
              />
            </q-tab-panel>

            <q-tab-panel name="portifolio">
              <portifolioComponente
                :languageTexts="languageTexts.portifolioLanguage"
                :repositoriesList="languageTexts.repositoriesList"
                :idioma="languageTexts.idioma"
              />
            </q-tab-panel>

            <q-tab-panel name="contato">
              <ContatoComponent />
            </q-tab-panel>
          </q-tab-panels>
        </q-page>
      </q-page-container>
    </q-layout>
</template>


<script setup>
import { reactive, ref } from "vue";
import about from "/src/components/AboutComponent.vue";
import banner from "/src/components/BannerComponent.vue";
import slider from "/src/components/SliderComponent.vue";
import config from "src/configApp.json";
import portifolioComponente from "/src/components/PortfolioTec.vue";
import ContatoComponent from "/src/components/ContatoComponent.vue";
import language from "/src/language.json";
import repositories from "src/repositories.json";
import { useQuasar } from "quasar";

const $q = useQuasar();

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
  { label: "🇧🇷🇵🇹", value: "portugues" },
  { label: "🇬🇧🇺🇸", value: "ingles" },
  { label: "🇫🇷🇨🇦", value: "frances" },
];

const languageTexts = reactive({
  idioma: { label: "🇧🇷🇵🇹", value: "portugues" },
  language: "portugues",
  homeLanguage: language["portugues"]["home"],
  portifolioLanguage: language["portugues"]["portifolio"],
  repositoriesList: repositories["portugues"],
  contactLanguage: language["portugues"]["portifolio"],
});

const chooseLanguage = () => {
  const lang = languageTexts.idioma.value;
  languageTexts.portifolioLanguage = language[lang]["portifolio"];
  languageTexts.homeLanguage = language[lang]["home"];
  languageTexts.repositoriesList = repositories[lang];
};
</script>

<style scoped>
.layout-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  transform: scale(1.5);
  transform-origin: top center;
}

/* Opcional: para evitar que a escala quebre o layout do body */
body, html {
  overflow-x: hidden;
}

/* Para centralizar corretamente tabs e toolbar */
.tabs-wrapper,
.q-toolbar-container {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>
