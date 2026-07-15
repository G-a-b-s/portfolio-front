<template>
  <div id="home">
    <NavBarView />
    <v-container fluid>
      <HeadView
          @scroll-contact="scrollToContact"
          @scroll-about="scrollToAbout"
          @scroll-projects="scrollToProjects"
      />
      <AboutView />
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" md="6" id="education" class="padd">
          <EducationView />
        </v-col>
        <v-col cols="12" md="6" id="experience" class="padd">
          <ExperienceView />
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <SkillsView class="mt-8 mb-4"/>
      <v-divider></v-divider>
      <ProjectsView class="mt-8 mb-4"/>
      <v-divider></v-divider>
      <ContactView />
    </v-container>
    <FooterView class="mb-4"/>
  </div>
</template>

<script setup>
import NavBarView from "../components/NavBarView.vue";
import FooterView from "../components/FooterView.vue";
import HeadView from "@/views/HeadView.vue";
import AboutView from "@/views/AboutView.vue";
import { scrollToSection } from '@/utils/scroll';
import ExperienceView from "@/views/ExperienceView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import SkillsView from "@/views/SkillsView.vue";
import ContactView from "@/views/ContactView.vue";
import EducationView from "@/views/EducationView.vue";

function scrollToContact() {
  scrollToSection('contact');
}

function scrollToAbout() {
  scrollToSection('about');
}

function scrollToProjects() {
  scrollToSection('projects');
}
</script>