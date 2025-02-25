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
        <!-- Colocando o q-select à direita -->
        <div class="q-ml-auto">
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
  { label: "🇺🇸🇬🇧", value: "ingles" },
];

///// VAR SISTEMA
const languageTexts = reactive({
  idioma: { label: "🇧🇷🇵🇹", value: "portugues" },
  language: "portugues",
  text_about_me: language["portugues"]["about"]["text_about_me"],
  title_about_me: language["portugues"]["about"]["title_about_me"],
  specialties: language["portugues"]["about"]["specialties"],
  specialties_data_mining:
    language["portugues"]["about"]["specialties_data_mining"],
  specialties_rpa: language["portugues"]["about"]["specialties_rpa"],
  specialties_rest: language["portugues"]["about"]["specialties_rest"],
  specialties_data_science:
    language["portugues"]["about"]["specialties_data_science"],
  specialties_ia: language["portugues"]["about"]["specialties_ia"],
  objetivos: language["portugues"]["about"]["objetivos"],
  objetivos_text: language["portugues"]["about"]["objetivos_text"],
  social_skills: language["portugues"]["about"]["social_skills"],
  social_skills_text: language["portugues"]["about"]["social_skills_text"],
  programming_languages:
    language["portugues"]["about"]["programming_languages"],
  frameworks: language["portugues"]["about"]["frameworks"],
  data_bases: language["portugues"]["about"]["data_bases"],
  tools: language["portugues"]["about"]["tools"],
  postgraduate_studies: language["portugues"]["about"]["postgraduate_studies"],
  graduate: language["portugues"]["about"]["graduate"],
  courses: language["portugues"]["about"]["courses"],
  postgraduate_ia: language["portugues"]["about"]["postgraduate_ia"],
  postgraduate_digital_law:
    language["portugues"]["about"]["postgraduate_digital_law"],
  postgraduate_const_law:
    language["portugues"]["about"]["postgraduate_const_law"],
  graduate_ads: language["portugues"]["about"]["graduate_ads"],
  graduate_dir: language["portugues"]["about"]["graduate_dir"],
  courses_mining: language["portugues"]["about"]["courses_mining"],
});

const chooseLanguage = () => {
  languageTexts.text_about_me =
    language[languageTexts.idioma["value"]]["about"]["text_about_me"];
  languageTexts.title_about_me =
    language[languageTexts.idioma["value"]]["about"]["title_about_me"];
  languageTexts.specialties =
    language[languageTexts.idioma["value"]]["about"]["specialties"];
  languageTexts.specialties_data_mining =
    language[languageTexts.idioma["value"]]["about"]["specialties_data_mining"];
  languageTexts.specialties_rpa =
    language[languageTexts.idioma["value"]]["about"]["specialties_rpa"];
  languageTexts.specialties_rest =
    language[languageTexts.idioma["value"]]["about"]["specialties_rest"];
  languageTexts.specialties_data_science =
    language[languageTexts.idioma["value"]]["about"][
      "specialties_data_science"
    ];
  languageTexts.specialties_ia =
    language[languageTexts.idioma["value"]]["about"]["specialties_ia"];
  languageTexts.objetivos =
    language[languageTexts.idioma["value"]]["about"]["objetivos"];
  languageTexts.objetivos_text =
    language[languageTexts.idioma["value"]]["about"]["objetivos_text"];
  languageTexts.social_skills =
    language[languageTexts.idioma["value"]]["about"]["social_skills"];
  languageTexts.social_skills_text =
    language[languageTexts.idioma["value"]]["about"]["social_skills_text"];
  languageTexts.programming_languages =
    language[languageTexts.idioma["value"]]["about"]["programming_languages"];
  languageTexts.frameworks =
    language[languageTexts.idioma["value"]]["about"]["frameworks"];
  languageTexts.data_bases =
    language[languageTexts.idioma["value"]]["about"]["data_bases"];
  languageTexts.tools =
    language[languageTexts.idioma["value"]]["about"]["tools"];
  languageTexts.postgraduate_studies =
    language[languageTexts.idioma["value"]]["about"]["postgraduate_studies"];
  languageTexts.graduate =
    language[languageTexts.idioma["value"]]["about"]["graduate"];
  languageTexts.courses =
    language[languageTexts.idioma["value"]]["about"]["courses"];
  languageTexts.postgraduate_ia =
    language[languageTexts.idioma["value"]]["about"]["postgraduate_ia"];
  languageTexts.postgraduate_digital_law =
    language[languageTexts.idioma["value"]]["about"][
      "postgraduate_digital_law"
    ];
  languageTexts.postgraduate_const_law =
    language[languageTexts.idioma["value"]]["about"]["postgraduate_const_law"];
  languageTexts.graduate_ads =
    language[languageTexts.idioma["value"]]["about"]["graduate_ads"];
  languageTexts.graduate_dir =
    language[languageTexts.idioma["value"]]["about"]["graduate_dir"];
  languageTexts.courses_mining =
    language[languageTexts.idioma["value"]]["about"]["courses_mining"];
};
</script>

<style>
.all_page {
  /* background-color: rgb(22, 194, 108); */
  /* background-size: cover; rgb(4, 5, 49);*/
  /* background-position: center; */
}
</style>
