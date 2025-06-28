<template>
  <v-footer>
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="cFooter"
    >
      <v-card-text class="text-black">
        @ {{ new Date().getFullYear() }} —
        <strong>Gabriel Rocha</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  mounted() {
    console.log("FooterView carregado");
  }
}
</script>
