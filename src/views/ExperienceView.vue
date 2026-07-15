<template>
  <v-container>
    <div class="text-center mt-4">
      <SectionTitle title="Experiências" />
    </div>

    <div class="timeline mt-6">
      <div v-for="exp in experiences" :key="exp.id" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>{{ exp.position }} - {{ exp.company }}</h3>
          <small class="text-grey">{{ exp.duration }}</small>
          <p class="mt-2">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import api from '@/services/api';
import SectionTitle from '@/components/SectionTitle.vue';

const experiences = ref([]);

onMounted(async () => {
  experiences.value = await api.getExperiences();
});
</script>

