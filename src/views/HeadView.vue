<template>
  <div class="head">
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <div
          style="position: relative"
          class="mt-16"
        >
          <h1 class="text-grey">
            Olá,
          </h1>
          <h1 class="text-white">
            Sou Gabriel Rocha
          </h1>
          <span class="text-grey">Desenvolvedor</span><br>
          <v-btn
            tile
            dark
            class="text-purple mt-8"
            variant="outlined"
            @click="handleContactClick"
          >
            Contato
          </v-btn>
        </div>
      </v-col>
      <v-col cols="2">
        <div
          style="
            position: absolute;
            z-index: 9999;
            bottom: 0;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
          "
          class="mt-16"
        >
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