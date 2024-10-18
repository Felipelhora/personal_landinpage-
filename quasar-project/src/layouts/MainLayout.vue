<template>
  <div class="all_page">
    <q-layout view="lHh Lpr lFf">
      <q-header
        elevated
        class="text-white flex flex-center"
        shadow-2
        style="height: 80px; background-color: rgb(4, 5, 49)"
      >
        <q-toolbar>
          <q-toolbar-title class="text-white" style="margin-left: 60px">
            <q-avatar>
              <!-- <img src="../assets/img/logo-quasar-projeto.png" alt="Logo Projeto" style="filter: invert(100%); width: 60px"> -->
            </q-avatar>
            <router-link
              to="/"
              style="text-decoration: none"
              class="text-white text-weight-bolder text-h5"
            >
            </router-link>
          </q-toolbar-title>

          <q-tabs shrink v-model="activeTab">
            <router-link to="/" style="text-decoration: none">
              <q-tab class="text-white" name="Home" label="Home"></q-tab>
            </router-link>
            <router-link to="/portfolio" style="text-decoration: none">
              <q-tab class="text-white" name="tab1" label="PortFolio"></q-tab>
            </router-link>
            <router-link to="/contato" style="text-decoration: none">
              <q-tab name="tab3" class="text-white" label="Contato"></q-tab>
            </router-link>
          </q-tabs>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      activeTab: "Home",
    };
  },
});
</script>

<style>
.all_page {
  background-color: rgb(4, 5, 49);
  /* background-size: cover; */
  /* background-position: center; */
}
</style>
