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
          <about :idioma="state.idioma"></about>
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
import config from "src/language.json";

const state = reactive({ tab: "home", idioma: "portugues" });

const idiomaOptions = [
  { label: "PORTUGUES", value: "portugues" },
  { label: "INGLES", value: "ingles" },
  { label: "OUTRO", value: "NF" },
];

console.log(config[state.idioma]);
</script>

<style>
.all_page {
  /* background-color: rgb(22, 194, 108); */
  /* background-size: cover; rgb(4, 5, 49);*/
  /* background-position: center; */
}
</style>
