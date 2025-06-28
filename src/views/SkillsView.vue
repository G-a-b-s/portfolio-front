<template>
  <v-container>
    <div id="skills" class="text-center mt-4">
      <h2>Habilidades</h2>
      <div style="width: 120px; margin: 0 auto; border-bottom: 3px solid #6f42c1;"></div>
    </div>
    <br/>
    <v-row justify="center" align="stretch">
      <v-col
          v-for="(group, tipo) in sortedGroupedSkills"
          :key="tipo"
          cols="12"
          sm="6"
          md="4"
          class="d-flex justify-center"
      >
        <v-card class="skill-card pa-4" outlined>
          <h3 class="text-h6 mb-4">{{ tipo }}</h3>
          <div class="skill-list">
            <v-chip
                v-for="skill in group"
                :key="skill.id"
                outlined
                class="mb-2"
            >
              <template v-if="tipo === 'Idioma'">
                {{ skill.nome }} - {{ skill.nivel || 'Nível não informado' }}
              </template>
              <template v-else>
                {{ skill.nome }}
              </template>
            </v-chip>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import api from "@/services/api";

const skills = ref([]);

onMounted(async () => {
  skills.value = await api.getSkills();
});

const groupedSkills = computed(() => {
  const groups = {};
  skills.value.forEach(skill => {
    if (!groups[skill.tipo]) {
      groups[skill.tipo] = [];
    }
    groups[skill.tipo].push(skill);
  });
  return groups;
});

const sortedGroupedSkills = computed(() => {
  const entries = Object.entries(groupedSkills.value);
  entries.sort((a, b) => b[1].length - a[1].length);
  return Object.fromEntries(entries);
});
</script>
