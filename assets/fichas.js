document.addEventListener('DOMContentLoaded', function () {
  // Selector de colores
  var stage = document.getElementById('fx-main');
  var thumbs = document.querySelectorAll('.fx-thumb');
  thumbs.forEach(function (t) {
    t.addEventListener('click', function () {
      if (t.classList.contains('active') || !stage) return;
      thumbs.forEach(function (x) { x.classList.remove('active'); });
      t.classList.add('active');
      stage.classList.add('fx-fade');
      setTimeout(function () {
        stage.src = t.getAttribute('data-src');
        setTimeout(function () { stage.classList.remove('fx-fade'); }, 60);
      }, 300);
    });
  });

  // Pestañas de ficha técnica
  var tabs = document.querySelectorAll('.fx-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (x) { x.classList.remove('active'); });
      document.querySelectorAll('.fx-panel').forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var panel = document.getElementById(tab.getAttribute('data-panel'));
      if (panel) panel.classList.add('active');
    });
  });

  // Animación al hacer scroll
  var items = document.querySelectorAll('.fx-reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('fx-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('fx-in'); });
  }
});
