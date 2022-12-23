const sidebarMenuOpenButton = document.querySelector(
  '.gnb-open-button.is-menu',
);
const sidebarMenuCloseButton = document.querySelector(
  '.gnb-close-button.is-menu',
);
const sidebar = document.querySelector('.sidebar');

function openSidebar() {
  sidebar.classList.add('is-active');
  sidebarMenuOpenButton.classList.add('is-active');
  sidebarMenuCloseButton.classList.remove('is-active');
}

sidebarMenuOpenButton.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  sidebarMenuOpenButton.classList.remove('is-active');
  sidebarMenuCloseButton.classList.add('is-active');
}

sidebarMenuCloseButton.addEventListener('click', closeSidebar);
