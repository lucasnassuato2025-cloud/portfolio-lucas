import Image from 'next/image'

const whatsappUrl =
  'https://wa.me/5513991026619?text=Oi%20Lucas%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.'

const githubUrl = 'https://github.com/lucasnassuato2025-cloud'
const instagramUrl = 'https://www.instagram.com/lucas_nassusinfo/'
const nassusUrl = 'https://www.nassusinfo.com.br/'
const emailUrl = 'mailto:lucasnassuato2025@gmail.com'

const navItems = [
  { label: 'Cases', href: '#cases' },
  { label: 'Stack', href: '#stack' },
  { label: 'Serviços', href: '#services' },
  { label: 'Trajetória', href: '#journey' },
  { label: 'Contato', href: '#contact' },
]

const highlights = [
  { value: 'Full Stack', label: 'produto, interface, integração e deploy' },
  { value: 'SaaS & CRM', label: 'dashboards, fluxos, autenticação e gestão' },
  { value: 'UI/UX', label: 'experiência responsiva com foco comercial' },
  { value: 'Deploy & CI/CD', label: 'GitHub, Vercel, Render e automações' },
]

const cases = [
  {
    name: 'Nassus One',
    status: 'Produto próprio em evolução',
    category: 'Plataforma • Gestão • Produto',
    description:
      'Plataforma web criada para concentrar experiências e operações digitais da Nassusinfo, com foco em navegação responsiva, organização de funcionalidades, autenticação e evolução contínua.',
    impact:
      'Case de arquitetura de produto, UX desktop/mobile, versionamento, deploy, CI/CD, tratamento de estados e manutenção evolutiva.',
    stack: ['JavaScript', 'UI/UX', 'GitHub Actions', 'Vercel', 'E2E'],
    privacy: 'Código comercial protegido em repositório privado',
    link: nassusUrl,
    action: 'Conhecer a Nassusinfo',
    tone: 'blue',
  },
  {
    name: 'Nassus CRM',
    status: 'CRM / SaaS em evolução',
    category: 'CRM • Gestão comercial • SaaS',
    description:
      'Sistema de gestão comercial pensado para organizar leads, clientes, indicadores e rotinas internas em uma interface clara, produtiva e preparada para crescer.',
    impact:
      'Case de dashboards, fluxos de CRM, autenticação, dados, componentes reutilizáveis, testes, GitHub Actions e publicação contínua.',
    stack: ['CRM', 'Dashboard', 'JavaScript', 'GitHub Actions', 'Vercel'],
    privacy: 'Código comercial protegido em repositório privado',
    link: '#contact',
    action: 'Falar sobre o CRM',
    tone: 'emerald',
  },
  {
    name: 'Vetix',
    status: 'SaaS desenvolvido',
    category: 'Veterinário • Gestão • Autenticação',
    description:
      'Aplicação SaaS para rotina veterinária, construída com frontend moderno e integração de autenticação Google para uma experiência de acesso mais profissional.',
    impact:
      'Trabalho prático com React, Vite, identidade Google, configuração de ambientes, publicação e recuperação segura de versões no Git.',
    stack: ['React', 'Vite', 'Google Identity', 'Git', 'Render'],
    privacy: 'Case apresentado sem expor credenciais ou código sensível',
    action: 'Falar sobre este case',
    link: '#contact',
    tone: 'violet',
  },
  {
    name: 'Health Fisio',
    status: 'Projeto de cliente',
    category: 'Saúde • Site profissional • Conversão',
    description:
      'Site profissional para clínica de fisioterapia com estrutura institucional, serviços, galeria, contato, agendamento externo e presença forte de WhatsApp.',
    impact:
      'Foco em credibilidade, SEO, experiência mobile, organização do conteúdo e conversão de visitantes em contatos.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SEO', 'UX Mobile'],
    privacy: 'Código do cliente mantido privado',
    action: 'Solicitar projeto semelhante',
    link: '#contact',
    tone: 'rose',
  },
  {
    name: 'RL Viagens & Turismo',
    status: 'Projeto comercial',
    category: 'Turismo • Site institucional • Conteúdo',
    description:
      'Experiência web para turismo com páginas de pacotes, galeria, contato, políticas, navegação responsiva e estrutura preparada para presença digital.',
    impact:
      'Aplicação prática de arquitetura de informação, conteúdo comercial, responsividade e publicação de site completo.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Web', 'SEO'],
    privacy: 'Projeto comercial protegido',
    action: 'Solicitar projeto semelhante',
    link: '#contact',
    tone: 'amber',
  },
  {
    name: 'BarberControl',
    status: 'MVP / MicroSaaS',
    category: 'Barbearia • Assinatura • Gestão',
    description:
      'MVP de produto para barbearias com conceito de planos, experiência de assinatura e estrutura de gestão pensada para pequenos negócios.',
    impact:
      'Exercício completo de produto digital: proposta de valor, planos, UX, fluxo de pagamento e organização de um MicroSaaS.',
    stack: ['SaaS', 'UI/UX', 'Cakto', 'Produto Digital', 'Web'],
    privacy: 'MVP apresentado como case de produto',
    action: 'Falar sobre produto SaaS',
    link: '#contact',
    tone: 'cyan',
  },
] as const

const services = [
  {
    number: '01',
    title: 'Sites profissionais',
    description:
      'Sites institucionais rápidos, responsivos e com posicionamento visual profissional para empresas, clínicas e prestadores de serviço.',
    deliverables: ['UI responsiva', 'SEO inicial', 'WhatsApp', 'Publicação'],
  },
  {
    number: '02',
    title: 'Landing pages',
    description:
      'Páginas de campanha e conversão com hierarquia de conteúdo, chamadas fortes, integração de contato e foco em resultado.',
    deliverables: ['Copy estrutural', 'CTA', 'Mobile-first', 'Analytics-ready'],
  },
  {
    number: '03',
    title: 'Sistemas web & SaaS',
    description:
      'Dashboards, CRMs, áreas administrativas, autenticação e ferramentas sob medida para organizar processos e transformar ideia em produto.',
    deliverables: ['Fluxos', 'Dashboard', 'Autenticação', 'Integrações'],
  },
  {
    number: '04',
    title: 'UI/UX & produto',
    description:
      'Redesign de interfaces, arquitetura visual, experiência desktop/mobile e evolução de produto com foco em clareza e percepção de valor.',
    deliverables: ['UX mobile', 'Design system', 'Componentes', 'Acessibilidade'],
  },
  {
    number: '05',
    title: 'Integrações & automações',
    description:
      'Conexão com APIs, autenticação, pagamentos, formulários, WhatsApp e serviços externos para reduzir trabalho manual.',
    deliverables: ['APIs', 'OAuth', 'Pagamentos', 'Automação'],
  },
  {
    number: '06',
    title: 'Deploy, SEO & manutenção',
    description:
      'Publicação, domínio, versionamento, ajustes de performance, indexação e manutenção para manter o projeto saudável depois da entrega.',
    deliverables: ['Git', 'Vercel/Render', 'SEO técnico', 'Manutenção'],
  },
]

const stackGroups = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend & dados',
    items: ['Node.js', 'APIs REST', 'Supabase', 'PostgreSQL', 'Neon', 'Rotas de API', 'Autenticação'],
  },
  {
    title: 'Infra & entrega',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Netlify', 'CI/CD', 'E2E'],
  },
  {
    title: 'Produto & integrações',
    items: ['UI/UX', 'SEO', 'Google OAuth', 'WhatsApp', 'Cakto', 'Ollama', 'Responsive Design'],
  },
]

const journey = [
  {
    label: 'Base técnica',
    title: 'Suporte, hardware, redes e ambiente corporativo',
    description:
      'Minha base em TI veio do suporte técnico: diagnóstico, manutenção, redes, software, atendimento a usuários e resolução de problemas reais. Essa experiência influencia a forma como desenvolvo hoje: pensando no usuário e na manutenção.',
  },
  {
    label: 'Desenvolvimento',
    title: 'Sites, interfaces e soluções digitais',
    description:
      'Passei a transformar demandas comerciais em sites, landing pages, identidades digitais, integrações e experiências responsivas para diferentes nichos.',
  },
  {
    label: 'Produto',
    title: 'SaaS, CRMs e sistemas próprios',
    description:
      'Evoluí para produtos mais completos, trabalhando com autenticação, dashboards, dados, APIs, pagamentos, CI/CD, deploy e experiência desktop/mobile.',
  },
  {
    label: 'Hoje',
    title: 'Full Stack + produto + visão comercial',
    description:
      'Uno desenvolvimento, UI/UX, SEO, automação e entendimento de negócio para entregar projetos que não ficam apenas bonitos: precisam ser claros, rápidos e úteis.',
  },
]

const additionalWork = [
  'A.P.A.A.G. — arquitetura de gestão clínica e portais',
  'AutisControl — prototipação de gestão para contexto TEA',
  'PayJoy — páginas e materiais comerciais digitais',
  'Sites para saúde, arquitetura, engenharia e comércio local',
  'Automação de contato e atendimento via WhatsApp',
  'Criação de identidade digital, logos, banners e materiais web',
  'Configuração de deploy, domínio, OAuth e ambientes',
  'Versionamento, recuperação de commits e manutenção de projetos Git',
]

const process = [
  ['Diagnóstico', 'Entendo objetivo, público, regras do negócio e o que realmente precisa ser resolvido.'],
  ['Arquitetura', 'Organizo páginas, fluxos, dados e integrações antes de sair codificando.'],
  ['UI/UX', 'Desenho uma experiência clara, responsiva e consistente em desktop e mobile.'],
  ['Desenvolvimento', 'Implemento componentes, regras, integrações e tratamento de estados e erros.'],
  ['Validação', 'Reviso responsividade, navegação, links, acessibilidade, build e pontos críticos.'],
  ['Publicação', 'Versiono, publico, configuro domínio/ambiente e deixo a base pronta para evolução.'],
]

const toneClasses = {
  blue: 'border-blue-400/25 bg-blue-400/[0.07] text-blue-200',
  emerald: 'border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-200',
  violet: 'border-violet-400/25 bg-violet-400/[0.07] text-violet-200',
  rose: 'border-rose-400/25 bg-rose-400/[0.07] text-rose-200',
  amber: 'border-amber-400/25 bg-amber-400/[0.07] text-amber-200',
  cyan: 'border-cyan-400/25 bg-cyan-400/[0.07] text-cyan-200',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lucas Nassuato da Silva',
  jobTitle: 'Full Stack Developer',
  url: 'https://portfolio-lucas.vercel.app',
  sameAs: [githubUrl, instagramUrl, nassusUrl],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'SaaS',
    'CRM',
    'UI/UX',
    'SEO',
    'Web Development',
  ],
}

export default function PortfolioHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_82%_15%,rgba(14,165,233,0.12),transparent_25%),radial-gradient(circle_at_55%_85%,rgba(16,185,129,0.08),transparent_32%),linear-gradient(180deg,#07090d_0%,#0b0e14_50%,#07090d_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-bold tracking-tight sm:text-lg">
            Lucas <span className="text-blue-300">Nassuato</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-400 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-lg border border-white/12 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-white/5 sm:inline-flex"
            >
              GitHub
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-3 py-2 text-xs font-bold text-black transition hover:bg-blue-100 sm:px-4"
            >
              Vamos conversar
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            {['Full Stack Developer', 'SaaS & CRM', 'UI/UX', 'Disponível para projetos'].map((item) => (
              <span key={item} className="rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-3 py-1.5 text-xs font-semibold text-blue-100">
                {item}
              </span>
            ))}
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Desenvolvimento • Produto • Presença digital
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Eu construo produtos digitais do <span className="text-blue-300">briefing ao deploy.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
            Sou Lucas Nassuato da Silva, desenvolvedor Full Stack e criador da Nassusinfo. Trabalho com sites profissionais, sistemas web, SaaS, CRMs, interfaces responsivas, integrações, SEO e publicação — sempre conectando tecnologia com necessidade de negócio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#cases"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-bold transition hover:bg-blue-600"
            >
              Ver meus principais cases
            </a>
            <a
              href={nassusUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Conhecer a Nassusinfo
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              GitHub profissional
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.value} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <p className="font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10141d] p-3 shadow-2xl shadow-black/40">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/lucas-premium.png"
                alt="Lucas Nassuato da Silva — Desenvolvedor Full Stack"
                width={1448}
                height={1086}
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="h-[360px] w-full object-cover object-[50%_34%] sm:h-[500px] lg:h-[610px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-5 pt-24 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Nassusinfo Soluções Tecnológicas</p>
                <p className="mt-2 text-xl font-bold sm:text-2xl">Full Stack • Web • Sistemas • Produto</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">Projetos remotos, desenvolvimento sob medida e evolução contínua.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:px-6 lg:px-8">
          {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GitHub Actions', 'Vercel', 'UI/UX', 'SEO'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Cases selecionados</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Experiência construída em projetos reais.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 lg:justify-self-end lg:text-lg">
            Aqui eu separo claramente produto publicado, MVP, projeto de cliente e protótipo. O objetivo é mostrar o que eu realmente pratiquei sem expor código comercial ou informações confidenciais.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {cases.map((project) => (
            <article key={project.name} className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#0d1118] p-5 transition hover:-translate-y-0.5 hover:border-white/20 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={`rounded-full border px-3 py-1.5 text-xs font-bold ${toneClasses[project.tone]}`}>
                  {project.status}
                </span>
                <span className="text-xs font-semibold text-zinc-500">{project.category}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold sm:text-3xl">{project.name}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.025] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">O que este case demonstra</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{project.impact}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs font-semibold text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-6 text-zinc-500">🔒 {project.privacy}</p>
              <a
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-blue-100"
              >
                {project.action}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="border-y border-white/10 bg-[#0b0e14]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Stack & engenharia</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Tecnologia escolhida para resolver, não para enfeitar.</h2>
            <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
              Trabalho com ferramentas modernas, mas minha prioridade é manter a solução compreensível, responsiva, publicável e preparada para manutenção.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stackGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs font-semibold text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-10 max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">O que eu entrego</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Do site institucional ao sistema que organiza o negócio.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.028] p-5 sm:p-6">
              <p className="text-sm font-bold text-blue-300">{service.number}</p>
              <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <span key={item} className="rounded-md bg-white/[0.055] px-2.5 py-1.5 text-xs font-semibold text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="border-y border-white/10 bg-[#0b0e14]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Trajetória</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Minha experiência não começou no código.</h2>
            </div>
            <p className="text-base leading-8 text-zinc-400 sm:text-lg">
              Suporte e infraestrutura me ensinaram diagnóstico e responsabilidade. Desenvolvimento adicionou produto, interface, automação e escala.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {journey.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-sm font-bold text-cyan-200">{index + 1}</span>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{item.label}</p>
                </div>
                <h3 className="mt-5 text-xl font-bold sm:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">Também faz parte da jornada</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Projetos, protótipos e problemas diferentes.</h2>
            <p className="mt-5 leading-8 text-zinc-400">
              Nem todo trabalho precisa virar um repositório público. Parte importante da experiência está em prototipar, integrar, recuperar, testar e evoluir soluções.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {additionalWork.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold leading-6 text-zinc-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-[#0b0e14]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">Como eu trabalho</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Processo simples, entrega organizada.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map(([title, description], index) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-bold text-emerald-300">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.14),rgba(14,165,233,0.05),rgba(16,185,129,0.05))] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">Segurança & confidencialidade</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Portfólio público. Código comercial protegido.</h2>
            </div>
            <div className="space-y-4 text-sm leading-7 text-zinc-300 sm:text-base">
              <p>
                Projetos de clientes, sistemas internos, CRMs e produtos comerciais são mantidos em repositórios privados. O GitHub público mostra minha capacidade técnica sem entregar propriedade intelectual de terceiros.
              </p>
              <p>
                Variáveis de ambiente, tokens, credenciais e integrações sensíveis ficam fora do código público. O objetivo é demonstrar engenharia com responsabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-center sm:p-10 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Disponível para novos projetos</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Precisa de alguém que entenda código, interface e o lado do negócio?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Posso atuar em sites, landing pages, sistemas, SaaS, melhorias de UI/UX, integrações, manutenção e evolução de produtos web.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-500 px-6 py-3 font-bold transition hover:bg-blue-600">
              Chamar no WhatsApp
            </a>
            <a href={emailUrl} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5">
              Enviar e-mail
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5">
              Instagram
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/5">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
          <p>© 2026 Lucas Nassuato da Silva. Full Stack Developer.</p>
          <p>Next.js • React • TypeScript • Tailwind CSS</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#07090d]/95 p-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-md gap-2">
          <a href="#cases" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-white/12 text-sm font-bold">Cases</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-blue-500 text-sm font-bold">WhatsApp</a>
        </div>
      </div>
    </main>
  )
}
