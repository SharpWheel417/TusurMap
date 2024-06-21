function switchPage(button, page) {
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  document.getElementById(page).style.display = 'flex';

  document.querySelectorAll('.btnPages').forEach(btn => {
    btn.classList.remove('active');
  });

  button.classList.add('active');

  activeMap(page+'-target-element', page+'-map')
}