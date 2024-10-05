const formulario = document.getElementById('inicio');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const clave = document.getElementById('clave').value;

  // Validar campos
  if (email === '' || clave === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Guardar datos en localStorage
  localStorage.setItem('email', email);
  localStorage.setItem('clave', clave);

  // Redirigir a dashboard.html
  window.location.href = 'dashboard.html';
});

const formulario = document.getElementById('register');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const clave = document.getElementById('clave').value;
  const repitaClave = document.getElementById('repita_clave').value;

  // Validar campos
  if (nombre === '' || email === '' || clave === '' || repitaClave === '') {
    alert('Por favor, complete todos los campos.');
    return;
  }

  // Validar que las contraseñas coincidan
  if (clave !== repitaClave) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  // Guardar datos en localStorage
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('email', email);
  localStorage.setItem('clave', clave);

  // Redirigir a página de inicio de sesión
  window.location.href = 'login.html';

  // Limpiar formulario
  formulario.reset();
});