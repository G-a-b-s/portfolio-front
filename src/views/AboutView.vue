<template>
  <v-col cols="12" class="mt-16" id="about">
    <div v-if="profile[0]">
      <v-row>
        <v-col cols="12" sm="6">
          <img src="/perfil.png" alt="Foto de perfil" class="photoProfile" />
        </v-col>
        <v-col cols="12" sm="6">
          <h4 class="mt-16 about-title">{{ profile[0].fullName }}</h4>
          <h3 class="mt-n4">{{ profile[0].title }}</h3>
          <p class="text-grey" style="text-align: justify;">
            {{ profile[0].summary }}
          </p>
          <br />
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