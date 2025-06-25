<template>
  <v-app id="home">
    <NavBarView />
    <v-container fluid>
      <HeadView
        @scroll-contact="scrollToContact"
        @scroll-about="scrollToAbout"
      />
      <AboutView />
      <EducationView />
      <ExperienceView />
      <SkillsView />
      <ProjectsView />
      <ContactView />
    </v-container>
    <FooterView />
  </v-app>
</template>

<script setup>
import NavBarView from "../components/NavBarView.vue";
import FooterView from "../components/FooterView.vue";
import HeadView from "@/views/HeadView.vue";
import AboutView from "@/views/AboutView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import SkillsView from "@/views/SkillsView.vue";
import ContactView from "@/views/ContactView.vue";
import EducationView from "@/views/EducationView.vue";

function scrollToContact() {
  const el = document.getElementById('contact');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollToAbout() {
  const el = document.getElementById('about');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>