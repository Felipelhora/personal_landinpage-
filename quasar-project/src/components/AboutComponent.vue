<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <div class="row">
      <div class="image col-xl-4 col-lg-4 col-xs-4 col-md-4 col-sm-4">
        <img
          v-if="$q.screen.xl"
          src="../assets/foto_face.png"
          alt="Foto de Felipe Lima da Hora"
          :style="{ width: '400px', marginLeft: '200px' }"
        />
        <img
          v-if="$q.screen.lg"
          src="../assets/foto_face.png"
          alt="Foto de Felipe Lima da Hora"
          :style="{ width: '400px', marginLeft: '100px' }"
        />
        <img
          v-if="$q.screen.md || $q.screen.sm"
          src="../assets/foto_face.png"
          alt="Foto de Felipe Lima da Hora"
          :style="{ width: '350px' }"
        />
        <img
          v-if="$q.screen.xs"
          src="../assets/foto_face.png"
          alt="Foto de Felipe Lima da Hora"
          :style="{ width: '300px', marginLeft: '60px' }"
        />
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
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-scroll-area class="fit">
                <div class="q-mt-md text-center">
                  <div class="text-h3 text-weight-bolder">
                    {{ props.languageTexts.title_about_me }}
                  </div>
                  <h4 class="text-weight-bolder">FELIPE LIMA DA HORA</h4>
                  <div class="text-weight-bolder text-h5">
                    FULLSTACK - DEVOPS
                  </div>
                  <br />
                  <p class="text-h5 text-justify">
                    {{ props.languageTexts.text_about_me }}
                  </p>
                </div>
              </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide
              name="tv"
              class="text-h4 column no-wrap text-weight-bolder no-wrap flex-center"
            >
              <q-scroll-area class="fit">
                <div class="text-h3 text-weight-bolder text-center">
                  ESPECIALIDADES
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
                        MINERAÇÃO DE DADOS
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
                        RPA - ROBOTIC PROCESS AUTOMATION
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
                        APLICAÇÃO REST - BACK END (PYTHON E PHP)
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
                        CIÊNCIA DE DADOS
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
                        INTELIGÊNCIA ARTIFICIAL
                      </div>
                    </li>
                  </ul>
                </div>
              </q-scroll-area>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <div class="text-h3 text-weight-bolder">OBJETIVOS</div>
              <div class="q-mt-md text-center text-h6">
                Aprender mais e mais com as novas tecnologias, desenvolver
                minhas habilidades e fazer parte de um grande projeto onde possa
                colaborar com meus conhecimentos técnicos e pessoais;
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-scroll-area class="fit">
                <div class="text-h3 text-weight-bolder text-center">
                  HABILIDADES PESSOAIS
                </div>
                <div class="no-wrap text-h6 justify-center">
                  <br />
                  <p>
                    A advocacia me proporcionou a capacidade de me expressar com
                    clareza e argumentos, aprimorando minha oratória e
                    conversação. Como gestor da equipe de estagiários,
                    desenvolvi a habilidade de lidar e gerir com as pessoas de
                    forma eficaz.
                  </p>
                  <p>
                    O militarismo me ensinou a receber e transmitir ordens,
                    seguir regras e ter um grande senso de responsabilidade nas
                    missões que me foram atribuídas.
                  </p>
                  <p>
                    Como desenvolvedor, minha maior paixão, adquiri habilidades
                    na resolução de problemas e uma nova forma de ver o mundo.
                  </p>
                  <p>
                    Por fim, todas as minhas experiências de vida me ensinaram a
                    ser criativo na resolução de problemas e a entender que é
                    impossível saber todas as coisas. Por isso, há a necessidade
                    de buscar conhecimento e, ao mesmo tempo, compartilhar esse
                    aprendizado com os outros.
                  </p>
                </div>
              </q-scroll-area>
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
});

console.log(props.languageTexts.title_about_me);
console.log(props.languageTexts.text_about_me);
// console.log("config[props.idioma]");
// console.log(config[props.idioma]);
// console.log("config[props.idioma]");

const $q = useQuasar();

const slide = ref("style");

// console.log(state);

// const state = reactive({
//   language: "portugues",
//   text_about_me: config[props.idioma]["about"]["text_about_me"],
//   title_about_me: config[props.idioma]["about"]["title_about_me"],
// });

// // Watcher para atualizar os textos quando o idioma mudar
// watch(
//   () => state.idioma,
//   (newIdioma) => {
//     state.language = newIdioma;
//     state.text_about_me = config[newIdioma]["about"]["text_about_me"];
//     state.title_about_me = config[newIdioma]["about"]["title_about_me"];
//   }
// );

function teste() {
  if ($q.screen.xl) {
    alert("xl");
  } else if ($q.screen.lg) {
    alert("lg");
  } else if ($q.screen.md) {
    alert("md");
  } else if ($q.screen.sm) {
    alert("sm");
  } else {
    alert("xs"); // Para telas extras pequenas
  }
}
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
<!-- Um jurista apaixonado por tecnologia, possuo mais de 7 anos
                    de experiência na área de desenvolvimento de sistemas,
                    abrangendo desde infraestrutura, bancos de dados até o
                    desenvolvimento de aplicações tanto back-end quanto
                    front-end. Essa trajetória me proporcionou uma ampla gama de
                    vivências e habilidades nas mais diversar técnologias. -->
