export type Locale = 'pt' | 'en' | 'es'

export const siteUrl = 'https://portfolio.nassusinfo.com.br'

export const externalLinks = {
  github: 'https://github.com/lucasnassuato2025-cloud',
  instagram: 'https://www.instagram.com/lucas_nassusinfo/',
  nassusinfo: 'https://www.nassusinfo.com.br/',
  whatsapp:
    'https://wa.me/5513991026619?text=Oi%20Lucas%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.',
  email: 'mailto:lucasnassuato2025@gmail.com',
} as const

export const localeConfig = {
  pt: {
    label: 'PT',
    longLabel: 'Português',
    htmlLang: 'pt-BR',
    home: '/',
    education: '/formacao',
  },
  en: {
    label: 'EN',
    longLabel: 'English',
    htmlLang: 'en',
    home: '/en',
    education: '/en/education',
  },
  es: {
    label: 'ES',
    longLabel: 'Español',
    htmlLang: 'es',
    home: '/es',
    education: '/es/formacion',
  },
} as const

export const portfolioContent = {
  pt: {
    meta: {
      title: 'Lucas Nassuato | Full Stack Developer • SaaS, React e Next.js',
      description:
        'Portfólio profissional de Lucas Nassuato da Silva: Full Stack Developer com atuação em SaaS, CRM, Next.js, React, TypeScript, UI/UX, integrações, SEO e deploy.',
    },
    nav: [
      ['Cases', '#work'],
      ['Serviços', '#services'],
      ['Stack', '#stack'],
      ['Trajetória', '#journey'],
      ['Contato', '#contact'],
    ],
    accessibility: {
      skip: 'Pular para o conteúdo',
      mainNav: 'Navegação principal',
      language: 'Selecionar idioma',
    },
    header: {
      role: 'Full Stack Developer',
      contact: 'Falar comigo',
    },
    hero: {
      eyebrow: 'Desenvolvimento • Produto • Experiência digital',
      titleA: 'Eu transformo ideias em',
      titleAccent: 'produtos digitais prontos para crescer.',
      body:
        'Sou Lucas Nassuato da Silva, desenvolvedor Full Stack e criador da Nassusinfo. Projeto sites, sistemas web, SaaS e CRMs unindo engenharia, UI/UX, integrações, SEO e publicação.',
      badges: ['Full Stack', 'SaaS & CRM', 'UI/UX', 'Disponível para projetos'],
      primary: 'Explorar cases',
      secondary: 'Conhecer a Nassusinfo',
      github: 'Ver GitHub',
      imageAlt: 'Lucas Nassuato da Silva — Full Stack Developer',
      imageKicker: 'Nassusinfo Soluções Tecnológicas',
      imageTitle: 'Código, produto e visão de negócio.',
      imageBody: 'Soluções digitais responsivas, publicáveis e preparadas para evolução contínua.',
    },
    metrics: [
      ['Full Stack', 'Frontend, backend, integração e deploy'],
      ['SaaS & CRM', 'Produto, dashboards, autenticação e dados'],
      ['Mobile-first', 'Experiência pensada para telas pequenas e grandes'],
      ['CI/CD', 'GitHub Actions, Vercel, Render e automações'],
    ],
    strip: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GitHub Actions', 'Vercel', 'UI/UX', 'SEO'],
    work: {
      eyebrow: 'Cases selecionados',
      title: 'Projetos reais, decisões reais e evolução contínua.',
      intro:
        'Apresento produtos próprios, projetos de cliente e MVPs sem expor código comercial, credenciais ou propriedade intelectual de terceiros.',
      action: 'Falar sobre este case',
      items: [
        {
          name: 'Nassus One',
          status: 'Produto próprio • Em evolução',
          category: 'Plataforma de gestão',
          description:
            'Plataforma web criada para concentrar experiências e operações digitais da Nassusinfo com navegação responsiva, autenticação e evolução contínua.',
          impact: 'Arquitetura de produto, UX desktop/mobile, versionamento, CI/CD, estados e manutenção evolutiva.',
          stack: ['Produto', 'JavaScript', 'UI/UX', 'GitHub Actions', 'Vercel'],
        },
        {
          name: 'Nassus CRM',
          status: 'CRM / SaaS • Em evolução',
          category: 'Gestão comercial',
          description:
            'Sistema para organizar leads, clientes, indicadores e rotinas comerciais em uma interface clara e produtiva.',
          impact: 'Dashboards, fluxos de CRM, autenticação, dados, componentes reutilizáveis e publicação contínua.',
          stack: ['CRM', 'Dashboard', 'Dados', 'CI/CD', 'Vercel'],
        },
        {
          name: 'Vetix',
          status: 'SaaS desenvolvido',
          category: 'Gestão veterinária',
          description:
            'Aplicação SaaS voltada à rotina veterinária com frontend moderno, autenticação Google e configuração de ambientes.',
          impact: 'React, Vite, Google Identity, publicação, Git e recuperação segura de versões.',
          stack: ['React', 'Vite', 'Google Identity', 'Git', 'Render'],
        },
        {
          name: 'Health Fisio',
          status: 'Projeto de cliente',
          category: 'Saúde • Site profissional',
          description:
            'Site institucional com serviços, galeria, contato, agendamento externo, WhatsApp e experiência responsiva.',
          impact: 'Credibilidade, SEO, organização de conteúdo, performance percebida e conversão em contatos.',
          stack: ['HTML', 'CSS', 'JavaScript', 'SEO', 'UX Mobile'],
        },
        {
          name: 'RL Viagens & Turismo',
          status: 'Projeto comercial',
          category: 'Turismo • Presença digital',
          description:
            'Experiência web para turismo com pacotes, galeria, contato, políticas e navegação responsiva.',
          impact: 'Arquitetura de informação, conteúdo comercial, responsividade e publicação de site completo.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Web', 'SEO'],
        },
        {
          name: 'BarberControl',
          status: 'MVP / MicroSaaS',
          category: 'Barbearia • Assinatura',
          description:
            'MVP com proposta de valor, planos de assinatura, fluxo de pagamento e estrutura inicial de gestão.',
          impact: 'Produto digital, UX, monetização, estrutura de planos e integração de pagamento.',
          stack: ['SaaS', 'UI/UX', 'Cakto', 'Produto', 'Web'],
        },
      ],
    },
    services: {
      eyebrow: 'O que eu entrego',
      title: 'Engenharia suficiente para funcionar. Design suficiente para convencer.',
      intro:
        'Trabalho do diagnóstico à publicação, mantendo clareza de escopo, responsividade e uma base que possa continuar evoluindo.',
      items: [
        ['01', 'Sites profissionais', 'Sites institucionais rápidos, responsivos, com SEO inicial e presença comercial consistente.', ['UI responsiva', 'SEO', 'WhatsApp', 'Publicação']],
        ['02', 'Landing pages', 'Páginas de campanha com hierarquia, CTA, velocidade e foco em conversão.', ['Copy estrutural', 'CTA', 'Mobile-first', 'Analytics-ready']],
        ['03', 'Sistemas web & SaaS', 'Dashboards, CRMs, áreas administrativas, autenticação e fluxos sob medida.', ['Fluxos', 'Dashboard', 'Autenticação', 'Integrações']],
        ['04', 'UI/UX & produto', 'Redesign, arquitetura visual e experiência consistente em desktop e mobile.', ['UX mobile', 'Design system', 'Componentes', 'Acessibilidade']],
        ['05', 'Integrações & automações', 'APIs, OAuth, pagamentos, formulários e WhatsApp para reduzir trabalho manual.', ['APIs', 'OAuth', 'Pagamentos', 'Automação']],
        ['06', 'Deploy, SEO & manutenção', 'Versionamento, domínio, performance, indexação e evolução pós-publicação.', ['Git', 'Vercel/Render', 'SEO técnico', 'Manutenção']],
      ],
    },
    stack: {
      eyebrow: 'Stack técnica',
      title: 'Ferramentas escolhidas para entregar, não para impressionar.',
      groups: [
        ['Frontend', ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']],
        ['Backend & dados', ['Node.js', 'APIs REST', 'PostgreSQL', 'Supabase', 'Neon', 'Autenticação', 'Rotas de API']],
        ['Infra & entrega', ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Netlify', 'CI/CD', 'E2E']],
        ['Produto & integrações', ['UI/UX', 'SEO', 'Google OAuth', 'WhatsApp', 'Cakto', 'Responsive Design', 'Automação']],
      ],
    },
    process: {
      eyebrow: 'Processo',
      title: 'Um fluxo simples para reduzir retrabalho e deixar decisões visíveis.',
      items: [
        ['Diagnóstico', 'Objetivo, público, restrições e o problema real antes do código.'],
        ['Arquitetura', 'Páginas, fluxos, dados e integrações organizados antes da implementação.'],
        ['UI/UX', 'Experiência clara e consistente em desktop e mobile.'],
        ['Desenvolvimento', 'Componentes, regras, integrações, estados e tratamento de erros.'],
        ['Validação', 'Responsividade, links, acessibilidade, lint, build e pontos críticos.'],
        ['Publicação', 'Versionamento, deploy, domínio e base pronta para manutenção.'],
      ],
    },
    journey: {
      eyebrow: 'Trajetória',
      title: 'Da resolução de problemas em TI à construção de produtos digitais.',
      items: [
        ['Base técnica', 'Suporte, hardware, redes e ambiente corporativo', 'Minha base veio do diagnóstico técnico, manutenção, redes, software e atendimento a usuários reais.'],
        ['Desenvolvimento', 'Sites, interfaces e soluções digitais', 'Passei a transformar demandas comerciais em sites, landing pages, integrações e experiências responsivas.'],
        ['Produto', 'SaaS, CRMs e sistemas próprios', 'Evoluí para autenticação, dashboards, dados, APIs, pagamentos, CI/CD e publicação.'],
        ['Hoje', 'Full Stack + produto + visão comercial', 'Uno desenvolvimento, UI/UX, SEO e automação para entregar soluções claras, rápidas e úteis.'],
      ],
    },
    education: {
      eyebrow: 'Formação acadêmica',
      title: 'Análise e Desenvolvimento de Sistemas — UNICID',
      body:
        'Graduação tecnológica em andamento, reforçando fundamentos de software, banco de dados, front-end e pensamento computacional enquanto continuo desenvolvendo projetos reais.',
      status: 'Cursando • Início em 2026 • 4 semestres',
      action: 'Ver formação em detalhes',
    },
    contact: {
      eyebrow: 'Vamos construir algo útil',
      title: 'Precisa de um site, sistema ou produto web com acabamento profissional?',
      body:
        'Posso ajudar no diagnóstico, desenvolvimento, redesign, integração ou evolução de uma base já existente.',
      whatsapp: 'Conversar no WhatsApp',
      email: 'Enviar e-mail',
      github: 'Abrir GitHub',
      availability: 'Projetos freelance • Desenvolvimento sob medida • Melhorias em produtos web',
    },
    footer: {
      tagline: 'Full Stack Developer • Nassusinfo Soluções Tecnológicas',
      rights: '© 2026 Lucas Nassuato da Silva. Portfólio profissional.',
    },
    mobileDock: {
      work: 'Cases',
      contact: 'Contato',
    },
    educationPage: {
      eyebrow: 'Formação acadêmica',
      title: 'Superior de Tecnologia em Análise e Desenvolvimento de Sistemas',
      school: 'UNICID — Universidade Cidade de São Paulo',
      intro:
        'Formação acadêmica aplicada à prática em desenvolvimento web, sistemas, SaaS, CRM, interfaces, banco de dados, versionamento e publicação.',
      back: 'Voltar ao portfólio',
      statusLabel: 'Status',
      status: 'Cursando',
      startLabel: 'Início',
      start: '2026',
      durationLabel: 'Duração acadêmica',
      duration: '4 semestres',
      subjectsTitle: 'Disciplinas do período',
      subjects: ['Algoritmos e Pensamento Computacional', 'Desenvolvimento Front-End para Web', 'Design Profissional', 'Modelagem de Banco de Dados', 'Meio Ambiente e Cuidados de Saúde'],
      directionTitle: 'Direção profissional',
      directionBody:
        'O objetivo é fortalecer fundamentos de engenharia de software enquanto continuo construindo produtos e soluções digitais na prática.',
    },
  },
  en: {
    meta: {
      title: 'Lucas Nassuato | Full Stack Developer • SaaS, React & Next.js',
      description:
        'Professional portfolio of Lucas Nassuato da Silva: Full Stack Developer working with SaaS, CRM, Next.js, React, TypeScript, UI/UX, integrations, SEO and deployment.',
    },
    nav: [
      ['Work', '#work'],
      ['Services', '#services'],
      ['Stack', '#stack'],
      ['Journey', '#journey'],
      ['Contact', '#contact'],
    ],
    accessibility: {
      skip: 'Skip to content',
      mainNav: 'Main navigation',
      language: 'Select language',
    },
    header: {
      role: 'Full Stack Developer',
      contact: 'Contact me',
    },
    hero: {
      eyebrow: 'Development • Product • Digital experience',
      titleA: 'I turn ideas into',
      titleAccent: 'digital products built to grow.',
      body:
        'I am Lucas Nassuato da Silva, a Full Stack Developer and founder of Nassusinfo. I build websites, web systems, SaaS and CRMs combining engineering, UI/UX, integrations, SEO and deployment.',
      badges: ['Full Stack', 'SaaS & CRM', 'UI/UX', 'Open to projects'],
      primary: 'Explore selected work',
      secondary: 'Visit Nassusinfo',
      github: 'View GitHub',
      imageAlt: 'Lucas Nassuato da Silva — Full Stack Developer',
      imageKicker: 'Nassusinfo Technology Solutions',
      imageTitle: 'Code, product thinking and business awareness.',
      imageBody: 'Responsive digital solutions designed to ship, perform and evolve.',
    },
    metrics: [
      ['Full Stack', 'Frontend, backend, integrations and deployment'],
      ['SaaS & CRM', 'Product, dashboards, authentication and data'],
      ['Mobile-first', 'Experiences designed for small and large screens'],
      ['CI/CD', 'GitHub Actions, Vercel, Render and automation'],
    ],
    strip: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GitHub Actions', 'Vercel', 'UI/UX', 'SEO'],
    work: {
      eyebrow: 'Selected work',
      title: 'Real projects, real decisions and continuous improvement.',
      intro:
        'I present owned products, client work and MVPs without exposing commercial source code, credentials or third-party intellectual property.',
      action: 'Discuss this project',
      items: [
        {
          name: 'Nassus One',
          status: 'Owned product • Evolving',
          category: 'Management platform',
          description: 'A web platform built to centralize Nassusinfo digital operations with responsive navigation, authentication and continuous evolution.',
          impact: 'Product architecture, desktop/mobile UX, versioning, CI/CD, states and ongoing maintenance.',
          stack: ['Product', 'JavaScript', 'UI/UX', 'GitHub Actions', 'Vercel'],
        },
        {
          name: 'Nassus CRM',
          status: 'CRM / SaaS • Evolving',
          category: 'Sales management',
          description: 'A system for organizing leads, clients, metrics and sales routines in a clear and productive interface.',
          impact: 'Dashboards, CRM flows, authentication, data, reusable components and continuous deployment.',
          stack: ['CRM', 'Dashboard', 'Data', 'CI/CD', 'Vercel'],
        },
        {
          name: 'Vetix',
          status: 'SaaS project',
          category: 'Veterinary management',
          description: 'A veterinary SaaS application with a modern frontend, Google authentication and environment configuration.',
          impact: 'React, Vite, Google Identity, deployment, Git and safe version recovery.',
          stack: ['React', 'Vite', 'Google Identity', 'Git', 'Render'],
        },
        {
          name: 'Health Fisio',
          status: 'Client project',
          category: 'Healthcare • Professional website',
          description: 'Institutional website with services, gallery, contact, external booking, WhatsApp and responsive UX.',
          impact: 'Credibility, SEO, content structure, perceived performance and lead conversion.',
          stack: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Mobile UX'],
        },
        {
          name: 'RL Viagens & Turismo',
          status: 'Commercial project',
          category: 'Travel • Digital presence',
          description: 'Travel website with packages, gallery, contact, policies and responsive navigation.',
          impact: 'Information architecture, commercial content, responsive design and full website deployment.',
          stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Web', 'SEO'],
        },
        {
          name: 'BarberControl',
          status: 'MVP / MicroSaaS',
          category: 'Barbershop • Subscription',
          description: 'MVP covering value proposition, subscription plans, payment flow and an initial management structure.',
          impact: 'Digital product thinking, UX, monetization, plan structure and payment integration.',
          stack: ['SaaS', 'UI/UX', 'Cakto', 'Product', 'Web'],
        },
      ],
    },
    services: {
      eyebrow: 'What I deliver',
      title: 'Enough engineering to work. Enough design to persuade.',
      intro: 'I work from diagnosis to launch with clear scope, responsive execution and a foundation that can keep evolving.',
      items: [
        ['01', 'Professional websites', 'Fast, responsive institutional websites with initial SEO and strong commercial presence.', ['Responsive UI', 'SEO', 'WhatsApp', 'Deployment']],
        ['02', 'Landing pages', 'Campaign pages with hierarchy, strong CTAs, speed and conversion focus.', ['Content structure', 'CTA', 'Mobile-first', 'Analytics-ready']],
        ['03', 'Web systems & SaaS', 'Dashboards, CRMs, admin areas, authentication and custom workflows.', ['Flows', 'Dashboard', 'Authentication', 'Integrations']],
        ['04', 'UI/UX & product', 'Redesign, visual architecture and consistent desktop/mobile experiences.', ['Mobile UX', 'Design system', 'Components', 'Accessibility']],
        ['05', 'Integrations & automation', 'APIs, OAuth, payments, forms and WhatsApp to reduce manual work.', ['APIs', 'OAuth', 'Payments', 'Automation']],
        ['06', 'Deployment, SEO & maintenance', 'Versioning, domains, performance, indexing and post-launch evolution.', ['Git', 'Vercel/Render', 'Technical SEO', 'Maintenance']],
      ],
    },
    stack: {
      eyebrow: 'Technical stack',
      title: 'Tools selected to deliver, not just to impress.',
      groups: [
        ['Frontend', ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']],
        ['Backend & data', ['Node.js', 'REST APIs', 'PostgreSQL', 'Supabase', 'Neon', 'Authentication', 'API routes']],
        ['Infrastructure & delivery', ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Netlify', 'CI/CD', 'E2E']],
        ['Product & integrations', ['UI/UX', 'SEO', 'Google OAuth', 'WhatsApp', 'Cakto', 'Responsive Design', 'Automation']],
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'A simple workflow that reduces rework and makes decisions visible.',
      items: [
        ['Discovery', 'Goals, audience, constraints and the real problem before code.'],
        ['Architecture', 'Pages, flows, data and integrations organized before implementation.'],
        ['UI/UX', 'Clear, consistent experiences across desktop and mobile.'],
        ['Development', 'Components, business rules, integrations, states and error handling.'],
        ['Validation', 'Responsiveness, links, accessibility, lint, build and critical paths.'],
        ['Launch', 'Versioning, deployment, domain setup and a maintainable foundation.'],
      ],
    },
    journey: {
      eyebrow: 'Journey',
      title: 'From solving IT problems to building digital products.',
      items: [
        ['Technical foundation', 'Support, hardware, networks and corporate IT', 'My foundation came from technical diagnosis, maintenance, networking, software and supporting real users.'],
        ['Development', 'Websites, interfaces and digital solutions', 'I began turning commercial needs into websites, landing pages, integrations and responsive experiences.'],
        ['Product', 'SaaS, CRMs and owned systems', 'I expanded into authentication, dashboards, data, APIs, payments, CI/CD and production delivery.'],
        ['Today', 'Full Stack + product + business thinking', 'I combine development, UI/UX, SEO and automation to build clear, fast and useful solutions.'],
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Systems Analysis and Development — UNICID',
      body: 'A technology degree in progress, strengthening software, database, frontend and computational thinking fundamentals while I continue building real projects.',
      status: 'In progress • Started in 2026 • 4 semesters',
      action: 'View education details',
    },
    contact: {
      eyebrow: 'Let’s build something useful',
      title: 'Need a website, system or web product with professional execution?',
      body: 'I can help with discovery, development, redesign, integrations or improving an existing codebase.',
      whatsapp: 'Chat on WhatsApp',
      email: 'Send an email',
      github: 'Open GitHub',
      availability: 'Freelance projects • Custom development • Web product improvements',
    },
    footer: {
      tagline: 'Full Stack Developer • Nassusinfo Technology Solutions',
      rights: '© 2026 Lucas Nassuato da Silva. Professional portfolio.',
    },
    mobileDock: {
      work: 'Work',
      contact: 'Contact',
    },
    educationPage: {
      eyebrow: 'Education',
      title: 'Technology Degree in Systems Analysis and Development',
      school: 'UNICID — Universidade Cidade de São Paulo',
      intro: 'Academic foundations applied to hands-on work in web development, systems, SaaS, CRM, interfaces, databases, versioning and deployment.',
      back: 'Back to portfolio',
      statusLabel: 'Status',
      status: 'In progress',
      startLabel: 'Started',
      start: '2026',
      durationLabel: 'Academic duration',
      duration: '4 semesters',
      subjectsTitle: 'Current subjects',
      subjects: ['Algorithms and Computational Thinking', 'Front-End Web Development', 'Professional Design', 'Database Modeling', 'Environment and Health Care'],
      directionTitle: 'Professional direction',
      directionBody: 'The goal is to strengthen software engineering fundamentals while continuing to build real digital products and solutions.',
    },
  },
  es: {
    meta: {
      title: 'Lucas Nassuato | Full Stack Developer • SaaS, React y Next.js',
      description:
        'Portafolio profesional de Lucas Nassuato da Silva: Full Stack Developer con experiencia en SaaS, CRM, Next.js, React, TypeScript, UI/UX, integraciones, SEO y despliegue.',
    },
    nav: [
      ['Proyectos', '#work'],
      ['Servicios', '#services'],
      ['Stack', '#stack'],
      ['Trayectoria', '#journey'],
      ['Contacto', '#contact'],
    ],
    accessibility: {
      skip: 'Saltar al contenido',
      mainNav: 'Navegación principal',
      language: 'Seleccionar idioma',
    },
    header: {
      role: 'Full Stack Developer',
      contact: 'Contactarme',
    },
    hero: {
      eyebrow: 'Desarrollo • Producto • Experiencia digital',
      titleA: 'Transformo ideas en',
      titleAccent: 'productos digitales preparados para crecer.',
      body: 'Soy Lucas Nassuato da Silva, desarrollador Full Stack y creador de Nassusinfo. Desarrollo sitios, sistemas web, SaaS y CRM combinando ingeniería, UI/UX, integraciones, SEO y publicación.',
      badges: ['Full Stack', 'SaaS & CRM', 'UI/UX', 'Disponible para proyectos'],
      primary: 'Ver proyectos',
      secondary: 'Conocer Nassusinfo',
      github: 'Ver GitHub',
      imageAlt: 'Lucas Nassuato da Silva — Full Stack Developer',
      imageKicker: 'Nassusinfo Soluciones Tecnológicas',
      imageTitle: 'Código, producto y visión de negocio.',
      imageBody: 'Soluciones digitales responsivas, publicables y preparadas para evolucionar.',
    },
    metrics: [
      ['Full Stack', 'Frontend, backend, integraciones y despliegue'],
      ['SaaS & CRM', 'Producto, dashboards, autenticación y datos'],
      ['Mobile-first', 'Experiencias pensadas para pantallas pequeñas y grandes'],
      ['CI/CD', 'GitHub Actions, Vercel, Render y automatizaciones'],
    ],
    strip: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GitHub Actions', 'Vercel', 'UI/UX', 'SEO'],
    work: {
      eyebrow: 'Proyectos seleccionados',
      title: 'Proyectos reales, decisiones reales y evolución continua.',
      intro: 'Presento productos propios, trabajos para clientes y MVPs sin exponer código comercial, credenciales o propiedad intelectual de terceros.',
      action: 'Hablar sobre este proyecto',
      items: [
        { name: 'Nassus One', status: 'Producto propio • En evolución', category: 'Plataforma de gestión', description: 'Plataforma web creada para centralizar operaciones digitales de Nassusinfo con navegación responsiva, autenticación y evolución continua.', impact: 'Arquitectura de producto, UX desktop/mobile, versionado, CI/CD, estados y mantenimiento evolutivo.', stack: ['Producto', 'JavaScript', 'UI/UX', 'GitHub Actions', 'Vercel'] },
        { name: 'Nassus CRM', status: 'CRM / SaaS • En evolución', category: 'Gestión comercial', description: 'Sistema para organizar leads, clientes, indicadores y rutinas comerciales en una interfaz clara y productiva.', impact: 'Dashboards, flujos CRM, autenticación, datos, componentes reutilizables y publicación continua.', stack: ['CRM', 'Dashboard', 'Datos', 'CI/CD', 'Vercel'] },
        { name: 'Vetix', status: 'SaaS desarrollado', category: 'Gestión veterinaria', description: 'Aplicación SaaS para la rutina veterinaria con frontend moderno, autenticación Google y configuración de entornos.', impact: 'React, Vite, Google Identity, publicación, Git y recuperación segura de versiones.', stack: ['React', 'Vite', 'Google Identity', 'Git', 'Render'] },
        { name: 'Health Fisio', status: 'Proyecto de cliente', category: 'Salud • Sitio profesional', description: 'Sitio institucional con servicios, galería, contacto, agenda externa, WhatsApp y experiencia responsiva.', impact: 'Credibilidad, SEO, estructura de contenido, rendimiento percibido y conversión de contactos.', stack: ['HTML', 'CSS', 'JavaScript', 'SEO', 'UX Mobile'] },
        { name: 'RL Viagens & Turismo', status: 'Proyecto comercial', category: 'Turismo • Presencia digital', description: 'Experiencia web de turismo con paquetes, galería, contacto, políticas y navegación responsiva.', impact: 'Arquitectura de información, contenido comercial, diseño responsivo y publicación completa.', stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Web', 'SEO'] },
        { name: 'BarberControl', status: 'MVP / MicroSaaS', category: 'Barbería • Suscripción', description: 'MVP con propuesta de valor, planes de suscripción, flujo de pago y estructura inicial de gestión.', impact: 'Producto digital, UX, monetización, estructura de planes e integración de pagos.', stack: ['SaaS', 'UI/UX', 'Cakto', 'Producto', 'Web'] },
      ],
    },
    services: {
      eyebrow: 'Lo que entrego',
      title: 'Ingeniería suficiente para funcionar. Diseño suficiente para convencer.',
      intro: 'Trabajo desde el diagnóstico hasta la publicación, con alcance claro, ejecución responsiva y una base preparada para evolucionar.',
      items: [
        ['01', 'Sitios profesionales', 'Sitios institucionales rápidos, responsivos, con SEO inicial y presencia comercial consistente.', ['UI responsiva', 'SEO', 'WhatsApp', 'Publicación']],
        ['02', 'Landing pages', 'Páginas de campaña con jerarquía, CTA, velocidad y foco en conversión.', ['Estructura de contenido', 'CTA', 'Mobile-first', 'Analytics-ready']],
        ['03', 'Sistemas web & SaaS', 'Dashboards, CRM, áreas administrativas, autenticación y flujos a medida.', ['Flujos', 'Dashboard', 'Autenticación', 'Integraciones']],
        ['04', 'UI/UX & producto', 'Rediseño, arquitectura visual y experiencia consistente en desktop y mobile.', ['UX mobile', 'Design system', 'Componentes', 'Accesibilidad']],
        ['05', 'Integraciones & automatización', 'APIs, OAuth, pagos, formularios y WhatsApp para reducir trabajo manual.', ['APIs', 'OAuth', 'Pagos', 'Automatización']],
        ['06', 'Deploy, SEO & mantenimiento', 'Versionado, dominio, rendimiento, indexación y evolución después del lanzamiento.', ['Git', 'Vercel/Render', 'SEO técnico', 'Mantenimiento']],
      ],
    },
    stack: {
      eyebrow: 'Stack técnica',
      title: 'Herramientas elegidas para entregar, no solo para impresionar.',
      groups: [
        ['Frontend', ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite']],
        ['Backend y datos', ['Node.js', 'APIs REST', 'PostgreSQL', 'Supabase', 'Neon', 'Autenticación', 'Rutas API']],
        ['Infraestructura y entrega', ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Netlify', 'CI/CD', 'E2E']],
        ['Producto e integraciones', ['UI/UX', 'SEO', 'Google OAuth', 'WhatsApp', 'Cakto', 'Responsive Design', 'Automatización']],
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'Un flujo simple para reducir retrabajo y hacer visibles las decisiones.',
      items: [
        ['Diagnóstico', 'Objetivos, público, restricciones y el problema real antes del código.'],
        ['Arquitectura', 'Páginas, flujos, datos e integraciones organizados antes de implementar.'],
        ['UI/UX', 'Experiencia clara y consistente en desktop y mobile.'],
        ['Desarrollo', 'Componentes, reglas, integraciones, estados y tratamiento de errores.'],
        ['Validación', 'Responsividad, enlaces, accesibilidad, lint, build y rutas críticas.'],
        ['Publicación', 'Versionado, deploy, dominio y una base lista para mantenimiento.'],
      ],
    },
    journey: {
      eyebrow: 'Trayectoria',
      title: 'De resolver problemas de TI a construir productos digitales.',
      items: [
        ['Base técnica', 'Soporte, hardware, redes y TI corporativa', 'Mi base nació del diagnóstico técnico, mantenimiento, redes, software y soporte a usuarios reales.'],
        ['Desarrollo', 'Sitios, interfaces y soluciones digitales', 'Pasé a transformar necesidades comerciales en sitios, landing pages, integraciones y experiencias responsivas.'],
        ['Producto', 'SaaS, CRM y sistemas propios', 'Evolucioné hacia autenticación, dashboards, datos, APIs, pagos, CI/CD y publicación.'],
        ['Hoy', 'Full Stack + producto + visión comercial', 'Uno desarrollo, UI/UX, SEO y automatización para crear soluciones claras, rápidas y útiles.'],
      ],
    },
    education: {
      eyebrow: 'Formación académica',
      title: 'Análisis y Desarrollo de Sistemas — UNICID',
      body: 'Carrera tecnológica en curso, fortaleciendo fundamentos de software, bases de datos, frontend y pensamiento computacional mientras continúo desarrollando proyectos reales.',
      status: 'En curso • Inicio en 2026 • 4 semestres',
      action: 'Ver formación en detalle',
    },
    contact: {
      eyebrow: 'Construyamos algo útil',
      title: '¿Necesitas un sitio, sistema o producto web con acabado profesional?',
      body: 'Puedo ayudar con diagnóstico, desarrollo, rediseño, integraciones o evolución de una base existente.',
      whatsapp: 'Hablar por WhatsApp',
      email: 'Enviar correo',
      github: 'Abrir GitHub',
      availability: 'Proyectos freelance • Desarrollo a medida • Mejoras de productos web',
    },
    footer: {
      tagline: 'Full Stack Developer • Nassusinfo Soluciones Tecnológicas',
      rights: '© 2026 Lucas Nassuato da Silva. Portafolio profesional.',
    },
    mobileDock: {
      work: 'Proyectos',
      contact: 'Contacto',
    },
    educationPage: {
      eyebrow: 'Formación académica',
      title: 'Tecnología en Análisis y Desarrollo de Sistemas',
      school: 'UNICID — Universidade Cidade de São Paulo',
      intro: 'Fundamentos académicos aplicados a la práctica en desarrollo web, sistemas, SaaS, CRM, interfaces, bases de datos, versionado y publicación.',
      back: 'Volver al portafolio',
      statusLabel: 'Estado',
      status: 'En curso',
      startLabel: 'Inicio',
      start: '2026',
      durationLabel: 'Duración académica',
      duration: '4 semestres',
      subjectsTitle: 'Asignaturas actuales',
      subjects: ['Algoritmos y Pensamiento Computacional', 'Desarrollo Front-End para Web', 'Diseño Profesional', 'Modelado de Bases de Datos', 'Medio Ambiente y Cuidados de Salud'],
      directionTitle: 'Dirección profesional',
      directionBody: 'El objetivo es fortalecer fundamentos de ingeniería de software mientras continúo construyendo productos y soluciones digitales reales.',
    },
  },
} as const

export type PortfolioContent = (typeof portfolioContent)[Locale]
