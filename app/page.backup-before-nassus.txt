import Image from 'next/image'

const whatsappUrl =
  'https://wa.me/5513991026619?text=Oi%20Lucas%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto.'

const navItems = [
  { label: 'Projetos', href: '#projects' },
  { label: 'Serviços', href: '#services' },
  { label: 'Processo', href: '#process' },
  { label: 'Contato', href: '#contact' },
]

const proofItems = [
  { value: 'Web', label: 'Sites e sistemas responsivos' },
  { value: 'Apps', label: 'Android, iOS e publicação' },
  { value: 'SEO', label: 'Base pronta para Google' },
]

const projects = [
  {
    name: 'Levefy',
    type: 'Projeto publicado',
    desc: 'Aplicação web publicada na Vercel, usada para mostrar interface rápida, responsiva e com acabamento visual moderno.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    link: 'https://levefy-mu.vercel.app/',
    actionLabel: 'Abrir projeto',
    accent: 'blue',
    result: 'Projeto real online, com foco em velocidade e presença digital.',
  },
  {
    name: 'NEXA',
    type: 'Conceito de landing page',
    desc: 'Modelo de landing page para SaaS ou startup de tecnologia, pensado para apresentar oferta, diferenciais e chamada de conversão.',
    stack: ['UI/UX', 'Landing Page', 'Conversão'],
    link: '#contact',
    actionLabel: 'Quero algo similar',
    accent: 'violet',
    result: 'Mostra direção visual premium para produtos digitais.',
  },
  {
    name: 'Pulse CRM',
    type: 'Conceito de sistema web',
    desc: 'Protótipo de dashboard para gestão de clientes, vendas, indicadores e rotinas internas de uma empresa.',
    stack: ['React', 'TypeScript', 'Dashboard'],
    link: '#contact',
    actionLabel: 'Criar meu sistema',
    accent: 'emerald',
    result: 'Demonstra organização visual para sistemas empresariais.',
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
    title: 'Sistemas web',
    desc: 'Painéis, áreas administrativas e ferramentas sob medida para organizar processos do negócio.',
    deliverables: 'Fluxos, telas, autenticação e estrutura escalável.',
  },
  {
    title: 'Aplicativos',
    desc: 'Apps para Android e iOS com experiência limpa, boa navegação e preparação para publicação.',
    deliverables: 'Interface, integração, testes e suporte de envio.',
  },
]

const processSteps = [
  {
    title: 'Diagnóstico',
    desc: 'Entendo objetivo, público, referências e o que precisa acontecer para o projeto gerar valor.',
  },
  {
    title: 'Design e conteúdo',
    desc: 'Organizo a estrutura, deixo a mensagem clara e crio uma experiência bonita em desktop e mobile.',
  },
  {
    title: 'Desenvolvimento',
    desc: 'Construo com código moderno, responsivo, performático e preparado para manutenção.',
  },
  {
    title: 'Publicação',
    desc: 'Valido links, SEO, performance, responsividade e deixo tudo pronto para ir ao ar.',
  },
]

const accentClasses = {
  blue: {
    border: 'border-blue-400/35',
    text: 'text-blue-300',
    button: 'bg-blue-500 hover:bg-blue-600',
  },
  violet: {
    border: 'border-violet-400/35',
    text: 'text-violet-300',
    button: 'bg-violet-500 hover:bg-violet-600',
  },
  emerald: {
    border: 'border-emerald-400/35',
    text: 'text-emerald-300',
    button: 'bg-emerald-500 hover:bg-emerald-600',
  },
}

type Accent = keyof typeof accentClasses

function ProjectPreview({ accent, name }: { accent: Accent; name: string }) {
  const styles = accentClasses[accent]

  return (
    <div
      className={`relative h-52 overflow-hidden rounded-lg border ${styles.border} bg-[#11131a] p-4 sm:h-56`}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className={`text-xs font-semibold ${styles.text}`}>{name}</p>
          <p className="text-[11px] text-zinc-500">Prévia visual</p>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
      </div>

      {name === 'Levefy' && (
        <div className="mt-6 grid grid-cols-[1fr_96px] gap-4 sm:grid-cols-[1fr_120px]">
          <div>
            <h4 className="text-xl font-semibold">Pixel Art</h4>
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              Interface leve, criativa e rápida.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-blue-500 px-3 py-2 text-[10px] font-medium">
                Online
              </span>
              <span className="rounded-md bg-white/10 px-3 py-2 text-[10px]">
                Vercel
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={`h-7 rounded-md ${i % 2 === 0 ? 'bg-blue-500' : 'bg-zinc-700'}`}
              />
            ))}
          </div>
        </div>
      )}

      {name === 'NEXA' && (
        <div className="mt-6 grid grid-cols-[1fr_112px] gap-4 sm:grid-cols-[1fr_140px]">
          <div>
            <h4 className="text-xl font-semibold">SaaS AI</h4>
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              Oferta clara, CTA forte e prova visual.
            </p>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-2 w-2/3 rounded-full bg-violet-500" />
            </div>
          </div>
          <div className="rounded-lg border border-violet-400/25 bg-white/5 p-3">
            <div className="mb-3 h-4 rounded bg-violet-500/50" />
            <div className="mb-3 h-4 w-2/3 rounded bg-violet-500/30" />
            <div className="h-14 rounded-md bg-violet-500/20" />
          </div>
        </div>
      )}

      {name === 'Pulse CRM' && (
        <div className="mt-5 grid grid-cols-[82px_1fr] gap-3 sm:grid-cols-[96px_1fr]">
          <div className="rounded-lg bg-emerald-500/10 p-3">
            {['Dash', 'Clientes', 'Vendas', 'Relat.'].map((item) => (
              <div
                key={item}
                className="mb-2 rounded-md bg-white/10 px-2 py-1 text-[10px] text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-emerald-400/20 bg-white/5 p-2"
              >
                <div className="mb-2 h-3 rounded bg-emerald-500/50" />
                <div className="h-8 rounded bg-emerald-500/20" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function PortfolioHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090d] text-white">
      <div
        className="fixed inset-0 -z-10 bg-[linear-gradient(135deg,#08090d_0%,#10131a_46%,#07110f_100%)]"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-25"
        aria-hidden="true"
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#" className="min-w-0 text-base font-semibold sm:text-lg">
            Lucas <span className="text-blue-300">Nassuato</span>
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 text-sm text-zinc-400 md:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                className="transition hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-blue-100"
          >
            WhatsApp
          </a>
        </div>
        <nav
          aria-label="Navegação mobile"
          className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 pb-3 text-sm text-zinc-300 sm:px-6 md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="shrink-0 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-24">
        <div>
          <p className="mb-5 inline-flex rounded-md border border-blue-400/25 bg-blue-400/10 px-3 py-2 text-xs font-semibold uppercase text-blue-200 sm:text-sm">
            Desenvolvedor Web | Apps | Sistemas
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Sites, apps e sistemas com visual premium e foco em resultado.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            Eu ajudo negócios a saírem do improviso digital com páginas rápidas,
            interfaces bem acabadas e soluções web pensadas para gerar confiança,
            contato e crescimento.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-500 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-950/25 transition hover:bg-blue-600"
            >
              Ver projetos
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 font-semibold text-zinc-100 transition hover:border-white/30 hover:bg-white/5"
            >
              Pedir orçamento
            </a>
          </div>

          <div className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {proofItems.map((item) => (
              <div
                key={item.value}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#11131a] shadow-2xl shadow-black/35">
            <Image
              src="/lucas-premium.png"
              alt="Lucas Nassuato"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-[420px] w-full object-cover object-center sm:h-[520px] lg:h-[620px]"
            />
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm text-zinc-500">Contato direto</p>
              <p className="mt-2 text-lg font-semibold">13 99102-6619</p>
              <p className="text-sm text-zinc-400">Resposta pelo WhatsApp</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm text-zinc-500">Portfólio</p>
              <p className="mt-2 break-all text-lg font-semibold">
                nassusinfo.netlify.app
              </p>
              <p className="text-sm text-zinc-400">Online e responsivo</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-blue-300">
                Projetos em destaque
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Demonstrações claras do que eu posso entregar para sua marca.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-zinc-400">
              Separei projeto publicado e conceitos visuais para mostrar tanto a
              execução técnica quanto a direção de design para novos trabalhos.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => {
              const styles = accentClasses[project.accent]
              return (
                <article
                  key={project.name}
                  className="flex h-full flex-col rounded-lg border border-white/10 bg-[#0d0f15] p-4 transition hover:border-white/25"
                >
                  <ProjectPreview accent={project.accent} name={project.name} />
                  <p className={`mt-5 text-sm font-semibold ${styles.text}`}>
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{project.desc}</p>
                  <p className="mt-4 rounded-md border border-white/10 bg-white/[0.035] p-3 text-sm leading-6 text-zinc-300">
                    {project.result}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-zinc-300"
                      >
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

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-blue-300">
            Serviços
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Desenvolvimento completo para transformar ideia em presença digital.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5 sm:p-6"
            >
              <p className="mb-4 text-sm font-semibold text-blue-300">
                0{index + 1}
              </p>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{service.desc}</p>
              <p className="mt-5 rounded-md bg-[#11131a] p-3 text-sm leading-6 text-zinc-300">
                {service.deliverables}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-[#0d0f15]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-emerald-300">
                Processo
              </p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Projeto bonito, mas também organizado do começo ao fim.
              </h2>
            </div>
            <p className="text-lg leading-8 text-zinc-400">
              A ideia é deixar claro o que será entregue, evitar retrabalho e
              publicar uma solução que funcione bem no celular, no computador e
              nas primeiras buscas do Google.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-sm font-semibold text-emerald-300">
                  Etapa {index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-blue-300">
            Sobre
          </p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Não é só código. É percepção de valor.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
          <p>
            Meu foco é criar interfaces modernas que transmitam confiança,
            sofisticação e profissionalismo logo nos primeiros segundos.
          </p>
          <p>
            Trabalho com uma estética limpa, performance e desenvolvimento web
            moderno para pessoas físicas, pequenos comércios, startups, SaaS e
            empresas que querem sair do visual comum.
          </p>
          <div className="grid gap-3 pt-2 sm:grid-cols-3">
            {['Responsivo', 'Rápido', 'Preparado para SEO'].map((item) => (
              <span
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(16,185,129,0.10),rgba(255,255,255,0.04))] p-6 text-center sm:p-10 md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase text-blue-200">
            Vamos tirar sua ideia do papel
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Precisa de um site, app ou sistema com aparência profissional?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-300">
            Me chama no WhatsApp ou envie um email com sua ideia. Eu te ajudo a
            transformar isso em uma experiência digital bem apresentada.
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

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm leading-6 text-zinc-500">
        © 2026 Lucas Nassuato da Silva. Desenvolvido com Next.js, React e
        Tailwind CSS.
      </footer>
    </main>
  )
}
