/**
 * Catálogo Central de Projetos do Portfólio (PT-BR / EN)
 *
 * Para adicionar um novo projeto:
 * Basta adicionar um novo objeto nesta lista com a data no formato "YYYY-MM" ou "YYYY-MM-DD".
 * A Home pegará automaticamente os 4 mais recentes ordenados pela data.
 * categoryType usado nos filtros de projetos.html: branding, campanha, evento, concept.
 */
const PROJECTS_DATA = [
  {
    id: "eternit",
    title: "Eternit",
    titleEn: "Eternit",
    category: "IDENTIDADE VISUAL · BEE CREATIVE",
    categoryEn: "VISUAL IDENTITY · BEE CREATIVE",
    categoryType: "branding",
    date: "2026-10-30",
    dateDisplay: "2026",
    url: "projeto-eternit.html",
    image: "assets/bee/eternit/hero.jpg",
    srcset: "assets/bee/eternit/hero-640w.webp 640w, assets/bee/eternit/hero-1200w.webp 1024w",
    width: 1024,
    height: 576,
    alt: "Fachada da fábrica da Eternit",
    altEn: "Eternit factory facade with new visual identity",
    wide: true
  },
  {
    id: "fisa-concepta",
    title: "FiSA 2026 · Concepta Ingredients",
    titleEn: "FiSA 2026 · Concepta Ingredients",
    category: "EVENTO · BEE CREATIVE",
    categoryEn: "EVENT & BOOTH · BEE CREATIVE",
    categoryType: "evento",
    date: "2026-09-22",
    dateDisplay: "2026",
    url: "projeto-fisa-concepta.html",
    image: "assets/bee/fisa-concepta/hero.jpg",
    srcset: "assets/bee/fisa-concepta/hero-640w.webp 640w, assets/bee/fisa-concepta/hero-1200w.webp 1200w",
    width: 1800,
    height: 1200,
    alt: "Estande da Concepta Ingredients na FiSA 2026",
    altEn: "Concepta Ingredients booth at FiSA 2026",
    wide: false
  },
  {
    id: "workshop-inconcepta",
    title: "Workshop INCONCEPTA",
    titleEn: "INCONCEPTA Workshop",
    category: "NAMING & IDENTIDADE · BEE CREATIVE",
    categoryEn: "NAMING & IDENTITY · BEE CREATIVE",
    categoryType: "evento",
    date: "2026-04-09",
    dateDisplay: "2026",
    url: "projeto-workshop-inconcepta.html",
    image: "assets/bee/workshop-inconcepta/hero.jpg",
    srcset: "assets/bee/workshop-inconcepta/hero-640w.webp 640w, assets/bee/workshop-inconcepta/hero-1200w.webp 1200w",
    width: 1800,
    height: 1012,
    alt: "Identidade visual do workshop INCONCEPTA 2026",
    altEn: "Visual identity for the INCONCEPTA 2026 workshop",
    wide: true
  },
  {
    id: "ayme-design",
    title: "Aymê Design",
    titleEn: "Aymê Design",
    category: "IDENTIDADE VISUAL",
    categoryEn: "VISUAL IDENTITY",
    categoryType: "branding",
    date: "2025-07-01",
    dateDisplay: "2025",
    url: "projeto-ayme.html",
    image: "assets/wix/d2a74a_794bdeaed2734d61a64a428ba99771d8.jpg",
    srcset: "assets/wix/d2a74a_794bdeaed2734d61a64a428ba99771d8-640w.webp 483w",
    width: 483,
    height: 483,
    alt: "Identidade visual Aymê Design",
    altEn: "Aymê Design visual identity",
    wide: true
  },
  {
    id: "nautilus-viva-a-vida",
    title: "Nautilus · Viva a vida na piscina",
    titleEn: "Nautilus · Live Life by the Pool",
    category: "CAMPANHA · BEE CREATIVE",
    categoryEn: "CAMPAIGN · BEE CREATIVE",
    categoryType: "campanha",
    date: "2025-06-06",
    dateDisplay: "2025",
    url: "projeto-nautilus-viva-a-vida.html",
    image: "assets/bee/nautilus-viva-a-vida/hero.jpg",
    srcset: "assets/bee/nautilus-viva-a-vida/hero-640w.webp 640w, assets/bee/nautilus-viva-a-vida/hero-1200w.webp 1200w",
    width: 1800,
    height: 1012,
    alt: "Campanha Viva a vida na piscina, da Nautilus",
    altEn: "Nautilus 'Live Life by the Pool' brand campaign",
    wide: false
  },
  {
    id: "nautilus-social-media",
    title: "Nautilus · Social Media",
    titleEn: "Nautilus · Social Media",
    category: "SOCIAL MEDIA · BEE CREATIVE",
    categoryEn: "SOCIAL MEDIA · BEE CREATIVE",
    categoryType: "campanha",
    date: "2024-10-24",
    dateDisplay: "2024",
    url: "projeto-nautilus-social-media.html",
    image: "assets/bee/nautilus-social-media/hero.jpg",
    srcset: "assets/bee/nautilus-social-media/hero-640w.webp 640w, assets/bee/nautilus-social-media/hero-1200w.webp 1200w",
    width: 1800,
    height: 1012,
    alt: "Publicação \"4 motivos para automatizar o tratamento com cloro\" da Nautilus",
    altEn: "Nautilus social media post on automated chlorine treatment",
    wide: true
  },
  {
    id: "joao-jorge",
    title: "João Jorge Fisioterapia",
    titleEn: "João Jorge Physical Therapy",
    category: "IDENTIDADE VISUAL",
    categoryEn: "VISUAL IDENTITY",
    categoryType: "branding",
    date: "2024-08-01",
    dateDisplay: "2024",
    url: "projeto-joao-jorge.html",
    image: "assets/wix/d2a74a_74e0e0756cde41d78d25da20e3c15c32.jpg",
    srcset: "assets/wix/d2a74a_74e0e0756cde41d78d25da20e3c15c32-640w.webp 640w, assets/wix/d2a74a_74e0e0756cde41d78d25da20e3c15c32-1200w.webp 775w",
    width: 775,
    height: 775,
    alt: "Identidade visual João Jorge Fisioterapia",
    altEn: "João Jorge Physical Therapy visual identity",
    wide: false
  },
  {
    id: "neria",
    title: "Neria",
    titleEn: "Neria",
    category: "BRANDING · BEE CREATIVE",
    categoryEn: "BRANDING · BEE CREATIVE",
    categoryType: "branding",
    date: "2024-06-07",
    dateDisplay: "2024",
    url: "projeto-neria.html",
    image: "assets/bee/neria/hero.jpg",
    srcset: "assets/bee/neria/hero-640w.webp 640w, assets/bee/neria/hero-1200w.webp 1200w",
    width: 1800,
    height: 1012,
    alt: "Neria: marca de energia do Grupo Capitale",
    altEn: "Neria: Grupo Capitale energy brand",
    wide: false
  },
  {
    id: "feiticeira",
    title: "Feiticeira",
    titleEn: "Sorceress (Feiticeira)",
    category: "PROJETO AUTORAL · CONCEPT ART",
    categoryEn: "INDEPENDENT PROJECT · CONCEPT ART",
    categoryType: "concept",
    date: "2024-03-15",
    dateDisplay: "2024",
    url: "projeto-feiticeira.html",
    image: "assets/wix/d2a74a_e42507411746493ab1eb60a8a63dfcfb.jpg",
    srcset: "assets/wix/d2a74a_e42507411746493ab1eb60a8a63dfcfb-640w.webp 640w, assets/wix/d2a74a_e42507411746493ab1eb60a8a63dfcfb-1200w.webp 1200w",
    width: 1920,
    height: 1920,
    alt: "Concept art Feiticeira",
    altEn: "Sorceress concept art and digital compositing",
    wide: false
  },
  {
    id: "sword-girl",
    title: "Sword Girl",
    titleEn: "Sword Girl",
    category: "PROJETO AUTORAL · CONCEPT ART",
    categoryEn: "INDEPENDENT PROJECT · CONCEPT ART",
    categoryType: "concept",
    date: "2024-01-20",
    dateDisplay: "2024",
    url: "projeto-sword-girl.html",
    image: "assets/wix/d2a74a_e8a76a4d55c14626a9e7791f7fb1776e.jpg",
    srcset: "assets/wix/d2a74a_e8a76a4d55c14626a9e7791f7fb1776e-640w.webp 640w, assets/wix/d2a76a4d55c14626a9e7791f7fb1776e-1200w.webp 1200w".replace("d2a76a", "d2a74a_e8a76a"),
    width: 1358,
    height: 1920,
    alt: "Concept art Sword Girl",
    altEn: "Sword Girl cyberpunk concept art",
    wide: true
  }
];

// Helper: Retorna os projetos ordenados pela data (do mais recente para o mais antigo)
function getProjectsSortedByDate() {
  return [...PROJECTS_DATA].sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper: Retorna os N projetos mais recentes
function getRecentProjects(limit = 4) {
  return getProjectsSortedByDate().slice(0, limit);
}
