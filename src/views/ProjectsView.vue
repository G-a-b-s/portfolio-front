<template>
  <v-container id="projects" class="pb-12">
    <h2 class="text-center mb-6">Projetos</h2>

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
    >
      <SwiperSlide
          v-for="(repo, index) in pinned"
          :key="index"
          class="card-wrapper"
      >
        <v-card class="project-card" elevation="3">
          <div class="project-title">
            <div class="custom-project-title">{{ repo.name }}</div>
          </div>

          <v-card-text class="project-description">
            {{ repo.description || 'Sem descrição disponível.' }}
          </v-card-text>

          <v-card-text class="project-language">
            <strong>Linguagem:</strong>
            {{ formatLanguages(repo.languages) || 'Não especificada' }}
          </v-card-text>

          <v-card-actions class="project-actions">
            <v-btn
                variant="outlined"
                :href="repo.url"
                target="_blank"
                class="text-none project-btn"
            >
              Ver no GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </SwiperSlide>
    </Swiper>

    <div v-if="!pinned.length" class="text-center mt-4">
      Carregando projetos...
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import api from "@/services/api";

const pinned = ref([]);

onMounted(async () => {
  pinned.value = await api.getPinnedRepos();
});

function formatLanguages(languages) {
  return languages.nodes
    .filter(lang => lang.name !== "Objective-C")
    .map(lang => lang.name === "JavaScript" ? "JS" : lang.name)
    .join(", ");
}

const getSlidesPerView = computed(() => {
  const width = window.innerWidth;
  if (width >= 1200) return 3;
  if (width >= 768) return 2;
  return 1;
});
</script>

