<template>
  <q-page class="container">
    <q-page-container   v-if="!$q.screen.xs" class="flex flex-center">
      <div class="contact-info column items-center q-pa-md">
        <div class="text-h3 text-white q-mb-md text-center">
          <q-icon name="email" class="q-mr-sm" />
          <strong>E-mail:</strong>
          <div>felipelhora@gmail.com</div>
        </div>

        <div class="q-mb-sm row items-center">
          <img src="src/assets/img/lindkin.png" alt="LinkedIn" class="icon" />
          <a
            href="https://www.linkedin.com/in/felipe-hora-46821b240/"
            target="_blank"
            class="text-white text-h3"
          >LINKEDIN</a>
        </div>

        <div class="row items-center">
          <img src="src/assets/img/github.png" alt="Github" class="icon" />
          <a
            href="https://github.com/Felipelhora/"
            target="_blank"
            class="text-white text-h3"
          >GITHUB</a>
        </div>
      </div>
    </q-page-container>
    <q-page-container v-if="$q.screen.xs" class="flex flex-center">
      <div class="contact-info column items-center q-pa-md">
        <div class="text-h5 text-white q-mb-md text-center">
          <q-icon name="email" class="q-mr-sm" />
          <strong>E-mail:</strong>
          <div>felipelhora@gmail.com</div>
        </div>

        <div class="q-mb-sm row items-center">
          <img src="src/assets/img/lindkin.png" alt="LinkedIn" class="icon" />
          <a
            href="https://www.linkedin.com/in/felipe-hora-46821b240/"
            target="_blank"
            class="text-white text-subtitle1"
          >LINKEDIN</a>
        </div>

        <div class="row items-center">
          <img src="src/assets/img/github.png" alt="Github" class="icon" />
          <a
            href="https://github.com/Felipelhora/"
            target="_blank"
            class="text-white text-subtitle1"
          >GITHUB</a>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>


<script setup>

import { useQuasar } from "quasar";

const $q = useQuasar();

</script>

<style scoped>
.contact-info {
  text-align: center;
  max-width: 90vw; /* Evita overflow em telas pequenas */
}

.icon {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}

.container {
  background-image: url("../assets/fundo_roxo.png");
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Garante que a página ocupe a tela inteira */
}
</style>
