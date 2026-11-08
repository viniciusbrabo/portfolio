# Portfólio de Vinicius Brabo

Site estático bilíngue (**PT-BR** padrão + **EN**), publicado pelo GitHub Pages em https://viniciusbrabo.github.io/portfolio/#inicio.

## Regras de Manutenção (Importante para Agentes / IA)

1. **Sempre Bilíngue (`PT-BR` + `EN`)**:
   - Todo novo projeto, case, página ou alteração de copy **deve sempre ter versão em Português (padrão no HTML) e em Inglês**.
   - Ao criar ou editar um projeto:
     - Cadastre os campos em PT (`title`, `category`, `alt`) e em EN (`titleEn`, `categoryEn`, `altEn`) em `projects-data.js`.
     - Adicione as traduções completas da página (`title`, `metaDescription`, seletores de ficha técnica, narrativa e legendas) no objeto `PAGE_TRANSLATIONS` em `i18n.js`.
     - Inclua `<script src="./i18n.js"></script>` e o seletor `.lang-switch` (`PT / EN`) na `.topbar`.
   - Ao atualizar o currículo, mantenha sincronizadas as duas versões HTML (`cv-vinicius-brabo-pt.html` e `cv-vinicius-brabo-en.html`) e regenere ambos os PDFs em `assets/cv/cv-vinicius-brabo-pt.pdf` e `assets/cv/cv-vinicius-brabo-en.pdf`.

2. **Memória do Obsidian**:
   - Sempre consultar em caso de dúvidas e atualizar após mudanças relevantes o cofre do Obsidian em:
     `C:\Users\LikaSensei\Documents\Codex\BlocosExplicados\memoria-codex`
   - Notas principais relacionadas a este projeto: `PORTFOLIO-VINICIUS.md`, `DECISOES.md`, `ESTADO.md` e `BUSCA-EMPREGO.md`.

## Publicar

1. Crie um repositório público no GitHub, por exemplo `portfolio`.
2. Envie os arquivos desta pasta para a raiz do repositório.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/(root)`.
4. O GitHub exibirá a URL pública em alguns minutos.

Para uma URL como `viniciusbrabo.github.io`, o repositório deve se chamar exatamente `viniciusbrabo.github.io`, usando o nome da conta GitHub.
