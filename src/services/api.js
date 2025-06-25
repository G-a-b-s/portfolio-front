import axios from 'axios';

const API_BASE_URL = 'https://portfolio-api-c9zy.onrender.com/api/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default {
  getEducation() {
    return api.get('education').then(res => res.data);
  },
  getContacts() {
    return api.get('contacts').then(res => res.data);
  },
  getExperiences() {
    return api.get('experiences').then(res => res.data);
  },
  getProfile() {
    return api.get('profile').then(res => res.data);
  },
  getProjects() {
    return api.get('projects').then(res => res.data);
  },
  getSkills() {
    return api.get('skills').then(res => res.data);
  },
};