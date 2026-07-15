<template>
  <v-app-bar app color="black" dark flat class="px-6 px-md-12 navbar-custom">
    <v-btn class="text-none brand-btn" variant="text" @click="handleDrawerClick('home')">
      <v-icon color="purple" left class="mr-2">fas fa-signature</v-icon>
      <span class="cpurple">Gabriel Rocha</span>
    </v-btn>
    <v-spacer />

    <template v-if="!isCollapsed">
      <v-btn
        v-for="item in items"
        :key="item.id"
        class="nav-link"
        variant="text"
        @click="scroll(item.id)"
      >
        {{ item.label }}
      </v-btn>
    </template>

    <template v-else>
      <v-btn class="cpurple" icon @click="drawer = !drawer">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    right
    class="mobile-nav"
  >
    <v-list density="comfortable">
      <v-list-item
        v-for="item in items"
        :key="item.id"
        @click="handleDrawerClick(item.id)"
        link
      >
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { scrollToSection } from '@/utils/scroll';

const drawer = ref(false);
const isCollapsed = ref(false);

const updateCollapse = () => {
  isCollapsed.value = window.innerWidth < 900;
};

onMounted(() => {
  updateCollapse();
  window.addEventListener('resize', updateCollapse);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCollapse);
});

const items = [
  { label: "Sobre", id: "about" },
  { label: "Educação", id: "education" },
  { label: "Experiências", id: "experience" },
  { label: "Habilidades", id: "skills" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

function scroll(refName) {
  scrollToSection(refName);
}

function handleDrawerClick(refName) {
  drawer.value = false;
  scroll(refName);
}
</script>
