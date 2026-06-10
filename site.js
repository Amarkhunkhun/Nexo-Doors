// Nexo Doors — shared site behavior

// Mobile nav toggle
(function () {
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
})();

// Scroll reveal
(function () {
  var els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el, i) {
    el.style.transitionDelay = (i % 3) * 0.08 + "s";
    io.observe(el);
  });
})();
