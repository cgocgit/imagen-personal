// ================= app.js =================

// Header dinámico en scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Manejo de formulario
const form = document.getElementById('form-contacto');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensaje enviado correctamente');
  form.reset();
});

// 🔥 menú hamburguesa
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Cerrar menú al seleccionar una opción
const links = document.querySelectorAll('#menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

document.body.style.overflow = 'auto';