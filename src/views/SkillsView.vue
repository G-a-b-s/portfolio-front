<template>
  <v-container id="skills" class="pb-12">
    <div id="skills" class="text-center mt-4">
      <SectionTitle title="Habilidades" />
    </div>
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="getSlidesPerView"
        :space-between="16"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :autoplay="{
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }"
        class="project-swiper"
        :breakpoints="swiperBreakpoints"
    >
        <SwiperSlide
            v-for="(group, tipo) in sortedGroupedSkills"
            :key="tipo"
            class="card-wrapper"
        >
          <v-card class="skill-card bordered-card" elevation="3">
            <div class="skill-card-header">
              <h3 class="text-h6 mb-4">{{ tipo }}</h3>
            </div>
            <div class="skill-list">
              <v-chip
                  v-for="skill in group"
                  :key="skill.id"
                  :variant="tipo === 'Idioma' ? 'outlined' : 'tonal'"
                  class="skill-chip mb-2"
                  size="small"
              >
                <template v-if="tipo === 'Idioma'">
                  {{ skill.nome }} - {{ skill.nivel || 'Intermediário' }}
                </template>
                <template v-else>
                  {{ skill.nome }}
                </template>
              </v-chip>
            </div>
          </v-card>
        </SwiperSlide>
      </Swiper>
  </v-container>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import api from "@/services/api";
import SectionTitle from '@/components/SectionTitle.vue';

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

const getSlidesPerView = computed(() => {
  const width = window.innerWidth;
  if (width >= 1200) return 3;
  if (width >= 768) return 2;
  return 1;
});

const swiperBreakpoints = {
  0: { slidesPerView: 1, spaceBetween: 12 },
  768: { slidesPerView: 2, spaceBetween: 16 },
  1200: { slidesPerView: 3, spaceBetween: 16 },
};
</script>
