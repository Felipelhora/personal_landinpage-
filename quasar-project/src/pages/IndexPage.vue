<template>
  <AboutComponent></AboutComponent>
  <BannerComponent></BannerComponent>
  <SliderComponent></SliderComponent>
</template>

<script setup>
import { defineComponent } from "vue";

import MenuComponent from "src/components/MenuComponent.vue";
import BannerComponent from "src/components/BannerComponent.vue";
import SliderComponent from "src/components/SliderComponent.vue";
import AboutComponent from "src/components/AboutComponent.vue";
import FooterComponent from "src/components/FooterComponent.vue";


defineComponent({
  name: "IndexPage",
});
</script>

<style lang="sass" scoped></style>
