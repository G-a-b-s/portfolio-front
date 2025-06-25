<template>
  <v-col cols="12" sm="12" id="projects">
    <div class="text-center mt-4">
      <h2>projects</h2>
      <div style="width: 120px; margin: 0 auto">
      </div>
    </div>
    <div class="d-flex justify-center mb-6">
      <v-btn color="#FBDF7E" class="mr-2">All</v-btn>
      <v-btn class="mr-2" variant="tonal">Web Design</v-btn>
      <v-btn class="mr-2" variant="tonal">Front Design</v-btn>
      <v-btn class="mr-2" variant="tonal"> Photography</v-btn>
      <v-btn variant="tonal"> Illustration</v-btn>
    </div>
  </v-col>
  <v-col cols="12" class="imgHover">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items" :key="i">
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
                :elevation="isHovering ? 12 : 2"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
            >
              <v-img :src="item.img" height="225px" cover> </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-col>
  <v-col cols="12" sm="12">
    <div class="d-flex justify-center mb-6">
      <v-btn color="#FBDF7E" class="mt-4">Load More</v-btn>
    </div>
  </v-col>
</template>
<script setup>
import { ref } from "vue";
const items = ref([
  { img: "i3.jpg" },
  { img: "i4.jpg" },
  { img: "i5.jpg" },
  { img: "i6.jpeg" },
  { img: "i9.jpg" },
  { img: "i8.jpg" },
]);
</script>