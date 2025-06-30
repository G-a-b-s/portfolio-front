<template>
  <v-col cols="12" class="mt-16" id="about">
    <div v-if="profile[0]">
      <v-row>
        <v-col cols="12" md="5" class="text-center">
          <div class="profile-pic-wrapper">
            <v-avatar size="220" class="elevation-12">
              <img src="/perfil.jpeg" alt="Gabriel Rocha" class="photoProfile" />
            </v-avatar>
            <div class="orbit-icon vueIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                  class="tech-icon"
              />
            </div>
            <div class="orbit-icon jsIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  class="tech-icon"
              />
            </div>
            <div class="orbit-icon javaIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  alt="Java"
                  class="tech-icon"
              />
            </div>
            <div class="orbit-icon flutterIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  alt="Flutter"
                  class="tech-icon"
              />
            </div>
            <div class="orbit-icon gitIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                  class="tech-icon"
              />
            </div>
            <div class="orbit-icon csharpIcon">
              <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  alt="C#"
                  class="tech-icon"
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
          <v-btn
              tile
              class="mt-4 btnResume rounded"
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

const profile = ref([]);
onMounted(async () => {
  profile.value = await api.getProfile();
});

function downloadResume() {
  const link = document.createElement('a')
  link.href = '/resume.pdf'
  link.download = 'Gabriel_Rocha_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
