<template>
  <q-page>
    <br />
    <div class="text-h4 text-center text-weight-bolder">
      REPOSITÓRIOS PÚBLICOS
    </div>
    <div class="cards-wrapper">
      <div v-for="card in publicCards" :key="card.id" class="card-container">
        <q-card class="my-card">
          <q-img :src="card.imagem" class="card-image">
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

    <div class="text-h4 text-center text-weight-bolder">
      REPOSITÓRIOS PRIVADOS
    </div>
    <div class="cards-wrapper">
      <div v-for="card in privateCards" :key="card.id" class="card-container">
        <q-card class="my-card">
          <q-img :src="card.imagem" class="card-image">
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
import { ref, onMounted } from "vue";

const publicCards = ref([
  {
    id: 1,
    titulo: "Pyproject",
    descricao: "Biblioteca que cria projetos seguindo regras SOLID",
    imagem: "",
    link: "https://github.com/Felipelhora/pyprojects",
  },
  {
    id: 2,
    titulo: "FreePDFhandler",
    descricao: "Projeto de manipulação de PDF (instalável Windows)",
    imagem: "",
    link: "linux_debian_installation_automation",
  },
  {
    id: 3,
    titulo: "Monitor de despesas",
    descricao:
      "Bot Telegram com Banco de dados para monitorar as despesas pessoais",
    imagem: "",
    link: "linux_debian_installation_automation",
  },
  {
    id: 4,
    titulo: "Omie api interface",
    descricao:
      "Interface de comunicação com a API da Omie para lançar pagamentos a receber.",
    imagem: "",
    link: "https://github.com/Felipelhora/interface_omie_api",
  },
  {
    id: 5,
    titulo: "RPA - Instalação Automática Linux",
    descricao:
      "Instalação automática do ambiente de desenvolvimento para Ubuntu 22:04",
    imagem: "",
    link: "https://github.com/Felipelhora/linux_debian_installation_automation",
  },
  {
    id: 6,
    titulo: "Percptron IA em várias linguagens de programação",
    descricao:
      "Demonstrativo da construção de percptron em várias linguagens de programação",
    imagem: "",
    link: "https://github.com/Felipelhora/perceptron_IA_all_languages",
  },
]);

const privateCards = ref([
  {
    id: 1,
    titulo: "Reconhecimento Facial",
    descricao: "IA de reconhecimento Facial",
    imagem: "",
    link: "",
  },
  {
    id: 2,
    titulo: "SocialFollowTracker",
    descricao:
      "Sistema de acompanhamento e mineração de dados de redes sociais",
    imagem: "",
    link: "",
  },
  {
    id: 3,
    titulo: "Escavador",
    descricao:
      "Sistema de mineração e notificação de dados de fontes de noticias abertas",
    imagem: "",
    link: "",
  },
]);

onMounted(() => {
  publicCards.value.forEach((card, index) => {
    switch (index % 6) {
      case 0:
        card.imagem = new URL(
          "../assets/img/pyptoject.png",
          import.meta.url
        ).href;
        break;
      case 1:
        card.imagem = new URL(
          "../assets/img/pdffree.png",
          import.meta.url
        ).href;
        break;
      case 2:
        card.imagem = new URL(
          "../assets/img/monitor_despesas.png",
          import.meta.url
        ).href;
        break;
      case 3:
        card.imagem = new URL("../assets/img/omie.png", import.meta.url).href;
        break;
      case 4:
        card.imagem = new URL(
          "../assets/img/ubuntu_install.png",
          import.meta.url
        ).href;
        break;
      case 5:
        card.imagem = new URL(
          "../assets/img/langagues.png",
          import.meta.url
        ).href;
        break;
      default:
        card.imagem = "";
    }
  });

  privateCards.value.forEach((card, index) => {
    switch (index % 3) {
      case 0:
        card.imagem = new URL(
          "../assets/img/rec_facial.png",
          import.meta.url
        ).href;
        break;
      case 1:
        card.imagem = new URL(
          "../assets/img/redes_sociais.png",
          import.meta.url
        ).href;
        break;
      case 2:
        card.imagem = new URL("../assets/img/osint.png", import.meta.url).href;
        break;
      default:
        card.imagem = "";
    }
  });
});
</script>

<style>
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.my-card {
  width: 250px; /* Definindo largura fixa */
  height: 420px; /* Definindo altura fixa */
}

.card-container {
  margin: 35px 15px 15px 15px;
}

.card-image {
  height: 300px; /* Definindo altura da imagem */
}

.text-primary {
  color: #007bff; /* Cor do link, ajuste conforme necessário */
}
</style>
