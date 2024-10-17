<template>
  <q-page>
    <q-page-container class="flex flex-center ">
      <div class="column ">
        <div class="text-center">
          <h2>Contate-nos</h2>
        </div>
        <div class="text-center q-mb-xl">
          <q-icon name="fab fa-facebook" size="2.5em" class="q-mx-md" color="secondary" />
          <q-icon name="fab fa-instagram" size="2.5em" class="q-mx-md" color="secondary" />
          <q-icon name="fab fa-google-plus" size="2.5em" class="q-mx-md" color="secondary" />
        </div>
      </div>
      <div class="column">
        <q-form @submit="submitForm" class="text-center">
          <q-input outlined v-model="formData.nome" label="Nome completo" dense class="q-mb-md" />
          <q-input outlined v-model="formData.email" label="Email" type="email" dense class="q-mb-md" />
          <q-input outlined v-model="formData.Text" label="Digite seu texto" dense type="textarea" />
          <q-btn @click="openDialog" color="secondary" label="Enviar" type="submit" class="q-mt-md">
          </q-btn>
        </q-form>
      </div>
    </q-page-container>
    <div v-if="showSuccessMessage" class=" flex flex-center  text-secondary">
      <p class="text-h6">Sua mensagem foi enviada com sucesso!</p>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'ContatoForm',

  data() {
    return {
      formData: {
        nome: '',
        email: '',
        Text: ''
      },
      showSuccessMessage: false
    }
  },
  methods: {
    submitForm() {
      if (this.formData.nome && this.formData.email && this.formData.Text) {

        setTimeout(() => {
          console.log('Formulário enviado:', this.formData);
          this.showSuccessMessage = true;
          this.formData.nome = '';
          this.formData.email = '';
          this.formData.Text = '';

          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        }, 0);
      }
    },
  }
};
</script>

<style scoped>
.column {
  padding: 20px;
}

.q-input,
.q-btn {
  width: 300px;
  max-width: 400px;
}

.q-icon {
  cursor: pointer;
}
</style>
