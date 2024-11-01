<template>
  <div>
    <div style="background: #fbf8ff">
      <BannerComponent>
        <AboutComponent />
        <!-- <MenuComponent /> -->
      </BannerComponent>
    </div>
    <SliderComponent />

    <FooterComponent />
    <font-awesome-icon icon="phone" />
  </div>
</template>

<script setup>
import MenuComponent from "src/components/MenuComponent.vue";
import BannerComponent from "src/components/BannerComponent.vue";
import SliderComponent from "src/components/SliderComponent.vue";
import AboutComponent from "src/components/AboutComponent.vue";
import FooterComponent from "src/components/FooterComponent.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

button {
  background: #43ffa1;
  color: #24053e;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 700 !important;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: #fbf8ff;
}
</style>
