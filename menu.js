// Controle do menu mobile
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnFechar = document.querySelector('.btn-fechar');

function openMenu(){
  if(!menu || !overlay) return;
  menu.classList.add('abrir-menu');
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenu(){
  if(!menu || !overlay) return;
  menu.classList.remove('abrir-menu');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

if(btnMenu) btnMenu.addEventListener('click', openMenu);
if(btnFechar) btnFechar.addEventListener('click', closeMenu);
if(overlay) overlay.addEventListener('click', closeMenu);

// Fechar o menu ao clicar em qualquer link interno do menu
if(menu){
  const links = menu.querySelectorAll('a');
  links.forEach(link => link.addEventListener('click', closeMenu));
}

// Segurança: caso algum elemento não exista, nada quebra
