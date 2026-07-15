<template>
  <div class="section-title-wrapper">
    <h2 class="section-title">{{ title }}</h2>
    <div class="section-divider"></div>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
});
</script>
