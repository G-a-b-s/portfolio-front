<template>
  <v-row id="contact">
    <v-col cols="12">
      <div class="child-contact px-16">
        <SectionTitle title="Contato" />
        <v-row>
          <v-col
              v-for="contact in contacts"
              :key="contact.id"
              cols="12"
              sm="6"
              md="3"
              class="d-flex flex-column align-center"
          >
            <v-btn
              :icon="iconMap[contact.type]"
              variant="outlined"
              class="mt-10 contact-action-btn"
              @click="handleContactAction(contact)"
            />
            <span
                class="text-caption mt-2 contact-value"
                @click="copyToClipboard(contact.value)"
            >
              {{ formatValue(contact.value) }}
            </span>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>

  <v-snackbar v-model="snackbar" timeout="1800" color="deep-purple-accent-4">
    {{ snackbarMessage }}
  </v-snackbar>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import api from '../services/api';
import SectionTitle from '@/components/SectionTitle.vue';

const contacts = ref([]);
const snackbar = ref(false);
const snackbarMessage = ref('');

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

async function copyToClipboard(value) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(value);
    } else {
      const tempInput = document.createElement('textarea');
      tempInput.value = value;
      tempInput.setAttribute('readonly', '');
      tempInput.style.position = 'fixed';
      tempInput.style.left = '-9999px';
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
    }

    snackbarMessage.value = 'Contato copiado!';
    snackbar.value = true;
  } catch (error) {
    snackbarMessage.value = 'Não foi possível copiar.';
    snackbar.value = true;
  }
}

function handleContactAction(contact) {
  if (contact.value.startsWith('http')) {
    window.open(contact.value, '_blank', 'noopener,noreferrer');
    return;
  }

  copyToClipboard(contact.value);
}
</script>