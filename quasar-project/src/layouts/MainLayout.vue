<template>
  <div class="">
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
            </q-toolbar-title>
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
        <div v-if="$q.screen.xs" >
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

      <q-separator />

      <q-select
        v-model="languageTexts.idioma"
        filled
        label="IDIOMA"
        :options="idiomaOptions"
        @update:model-value="chooseLanguage"
        class="col-xl-2 q-pa-sm"
      />

      <q-page-container style="background-color: #24053e">
        <q-tab-panels
          v-model="state.tab"
          animated
          style="background-color: #24053e"
        >
          <q-tab-panel name="home">
            <about :languageTexts="languageTexts.homeLanguage"></about>
            <banner :languageTexts="languageTexts.homeLanguage" class="full-height full-width"></banner>
            <slider :languageTexts="languageTexts.homeLanguage" class="full-height full-width"></slider>
          </q-tab-panel>

          <q-tab-panel name="portifolio">
            <portifolioComponente :languageTexts="languageTexts.portifolioLanguage"
                        :repositoriesList="languageTexts.repositoriesList"
                        :idioma="languageTexts.idioma"></portifolioComponente>
          </q-tab-panel>

          <q-tab-panel name="contato">
            <ContatoComponent></ContatoComponent>

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
import config from "src/configApp.json";
import portifolioComponente from "/src/components/PortfolioTec.vue";
import ContatoComponent from "/src/components/ContatoComponent.vue";
import language from "/src/language.json";
import repositories from "src/repositories.json";
import { useQuasar } from "quasar";

const $q = useQuasar();

const activeTab = ref("Home");

// CONSTS
const state = reactive({
  tab: "home",
});


//// LAYOUT
const fontText = config.fontTexts || "Arial, sans-serif";
const fontSizeText = config.sizeFontTexts || "18px";
const confiFontText = {
  fontFamily: fontText,
  fontSize: fontSizeText,
};

//// IDIOMA
const idiomaOptions = [
  { label: "🇧🇷🇵🇹", value: "portugues" },
  { label: "🇬🇧🇺🇸", value: "ingles" },
  { label: "🇫🇷🇨🇦", value: "frances" },
];

///// VAR SISTEMA
const languageTexts = reactive({
  idioma: { label: "🇧🇷🇵🇹", value: "portugues" },
  language: "portugues",
  homeLanguage: language["portugues"]["home"],
  portifolioLanguage : language["portugues"]["portifolio"],
  repositoriesList: repositories['portugues'],
  contactLanguage: language["portugues"]["portifolio"],
});

const chooseLanguage = () => {
  languageTexts.portifolioLanguage =
    language[languageTexts.idioma["value"]]['portifolio'];
  languageTexts.homeLanguage =
    language[languageTexts.idioma["value"]]["home"];
  languageTexts.repositoriesList = repositories[languageTexts.idioma["value"]];
};
</script>

<style>
.all_page {
  /* background-color: rgb(22, 194, 108); */
  /* background-size: cover; rgb(4, 5, 49);*/
  /* background-position: center; */
}
</style>
