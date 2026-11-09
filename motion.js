/**
 * Sistema de Movimento, Scroll Reveal e Microinterações Cinéticas
 * Vinicius Brabo — Diretor de Arte Pleno
 */
(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Se o usuário preferir menos movimento, revela tudo estaticamente e encerra
  if (prefersReducedMotion) {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
    });
    return;
  }

  /* ==========================================================================
     1. Entrada Escalonada no Hero
     ========================================================================== */
  function initHeroEntrance() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    // Dispara animação logo após o carregamento inicial
    requestAnimationFrame(() => {
      hero.classList.add("hero-animate-in");
    });
  }

  /* ==========================================================================
     2. Scroll Reveal com IntersectionObserver
     ========================================================================== */
  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal-on-scroll");
    if (!targets || targets.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    targets.forEach((t) => observer.observe(t));
  }

  /* ==========================================================================
     3. Marquee Infinito na Stack de IA (.toolbelt)
     ========================================================================== */
  function initToolbeltMarquee() {
    const toolbelt = document.querySelector(".toolbelt");
    if (!toolbelt) return;

    // Clona o conteúdo para criar um loop horizontal sem fim
    const itemsHtml = toolbelt.innerHTML;
    toolbelt.innerHTML = `
      <div class="marquee-track">
        <div class="marquee-group">${itemsHtml}</div>
        <div class="marquee-group" aria-hidden="true">${itemsHtml}</div>
      </div>
    `;
    toolbelt.classList.add("marquee-active");
  }

  /* ==========================================================================
     4. Parallax Suave no Scroll (Desktop)
     ========================================================================== */
  function initParallax() {
    if (window.innerWidth <= 900) return;

    const heroImg = document.querySelector(".hero-portrait img");
    if (!heroImg) return;

    let ticking = false;

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
              const offset = Math.min(Math.max(scrollY * 0.08, -12), 16);
              heroImg.style.transform = `scale(1.03) translateY(${offset}px)`;
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ==========================================================================
     5. Cursor Magnético Interativo (Desktop apenas)
     ========================================================================== */
  function initCustomCursor() {
    // Ativo apenas em computadores com mouse/ponteiro fino
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.className = "custom-cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.innerHTML = `
      <div class="cursor-dot"></div>
      <div class="cursor-ring"></div>
      <span class="cursor-badge"></span>
    `;
    document.body.appendChild(cursor);

    const dot = cursor.querySelector(".cursor-dot");
    const ring = cursor.querySelector(".cursor-ring");
    const badge = cursor.querySelector(".cursor-badge");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;

    window.addEventListener(
      "mousemove",
      (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

        if (!isVisible) {
          cursor.classList.add("cursor-visible");
          ringX = mouseX;
          ringY = mouseY;
          isVisible = true;
        }
      },
      { passive: true }
    );

    document.documentElement.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-visible");
      isVisible = false;
    });

    // Animação fluida da física do anel externo (lerp)
    function renderCursor() {
      if (isVisible) {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        badge.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Delegação de eventos para microinterações no hover
    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest("a, button, .project-card, .lightbox-trigger, .filter-tab");
      if (!target) {
        cursor.classList.remove("cursor-hover", "cursor-view", "cursor-zoom");
        badge.textContent = "";
        return;
      }

      const isEn = (document.documentElement.lang || "").toLowerCase().startsWith("en");

      if (target.classList.contains("lightbox-trigger")) {
        cursor.classList.add("cursor-zoom");
        cursor.classList.remove("cursor-view", "cursor-hover");
        badge.textContent = isEn ? "ZOOM" : "VER";
      } else if (target.classList.contains("project-card")) {
        cursor.classList.add("cursor-view");
        cursor.classList.remove("cursor-zoom", "cursor-hover");
        badge.textContent = isEn ? "VIEW" : "VER";
      } else {
        cursor.classList.add("cursor-hover");
        cursor.classList.remove("cursor-view", "cursor-zoom");
        badge.textContent = "";
      }
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target.closest("a, button, .project-card, .lightbox-trigger, .filter-tab");
      if (target) {
        cursor.classList.remove("cursor-hover", "cursor-view", "cursor-zoom");
        badge.textContent = "";
      }
    });
  }

  /* ==========================================================================
     Inicialização
     ========================================================================== */
  function init() {
    initHeroEntrance();
    initScrollReveal();
    initToolbeltMarquee();
    initParallax();
    initCustomCursor();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
