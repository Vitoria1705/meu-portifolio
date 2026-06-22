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

// Efeito de revelação ao rolar os projetos
const projetoCards = document.querySelectorAll('.projeto-card');

if('IntersectionObserver' in window && projetoCards.length){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  projetoCards.forEach(card => observer.observe(card));
} else {
  projetoCards.forEach(card => card.classList.add('reveal'));
}

// Segurança: caso algum elemento não exista, nada quebra
