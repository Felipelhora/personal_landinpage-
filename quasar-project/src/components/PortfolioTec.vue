<template>
  <q-page class="container">
    <br /><br /><br />

    <!-- Título Repositórios Públicos -->
    <div class="text-h4 text-center text-white text-weight-bolder">
      {{ props.languageTexts.public_repositories }}
    </div>

    <!-- Cards Públicos -->
    <div class="cards-wrapper">
      <div v-for="card in publicCards" :key="card.id" class="card-container">
        <q-card class="my-card">
          <q-img :src="getImageUrl(card.imagem)" class="card-image">
            <div class="absolute-bottom text-h6 text-white">
              {{ card.titulo }}
            </div>
          </q-img>
          <q-card-section>
            <div>
              {{ card.descricao }}
              <a
                v-if="card.link"
                :href="card.link"
                target="_blank"
                class="text-primary"
              >
                Veja mais
              </a>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <br /><br />
    <div class="flex justify-center">
      <q-separator color="orange" inset :style="{ width: '50%' }" class="q-ma-md" />
    </div>
    <br /><br />

    <!-- Título Repositórios Privados -->
    <div class="text-h4 text-center text-white text-weight-bolder">
      {{ props.languageTexts.private_repositories }}
    </div>

    <!-- Cards Privados -->
    <div class="cards-wrapper">
      <div v-for="card in privateCards" :key="card.id" class="card-container">
        <q-card class="my-card">
          <q-img :src="getImageUrl(card.imagem)" class="card-image">
            <div class="absolute-bottom text-h6 text-white">
              {{ card.titulo }}
            </div>
          </q-img>
          <q-card-section>
            <div>
              {{ card.descricao }}
              <a
                v-if="card.link"
                :href="card.link"
                target="_blank"
                class="text-primary"
              >
                Veja mais
              </a>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, defineProps, watch } from "vue";

// Props
const props = defineProps({
  languageTexts: Object,
  repositoriesList: Object,
  idioma: Object,
});

const publicCards = ref([]);
const privateCards = ref([]);




function getImageUrl(filename) {
  return new URL(`../assets/img/${filename}`, import.meta.url).href;
}

function atualizarCards() {
  publicCards.value = props.repositoriesList.public.map((card) => ({
    ...card,
    imagem: card.imagem,
  }));

  privateCards.value = props.repositoriesList.private.map((card) => ({
    ...card,
    imagem: card.imagem,
  }));
}

onMounted(() => {
  atualizarCards();
});

watch(
  () => props.idioma,
  () => {
    atualizarCards();
  }
);

</script>

<style>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.my-card {
  width: 250px;
  height: 420px;
}

.card-container {
  margin: 35px 15px 15px 15px;
}

.card-image {
  height: 300px;
}

.text-primary {
  color: #007bff;
}

.container {
  background-image: url("../assets/fundo_roxo.png");
}
</style>
