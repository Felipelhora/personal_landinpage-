<template>
  <div>
    <div style="background: #FBF8FF;">
      <BannerComponent>
        <MenuComponent/>
      </BannerComponent>
    </div>
    <SliderComponent/>
    <AboutComponent/>
    <FooterComponent/>
    <font-awesome-icon icon="phone" />
  </div>
</template>

<script setup>
import MenuComponent from 'src/components/MenuComponent.vue';
import BannerComponent from 'src/components/BannerComponent.vue';
import SliderComponent from 'src/components/SliderComponent.vue';
import AboutComponent from 'src/components/AboutComponent.vue';
import FooterComponent from 'src/components/FooterComponent.vue';



</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

button{
  background: #43FFA1;
  color: #24053E;
  padding:10px 20px;
  font-size: 20px;
  font-weight: 700 !important;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

button:hover{
  background: #FBF8FF;
}

</style>
