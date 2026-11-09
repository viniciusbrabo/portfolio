/**
 * Sistema Bilíngue Instantâneo (PT padrão / EN)
 * Traduz navegação, rodapé, Home, página de Projetos e os 10 cases de portfólio,
 * preservando o HTML original em Português para alternância instantânea sem recarregar.
 */
(function () {
  const STORAGE_KEY = "vb_portfolio_lang";

  const PAGE_TRANSLATIONS_EN = {
    "index.html": {
      title: "Vinicius Brabo — Mid-Level Art Director | Branding, Packaging & Applied AI",
      pairs: [
        [".hero .eyebrow", "Mid-Level Art Director · Applied AI · Brazil"],
        [".hero-statement > p:first-child", "Portfolio of"],
        [".hero-statement h1.visually-hidden", "Vinicius Brabo — Mid-Level Art Director, Branding, Packaging (ANVISA) & Applied AI Specialist"],
        [".hero-description", "Award-winning art direction, visual identity systems, technical packaging and creative operations accelerated by artificial intelligence."],
        [".hero-proof", "8 years in design · 5 years in agencies"],
        [".hero-award", "★ 3x Consecutive Prêmio Recall Winner (2024 · 2025 · 2026) ↗"],
        [".hero-cta", 'View projects <span>↓</span>'],
        [".hero-mail", "Work together ↗"],

        ["#atuacao .section-label", "01 / EXPERTISE"],
        ["#atuacao .section-content > h2", "Design with technical depth and a systems mindset."],
        ["#atuacao .cards .card:nth-child(1) h3", "Art direction &amp; brand"],
        ["#atuacao .cards .card:nth-child(1) p", "Campaign concepts, key visuals, naming, rebrandings and brand platforms that build real differentiation across B2B and B2C markets."],
        ["#atuacao .cards .card:nth-child(2) h3", "Packaging &amp; ANVISA"],
        ["#atuacao .cards .card:nth-child(2) p", "Structural and visual packaging lines combining shelf impact, print-ready precision and strict compliance with Brazilian ANVISA regulations."],
        ["#atuacao .cards .card:nth-child(3) h3", "Creative ops &amp; AI"],
        ["#atuacao .cards .card:nth-child(3) p", "Automated workflows and AI agent architectures that remove operational bottlenecks and give teams room to create better."],

        ["#automacao .section-label", "02 / APPLIED AI"],
        ["#automacao .feature-kicker", "ARCHITECTURE &amp; ORCHESTRATION"],
        ["#automacao .feature-grid h2", "Less repetitive work.<br />More human decision."],
        ["#automacao .feature-copy > p", "At Agência Bee Creative, I lead the internal Artificial Intelligence and process automation initiative. Rather than using AI only for isolated prompts, I built a self-hosted Linux server from scratch that orchestrates n8n workflows, PostgreSQL databases, WhatsApp APIs (WA-AKG) and coding agents like Claude Code and Codex to power client service, commercial intelligence and creative operations."],
        ["#automacao .metric span", "human time required for a social media prospecting audit, including strategic validation"],

        ["#projetos .section-label", "03 / FEATURED PROJECTS"],
        ["#projetos .project-heading h2", "Brand, visual universe and authorial expression."],
        ["#projetos .project-heading p", "Recent highlights in rebranding, integrated campaigns, B2B events and art direction. Explore the full archive for all detailed case studies."],
        ["#projetos .projects-cta-btn", 'View all 10 projects <span>↗</span>'],

        ["#trajetoria .section-label", "04 / CAREER PATH"],
        ["#trajetoria .section-content > h2", "8 years in design, 5 in agencies."],
        ["#trajetoria .timeline li:nth-child(1) .tl-date", "AUG 2023 — PRESENT"],
        ["#trajetoria .timeline li:nth-child(1) h3", "Mid-Level Art Director"],
        ["#trajetoria .timeline li:nth-child(1) .tl-org", "Agência Bee Creative · Campinas, SP — Brazil"],
        ["#trajetoria .timeline li:nth-child(1) p:not(.tl-org)", "Art direction for accounts such as Eternit, Concepta Ingredients, Nautilus and Neria, with projects awarded for 3 consecutive years at Prêmio Recall (2024, 2025 and 2026), technical leadership in packaging (ANVISA) and head of the internal AI and process automation initiative."],
        ["#trajetoria .timeline li:nth-child(2) .tl-date", "AUG 2021 — AUG 2023"],
        ["#trajetoria .timeline li:nth-child(2) h3", "Senior Art Direction Assistant"],
        ["#trajetoria .timeline li:nth-child(2) .tl-org", "Agência Bee Creative · Campinas, SP — Brazil"],
        ["#trajetoria .timeline li:nth-child(2) p:not(.tl-org)", "Campaign assets, visual identities, digital/offline rollouts and technical print-ready packaging artwork."],
        ["#trajetoria .timeline li:nth-child(3) .tl-date", "AUG 2018 — PRESENT"],
        ["#trajetoria .timeline li:nth-child(3) h3", "Freelance Designer"],
        ["#trajetoria .timeline li:nth-child(3) .tl-org", "Sumaré, SP — Brazil"],
        ["#trajetoria .timeline li:nth-child(3) p:not(.tl-org)", "Independent branding, visual identity and authorial concept art projects, including Aymê Design and João Jorge Physical Therapy."],
        ["#trajetoria .timeline li:nth-child(4) .tl-date", "JUL 2020 — JUL 2021"],
        ["#trajetoria .timeline li:nth-child(4) h3", "Junior Marketing Assistant"],
        ["#trajetoria .timeline li:nth-child(4) .tl-org", "Marry Perry Paris"],
        ["#trajetoria .timeline li:nth-child(4) p:not(.tl-org)", "Creative team coordination, video and social media asset production, Facebook Ads management and UI layouts for the IT department."],
        ["#trajetoria .timeline li:nth-child(5) .tl-date", "2019 — 2020"],
        ["#trajetoria .timeline li:nth-child(5) h3", "Early Career"],
        ["#trajetoria .timeline li:nth-child(5) .tl-org", "POGs Publicidade · STL Digital Gráfica · Multty Comercial"],
        ["#trajetoria .timeline li:nth-child(5) p:not(.tl-org)", "Technical foundation in print production, prepress, advertising design and marketing operations in the Campinas metropolitan area."],

        ["#sobre .section-label", "05 / ABOUT &amp; CONTACT"],
        ["#sobre .large-copy", "I currently work as a <strong>Mid-Level Art Director at Agência Bee Creative</strong>, where I have been since 2021 and leading art direction since August 2023."],
        ["#sobre .about-copy > p:not(.large-copy):not(.contact-line)", "I combine a Bachelor's degree in Advertising (Anhanguera) with a Technical Diploma in Information Technology (ETEC) to bridge art direction, production feasibility and AI engineering. I work in Portuguese and English and am open to remote or hybrid opportunities in the Campinas region, as well as strategic freelance brand and visual system projects."],
        ["#sobre .credentials > div:nth-child(1) h4", "Education"],
        ["#sobre .credentials > div:nth-child(1) p:eq(0)", "B.A. in Advertising<br />Anhanguera · 2018–2022"],
        ["#sobre .credentials > div:nth-child(1) p:eq(1)", "IT Technical Diploma<br />ETEC · 2013–2015"],
        ["#sobre .credentials > div:nth-child(2) h4", "Awards &amp; Courses"],
        ["#sobre .credentials > div:nth-child(2) p", "★ Prêmio Recall Winner (2024, 2025 &amp; 2026)<br />Principles of Conceptualization &amp; Branding<br />Photoshop Compositing &amp; Retouching<br />Facebook Ads · People Management &amp; Team Leadership"],
        ["#sobre .credentials > div:nth-child(3) h4", "Languages"],
        ["#sobre .credentials > div:nth-child(3) p", "Portuguese (native)<br />English (advanced)<br />Japanese (basic)"],
        ["#sobre .contact-paths a:nth-child(1)", 'Work together <span>↗</span>'],
        ["#sobre .contact-paths a:nth-child(2)", 'Request a project <span>↗</span>'],
        ["#sobre .contact-paths a:nth-child(3)", 'Download CV (PT) <span>↓</span>'],
        ["#sobre .contact-paths a:nth-child(4)", 'Download CV (EN) <span>↓</span>']
      ]
    },

    "projetos.html": {
      title: "Projects & Case Studies — Vinicius Brabo | Branding, Campaigns, Events & Concept Art",
      pairs: [
        [".all-projects-header .section-label", "03 / WORK ARCHIVE"],
        [".all-projects-title", "All Projects"],
        [".all-projects-desc", "Rebranding case studies, brand platforms, integrated campaigns, B2B events and art direction crafted at Agência Bee Creative and in independent projects."],
        ['.filter-tab[data-filter="all"]', "All (10)"],
        ['.filter-tab[data-filter="branding"]', "Visual Identity"],
        ['.filter-tab[data-filter="campanha"]', "Campaigns"],
        ['.filter-tab[data-filter="evento"]', "Events"],
        ['.filter-tab[data-filter="concept"]', "Concept Art"],
        [".project-footer-nav .project-nav-btn", '<span>←</span> Back to Home'],
        [".project-footer-nav .button", 'Let\'s talk <span>↗</span>']
      ]
    },

    "projeto-eternit.html": {
      title: "Eternit — Rebranding & Environmental Identity | Case Study · Vinicius Brabo",
      pairs: [
        [".project-category-tag", "01 / VISUAL IDENTITY &amp; REBRANDING"],
        [".project-tagline", "Spaces that speak the brand's language: environmental visual identity for an industry leader in transition."],
        [".project-meta-item:nth-child(1) dt", "SERVICES"],
        [".project-meta-item:nth-child(1) dd", "Environmental visual identity, Branding"],
        [".project-meta-item:nth-child(2) dt", "AGENCY"],
        [".project-meta-item:nth-child(2) dd", "Bee Creative · Campinas, SP"],
        [".project-meta-item:nth-child(3) dt", "DATE"],
        [".project-meta-item:nth-child(3) dd", "October 2026"],
        [".project-meta-item:nth-child(4) dt", "ROLE"],
        [".project-meta-item:nth-child(4) dd", "Art Direction &amp; Design"],
        [".project-credit", 'Case developed at <a href="https://beecreative.com.br" target="_blank" rel="noopener noreferrer">Agência Bee Creative</a> for Eternit. <a href="https://beecreative.com.br/identidade-visual-eternit/" target="_blank" rel="noopener noreferrer">View original case ↗</a>'],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / THE PROJECT"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "A market leader in a moment of transition."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "Eternit is a market leader in roofing and industrialized construction solutions in Brazil, combining tradition, innovation and quality."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "As the company opened a new facility and revitalized another, our mission was to ensure the team arrived at a workplace that already spoke the language of the brand."],
        [".project-narrative-split:nth-of-type(5) .section-label", "02 / APPROACH &amp; EXECUTION"],
        [".project-narrative-split:nth-of-type(5) .narrative-heading", "From technical site visit to branded spaces."],
        [".project-narrative-split:nth-of-type(5) .narrative-paragraph", "To capture the brand's essence and build communication grounded in reality, we started with an on-site technical immersion alongside the client — mapping core institutional pillars, leadership goals and key messages."],
        [".releitura-card:nth-child(1) h3", "Immersion"],
        [".releitura-card:nth-child(1) p", "On-site technical visit alongside the client to understand the brand's essence and operational reality."],
        [".releitura-card:nth-child(2) h3", "Positioning"],
        [".releitura-card:nth-child(2) p", "Alignment between institutional pillars, executive vision and key internal messages."],
        [".releitura-card:nth-child(3) h3", "Environments"],
        [".releitura-card:nth-child(3) p", "Visual identity applied across physical spaces, speaking simultaneously to the brand and its people."],
        [".banner-label", "03 / THE OUTCOME"],
        [".banner-quote", "Visual identity moved beyond aesthetics to become a strategic tool for internal communication, employer branding and organizational culture."],
        [".banner-closing", "Every environment became a touchpoint of company culture — welcoming visitors and reinforcing shared values for the team."]
      ]
    },

    "projeto-fisa-concepta.html": {
      title: "FiSA 2026 · Concepta Ingredients — Booth, KV & Print | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "02 / EVENT, KV &amp; PACKAGING"],
        [".project-tagline", "End-to-end brand communication at Latin America's premier food ingredients trade show."],
        [".project-meta-item:nth-child(1) dt", "SERVICES"],
        [".project-meta-item:nth-child(1) dd", "Event visual communication, Print collateral, Digital"],
        [".project-meta-item:nth-child(2) dt", "AGENCY"],
        [".project-meta-item:nth-child(2) dd", "Bee Creative · Campinas, SP"],
        [".project-meta-item:nth-child(3) dt", "DATE"],
        [".project-meta-item:nth-child(3) dd", "September 2026"],
        [".project-meta-item:nth-child(4) dt", "ROLE"],
        [".project-meta-item:nth-child(4) dd", "Art Direction &amp; Design"],
        [".project-credit", 'Case developed at <a href="https://beecreative.com.br" target="_blank" rel="noopener noreferrer">Agência Bee Creative</a> for Concepta Ingredients. <a href="https://beecreative.com.br/fisa-2026-concepta-ingredients/" target="_blank" rel="noopener noreferrer">View original case ↗</a>'],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / THE PROJECT"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "Over 30 years of natural ingredients."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "Concepta Ingredients specializes in supplying natural biodiversity ingredients to the pharmaceutical, food and cosmetics industries, backed by over 30 years of expertise."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "The company needed a cohesive 360° communication system for Fi South America — Latin America's largest food ingredients event — translating its brand identity across every touchpoint from booth graphics to digital channels, pre- to post-show."],
        [".project-narrative-split:nth-of-type(4) .section-label", "02 / APPROACH &amp; DELIVERABLES"],
        [".project-narrative-split:nth-of-type(4) .narrative-heading", "End-to-end event communication."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph", "We led Concepta Ingredients' presence at FiSA 2026 from end to end, bringing elegance and technical clarity to how the portfolio was presented."],
        [".releitura-card:nth-child(1) h3", "Booth Graphics"],
        [".releitura-card:nth-child(1) p", "Complete environmental graphics, decorative panels and bespoke artwork translating Concepta's identity across the entire space."],
        [".releitura-card:nth-child(2) h3", "Print Collateral"],
        [".releitura-card:nth-child(2) p", "Full product catalog, two exclusive brochures and custom acrylic product displays."],
        [".releitura-card:nth-child(3) h3", "Digital Presence"],
        [".releitura-card:nth-child(3) p", "Social media assets, email marketing campaigns and live coverage assets throughout the trade show."],
        [".banner-label", "03 / THE OUTCOME"],
        [".banner-quote", "A cohesive, memorable brand presence from strategy to execution at one of the industry's most important global gatherings."],
        [".banner-closing", "From the exhibition floor to digital channels, every touchpoint spoke a single visual language."]
      ]
    },

    "projeto-workshop-inconcepta.html": {
      title: "INCONCEPTA Workshop — Naming, Seal & Visual Identity | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "03 / NAMING, SEAL &amp; EVENT IDENTITY"],
        [".project-tagline", "Naming, proprietary seal and visual identity for an internal milestone workshop marking Concepta's new chapter."],
        [".project-meta-item:nth-child(1) dt", "SERVICES"],
        [".project-meta-item:nth-child(1) dd", "Naming, Seal, Visual Identity, Opening Video, Event Coverage"],
        [".project-meta-item:nth-child(2) dt", "AGENCY"],
        [".project-meta-item:nth-child(2) dd", "Bee Creative · Campinas, SP"],
        [".project-meta-item:nth-child(3) dt", "DATE"],
        [".project-meta-item:nth-child(3) dd", "April 2026"],
        [".project-meta-item:nth-child(4) dt", "ROLE"],
        [".project-meta-item:nth-child(4) dd", "Art Direction &amp; Design"],
        [".project-credit", 'Case developed at <a href="https://beecreative.com.br" target="_blank" rel="noopener noreferrer">Agência Bee Creative</a> for Concepta Ingredients. <a href="https://beecreative.com.br/workshop-inconcepta/" target="_blank" rel="noopener noreferrer">View original case ↗</a>'],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / THE PROJECT"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "More than an internal event: a milestone."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "Concepta Ingredients supplies natural Brazilian biodiversity ingredients to the pharmaceutical, food and cosmetics industries, with over 30 years of market experience."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "The company needed to structure an internal workshop for 55 employees across departments and seniority levels to mark its new phase and align everyone around who Concepta is, what it does and where it is headed."],
        [".project-narrative-split:nth-of-type(4) .section-label", "02 / THE NAME"],
        [".project-narrative-split:nth-of-type(4) .narrative-heading", "INCONCEPTA: a name built to span editions."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph:eq(0)", "Recognizing this was far more than a routine meeting, we created a distinctive identity anchored by a name capable of uniting multiple meanings: INCONCEPTA — easy to pronounce, memorable, strong in a business context and designed to endure across future annual editions."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph:eq(1)", "The theme line \"Since day one, EVOLVING is our main ingredient\" was integrated into the key visual, celebrating the drive for evolution that brought the company into its new era."],
        [".releitura-card:nth-child(1) h3", "IN"],
        [".releitura-card:nth-child(1) p", "Conveys involvement and belonging — being part of the movement rather than watching from the sidelines — while echoing 'ingredients', the core of the business."],
        [".releitura-card:nth-child(2) h3", "CON"],
        [".releitura-card:nth-child(2) p", "Evokes everything a great workshop stands for: connection, knowledge, convergence and shared consciousness."],
        [".releitura-card:nth-child(3) h3", "INCONCEPTA"],
        [".releitura-card:nth-child(3) p", "In its complete form, blends the Portuguese sound of 'encontro' (gathering) with the brand's own name."],
        [".project-narrative-split:nth-of-type(6) .section-label", "03 / SEAL &amp; IDENTITY"],
        [".project-narrative-split:nth-of-type(6) .narrative-heading", "A seal born from the brand's symbol."],
        [".project-narrative-split:nth-of-type(6) .narrative-paragraph:eq(0)", "We designed an exclusive seal derived from the geometry of Concepta's original mark. The visual construction stems from expansion — something that already exists internally and takes shape, integrating the graphic element into the 'IN' ligature."],
        [".project-narrative-split:nth-of-type(6) .narrative-paragraph:eq(1)", "Supporting patterns follow the same logic, expanding the base forms across applications for dynamism and consistency, paired with a color palette inspired by the parent brand."],
        [".project-narrative-split:nth-of-type(9) .section-label", "04 / THE FULL JOURNEY"],
        [".project-narrative-split:nth-of-type(9) .narrative-heading", "From planning to post-event."],
        [".project-narrative-split:nth-of-type(9) .narrative-paragraph", "Beyond a single deliverable, we structured the entire event journey — pre-, during and post-workshop — including:"],
        [".narrative-list", "<li>Naming</li><li>Proprietary seal</li><li>Visual identity system</li><li>Opening video</li><li>Online &amp; offline communication materials</li><li>Full event coverage</li>"],
        [".banner-label", "05 / THE OUTCOME"],
        [".banner-quote", "An experience that connected people, strengthened belonging and aligned the entire team around a shared purpose."],
        [".banner-closing", "The beginning of a new chapter for Concepta."]
      ]
    },

    "projeto-ayme.html": {
      title: "Aymê Design — Visual Identity & Tupi-Guarani Branding | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "04 / VISUAL IDENTITY &amp; BRANDING"],
        [".project-tagline", "A brand inspired by sacred Tupi-Guarani indigenous graphics, translated into contemporary design language."],
        [".project-meta-item:nth-child(1) dt", "PROJECT TYPE"],
        [".project-meta-item:nth-child(1) dd", "Branding, Brand Development, Logo Design"],
        [".project-meta-item:nth-child(2) dt", "DATE"],
        [".project-meta-item:nth-child(2) dd", "July 2025"],
        [".project-meta-item:nth-child(3) dt", "LOCATION"],
        [".project-meta-item:nth-child(3) dd", "Sumaré · SP, Brazil"],
        [".project-meta-item:nth-child(4) dt", "ART DIRECTION"],
        [".project-meta-item:nth-child(4) dd", "Vinicius Augusto Alves Brabo"],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / THE CONCEPT"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "Every great design tells a story."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "Ours begins long before us, traced on the skin and soul of Brazil's indigenous peoples."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "The visual identity for <strong>Aymê Design</strong> emerges from a deep dive into Tupi-Guarani heritage, reviving the sacred <em>Araku Pytxã</em> pattern. Popularly known as the 'saracura footprint', this symbol is more than an aesthetic form — it is a protective amulet."],
        [".project-narrative-split:nth-of-type(4) .section-label", "02 / SYMBOLISM"],
        [".project-narrative-split:nth-of-type(4) .narrative-heading", "Protection, delicacy and strength."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph:eq(0)", "Originally, <em>Araku Pytxã</em> is a feminine facial painting drawn to grant protection to the wearer."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph:eq(1)", "It is a shield crafted with the delicacy and strength of indigenous women, serving as a barrier against harm and a guide toward safe paths."],
        [".project-narrative-split:nth-of-type(6) .section-label", "03 / REINTERPRETATION"],
        [".project-narrative-split:nth-of-type(6) .narrative-heading", "From ancestral stroke to contemporary mark."],
        [".project-narrative-split:nth-of-type(6) .narrative-paragraph", "Our challenge was to translate the organic, rustic power of this ancestral stroke into the precise, sophisticated language of modern design."],
        [".releitura-card:nth-child(1) .card-step", "STAGE A"],
        [".releitura-card:nth-child(1) h3", "The Foundation"],
        [".releitura-card:nth-child(1) p", "We started from the crossed diagonal lines of the traditional indigenous motif."],
        [".releitura-card:nth-child(2) .card-step", "STAGE B"],
        [".releitura-card:nth-child(2) h3", "The Synthesis"],
        [".releitura-card:nth-child(2) p", "Through reductive geometry, we stripped away excess while preserving the essence and pulse of the form."],
        [".releitura-card:nth-child(3) .card-step", "STAGE C"],
        [".releitura-card:nth-child(3) h3", "The Result"],
        [".releitura-card:nth-child(3) p", "The final icon blossoms into four cardinal points, evoking a stylized star or flower — concave forms in outward motion anchored by a solid, unified core."],
        [".banner-label", "04 / BRAND MEANING"],
        [".banner-quote", "\"By adopting this symbol, Aymê Design embraces a commitment beyond aesthetics. Just as Araku Pytxã protects the Tupi-Guarani woman, our design exists to protect and elevate the essence of our clients' projects.\""],
        [".banner-closing", "Aymê bridges the deep roots of Brazilian culture with a visionary look toward the future. <strong>It is protection, identity and Brazil.</strong>"]
      ]
    },

    "projeto-nautilus-viva-a-vida.html": {
      title: "Nautilus · Live Life by the Pool — Brand Campaign & KV | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "05 / CAMPAIGN &amp; KEY VISUAL"],
        [".project-title-block .project-main-title", "Nautilus — Live Life by the Pool"],
        [".project-tagline", "A campaign that puts the customer center stage: the swimming pool as the setting where life happens more happily."],
        [".project-meta-item:nth-child(1) dt", "SERVICES"],
        [".project-meta-item:nth-child(1) dd", "Branding campaign, Video, Digital content"],
        [".project-meta-item:nth-child(2) dt", "AGENCY"],
        [".project-meta-item:nth-child(2) dd", "Bee Creative · Campinas, SP"],
        [".project-meta-item:nth-child(3) dt", "DATE"],
        [".project-meta-item:nth-child(3) dd", "June 2025"],
        [".project-meta-item:nth-child(4) dt", "ROLE"],
        [".project-meta-item:nth-child(4) dd", "Art Direction &amp; Design"],
        [".project-credit", 'Case developed at <a href="https://beecreative.com.br" target="_blank" rel="noopener noreferrer">Agência Bee Creative</a> for Nautilus. <a href="https://beecreative.com.br/campanha-nautilus-2/" target="_blank" rel="noopener noreferrer">View original case ↗</a>'],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / PROJECT &amp; CHALLENGE"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "Sparking identification and warmth."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "Founded in 1984, Nautilus is a Brazilian company specialized in developing, manufacturing and marketing swimming pool equipment."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph:eq(0)", "Our goal was to craft a branding campaign that sparked genuine identification and warmth, placing the customer as the protagonist — someone who lives, shares and creates lasting memories around the pool."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph:eq(1)", "The core challenge was building a more human, authentic and versatile visual language that connected the brand to everyday family moments while respecting Nautilus's institutional identity."],
        [".project-narrative-split:nth-of-type(5) .section-label", "02 / THE CAMPAIGN"],
        [".project-narrative-split:nth-of-type(5) .narrative-heading", "\"Live life by the pool\"."],
        [".project-narrative-split:nth-of-type(5) .narrative-paragraph:eq(0)", "Built around light, affectionate storytelling, the campaign frames the pool as the place where life happens at its best — highlighting celebrations, play and family gatherings while reinforcing that Nautilus takes care of the technology behind the scenes."],
        [".project-narrative-split:nth-of-type(5) .narrative-paragraph:eq(1)", "The graphic system introduced a warm secondary palette derived from institutional colors, typography balancing reliability with lightness, and proprietary visual assets across channels."],
        [".releitura-card:nth-child(1) h3", "Hero Film"],
        [".releitura-card:nth-child(1) p", "Central campaign film deployed across all brand touchpoints."],
        [".releitura-card:nth-child(2) h3", "Blog &amp; CRM"],
        [".releitura-card:nth-child(2) p", "Editorial content and email flows aligned with the campaign concept to drive engagement."],
        [".releitura-card:nth-child(3) h3", "Corporate Website"],
        [".releitura-card:nth-child(3) p", "Hero banners and bespoke graphic elements unifying the campaign identity online."],
        [".banner-label", "03 / THE OUTCOME"],
        [".banner-quote", "By transforming the swimming pool into a symbol of life, affection and memory, the campaign elevated emotional brand equity and strengthened market positioning."],
        [".banner-closing", "A multichannel rollout unified by a single creative concept."]
      ]
    },

    "projeto-nautilus-social-media.html": {
      title: "Nautilus · Social Media & Digital Content | Case Study · Vinicius Brabo",
      pairs: [
        [".project-category-tag", "06 / SOCIAL MEDIA &amp; ART DIRECTION"],
        [".project-tagline", "Content that builds a clear bridge between consumer pain points and the right technical solution."],
        [".project-meta-item:nth-child(1) dt", "SERVICES"],
        [".project-meta-item:nth-child(1) dd", "Social media, Content strategy, Design"],
        [".project-meta-item:nth-child(2) dt", "AGENCY"],
        [".project-meta-item:nth-child(2) dd", "Bee Creative · Campinas, SP"],
        [".project-meta-item:nth-child(3) dt", "DATE"],
        [".project-meta-item:nth-child(3) dd", "October 2024"],
        [".project-meta-item:nth-child(4) dt", "ROLE"],
        [".project-meta-item:nth-child(4) dd", "Art Direction &amp; Design"],
        [".project-credit", 'Case developed at <a href="https://beecreative.com.br" target="_blank" rel="noopener noreferrer">Agência Bee Creative</a> for Nautilus. <a href="https://beecreative.com.br/campanha-nautilus/" target="_blank" rel="noopener noreferrer">View original case ↗</a>'],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / PROJECT &amp; CHALLENGE"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "From consumer need to the Nautilus solution."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "Founded in 1984, Nautilus is a Brazilian company specialized in developing, manufacturing and marketing swimming pool equipment."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "The challenge was to bridge everyday pool owner needs with Nautilus technology by clearly highlighting the key reasons to automate chlorine treatment."],
        [".project-narrative-split:nth-of-type(5) .section-label", "02 / APPROACH &amp; EXECUTION"],
        [".project-narrative-split:nth-of-type(5) .narrative-heading", "\"4 reasons\" to automate."],
        [".project-narrative-split:nth-of-type(5) .narrative-paragraph", "The carousel '4 Reasons to Automate Your Pool's Chlorine Treatment' distilled technical benefits into scannable visual storytelling, naturally leading readers to Nautilus chlorine generators."],
        [".banner-label", "03 / THE OUTCOME"],
        [".banner-quote", "By translating technical automation benefits into clear visual content, the campaign guided audiences directly toward the ideal product solution."],
        [".banner-closing", "Useful content first, product solution next."]
      ]
    },

    "projeto-joao-jorge.html": {
      title: "João Jorge Physical Therapy — Visual Identity & Logo | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "07 / VISUAL IDENTITY &amp; BRANDING"],
        [".project-title-block .project-main-title", "João Jorge Physical Therapy"],
        [".project-tagline", "A humanized visual identity that fuses the practitioner's initials with the purpose of rehabilitation and the rhythm of life."],
        [".project-meta-item:nth-child(1) dt", "PROJECT TYPE"],
        [".project-meta-item:nth-child(1) dd", "Branding, Brand Development, Logo Design"],
        [".project-meta-item:nth-child(2) dt", "DATE"],
        [".project-meta-item:nth-child(2) dd", "August 2024"],
        [".project-meta-item:nth-child(3) dt", "LOCATION"],
        [".project-meta-item:nth-child(3) dd", "Sumaré · SP, Brazil"],
        [".project-meta-item:nth-child(4) dt", "ART DIRECTION"],
        [".project-meta-item:nth-child(4) dd", "Vinicius Augusto Alves Brabo"],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / THE CONCEPT"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "Restoring the rhythm of movement."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "João Jorge's visual identity stems from the understanding that physical therapy is not about standing still — it is about recovering rhythm."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "The graphic system merges the personal (the practitioner's initials) with the purpose (patient rehabilitation), creating a symbol that breathes lightness, warmth and dynamism."],
        [".project-narrative-split:nth-of-type(4) .section-label", "02 / THE METAMORPHOSIS"],
        [".project-narrative-split:nth-of-type(4) .narrative-heading", "The metamorphosis of care in three pillars."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph", "The symbol's construction relies on an intelligent, human-centered design solution where geometry carries deep meaning:"],
        [".releitura-card:nth-child(1) .card-step", "PILLAR 01"],
        [".releitura-card:nth-child(1) h3", "From Initials to Human"],
        [".releitura-card:nth-child(1) p", "Built upon the initials 'JJ', the typography was deconstructed to evoke a human figure in motion — removing clinical coldness and placing people at the center."],
        [".releitura-card:nth-child(2) .card-step", "PILLAR 02"],
        [".releitura-card:nth-child(2) h3", "The Value Promise"],
        [".releitura-card:nth-child(2) p", "Fluid curves trace the letter 'J' with lightness, visually translating recovery, restored mobility and quality of life."],
        [".releitura-card:nth-child(3) .card-step", "PILLAR 03"],
        [".releitura-card:nth-child(3) h3", "The Circle of Life"],
        [".releitura-card:nth-child(3) p", "Surrounding the human figure, the circle represents the continuous flow of life as well as the embrace of care and protection during treatment."],
        [".project-narrative-split:nth-of-type(6) .section-label", "03 / COLOR &amp; TYPOGRAPHY"],
        [".project-narrative-split:nth-of-type(6) .narrative-heading", "Vitality, warmth and sophistication."],
        [".project-narrative-split:nth-of-type(6) .narrative-paragraph:eq(0)", "The color palette balances healthcare credibility with a warm, premium feel — intentionally moving away from generic 'clinical blue'."],
        [".project-narrative-split:nth-of-type(6) .narrative-paragraph:eq(1)", "<strong>Primary Colors:</strong> Deep Green and Warm Gold/Sand. While green signals health and cellular renewal, the golden tone brings sophistication and human warmth."],
        [".project-narrative-split:nth-of-type(6) .narrative-paragraph:eq(2)", "<strong>Mulish Typography:</strong> A clean, contemporary, highly legible typeface providing technical clarity across print and digital applications."],
        [".banner-label", "04 / PURPOSE"],
        [".banner-quote", "\"Physical therapy is not about standing still — it is about recovering your rhythm. Design places human warmth at the center of every touchpoint.\""],
        [".banner-closing", "A brand crafted to inspire clinical trust and personal closeness for every patient."]
      ]
    },

    "projeto-neria.html": {
      title: "Neria — Brand Platform & Branding (Prêmio Recall 2024 Winner) | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "08 / BRANDING &amp; BRAND PLATFORM (PRÊMIO RECALL 2024)"],
        [".project-tagline", "Synergy that empowers: the complete brand platform for a new energy company, from core essence to market launch."],
        [".project-meta-item:nth-child(1) dt", "SERVICES"],
        [".project-meta-item:nth-child(1) dd", "Brand platform, Branding, Launch campaign"],
        [".project-meta-item:nth-child(2) dt", "AGENCY"],
        [".project-meta-item:nth-child(2) dd", "Bee Creative · Campinas, SP"],
        [".project-meta-item:nth-child(3) dt", "DATE"],
        [".project-meta-item:nth-child(3) dd", "June 2024"],
        [".project-meta-item:nth-child(4) dt", "ROLE"],
        [".project-meta-item:nth-child(4) dd", "Art Direction &amp; Design"],
        [".project-credit", 'Case developed at <a href="https://beecreative.com.br" target="_blank" rel="noopener noreferrer">Agência Bee Creative</a> for Grupo Capitale. <a href="https://beecreative.com.br/neria-sinergia-que-da-forca/" target="_blank" rel="noopener noreferrer">View original case ↗</a>'],
        [".project-award", "★ Winner at Prêmio Recall 2024 · Branding Design"],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / THE PROJECT"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "A new brand for a nearly 15-year-old group."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "Grupo Capitale — previously formed by Capitale Energia (one of Brazil's largest independent energy traders) and ZEG (focused on renewable energy and distributed generation) — introduced the Neria brand to the market."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "To stand out in an increasingly competitive market with look-alike value propositions, we developed the entire brand platform: from core strategic pillars to visual identity and launch campaigns."],
        [".project-narrative-split:nth-of-type(5) .section-label", "02 / STRATEGY"],
        [".project-narrative-split:nth-of-type(5) .narrative-heading", "Synergy so the world can achieve more."],
        [".project-narrative-split:nth-of-type(5) .narrative-paragraph:eq(0)", "We conducted an in-company workshop with employees across roles and business units to gather internal perceptions, followed by in-depth market and competitor research."],
        [".project-narrative-split:nth-of-type(5) .narrative-paragraph:eq(1)", "Crossing convergent and divergent insights led to the purpose 'Synergy so the world can achieve more' — using 'synergy' to bridge 'energy' with the company's key differentiator: standing side by side with clients throughout the energy transition, reinforced by the tagline 'Synergy that empowers' ('Sinergia que dá força')."],
        [".project-narrative-split:nth-of-type(6) .section-label", "03 / VERBAL &amp; VISUAL EXPRESSION"],
        [".project-narrative-split:nth-of-type(6) .narrative-heading", "The letter N as a symbol of partnership and energy."],
        [".project-narrative-split:nth-of-type(6) .narrative-paragraph", "With an energetic, approachable and skilled tone of voice, we crafted verbal assets that clarify a complex offering for retail and B2B audiences alike. Visually, the letter 'N' takes center stage for its versatility and conceptual strength."],
        [".releitura-card:nth-child(1) h3", "Tone of Voice"],
        [".releitura-card:nth-child(1) p", "\"Together, so your business can achieve more\", \"It's time for your business to power ahead\" and \"The best energy is the one that helps everyone grow\"."],
        [".releitura-card:nth-child(2) h3", "Partnership"],
        [".releitura-card:nth-child(2) p", "The parallel stems of the 'N' represent union and side-by-side collaboration between businesses."],
        [".releitura-card:nth-child(3) h3", "Energy"],
        [".releitura-card:nth-child(3) p", "Conductive pathways that convey empowerment, flow and transformation."],
        [".project-narrative-split:nth-of-type(11) .section-label", "04 / COMMUNICATION &amp; LAUNCH"],
        [".project-narrative-split:nth-of-type(11) .narrative-heading", "Synergy for savings on your energy bill."],
        [".project-narrative-split:nth-of-type(11) .narrative-paragraph:eq(0)", "Anchored by an impactful manifesto, we created the campaign line 'Synergy for savings on your energy bill', uniting functional benefits with emotional brand attributes while the 'N' graphic wraps around real customer personas."],
        [".project-narrative-split:nth-of-type(11) .narrative-paragraph:eq(1)", "The two-month launch campaign rolled out across Campinas, Catanduva and Manaus on radio, OOH and digital channels to build regional brand awareness and validate media performance for future expansion."],
        [".banner-label", "05 / THE PURPOSE"],
        [".banner-quote", "\"Synergy that empowers\": a statement uniting the energy sector with the company's core differentiator — standing side by side with every client."],
        [".banner-closing", "Our client's success is part of our own success."]
      ]
    },

    "projeto-feiticeira.html": {
      title: "Sorceress (Feiticeira) — Concept Art & Digital Compositing | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "09 / INDEPENDENT PROJECT &amp; CONCEPT ART"],
        [".project-title-block .project-main-title", "Sorceress (Feiticeira)"],
        [".project-tagline", "An exercise in visual metalanguage and technical mastery: digital compositing as modern sorcery."],
        [".project-meta-item:nth-child(1) dt", "PROJECT TYPE"],
        [".project-meta-item:nth-child(1) dd", "Concept Art, Digital Image Manipulation"],
        [".project-meta-item:nth-child(2) dt", "TECHNIQUE"],
        [".project-meta-item:nth-child(2) dd", "Photobashing &amp; Digital Illusionism"],
        [".project-meta-item:nth-child(3) dt", "LOCATION"],
        [".project-meta-item:nth-child(3) dd", "Sumaré · SP, Brazil"],
        [".project-meta-item:nth-child(4) dt", "ART DIRECTION"],
        [".project-meta-item:nth-child(4) dd", "Vinicius Augusto Alves Brabo"],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / THE CONCEPT"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "Metalanguage and visual illusionism."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "This piece is an exercise where the subject mirrors the creative process itself: the premise that digital manipulation is modern sorcery."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "Here, <em>photobashing</em> transcends simple collage to become a refined instrument of atmospheric world-building. Every element is meticulously stitched together to invite the viewer to suspend disbelief."],
        [".project-narrative-split:nth-of-type(4) .section-label", "02 / TECHNICAL PROCESS"],
        [".project-narrative-split:nth-of-type(4) .narrative-heading", "Integration through diegetic light."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph", "The composition's core strength lies in its lighting and environmental integration, structured around three fundamentals:"],
        [".releitura-card:nth-child(1) .card-step", "FUNDAMENTAL 01"],
        [".releitura-card:nth-child(1) h3", "Diegetic Light"],
        [".releitura-card:nth-child(1) p", "Using the glowing cosmic orb as the primary light source realistically binds the model, skin textures, raven feathers and forest into a single believable plane."],
        [".releitura-card:nth-child(2) .card-step", "FUNDAMENTAL 02"],
        [".releitura-card:nth-child(2) h3", "Invisible Seams"],
        [".releitura-card:nth-child(2) p", "Advanced photobashing requires erasing all boundaries between multiple stock assets and original captures — harmonizing grain, depth of field and focus."],
        [".releitura-card:nth-child(3) .card-step", "FUNDAMENTAL 03"],
        [".releitura-card:nth-child(3) h3", "Atmosphere &amp; Mystery"],
        [".releitura-card:nth-child(3) p", "Deep cyan and midnight tones paired with atmospheric particles convey mysticism and presence without sacrificing silhouette clarity."],
        [".banner-label", "03 / MANIFESTO"],
        [".banner-quote", "\"It is not merely about creating a fantasy image, but demonstrating technical command. In design and digital art, flawless execution is what makes the impossible feel real.\""],
        [".banner-closing", "A demonstration of advanced visual compositing applied to conceptual storytelling."]
      ]
    },

    "projeto-sword-girl.html": {
      title: "Sword Girl — Cyberpunk Concept Art & Photobashing | Vinicius Brabo",
      pairs: [
        [".project-category-tag", "10 / INDEPENDENT PROJECT &amp; CONCEPT ART"],
        [".project-tagline", "The collision between ancestral sword discipline and cybernetic futurism, orchestrated in neon light and complex textures."],
        [".project-meta-item:nth-child(1) dt", "PROJECT TYPE"],
        [".project-meta-item:nth-child(1) dd", "Concept Art, Digital Image Manipulation"],
        [".project-meta-item:nth-child(2) dt", "AESTHETIC"],
        [".project-meta-item:nth-child(2) dd", "Cyberpunk &amp; Neo-Tokyo Sci-Fi"],
        [".project-meta-item:nth-child(3) dt", "LOCATION"],
        [".project-meta-item:nth-child(3) dd", "Sumaré · SP, Brazil"],
        [".project-meta-item:nth-child(4) dt", "ART DIRECTION"],
        [".project-meta-item:nth-child(4) dd", "Vinicius Augusto Alves Brabo"],
        [".project-narrative-split:nth-of-type(3) .section-label", "01 / CREATIVE RATIONALE"],
        [".project-narrative-split:nth-of-type(3) .narrative-heading", "Ancestral tradition versus cybernetic coldness."],
        [".project-narrative-split:nth-of-type(3) .narrative-lead", "This piece materializes the clash between two eras: uniting the discipline of the Katana with cybernetic implants to create a visual narrative where past and future collide."],
        [".project-narrative-split:nth-of-type(3) .narrative-paragraph", "The project's strength lies in the technical execution of <em>photobashing</em>: light and texture manipulation were calibrated so organic elements (face, fabrics) and synthetic materials (metals, implants, cables) coexist seamlessly."],
        [".project-narrative-split:nth-of-type(4) .section-label", "02 / COMPOSITION"],
        [".project-narrative-split:nth-of-type(4) .narrative-heading", "The pillars of neon aesthetics and synthetic matter."],
        [".project-narrative-split:nth-of-type(4) .narrative-paragraph", "Three core decisions guided the art direction and volumetric lighting of the character:"],
        [".releitura-card:nth-child(1) .card-step", "PILLAR 01"],
        [".releitura-card:nth-child(1) h3", "Neon &amp; Magenta Palette"],
        [".releitura-card:nth-child(1) p", "The contrast between saturated magenta highlights and dense shadows creates an immersive futuristic volume, drawing the eye to the hilt and the warrior's gaze."],
        [".releitura-card:nth-child(2) .card-step", "PILLAR 02"],
        [".releitura-card:nth-child(2) h3", "Texture Calibration"],
        [".releitura-card:nth-child(2) p", "Microscopic treatment of metallic reflections on the blade and cyberware balanced against the natural porosity of human skin in the foreground."],
        [".releitura-card:nth-child(3) .card-step", "PILLAR 03"],
        [".releitura-card:nth-child(3) h3", "Immersive Narrative"],
        [".releitura-card:nth-child(3) p", "The close guard stance and tight framing communicate imminent tension, establishing a rich cinematic universe within a single static frame."],
        [".banner-label", "03 / SYNTHESIS"],
        [".banner-quote", "\"An immersive composition proving the ability to transform distinct photographic fragments into a single, cohesive and pulsing fictional reality.\""],
        [".banner-closing", "Digital art as a bridge between technical rigor and memorable world-building."]
      ]
    }
  };

  // Shared elements across all pages
  const SHARED_PAIRS_EN = [
    [".skip-link", "Skip to content"],
    [".topbar nav a:nth-child(1)", "Expertise"],
    [".topbar nav a:nth-child(2)", "Automation"],
    [".topbar nav a:nth-child(3)", "Projects"],
    [".topbar nav a:nth-child(4)", "Career"],
    [".topbar nav a:nth-child(5)", "About"],
    [".project-nav-back .back-link", "← Back to projects"],
    [".project-footer-nav .project-nav-btn", '<span>←</span> View all projects'],
    [".project-footer-nav .button", 'Let\'s talk <span>↗</span>'],
    [".footer-colophon-label", "COLOPHON · CREATIVE AI ENGINEERING"],
    [
      ".footer-colophon-text",
      "This portfolio was architected, written and built by <strong>Vinicius Brabo</strong> orchestrating coding agents and advanced AI workflows (<strong>Claude Code</strong>, <strong>Codex</strong> and assisted automation). Beyond isolated prompts, I operate AI as an end-to-end engineering system — from art direction and information architecture to semantic code, technical SEO and continuous deployment."
    ],
    [".footer-bottom span:nth-child(2)", "SUMARÉ &amp; CAMPINAS · SP · BRAZIL"]
  ];

  function getPageKey() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf("/") + 1) || "index.html";
    return file;
  }

  function getSavedLang() {
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get("lang");
    if (qLang === "en" || qLang === "pt") {
      try {
        localStorage.setItem(STORAGE_KEY, qLang);
      } catch (e) {}
      return qLang;
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "pt") return saved;
    } catch (e) {}
    return "pt";
  }

  function renderProjectGridsForLang(lang) {
    // Home recent grid
    const homeGrid = document.querySelector(".projects .project-grid:not(.all-projects-grid)");
    if (homeGrid && typeof getRecentProjects === "function") {
      const recents = getRecentProjects(4);
      homeGrid.innerHTML = recents
        .map((proj) => {
          const t = lang === "en" && proj.titleEn ? proj.titleEn : proj.title;
          const cat = lang === "en" && proj.categoryEn ? proj.categoryEn : proj.category;
          const alt = lang === "en" && proj.altEn ? proj.altEn : proj.alt;
          const srcsetAttr = proj.srcset ? ` srcset="${proj.srcset}" sizes="(max-width: 700px) 92vw, 48vw"` : "";
          const dimAttr = proj.width && proj.height ? ` width="${proj.width}" height="${proj.height}"` : "";
          return `
          <a href="${proj.url}" class="project-card ${proj.wide ? "project-card-wide" : ""}" data-date="${proj.date}">
            <img src="${proj.image}"${srcsetAttr}${dimAttr} alt="${alt}" loading="lazy" decoding="async" />
            <div>
              <span>${cat} · ${proj.dateDisplay} ↗</span>
              <h3>${t}</h3>
            </div>
          </a>`;
        })
        .join("");
    }

    // All projects archive grid
    const allGrid = document.querySelector(".all-projects-grid");
    if (allGrid && typeof getProjectsSortedByDate === "function") {
      const activeBtn = document.querySelector(".filter-tab.active");
      const activeFilter = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
      const sorted = getProjectsSortedByDate();
      allGrid.innerHTML = sorted
        .map((proj) => {
          const t = lang === "en" && proj.titleEn ? proj.titleEn : proj.title;
          const cat = lang === "en" && proj.categoryEn ? proj.categoryEn : proj.category;
          const alt = lang === "en" && proj.altEn ? proj.altEn : proj.alt;
          const srcsetAttr = proj.srcset ? ` srcset="${proj.srcset}" sizes="(max-width: 700px) 92vw, 48vw"` : "";
          const dimAttr = proj.width && proj.height ? ` width="${proj.width}" height="${proj.height}"` : "";
          const hidden = activeFilter !== "all" && proj.categoryType !== activeFilter ? 'style="display:none;"' : "";
          return `
          <a href="${proj.url}" class="project-card ${proj.wide ? "project-card-wide" : ""}" data-category="${proj.categoryType}" ${hidden}>
            <img src="${proj.image}"${srcsetAttr}${dimAttr} alt="${alt}" loading="lazy" decoding="async" />
            <div>
              <span>${cat} · ${proj.dateDisplay} ↗</span>
              <h3>${t}</h3>
            </div>
          </a>`;
        })
        .join("");
    }
  }

  let originalTitle = document.title;
  const cachedNodes = new Map();

  function queryTarget(selector) {
    const eqMatch = selector.match(/^(.*):eq\((\d+)\)$/);
    if (eqMatch) {
      const list = document.querySelectorAll(eqMatch[1]);
      return list[parseInt(eqMatch[2], 10)] || null;
    }
    return document.querySelector(selector);
  }

  function applyPair(selector, enHtml, lang) {
    const el = queryTarget(selector);
    if (!el) return;
    if (!cachedNodes.has(el)) {
      cachedNodes.set(el, el.innerHTML);
    }
    if (lang === "en") {
      el.innerHTML = enHtml;
    } else {
      el.innerHTML = cachedNodes.get(el);
    }
  }

  function applyLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

    const pageKey = getPageKey();
    const pageData = PAGE_TRANSLATIONS_EN[pageKey];

    // Shared pairs first, then page-specific pairs (so page-specific can override if needed)
    SHARED_PAIRS_EN.forEach(([sel, enHtml]) => applyPair(sel, enHtml, lang));
    if (pageData) {
      document.title = lang === "en" ? pageData.title : originalTitle;
      pageData.pairs.forEach(([sel, enHtml]) => applyPair(sel, enHtml, lang));
    }

    renderProjectGridsForLang(lang);

    // Update toggle buttons state
    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      const isMatch = btn.getAttribute("data-lang-switch") === lang;
      btn.classList.toggle("active", isMatch);
      btn.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });
  }

  function initLangSwitch() {
    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetLang = btn.getAttribute("data-lang-switch");
        applyLanguage(targetLang);
      });
    });

    const initialLang = getSavedLang();
    if (initialLang === "en") {
      applyLanguage("en");
    } else {
      // Ensure project grids are rendered in PT on initial load
      renderProjectGridsForLang("pt");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangSwitch);
  } else {
    initLangSwitch();
  }
})();
