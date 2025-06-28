<template>
  <v-app-bar app color="black" dark flat class="px-6 px-md-12">
    <v-btn class="text-none" variant="text" @click="handleDrawerClick('home')">
      <v-icon color="purple" left class="mr-2">fas fa-signature</v-icon>
      <span class="cpurple">Gabriel Rocha</span>
    </v-btn>
    <v-spacer />

    <template v-if="!isCollapsed">
      <v-btn class="cpurple" v-for="item in items" :key="item.id" text @click="scroll(item.id)">
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
  >
    <v-list>
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
  const el = document.getElementById(refName);
  const navbar = document.querySelector('.v-app-bar');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;

  if (el) {
    const elementPosition = el.getBoundingClientRect().top + window.window.scrollY;
    const offsetPosition = elementPosition - navbarHeight - 10;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

function handleDrawerClick(refName) {
  drawer.value = false;
  scroll(refName);
}
</script>
