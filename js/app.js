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
const alertBox = document.getElementById('form-alert');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Mostrar mensaje
    alertBox.textContent = 'Hemos recibido tu mensaje. En breve nos pondremos en contacto contigo para brindarte la atención que mereces.';
    alertBox.classList.add('success');
    alertBox.style.display = 'block';

    // Reset form
    form.reset();

    // Ocultar después de 3s
    setTimeout(() => {
      alertBox.style.display = 'none';
      alertBox.classList.remove('success');
    }, 3000);
  });
}

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
alertBox.classList.add('show');