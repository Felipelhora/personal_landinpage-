<template>
  <q-page>
    <q-page-container class="flex flex-center">
      <div class="contact-info text-h3 q-mb-md text-left">
        <p><q-icon name="phone" /> <strong>Telefone:</strong> (61) xxxx-xxxx</p>
        <p>
          <q-icon name="email" class="text-green" />
          <strong class="text-green">E-mail:</strong> @gmail.com
        </p>
        <p>
          <img src="src/assets/img/lindkin.png" alt="LinkedIn" class="icon" />
          <a
            href="https://www.linkedin.com/in/felipe-hora-46821b240/"
            target="_blank"
            >LINKEDIN</a
          >
        </p>
        <p>
          <img src="src/assets/img/github.png" alt="Github" class="icon" />
          <a href="https://github.com/Felipelhora/" target="_blank">GITHUB</a>
        </p>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "ContatoForm",

  data() {
    return {
      formData: {
        nome: "",
        email: "",
        Text: "",
      },
      showSuccessMessage: false,
    };
  },
  methods: {
    submitForm() {
      if (this.formData.nome && this.formData.email && this.formData.Text) {
        setTimeout(() => {
          console.log("Formulário enviado:", this.formData);
          this.showSuccessMessage = true;
          this.formData.nome = "";
          this.formData.email = "";
          this.formData.Text = "";

          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        }, 0);
      }
    },
  },
};
</script>

<style scoped>
.contact-info {
  margin-bottom: 20px;
  text-align: center;
}

.icon {
  width: 40px; /* Ajuste o tamanho conforme necessário */
  height: 40px; /* Ajuste o tamanho conforme necessário */
  margin-right: 8px; /* Espaçamento entre o ícone e o texto */
}
</style>
