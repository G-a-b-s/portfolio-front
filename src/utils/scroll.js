export function scrollToSection(sectionId, { offset = 16, behavior = 'smooth' } = {}) {
  if (!sectionId || sectionId === 'home') {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const section = document.getElementById(sectionId);
  if (!section) return;

  const navbar = document.querySelector('.v-app-bar');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;
  const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - navbarHeight - offset;

  window.scrollTo({ top: offsetPosition, behavior });
}
