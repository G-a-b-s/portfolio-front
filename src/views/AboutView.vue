<template>
  <v-col cols="12" class="mt-16" id="about">
    <div v-if="profile[0]">
      <v-row>
        <v-col cols="12" md="5" class="text-center">
          <div class="profile-pic-wrapper">
            <v-avatar size="220" class="elevation-12">
              <img :src="baseUrl + 'perfil.jpeg'" alt="Gabriel Rocha" class="photoProfile" loading="lazy" decoding="async" />
            </v-avatar>
            <div class="orbit-icon vueIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                  class="tech-icon"
                  loading="lazy"
                  decoding="async"
              />
            </div>
            <div class="orbit-icon jsIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  class="tech-icon"
                  loading="lazy"
                  decoding="async"
              />
            </div>
            <div class="orbit-icon javaIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                  class="tech-icon"
                  loading="lazy"
                  decoding="async"
              />
            </div>
            <div class="orbit-icon flutterIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  alt="Flutter"
                  class="tech-icon"
                  loading="lazy"
                  decoding="async"
              />
            </div>
            <div class="orbit-icon gitIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  class="tech-icon"
                  loading="lazy"
                  decoding="async"
              />
            </div>
            <div class="orbit-icon csharpIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  alt="C#"
                  class="tech-icon"
                  loading="lazy"
                  decoding="async"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7" class="profile d-flex flex-column justify-start">
          <h4 class="about-title">{{ profile[0].fullName }}</h4>
          <h3 class="mt-n2">{{ profile[0].title }}</h3>
          <p class="text-grey text-justify">
            {{ profile[0].summary }}
          </p>

          <div class="about-highlights mt-4">
            <span class="about-highlights-title">Foco atual</span>
            <div class="about-chips">
              <v-chip size="small" variant="outlined" color="deep-purple-accent-4">FullStack</v-chip>
              <v-chip size="small" variant="outlined" color="deep-purple-accent-4">IA</v-chip>
              <v-chip size="small" variant="outlined" color="deep-purple-accent-4">Produtos Digitais</v-chip>
              <v-chip size="small" variant="outlined" color="deep-purple-accent-4">Automação</v-chip>
              <v-chip size="small" variant="outlined" color="deep-purple-accent-4">Agentes</v-chip>
            </div>
          </div>

          <div class="about-more mt-6">
            <h5 class="about-subtitle">Mais sobre mim</h5>
            <v-expansion-panels variant="accordion" class="mt-3">
              <v-expansion-panel
                  v-for="item in aboutDetails"
                  :key="item.id"
              >
                <v-expansion-panel-title>{{ item.title }}</v-expansion-panel-title>
                <v-expansion-panel-text>{{ item.description }}</v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>

          <v-btn
              tile
              class="mt-6 btnResume rounded"
              @click="downloadResume"
          >
            Download CV
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row justify="center" class="mt-16">
        <v-progress-circular indeterminate color="primary" />
      </v-row>
    </div>
  </v-col>
</template>

<script setup>
import {onMounted, ref} from "vue";
import api from "@/services/api";

const baseUrl = process.env.BASE_URL;

const profile = ref([]);
const aboutDetails = ref([]);

onMounted(async () => {
  profile.value = await api.getProfile();
  aboutDetails.value = await api.getAboutMe();
});

function downloadResume() {
  const link = document.createElement('a')
  link.href = `${baseUrl}resume.pdf`;
  link.download = 'Gabriel_Rocha_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
