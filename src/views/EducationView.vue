<template>
  <v-container>
    <div class="text-center mt-4">
      <h2>Formação Acadêmica</h2>
      <div style="width: 120px; margin: 0 auto; border-bottom: 3px solid #6f42c1;"></div>
    </div>

    <div class="timeline mt-6">
      <div v-for="edu in education" :key="edu.id" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>{{ edu.course }}</h3>
          <h4>{{edu.institution}}</h4>
          <small class="text-grey">( {{ edu.period }} - {{edu.status}} )</small>
          <p v-if="edu.descricao" class="mt-2">{{ edu.descricao }}</p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api';

const education = ref([]);

onMounted(async () => {
  education.value = await api.getEducation();
});
</script>
