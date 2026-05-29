import Image from 'next/image'

const whatsappUrl =
  'https://wa.me/5513991026619?text=Oi%20Lucas%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.'

const navItems = [
  { label: 'Projetos', href: '#projects' },
  { label: 'Serviços', href: '#services' },
  { label: 'Processo', href: '#process' },
  { label: 'Contato', href: '#contact' },
]

const mobileHighlights = [
  'Dev Fullstack',
  'Web Design',
  'UI/UX',
  'Performance Digital',
]

const proofItems = [
  { value: 'Fullstack', label: 'Do design ao código publicado' },
  { value: 'UI/UX', label: 'Interfaces limpas e profissionais' },
  { value: 'SEO', label: 'Base técnica para crescer no Google' },
]

const projects = [
  {
    name: 'Levefy',
    type: 'Projeto publicado',
    desc: 'Aplicação web publicada na Vercel, criada para mostrar interface rápida, responsiva e com acabamento visual moderno.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    link: 'https://levefy-mu.vercel.app/',
    actionLabel: 'Abrir projeto',
    accent: 'blue',
    result: 'Projeto real online, com foco em velocidade, presença digital e experiência mobile.',
  },
  {
    name: 'Landing Premium',
    type: 'Direção visual',
    desc: 'Estrutura de página para apresentar oferta, autoridade, prova visual e chamada forte para contato.',
    stack: ['Web Design', 'Copy', 'Conversão'],
    link: '#contact',
    actionLabel: 'Quero uma landing',
    accent: 'amber',
    result: 'Modelo pensado para campanhas, WhatsApp e presença profissional.',
  },
  {
    name: 'Sistema Web',
    type: 'Produto digital',
    desc: 'Conceito de painel para organizar clientes, indicadores e rotinas internas com clareza e performance.',
    stack: ['React', 'TypeScript', 'Dashboard'],
    link: '#contact',
    actionLabel: 'Criar meu sistema',
    accent: 'emerald',
    result: 'Demonstra organização visual para sistemas empresariais e ferramentas sob medida.',
  },
] as const

const services = [
  {
    title: 'Sites profissionais',
    desc: 'Páginas institucionais rápidas, responsivas e com visual confiável para apresentar sua marca.',
    deliverables: 'Layout, código, SEO inicial e publicação.',
  },
  {
    title: 'Landing pages',
    desc: 'Páginas focadas em campanha, captação de leads, WhatsApp e apresentação de produto ou serviço.',
    deliverables: 'Copy, seções de venda, CTA e analytics pronto.',
  },
  {
    title: 'UI/UX e Web Design',
    desc: 'Interfaces modernas, limpas e pensadas para gerar confiança nos primeiros segundos.',
    deliverables: 'Hierarquia visual, responsividade e experiência mobile.',
  },
  {
    title: 'Sistemas web',
    desc: 'Painéis, áreas administrativas e ferramentas sob medida para organizar processos do negócio.',
    deliverables: 'Fluxos, telas, autenticação e estrutura escalável.',
  },
]

const processSteps = [
  {
    title: 'Diagnóstico',
    desc: 'Entendo objetivo, público, referências e o que precisa acontecer para o projeto gerar valor.',
  },
  {
    title: 'Design',
    desc: 'Organizo a estrutura, deixo a mensagem clara e crio uma experiência bonita em desktop e mobile.',
  },
  {
    title: 'Desenvolvimento',
    desc: 'Construo com código moderno, responsivo, performático e preparado para manutenção.',
  },
  {
    title: 'Publicação',
    desc: 'Valido links, SEO, performance e responsividade antes de colocar tudo no ar.',
  },
]

const accentClasses = {
  blue: {
    border: 'border-blue-400/35',
    text: 'text-blue-300',
    button: 'bg-blue-500 hover:bg-blue-600',
    panel: 'from-blue-500/28 to-cyan-400/8',
  },
  amber: {
    border: 'border-amber-300/35',
    text: 'text-amber-200',
    button: 'bg-amber-400 text-black hover:bg-amber-300',
    panel: 'from-amber-300/24 to-rose-400/8',
  },
  emerald: {
    border: 'border-emerald-400/35',
    text: 'text-emerald-300',
    button: 'bg-emerald-500 hover:bg-emerald-600',
    panel: 'from-emerald-400/24 to-teal-300/8',
  },
}

type Accent = keyof typeof accentClasses

function ProjectPreview({ accent, name }: { accent: Accent; name: string }) {
  const styles = accentClasses[accent]

  return (
    <div
      className={`relative min-h-40 overflow-hidden rounded-lg border ${styles.border} bg-gradient-to-br ${styles.panel} p-4`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div>
          <p className={`text-xs font-semibold ${styles.text}`}>{name}</p>
          <p className="text-[11px] text-zinc-400">Prévia visual</p>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[1fr_92px] gap-4">
        <div>
          <div className="mb-3 h-4 w-24 rounded bg-white/40" />
          <div className="mb-2 h-3 w-full rounded bg-white/20" />
          <div className="h-3 w-2/3 rounded bg-white/15" />
          <div className="mt-5 flex gap-2">
            <span className="h-8 w-20 rounded-md bg-white text-[0px]" />
            <span className="h-8 w-12 rounded-md border border-white/20" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`h-6 rounded-md ${i % 2 === 0 ? 'bg-white/45' : 'bg-white/12'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PortfolioHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07080b] pb-24 text-white lg:pb-0">
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_75%_10%,rgba(245,158,11,0.12),transparent_28%),linear-gradient(135deg,#07080b_0%,#111318_50%,#07110f_100%)]"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07080b]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:py-4">
          <a href="#" className="min-w-0 truncate text-sm font-semibold sm:text-lg">
            Lucas <span className="text-blue-300">Nassuato</span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 text-sm text-zinc-400 lg:flex"
          >
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-blue-100 sm:inline-flex sm:px-4 sm:text-sm"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-7xl items-center gap-9 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-20 lg:pt-24">
        <div className="order-2 w-full max-w-[22rem] min-w-0 sm:max-w-none lg:order-1">
          <p className="mb-4 inline-flex rounded-md border border-blue-400/25 bg-blue-400/10 px-3 py-2 text-[11px] font-semibold uppercase text-blue-200 sm:text-sm">
            Dev Fullstack | Web Design | UI/UX
          </p>

          <h1 className="max-w-[22rem] break-words text-[2rem] font-semibold leading-tight sm:max-w-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Lucas Nassuato da Silva
          </h1>

          <p className="mt-4 max-w-[22rem] text-base leading-7 text-zinc-300 sm:max-w-2xl sm:text-lg sm:leading-8">
            Desenvolvo sites modernos, interfaces premium e experiências digitais rápidas para marcas que querem parecer profissionais no primeiro clique.
          </p>

          <div className="mt-6 flex max-w-[22rem] flex-wrap gap-2">
            {mobileHighlights.map((item) => (
              <span
                key={item}
                className="min-w-0 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-zinc-200 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-500 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-950/25 transition hover:bg-blue-600"
            >
              Ver portfólio
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 font-semibold text-zinc-100 transition hover:border-white/30 hover:bg-white/5 sm:inline-flex"
            >
              Falar comigo
            </a>
          </div>

          <div className="mt-8 hidden gap-3 border-t border-white/10 pt-5 sm:grid sm:grid-cols-3 lg:mt-10 lg:pt-6">
            {proofItems.map((item) => (
              <div key={item.value} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xl font-semibold sm:text-2xl">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <div className="mx-auto max-w-[220px] overflow-hidden rounded-lg border border-white/10 bg-[#11131a] shadow-2xl shadow-black/35 sm:max-w-md lg:max-w-none">
            <Image
              src="/lucas-premium.png"
              alt="Lucas Nassuato da Silva"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1024px) 46vw, (min-width: 640px) 420px, 290px"
              className="h-[260px] w-full object-cover object-[50%_34%] sm:h-[480px] lg:h-[620px]"
            />
          </div>

          <div className="mx-auto mt-4 hidden max-w-md gap-3 sm:grid sm:grid-cols-2 lg:max-w-none">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm text-zinc-500">Contato direto</p>
              <p className="mt-2 text-lg font-semibold">13 99102-6619</p>
              <p className="text-sm text-zinc-400">Resposta pelo WhatsApp</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm text-zinc-500">Foco</p>
              <p className="mt-2 text-lg font-semibold">Sites e interfaces</p>
              <p className="text-sm text-zinc-400">Visual premium e performance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] lg:hidden">
        <div className="mx-auto max-w-md px-4 py-7">
          <p className="mb-2 text-xs font-semibold uppercase text-blue-300">Projeto em prova</p>
          <h2 className="text-2xl font-semibold">Levefy publicado na Vercel</h2>
          <p className="mt-3 leading-7 text-zinc-400">
            Um projeto real online para mostrar velocidade, responsividade e cuidado visual no mobile.
          </p>
          <a
            href="https://levefy-mu.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black"
          >
            Abrir Levefy
          </a>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 bg-white/[0.025] lg:border-y">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end lg:mb-10">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-blue-300">Projetos em destaque</p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Trabalhos e conceitos para mostrar meu padrão de entrega.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-zinc-400">
              Projeto publicado, direção visual e estrutura de sistema para mostrar design, código e pensamento de produto.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
            {projects.map((project) => {
              const styles = accentClasses[project.accent]
              return (
                <article
                  key={project.name}
                  className="flex h-full flex-col rounded-lg border border-white/10 bg-[#0d0f15] p-4 transition hover:border-white/25"
                >
                  <ProjectPreview accent={project.accent} name={project.name} />
                  <p className={`mt-5 text-sm font-semibold ${styles.text}`}>{project.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{project.desc}</p>
                  <p className="mt-4 rounded-md border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-zinc-300">
                    {project.result}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                    className={`mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-white transition ${styles.button}`}
                  >
                    {project.actionLabel}
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-3xl lg:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase text-blue-300">Serviços</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Desenvolvimento completo para transformar ideia em presença digital.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:gap-4">
          {services.map((service, index) => (
            <article key={service.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <p className="mb-4 text-sm font-semibold text-blue-300">0{index + 1}</p>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.desc}</p>
              <p className="mt-5 rounded-md bg-[#11131a] p-3 text-sm leading-6 text-zinc-300">{service.deliverables}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-[#0d0f15]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-8 grid gap-5 lg:mb-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-emerald-300">Processo</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Bonito no visual, organizado na entrega.
              </h2>
            </div>
            <p className="text-base leading-8 text-zinc-400 sm:text-lg">
              A ideia é deixar claro o que será entregue, evitar retrabalho e publicar uma solução que funcione bem no celular e no computador.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <p className="text-sm font-semibold text-emerald-300">Etapa {index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-blue-300">Sobre</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Não é só código. É percepção de valor.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
          <p>
            Meu foco é criar interfaces modernas que transmitam confiança, sofisticação e profissionalismo logo nos primeiros segundos.
          </p>
          <p>
            Trabalho com estética limpa, performance e desenvolvimento web moderno para pessoas, pequenos negócios e empresas que querem sair do visual comum.
          </p>
          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {['Responsivo', 'Rápido', 'Preparado para SEO'].map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-zinc-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 pt-2 sm:px-6">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(16,185,129,0.10),rgba(245,158,11,0.08))] p-6 text-center sm:p-10 md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase text-blue-200">Vamos tirar sua ideia do papel</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Precisa de um site, interface ou sistema com aparência profissional?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-300">
            Me chama no WhatsApp ou envie um email com sua ideia. Eu te ajudo a transformar isso em uma experiência digital bem apresentada.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-blue-100"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="mailto:lucasnassuato2025@gmail.com"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              <span className="break-all">lucasnassuato2025@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 overflow-hidden border-t border-white/10 bg-[#07080b]/95 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="flex w-full max-w-[22rem] gap-2">
          <a
            href="#projects"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-white/10 px-4 text-sm font-semibold text-white"
          >
            Projetos
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm leading-6 text-zinc-500">
        © 2026 Lucas Nassuato da Silva. Desenvolvido com Next.js, React e Tailwind CSS.
      </footer>
    </main>
  )
}





