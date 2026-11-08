/**
 * Catálogo Central de Projetos do Portfólio
 * 
 * Para adicionar um novo projeto:
 * Basta adicionar um novo objeto nesta lista com a data no formato "YYYY-MM" ou "YYYY-MM-DD".
 * A Home pegará automaticamente os 4 mais recentes ordenados pela data.
 */
const PROJECTS_DATA = [
  {
    id: "ayme-design",
    title: "Aymê Design",
    category: "IDENTIDADE VISUAL",
    categoryType: "branding",
    date: "2025-07-01",
    dateDisplay: "2025",
    url: "projeto-ayme.html",
    image: "assets/wix/d2a74a_794bdeaed2734d61a64a428ba99771d8.jpg",
    alt: "Identidade visual Aymê Design",
    wide: true
  },
  {
    id: "joao-jorge",
    title: "João Jorge Fisioterapia",
    category: "IDENTIDADE VISUAL",
    categoryType: "branding",
    date: "2024-08-01",
    dateDisplay: "2024",
    url: "projeto-joao-jorge.html",
    image: "assets/wix/d2a74a_74e0e0756cde41d78d25da20e3c15c32.jpg",
    alt: "Identidade visual João Jorge Fisioterapia",
    wide: false
  },
  {
    id: "feiticeira",
    title: "Feiticeira",
    category: "PROJETO AUTORAL · CONCEPT ART",
    categoryType: "concept",
    date: "2024-03-15",
    dateDisplay: "2024",
    url: "projeto-feiticeira.html",
    image: "assets/wix/d2a74a_e42507411746493ab1eb60a8a63dfcfb.jpg",
    alt: "Concept art Feiticeira",
    wide: false
  },
  {
    id: "sword-girl",
    title: "Sword Girl",
    category: "PROJETO AUTORAL · CONCEPT ART",
    categoryType: "concept",
    date: "2024-01-20",
    dateDisplay: "2024",
    url: "projeto-sword-girl.html",
    image: "assets/wix/d2a74a_e8a76a4d55c14626a9e7791f7fb1776e.jpg",
    alt: "Concept art Sword Girl",
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
