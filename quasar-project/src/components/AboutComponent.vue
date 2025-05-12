<template>
  <div class="container">
    <br v-if="!$q.screen.xs"/>
    <br v-if="!$q.screen.xs"/>
    <br v-if="!$q.screen.xs"/>
    <br v-if="!$q.screen.xs"/>
    <br v-if="!$q.screen.xs"/>
    <br v-if="!$q.screen.xs"/>
    <div class="row">
      <div class="image col-xl-4 col-lg-4 col-xs-4 col-md-4 col-sm-4">
        <div class="justify-center">
        <img
          v-if="$q.screen.xl"
          src="../assets/foto_face.png"
          alt="Foto de Felipe  L. Hora"
          :style="{ width: '400px', marginLeft: '200px' }"
        />
        <img
          v-if="$q.screen.lg"
          src="../assets/foto_face.png"
          alt="Foto de Felipe  L. Hora"
          :style="{ width: '300px', marginLeft: '100px' }"
        />
        <img
          v-if="$q.screen.md"
          src="../assets/foto_face.png"
          alt="Foto de Felipe  L. Hora"
          :style="{ width: '350px' }"
        />
        <img
          v-if="$q.screen.xs"
          src="../assets/foto_face.png"
          alt="Foto de Felipe L. Hora"
          :style="{ width: '370px'}"
        />
        <img
          v-if="$q.screen.sm"
          src="../assets/foto_face.png"
          alt="Foto de Felipe L. Hora"
          :style="{ width: '400px', marginLeft: '60px'}"
        />
        </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-xs-12 col-md-8 col-sm-10">
        <div class="q-pa-md">
          <q-carousel
            v-model="slide"
            swipeable
            padding
            arrows
            navigation
            height="500px"
            navigation-icon="radio_button_unchecked"
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            control-color="secondary"
            class="rounded-oval"
            style="background-color: aquamarine"
          >
            <q-carousel-slide name="style" class="column no-wrap items-center q-pa-md">
<!--              <q-scroll-area class="fit">-->
                <div class="q-mt-md text-center">
                  <div class="text-h3 text-weight-bolder">
                    {{ props.languageTexts.title_about_me }}
                  </div>
                  <h4 class="text-weight-bolder">FELIPE L. HORA</h4>
                  <div class="text-weight-bolder text-h5">
                    FULLSTACK - DEVOPS
                  </div>
                  <br />
                  <p class="text-h5 text-justify">
                    {{ props.languageTexts.text_about_me }}
                  </p>
                  <br>
                  <br>
                </div>
<!--              </q-scroll-area>-->
            </q-carousel-slide>
            <q-carousel-slide
              v-if="!$q.screen.xs"
              name="tv"
              class="text-h4 column no-wrap text-weight-bolder no-wrap flex-center"
            >
              <q-scroll-area  class="fit">
                <div class="q-mt-md text-center">
                  <div class="text-h4 text-weight-bolder">
                  {{ props.languageTexts.specialties }}
                </div>
                <div class="q-mt-md">
                  <ul>
                    <li>
                      <div class="">
                        <img
                          src="src/assets/img/mining.png"
                          alt=""
                          class="q-mr-sm"
                          style="width: 40px; height: 40px"
                        />
                        {{ props.languageTexts.specialties_data_mining }}
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="src/assets/img/rpa_.png"
                          alt=""
                          class="q-mr-sm"
                          style="width: 40px; height: 40px"
                        />
                        {{ props.languageTexts.specialties_rpa }}
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="src/assets/img/api.png"
                          alt=""
                          class="q-mr-sm"
                          style="width: 40px; height: 40px"
                        />
                        {{ props.languageTexts.specialties_rest }}
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="src/assets/img/data_s.png"
                          alt=""
                          class="q-mr-sm"
                          style="width: 40px; height: 40px"
                        />
                        {{ props.languageTexts.specialties_data_science }}
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="src/assets/img/IA.png"
                          alt=""
                          class="q-mr-sm"
                          style="width: 40px; height: 40px"
                        />
                        {{ props.languageTexts.specialties_ia }}
                      </div>
                    </li>
                    <li>
                      <div>
                        <img
                          src="src/assets/img/arquitetura.png"
                          alt=""
                          class="q-mr-sm"
                          style="width: 40px; height: 40px"
                        />
                        {{ props.languageTexts.specialties_arquitetura }}
                      </div>
                    </li>
                  </ul>
                </div>
                </div>
              </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide
              v-if="$q.screen.xs"
              name="tv"
              class="text-weight-bolder text-center"
            >
            <div class="text-h4 text-weight-bolder text-center">
                    {{ props.languageTexts.specialties }}
                  <div class="text-center" >

                    <br>
                    <img
                      src="src/assets/img/mining.png"
                      alt=""
                      style="width: 40px; height: 40px"
                    />
                    <p
                      class="text-h5 text-weight-bolder text-center"
                      style="white-space: normal; word-break: break-word;"
                    >
                      {{ props.languageTexts.specialties_data_mining }}
                    </p>
                  </div>
              <div class="text-center" >

                <br>
                <img
                  src="src/assets/img/rpa_.png"
                  alt=""
                  style="width: 40px; height: 40px"
                />
                <p
                  class=" text-h5  text-weight-bolder text-center"
                  style="white-space: normal; word-break: break-word;"
                >
                  {{ props.languageTexts.specialties_rpa }}
                </p>
              </div>
              <div class="text-center" >

                <br>
                <img
                  src="src/assets/img/api.png"
                  alt=""
                  style="width: 40px; height: 40px"
                />
                <p
                  class="text-h5 text-weight-bolder text-center"
                  style="white-space: normal; word-break: break-word;"
                >
                  {{ props.languageTexts.specialties_rest }}
                </p>
              </div>


              <div class="text-center" >

                <br>
                <img
                  src="src/assets/img/IA.png"
                  alt=""
                  style="width: 40px; height: 40px"
                />
                <p
                  class="text-h5  text-weight-bolder text-center"
                  style="white-space: normal; word-break: break-word;"
                >
                  {{ props.languageTexts.specialties_data_science }}
                </p>
              </div>



              <div class="text-center" >
                <br>

                <img
                  src="src/assets/img/arquitetura.png"
                  alt=""
                  style="width: 40px; height: 40px"
                />
                <p
                  class="text-h5 text-weight-bolder text-center"
                  style="white-space: normal; word-break: break-word;"
                >
                  {{ props.languageTexts.specialties_arquitetura }}
                </p>
              </div>
              <br>
              <br>

                </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="text-h3 text-weight-bolder">
                {{ props.languageTexts.objetivos }}
              </div>
              <div class="q-mt-md text-center text-h6">
                {{ props.languageTexts.objetivos_text }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap items-center q-pa-md">
              <div style="max-width: 800px;">
                <p v-if="!$q.screen.xs"  class="text-h3 text-weight-bolder text-center">
                  {{ props.languageTexts.social_skills}}
                </p>
                <p v-if="$q.screen.xs" class="text-h5 text-weight-bolder text-center">
                    {{ props.languageTexts.social_skills}}
                  </p>
                <br>
                <br>
                <p class="text-h5 text-justify">
                  {{ props.languageTexts.social_skills_text}}
                </p>
                <br>
                <br v-if="!$q.screen.xs"/>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </div>
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
.container {
  background-image: url("../assets/fundo_roxo.png");
}

.rounded-oval {
  border-radius: 10%; /* Isso cria um efeito oval */
  overflow: hidden; /* Garante que o conteúdo não saia dos limites */

  justify-content: center;
  align-items: center;
}
</style>
