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
              <q-tab class="text-purple-10" name="tab1" label="PortFolio"></q-tab>
            </router-link>
            <router-link :to="{ path: '/portfolio', query: { teste: state.language } }" style="text-decoration: none">
              <q-tab name="tab3" class="text-purple-10" label="Contato"></q-tab>
            </router-link>
          </q-tabs>
          <q-select
          v-model="state.language"
          :options="languageOptions"
          > IDIOMA</q-select>

          <q-btn @click="teste">TESTE</q-btn>
        </q-toolbar>
      </div>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import language_config from "src/language.json"


const activeTab = ref('Home');



function teste(){

console.log(state)

}


const languageData = language_config;
console.log('jsonData')
console.log(languageData)
console.log('jsonData')

const languageOptions = Object.keys(languageData).map((key) => ({
  label: key,
  value: key,
}));

const state = reactive({
        language: "PORTUGUES"


})

</script>

<style>
.all_page {
  /* background-color: rgb(22, 194, 108); */
  /* background-size: cover; rgb(4, 5, 49);*/
  /* background-position: center; */
}
</style>
