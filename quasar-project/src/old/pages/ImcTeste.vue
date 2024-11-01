<template>
  <q-page class="q-page-centered">

      <div class="q-gutter-md">
        <div class="q-col-gutter-md" style="display: flex;">
          <!-- Calculadora de IMC -->
          <div class="q-col " style="padding: 30px;">
            <h3>Calculadora de IMC</h3>
            <div class="q-gutter-sm">
              <div class="q-field">
                <label class="q-label" for="peso">Peso (kg):</label>
                <q-input id="peso" v-model="peso" type="number" outlined />
              </div>
              <div class="q-field">
                <label class="q-label" for="altura">Altura (cm):</label>
                <q-input id="altura" v-model="altura" type="number" outlined />
              </div>
              <q-btn @click="calcularIMC" color="secondary" label="Calcular IMC" />
            </div>
          </div>

          <!-- Resultado do IMC -->
          <div v-if="imc !== null" class="q-col" style="padding: 30px;">
            <div >
              <h3>Resultado do IMC</h3>
              <h5 class="flex flex-center">Seu IMC é: {{ imc.toFixed(2) }}</h5>
              <h4 class="flex flex-center text-bold"  :class="classificacaoClass">{{ classificacaoIMC }}</h4>
            </div>
          </div>
        </div>
      </div>  
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      peso: null,
      altura: null,
      imc: null
    }
  },
  methods: {
    calcularIMC() {
      if (this.peso && this.altura) {
        const alturaMetros = this.altura / 100;
        this.imc = this.peso / (alturaMetros * alturaMetros);
      } else {
        this.imc = null;
      }
    }
  },
  computed: {
    classificacaoIMC() {
      if (this.imc === null) return '';
      if (this.imc < 18.5) {
        return 'Abaixo do peso';
      } else if (this.imc >= 18.5 && this.imc < 25) {
        return 'Peso normal';
      } else if (this.imc >= 25 && this.imc < 30) {
        return 'Sobrepeso';
      } else {
        return 'Obesidade';
      }
    },
    classificacaoClass() {
      switch (this.classificacaoIMC) {
        case 'Peso normal':
          return 'text-positive'; // #26A69A
        case 'Obesidade':
        case 'Abaixo do peso':
          return 'text-negative'; // #C10015
        case 'Sobrepeso':
          return 'text-warning'; // #F2C037
        default:
          return '';
      }
    }
  }
}
</script>

<style scoped>
.q-col {

  border: 2px solid #e9dbce;
  border-radius: 5px;
  margin: 3px;

}

.q-page-centered {
  display: flex;
  justify-content: center;
  align-items: center;

}
.text-positive {
  color: #26A69A;
}

.text-negative {
  color: #C10015; /* Abaixo do peso e Obesidade */
}

.text-warning {
  color: #F2C037; /* Sobrepeso */
}
</style>
