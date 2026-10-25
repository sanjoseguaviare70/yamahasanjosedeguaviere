// Yamaha San José del Guaviare - scripts globales
document.addEventListener('DOMContentLoaded', function () {
  // Preguntas frecuentes (acordeón)
  var questions = document.querySelectorAll('.faq-question');
  questions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var wrapper = btn.nextElementSibling;
      if (!wrapper) return;
      var isOpen = btn.classList.contains('open');
      // cerrar las demás
      questions.forEach(function (other) {
        if (other !== btn && other.classList.contains('open')) {
          other.classList.remove('open');
          other.setAttribute('aria-expanded', 'false');
          if (other.nextElementSibling) other.nextElementSibling.style.maxHeight = '0px';
        }
      });
      if (isOpen) {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        wrapper.style.maxHeight = '0px';
      } else {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        wrapper.style.maxHeight = wrapper.scrollHeight + 'px';
      }
    });
  });
});
