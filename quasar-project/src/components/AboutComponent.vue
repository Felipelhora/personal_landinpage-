<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row">
      <div class="col-xl-6 col-lg-6 d-flex justify-content-center">
        <img src="../assets/foto_face.png" alt="Foto de Felipe Lima da Hora" />
      </div>
      <div class="col-xl-6 col-lg-6 d-flex justify-content-center">
        <div class="card animated-card">
          <div class="text-h3 text-white text-weight-bolder">
            FELIPE LIMA DA HORA
          </div>
          <br />

          <h4 class="text-weight-bolder">Desenvolvedor Full-Stack</h4>
          <br />
          <br />
          <p class="text-h6 text-justify">
            Apaixonado por tecnologia e com mais de 6 anos de experiência na
            área de desenvolvimento, que me trouxeram vivências que vão desde
            infraestrutura e bancos de dados até o desenvolvimento de aplicações
            back-end e front-end.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const leftBanner = computed(() => {
  if ($q.screen.width >= 1520 || $q.screen.width <= 1700) {
    return "-200px";
  }
  if ($q.screen.width >= 1706 || $q.screen.width <= 1920) {
    return "-400px";
  }
  if ($q.screen.lg) {
    return "-200px";
  }
  return "0px"; // Adicione um valor padrão para outras larguras
});

function teste() {
  console.log($q.screen.width);
  if ($q.screen.xl == true) alert("xl");
  if ($q.screen.lg == true) alert("lg");
  if ($q.screen.md == true) alert("md");
  if ($q.screen.sm == true) alert("sm");
  if ($q.screen.xs == true) alert("xs");
  // console.log('xl', $q.screen.xl) // EXTRA LARGE (GRANDE)
  // console.log('lg', $q.screen.lg) // LARGE (MARIOR)
  // console.log('md', $q.screen.md) // MEDIUM (MEDIO)
  // console.log('sm', $q.screen.sm) // SMALL (PEQUENO)
  // console.log('xs', $q.screen.xs) // EXTRA SMALL (MUITO PEQUENO)
  // console.log(state);
}
</script>

<style scoped>
.container {
  padding: 0 200px;
  padding-top: 70px;
}

.animated-card {
  animation: mover 1s infinite alternate;
}

@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}

img {
  width: 500px;
}

.card {
  background: #97e99e;
  border: 2px solid #fff; /* Adicione uma borda branca */
  border-radius: 10%; /* Torna o cartão oval */
  padding: 100px;
  max-width: 900ch;
  position: relative;
  top: 100px;
}

.card h3 {
  color: #fff;
  font-weight: 600;
  margin-bottom: 20px;
}

.text {
  color: #fff;
}

@media only screen and (max-width: 1000px) {
  .container {
    padding: 0 30px;
    padding-top: 100px;
  }

  img {
    width: 400px;
  }

  .card {
    /* Se necessário, adicione regras aqui */
  }

  .card h3 {
    font-size: 20px;
  }

  .card p {
    font-size: 12px;
  }

  .row {
    flex-direction: column;
  }

  .col-6 {
    width: 100%;
  }

  .col-6:first-child {
    justify-content: center !important;
  }

  .col-6:last-child {
    position: relative;
    bottom: 100px;
  }
}
</style>
