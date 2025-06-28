import axios from 'axios';

const API_BASE_URL = '/data/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const externalApi = axios.create({
  baseURL: 'https://github-pinned-api.vercel.app/api/',
});

export default {
  getEducation() {
    return api.get('education.json').then(res => res.data);
  },
  getContacts() {
    return api.get('contacts.json').then(res => res.data);
  },
  getExperiences() {
    return api.get('experiences.json').then(res => res.data);
  },
  getProfile() {
    return api.get('profile.json').then(res => res.data);
  },
  getProjects() {
    return api.get('projects.json').then(res => res.data);
  },
  getSkills() {
    return api.get('skills.json').then(res => res.data);
  },
  getPinnedRepos() {
    return externalApi.get('getPinnedRepos').then(res => res.data);
  },
};
