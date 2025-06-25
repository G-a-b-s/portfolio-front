<template>
  <v-app-bar
    app
    color="black"
    dark
    flat
    class="px-12"
  >
    <v-btn>
      <v-icon
        color="purple"
        left
        class="mr-2"
      >
        fas fa-signature
      </v-icon> Gabriel Rocha
    </v-btn>
    <v-spacer />
    <v-btn
      text
      @click="scroll('home')"
    >
      Perfil
    </v-btn>
    <v-btn
      text
      @click="scroll('about')"
    >
      Sobre
    </v-btn>
    <v-btn
      text
      @click="scroll('education')"
    >
      Educação
    </v-btn>
    <v-btn
      text
      @click="scroll('experience')"
    >
      Experiências
    </v-btn>
    <v-btn
      text
      @click="scroll('skills')"
    >
      Habilidades
    </v-btn>
    <v-btn
      text
      @click="scroll('projects')"
    >
      Projetos
    </v-btn>
    <v-btn
      text
      @click="scroll('contact')"
    >
      Contato
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>
</style>