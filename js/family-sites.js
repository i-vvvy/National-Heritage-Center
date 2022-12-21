const familySites = document.querySelector('.family-sites');
const btnFamilySites = document.querySelector('.btn-family-sites');

function closefamilySitesOnClickingOutside(e) {
  if (!familySites.contains(e.target)) {
    familySites.classList.remove('is-active');
    window.removeEventListener('click', closefamilySitesOnClickingOutside);
  }
}

function togglefamilySites() {
  if (!familySites.classList.contains('is-active')) {
    window.addEventListener('click', closefamilySitesOnClickingOutside);
  }
  familySites.classList.toggle('is-active');
}

btnFamilySites.addEventListener('click', togglefamilySites);
