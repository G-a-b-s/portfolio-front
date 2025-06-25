<template>
  <v-row id="contact">
    <v-col cols="12">
      <div class="child-contact px-16">
        <h1>Contato</h1>
        <v-row>
          <v-col
            v-for="contact in contacts"
            :key="contact.id"
            cols="3"
            class="d-flex flex-column align-center"
          >
            <v-btn
              :icon="iconMap[contact.type]"
              variant="outlined"
              class="mt-10"
              :href="contact.value.startsWith('http') ? contact.value : undefined"
              target="_blank"
            />
            <span class="text-caption mt-2">
              {{ formatValue(contact.value) }}
            </span>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import api from '../services/api';

const contacts = ref([]);

onMounted(async () => {
  contacts.value = await api.getContacts();
});

const iconMap = {
  Telefone: 'fas fa-phone-alt',
  Email: 'fas fa-envelope',
  GitHub: 'fab fa-github',
  LinkedIn: 'fab fa-linkedin',
};
function formatValue(value) {
  return value.replace(/^https?:\/\//, '');
}
</script>