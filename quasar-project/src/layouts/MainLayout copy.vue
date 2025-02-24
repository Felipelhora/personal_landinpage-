<template>
  <div class="all_page">
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
              <router-link
                to="/"
                style="text-decoration: none"
                class="text-white text-weight-bolder text-h5"
              >
              </router-link>
            </q-toolbar-title>

            <q-tabs shrink v-model="activeTab">
              <router-link to="/" style="text-decoration: none">
                <q-tab class="text-purple-10" name="Home" label="Home"></q-tab>
              </router-link>
              <router-link to="/portfolio" style="text-decoration: none">
                <q-tab
                  class="text-purple-10"
                  name="tab1"
                  label="PortFolio"
                ></q-tab>
              </router-link>
              <router-link to="/contato" style="text-decoration: none">
                <q-tab
                  name="tab3"
                  class="text-purple-10"
                  label="Contato"
                ></q-tab>
              </router-link>
            </q-tabs>
            <q-select
              class="col-xl-2 q-pa-sm"
              filled
              label="IDIOMA"
              v-model="state.idioma"
              :options="idiomaOptions"
            />
          </q-toolbar>
        </div>
      </q-header>
      <q-page-container>
        <about></about>
        <banner></banner>
        <slider></slider
      ></q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import about from "/src/components/AboutComponent.vue";
import banner from "/src/components/BannerComponent.vue";
import slider from "/src/components/SliderComponent.vue";
const activeTab = ref("Home");
const state = reactive({});

const idiomaOptions = [
  { label: "PORTUGUES", value: "portugues" },
  { label: "INGLES", value: "F" },
  { label: "OUTRO", value: "NF" },
];
</script>

<style>
.all_page {
  /* background-color: rgb(22, 194, 108); */
  /* background-size: cover; rgb(4, 5, 49);*/
  /* background-position: center; */
}
</style>
