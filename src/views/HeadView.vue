<template>
  <div class="head">
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <div
          style="position: relative"
          class="mt-16"
        >
          <h1 class="s-cpurple">
            Olá,
          </h1>
          <h1 style="color: #b3a1f7">
            Sou Gabriel Rocha
          </h1>
          <span class="s-cpurple">Desenvolvedor</span><br>
          <v-btn
            tile
            dark
            class="mt-8"
            style="border-color: #5a3ea0; color: #b3a1f7"
            variant="outlined"
            @click="handleContactClick"
          >
            Contato
          </v-btn>
        </div>
      </v-col>
      <v-col cols="2">
        <div class="angle-down mt-16">
          <v-icon @click="handleAboutClick">fas fa-angle-double-down</v-icon>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
const emit = defineEmits(['scroll-contact']);

function handleContactClick() {
  emit('scroll-contact');
}
function handleAboutClick() {
  emit('scroll-about');
}
</script>