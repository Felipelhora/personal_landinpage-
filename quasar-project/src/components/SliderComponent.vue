<template>
    <div>
        <q-carousel
        v-if="!isMobile"
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="red"
        navigation
        padding
        arrows
        :breakpoints="{ mobile: 1, tablet: 2, laptop: 1 }"
        class="rounded-borders slider-carousel"
        >

        <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            <div class="slider-card rounded-borders col-4 full-height">
              <span>{{ props.languageTexts.postgraduate_studies }}</span>
                <h3>{{ props.languageTexts.postgraduate_ia }}</h3>
                <p>UDF - 2023</p>
            </div>
            <div class="slider-card rounded-borders col-4 full-height">
              <span>{{ props.languageTexts.postgraduate_studies }}</span>
                <h3>{{ props.languageTexts.postgraduate_digital_law }}</h3>
                <p>GRAN - 2024</p>
            </div>
            <div class="slider-card rounded-borders col-4 full-height">
            <span>{{ props.languageTexts.graduate }}</span>
            <h3>{{ props.languageTexts.graduate_ads }}</h3>
            <p>CEUB - 2022</p>
        </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">

              <div class="slider-card rounded-borders col-4 full-height">
                <span>{{ props.languageTexts.postgraduate_studies }}</span>
                <h3>{{ props.languageTexts.postgraduate_const_law }}</h3>
                <p>GRAN - 2024</p>
            </div>

              <div class="slider-card rounded-borders col-4 full-height">

                <span>{{ props.languageTexts.graduate }}</span>
                    <h3>{{ props.languageTexts.graduate_dir  }}</h3>
                    <p>UNIEURO - 2011</p>
                </div>
                <div class="slider-card rounded-borders col-4 full-height">
                  <span>{{ props.languageTexts.courses }}</span>
                    <h3>{{props.languageTexts.courses_mining}}</h3>
                    <p>IA ACADEMY - 2017</p>
                </div>
            </div>
        </q-carousel-slide>
        </q-carousel>

        <!-- Carousel Mobile -->
        <q-carousel
        v-if="isMobile"
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="red"
        navigation
        padding
        arrows
        :breakpoints="{ mobile: 1, tablet: 2, laptop: 1 }"
        class="rounded-borders slider-carousel"
        >
        <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <div class="slider-card rounded-borders col-12 full-height">
                  <span>{{ props.languageTexts.postgraduate_studies }}</span>
                  <h3>{{ props.languageTexts.postgraduate_ia }}</h3>
                  <p>UDF - 2023</p>
                </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                      <span>{{ props.languageTexts.postgraduate_studies }}</span>
                      <h3>{{ props.languageTexts.postgraduate_digital_law }}</h3>
                        <p>GRAN - 2024</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                      <span>{{ props.languageTexts.graduate }}</span>
                      <h3>{{ props.languageTexts.graduate_ads }}</h3>
                      <p>CEUB - 2022</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                      <span>{{ props.languageTexts.graduate }}</span>
                      <h3>{{ props.languageTexts.postgraduate_const_law }}</h3>
                <p>GRAN - 2024</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="5" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                      <span>{{ props.languageTexts.graduate }}</span>
                      <h3>{{ props.languageTexts.graduate_dir }}</h3>
                    <p>UNIEURO - 2011</p>
                    </div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide :name="6" class="column no-wrap">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                    <div class="slider-card rounded-borders col-12 full-height">
                      <span>{{ props.languageTexts.courses }}</span>
                    <h3>{{ props.languageTexts.courses_mining }}</h3>
                    <p>IA ACADEMY - 2017</p>
                    </div>
            </div>
        </q-carousel-slide>
        </q-carousel>

    </div>
</template>

<script setup>

import { ref,  onMounted, onUnmounted,  defineProps } from 'vue'

const props = defineProps({
  languageTexts: Object,
});



    const slide = ref(1);
    let isMobile = ref(false)

    const checkScreenWidth = () => {
        isMobile.value = window.innerWidth < 1000;
    };

    onMounted(() => {
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", checkScreenWidth);
    });

</script>

<style scoped>

.slider-carousel{
    background-color: aquamarine;
    background-position: center;
    background-size: cover;
    height: 500px;
    padding-top:100px;
}

.slider-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:10px;
}

span{
    border: 2px solid #000;
    padding:10px 15px;
    border-radius: 50%;
    font-weight: bold;
    margin-bottom:40px;
}

h3, p{
    text-align: center;
}

h3{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
}

p{
    color:#000;
}

@media only screen and (max-width: 1000px) {
    h3{
        line-height: 26px;
    }
}

</style>
