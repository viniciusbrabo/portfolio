/**
 * Lightbox / Zoom Focado para Imagens de Cases (PT-BR & EN)
 * Vinicius Brabo — Diretor de Arte Pleno
 */
(function () {
  let overlay = null;
  let closeBtn = null;
  let lightboxImg = null;
  let captionEl = null;
  let lastFocusedEl = null;

  function isEnglish() {
    return (document.documentElement.lang || "").toLowerCase().startsWith("en");
  }

  function createOverlay() {
    overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", isEnglish() ? "Enlarged image view" : "Visualização ampliada da imagem");
    overlay.setAttribute("hidden", "");

    const closeLabel = isEnglish() ? "Close enlarged view (Esc)" : "Fechar visualização ampliada (Esc)";

    overlay.innerHTML = `
      <button type="button" class="lightbox-close" aria-label="${closeLabel}">✕</button>
      <div class="lightbox-container">
        <img class="lightbox-img" src="" alt="" />
        <p class="lightbox-caption"></p>
      </div>
    `;

    document.body.appendChild(overlay);

    closeBtn = overlay.querySelector(".lightbox-close");
    lightboxImg = overlay.querySelector(".lightbox-img");
    captionEl = overlay.querySelector(".lightbox-caption");

    closeBtn.addEventListener("click", closeLightbox);

    // Fechar ao clicar fora da imagem
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target.classList.contains("lightbox-container")) {
        closeLightbox();
      }
    });

    // Fechar com a tecla Esc
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !overlay.hasAttribute("hidden")) {
        closeLightbox();
      }
    });
  }

  function openLightbox(img) {
    if (!overlay) createOverlay();

    lastFocusedEl = document.activeElement;

    // Atualiza aria-label caso o idioma tenha mudado
    const en = isEnglish();
    overlay.setAttribute("aria-label", en ? "Enlarged image view" : "Visualização ampliada da imagem");
    closeBtn.setAttribute("aria-label", en ? "Close enlarged view (Esc)" : "Fechar visualização ampliada (Esc)");

    // Obter imagem de maior resolução se houver srcset ou src original
    const src = img.currentSrc || img.src;
    const alt = img.getAttribute("alt") || "";

    lightboxImg.src = src;
    lightboxImg.alt = alt;

    if (alt.trim()) {
      captionEl.textContent = alt;
      captionEl.style.display = "block";
    } else {
      captionEl.textContent = "";
      captionEl.style.display = "none";
    }

    overlay.removeAttribute("hidden");
    document.body.classList.add("lightbox-open");

    // Foco no botão de fechar para navegação acessível por teclado
    requestAnimationFrame(() => {
      overlay.classList.add("lightbox-visible");
      closeBtn.focus();
    });
  }

  function closeLightbox() {
    if (!overlay || overlay.hasAttribute("hidden")) return;

    overlay.classList.remove("lightbox-visible");
    document.body.classList.remove("lightbox-open");

    setTimeout(() => {
      overlay.setAttribute("hidden", "");
      lightboxImg.src = "";
      if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
        lastFocusedEl.focus();
      }
    }, 220);
  }

  function init() {
    const images = document.querySelectorAll(".media-frame img");
    if (!images || images.length === 0) return;

    images.forEach((img) => {
      img.classList.add("lightbox-trigger");
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      const hint = isEnglish() ? "Click to enlarge" : "Clique para ampliar";
      img.setAttribute("aria-label", (img.getAttribute("alt") ? img.getAttribute("alt") + " — " : "") + hint);

      img.addEventListener("click", () => openLightbox(img));

      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(img);
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
