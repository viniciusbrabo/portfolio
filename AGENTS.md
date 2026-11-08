# Regras do Projeto — Portfólio & CVs Vinicius Brabo

## 1. Obrigatoriedade Bilíngue (`PT-BR` padrão + `EN`)
Todo novo projeto, case, seção institucional ou atualização de currículo neste repositório deve ser feito simultaneamente em **Português (`PT-BR`, padrão no HTML)** e **Inglês (`EN`)**:

1. **Grid de Projetos (`projects-data.js`)**:
   - Todo item em `window.PORTFOLIO_PROJECTS` deve conter obrigatoriamente `title`, `category`, `alt` (PT-BR) e `titleEn`, `categoryEn`, `altEn` (EN).
2. **Páginas e Cases (`i18n.js`)**:
   - Toda página HTML deve carregar `<script src="./i18n.js"></script>` e incluir o botão `.lang-switch` (`PT / EN`) na `.topbar`.
   - Todo texto da página deve ter sua tradução correspondente registrada em `PAGE_TRANSLATIONS` dentro de `i18n.js` (`title`, `metaDescription` e seletores `texts` / `html`).
3. **Currículos (`CVs`)**:
   - Alterações de currículo devem ser aplicadas tanto em `cv-vinicius-brabo-pt.html` quanto em `cv-vinicius-brabo-en.html`, regenerando em seguida os dois PDFs (`assets/cv/cv-vinicius-brabo-pt.pdf` e `assets/cv/cv-vinicius-brabo-en.pdf`).

## 2. Diretrizes de Posicionamento e Conteúdo
- **Cargo atual:** `Diretor de Arte Pleno` (PT) / `Mid-Weight Art Director` (EN).
- **Papel nos cases da Agência Bee Creative:** `Direção de Arte e Design` (PT) / `Art Direction & Design` (EN).
- **Prêmio Recall:** Tricampeão consecutivo (`2024, 2025 e 2026`), com link para `https://premiorecall.com`.
- **Links externos:** Não utilizar links do Behance; o portfólio oficial é `https://likapom.github.io/portfolio/#inicio`.

## 3. Sincronização com a Memória do Obsidian
- Em caso de dúvidas ou após qualquer atualização relevante neste repositório, consulte e atualize a nota `C:\Users\LikaSensei\Documents\Codex\BlocosExplicados\memoria-codex\PORTFOLIO-VINICIUS.md` (além de `ESTADO.md` e `DECISOES.md` quando aplicável).
