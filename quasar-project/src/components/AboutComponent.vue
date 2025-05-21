<template>

<div>

<br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">
    <br v-if="!$q.screen.xs">


</div>
<q-parallax


  src="../assets/fundo_roxo.png"
    :style="{
    marginTop: '0px',
    maxWidth: '1000px',
    margin: 'auto',
    minHeight: $q.screen.xs ? '750px' : '450px'
  }"
>
>
    <br v-if="!$q.screen.xs">
<div class="row items-center justify-center"  style="max-width: 1050px; margin: auto; min-height: 700px;">
    <div v-if="!$q.screen.xs" class="col-xl-6 col-lg-5 col-md-5 col-sm-6 col-xs-12 flex flex-center">
        <br v-if="$q.screen.xs">
        <br v-if="$q.screen.xs">
      <img v-if="!$q.screen.xs"
        src="../assets/foto_face.png"
        alt="Foto de Felipe L. Hora"
        :style="{
                  maxWidth: '100%',
                  width: '100%',
                  maxWidth: '1050px'
                  }"
      />


    </div>

      <!-- FOTO MOBILE -->
    <div v-if="$q.screen.xs" class="flex flex-center">
        <br v-if="$q.screen.xs">
        <br v-if="$q.screen.xs">
      <img
        src="../assets/foto_face.png"
        alt="Foto de Felipe L. Hora"
        :style="{
                  maxWidth: '100%',
                  width: '100%',
                  maxWidth:  '350px'
                  }"
      />


    </div>

  <br v-if="$q.screen.xs">
  <br v-if="$q.screen.xs">
  <br v-if="$q.screen.xs">
    <div class="col-xl-6 col-lg-5  col-md-7 col-xs-12 col-sm-6 text-center">
      <div class="title-animated robotic-font text-h3 text-white text-weight-bolder q-mt-md">
        <p class="q-mb-sm">FELIPE L HORA</p>
        <br>
        <p class="q-mt-none">FULLSTACK-DEVOPS</p>
      </div>
    </div>
  </div>
</q-parallax>


<br v-if="$q.screen.xs">
<br v-if="$q.screen.xs">

    <!-- Imagem centralizada -->

   <div class="col-xl-7 col-lg-7 col-xs-12 col-md-8 col-sm-10">
    <div class="q-pa-md">
        <br>
  <br>
  <br>
  <br>
  <br>
  <br>
      <q-carousel
        v-model="slide"
        swipeable
        padding
        arrows
        navigation
        navigation-icon="radio_button_unchecked"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="secondary"
        class="rounded-oval"
          style="background-color: aquamarine; max-width: 1200px; margin: auto; min-height: 600px;"
      >
        <!-- ABOUT ME -->
        <q-carousel-slide name="style" class="column no-wrap items-center q-pa-md">
          <div v-if="$q.screen.xs" class="q-mt-md text-center" style="max-width: 1000px; width: 100%;">
            <div class="text-h4 text-weight-bolder">
              {{ props.languageTexts.title_about_me }}
            </div>

            <br />
            <p class="text-body1 text-justify">
              {{ props.languageTexts.text_about_me }}
            </p>
            <br><br>
          </div>
          <div v-if="!$q.screen.xs" class="q-mt-md text-center" style="max-width: 1000px; width: 100%;">
            <div class="text-h3 text-weight-bolder">
              {{ props.languageTexts.title_about_me }}
            </div>

            <br>
            <br>
            <br />
            <p class="text-h6 text-justify">
              {{ props.languageTexts.text_about_me }}
            </p>
            <br><br>
          </div>
        </q-carousel-slide>

        <!-- ESPECIALIDADES DESKTOP -->
        <q-carousel-slide v-if="!$q.screen.xs" name="tv" class="text-h4 text-left q-pa-md">
          <q-scroll-area class="fit" style="max-width: 1000px; margin: auto;">
            <div class="q-mt-md text-center">
              <div class="text-h3 text-weight-bolder">
                {{ props.languageTexts.specialties }}
              </div>
              <br><br>

              <div class="q-mt-md">
                <ul>
                  <li>
                    <div>
                      <img src="src/assets/img/mining.png" alt="" class="q-mr-sm" style="width: 40px; height: 40px" />
                      {{ props.languageTexts.specialties_data_mining }}
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="src/assets/img/rpa_.png" alt="" class="q-mr-sm" style="width: 40px; height: 40px" />
                      {{ props.languageTexts.specialties_rpa }}
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="src/assets/img/api.png" alt="" class="q-mr-sm" style="width: 40px; height: 40px" />
                      {{ props.languageTexts.specialties_rest }}
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="src/assets/img/data_s.png" alt="" class="q-mr-sm" style="width: 40px; height: 40px" />
                      {{ props.languageTexts.specialties_data_science }}
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="src/assets/img/IA.png" alt="" class="q-mr-sm" style="width: 40px; height: 40px" />
                      {{ props.languageTexts.specialties_ia }}
                    </div>
                  </li>
                  <li>
                    <div>
                      <img src="src/assets/img/arquitetura.png" alt="" class="q-mr-sm" style="width: 40px; height: 40px" />
                      {{ props.languageTexts.specialties_arquitetura }}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </q-scroll-area>
        </q-carousel-slide>

        <!-- ESPECIALIDADES MOBILE -->
        <q-carousel-slide v-if="$q.screen.xs" name="tv" class="column no-wrap items-center q-pa-md">
          <br>
          <div class="text-h4 text-weight-bolder">
            {{ props.languageTexts.specialties }}
          </div>

          <div class="text-center q-mt-md">
            <img src="src/assets/img/rpa_.png" alt="" style="width: 40px; height: 40px" />
            <p class="text-h5 text-center" style="white-space: normal; word-break: break-word;">
              {{ props.languageTexts.specialties_rpa }}
            </p>
          </div>

          <div class="text-center q-mt-md">
            <img src="src/assets/img/api.png" alt="" style="width: 40px; height: 40px" />
            <p class="text-h5 text-center" style="white-space: normal; word-break: break-word;">
              {{ props.languageTexts.specialties_rest }}
            </p>
          </div>

          <div class="text-center q-mt-md">
            <img src="src/assets/img/IA.png" alt="" style="width: 40px; height: 40px" />
            <p class="text-h5 text-center" style="white-space: normal; word-break: break-word;">
              {{ props.languageTexts.specialties_data_science }}
            </p>
          </div>

          <div class="text-center q-mt-md">
            <img src="src/assets/img/arquitetura.png" alt="" style="width: 40px; height: 40px" />
            <p class="text-h5 text-center" style="white-space: normal; word-break: break-word;">
              {{ props.languageTexts.specialties_arquitetura }}
            </p>
          </div>
        </q-carousel-slide>

        <!-- OBJETIVOS -->
        <!-- <q-carousel-slide name="layers" class="column no-wrap flex-center q-pa-md" style="max-width: 1000px; margin: auto;">
          <div class="text-h3 text-weight-bolder">
            {{ props.languageTexts.objetivos }}
          </div>
          <br>
          <br>
          <br>
          <div v-if="$q.screen.xs" class=" text-h4 text-weight-bolder">
            {{ props.languageTexts.objetivos }}
          </div>
          <br><br>
          <div v-if="$q.screen.xs" class="text-body1 text-justify">
            {{ props.languageTexts.objetivos_text }}
          </div>
          <div v-if="!$q.screen.xs" class="text-h6 text-justify">
            {{ props.languageTexts.objetivos_text }}
          </div>
        </q-carousel-slide> -->
        <q-carousel-slide name="layers" class="column no-wrap items-center q-pa-md" style="max-width: 1000px; margin: auto;">
          <div>
            <br>
            <p v-if="!$q.screen.xs" class="text-h3 text-weight-bolder text-center">
              {{ props.languageTexts.objetivos }}
            </p>
            <p v-if="$q.screen.xs" class="text-h5 text-weight-bolder text-center">
             {{ props.languageTexts.objetivos }}
            </p>
            <br><br> <br><br> <br><br> <br><br> <br><br>
            <p v-if="!$q.screen.xs" class="text-h6 text-justify">
          {{ props.languageTexts.objetivos_text }}
            </p>
            <p v-if="$q.screen.xs" class="text-body1 text-justify">
           {{ props.languageTexts.objetivos_text }}
            </p>
          </div>
        </q-carousel-slide>

        <!-- HABILIDADES SOCIAIS -->
        <q-carousel-slide name="map" class="column no-wrap items-center q-pa-md" style="max-width: 1000px; margin: auto;">
          <div>
           <br v-if="!$q.screen.xs">
            <p v-if="!$q.screen.xs" class="text-h3 text-weight-bolder text-center">
              {{ props.languageTexts.social_skills }}
            </p>
            <br><br v-if="!$q.screen.xs">
            <p v-if="$q.screen.xs" class="text-h5 text-weight-bolder text-center">
              {{ props.languageTexts.social_skills }}
            </p>
            <br><br>
            <p v-if="!$q.screen.xs" class="text-h6 text-justify">
              {{ props.languageTexts.social_skills_text }}
            </p>
            <p v-if="$q.screen.xs" class="text-body1 text-justify">
              {{ props.languageTexts.social_skills_text }}
            </p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
    <!-- </div> -->
</template>


<script setup>
import { useQuasar } from "quasar";
import { ref, reactive, defineProps, watch } from "vue";


const props = defineProps({
  languageTexts: Object,
  idioma: Object
});

const $q = useQuasar();

const slide = ref("style");

</script>

<style scoped>




.rounded-oval {
  border-radius: 10%; /* Isso cria um efeito oval */
  overflow: hidden; /* Garante que o conteúdo não saia dos limites */

  justify-content: center;
  align-items: center;
}

@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

.title-animated,
.subtitle-animated {
  animation: mover 1.5s ease-in-out infinite alternate;
}
</style>
