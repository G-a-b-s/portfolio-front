<template>
  <div class="head">
    <v-row class="hero-row justify-center align-center">
      <v-col cols="12" md="7" class="hero-copy">
        <div class="hero-badge">FullStack · IA · Produtos Digitais</div>
        <h1 class="hero-title">
          Olá, sou <span>Gabriel Rocha</span>
        </h1>
        <p class="hero-subtitle">
          Crio soluções digitais e produtos inteligentes com foco em IA, automação,
          experiência de usuário e desenvolvimento fullstack.
        </p>

        <div class="hero-actions">
          <v-btn class="hero-primary" @click="handleContactClick">
            Fale comigo
          </v-btn>
          <v-btn variant="outlined" class="hero-secondary" @click="handleProjectsClick">
            Ver projetos
          </v-btn>
        </div>

        <div class="hero-tags">
          <v-chip class="hero-chip" variant="outlined">FullStack</v-chip>
          <v-chip class="hero-chip" variant="outlined">AI-Native</v-chip>
          <v-chip class="hero-chip" variant="outlined">LLMs</v-chip>
          <v-chip class="hero-chip" variant="outlined">Automação</v-chip>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="hero-card-col">
        <div class="hero-card">
          <h3>Atuação em</h3>
          <ul>
            <li>Experiências inteligentes com IA</li>
            <li>Fluxos de automação e produtividade</li>
            <li>Interfaces modernas para produtos digitais</li>
          </ul>
        </div>
      </v-col>
    </v-row>

    <div class="angle-down">
      <v-icon @click="handleAboutClick">fas fa-angle-double-down</v-icon>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['scroll-contact', 'scroll-about', 'scroll-projects']);

function handleContactClick() {
  emit('scroll-contact');
}

function handleAboutClick() {
  emit('scroll-about');
}

function handleProjectsClick() {
  emit('scroll-projects');
}
</script>