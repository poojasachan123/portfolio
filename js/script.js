/* =====================================================
   Portfolio scripts – Pooja Sachan
   Vanilla JavaScript only. No libraries.
   ===================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js"); // tells CSS that JavaScript is running

  /* ---------- 1. Theme toggle (saved in localStorage) ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  var themeIcon = document.getElementById("theme-icon");

  function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function safeSet(key, val) { try { localStorage.setItem(key, val); } catch (e) { /* ignore */ } }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  // First load: use saved choice, otherwise follow the system setting
  var saved = safeGet("theme");
  var systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (systemDark ? "dark" : "light"));

  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    safeSet("theme", next);
  });

  /* ---------- 2. Mobile menu ---------- */
  var menuBtn = document.getElementById("menu-toggle");
  var navLinks = document.getElementById("nav-links");

  function closeMenu() {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  }

  menuBtn.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  // Close the menu after tapping a link, or pressing Escape
  navLinks.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });

  /* ---------- 3. Active nav link while scrolling ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var links = document.querySelectorAll(".nav-link");

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }

  if ("IntersectionObserver" in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---------- 4. Scroll-reveal animation ----------
     Elements with class "reveal" fade in when they enter the screen.
     Uses a simple scroll check (works in every browser). */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealInView() {
    var limit = window.innerHeight * 0.92;
    revealEls = revealEls.filter(function (el) {
      if (reduceMotion || el.getBoundingClientRect().top < limit) {
        el.classList.add("visible");
        return false; // done, stop checking this one
      }
      return true;
    });
    if (!revealEls.length) window.removeEventListener("scroll", revealInView);
  }
  window.addEventListener("scroll", revealInView, { passive: true });
  window.addEventListener("resize", revealInView);
  window.addEventListener("load", revealInView);
  revealInView();

  /* ---------- 5. Back-to-top button ---------- */
  var toTop = document.getElementById("to-top");
  window.addEventListener("scroll", function () {
    toTop.hidden = window.scrollY < 500;
  }, { passive: true });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---------- 6. Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- 7. Hide empty sections automatically ----------
     If you delete all cards inside a section, the section and its
     nav link disappear, so empty sections never show. */
  document.querySelectorAll("#training, #certifications, #projects").forEach(function (sec) {
    if (!sec.querySelector(".card")) {
      sec.hidden = true;
      var link = document.querySelector('.nav-link[href="#' + sec.id + '"]');
      if (link && link.parentElement) link.parentElement.hidden = true;
    }
  });
})();
