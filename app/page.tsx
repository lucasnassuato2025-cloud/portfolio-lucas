'use client'

const projects = [
  {
    name: 'Levefy',
    type: 'Projeto desenvolvido',
    desc: 'Aplicação web moderna publicada na Vercel, criada para entregar uma experiência digital leve, rápida e intuitiva.',
    stack: ['Next.js', 'React', 'Tailwind', 'Vercel'],
    link: 'https://levefy-mu.vercel.app/',
    color: 'blue',
  },
  {
    name: 'NEXA',
    type: 'Landing Page SaaS',
    desc: 'Conceito de landing page futurista para startup de inteligência artificial, com foco em conversão, design premium e performance.',
    stack: ['Next.js', 'Tailwind', 'UI/UX'],
    link: '#contact',
    color: 'purple',
  },
  {
    name: 'Pulse CRM',
    type: 'Sistema Web',
    desc: 'Conceito de dashboard moderno para gestão de clientes, métricas, vendas e automações comerciais.',
    stack: ['React', 'TypeScript', 'Dashboard'],
    link: '#contact',
    color: 'green',
  },
]

const services = [
  'Portfólios premium',
  'Landing pages modernas',
  'Apps para Play Store e App Store',
  'Sistemas web personalizados',
  'Sites para pequenos negócios',
  'Projetos empresariais sob medida',
]

function ProjectPreview({ color, name }: { color: string; name: string }) {
  const isPurple = color === 'purple'
  const isGreen = color === 'green'
  const accent = isPurple ? 'bg-purple-500' : isGreen ? 'bg-emerald-500' : 'bg-blue-500'
  const border = isPurple ? 'border-purple-500/40' : isGreen ? 'border-emerald-500/40' : 'border-blue-500/40'
  const text = isPurple ? 'text-purple-300' : isGreen ? 'text-emerald-300' : 'text-blue-300'

  return (
    <div className={`relative h-56 overflow-hidden rounded-[24px] border ${border} bg-[#070B16] p-5`}>
      <div className={`absolute -right-16 -top-20 h-56 w-56 rounded-full ${accent} opacity-30 blur-2xl`} />
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <p className={`text-xs font-semibold ${text}`}>{name}</p>
          <p className="text-[10px] text-slate-500">Preview do projeto</p>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
        </div>
      </div>

      {name === 'Levefy' && (
        <div className="relative z-10 mt-7 grid grid-cols-[1fr_120px] gap-5">
          <div>
            <h4 className="text-2xl font-bold">Pixel Art</h4>
            <p className="mt-2 text-xs leading-5 text-slate-400">Interface criativa, leve e moderna.</p>
            <div className="mt-5 flex gap-2">
              <span className="rounded-lg bg-blue-500 px-3 py-2 text-[10px]">Ver online</span>
              <span className="rounded-lg bg-white/10 px-3 py-2 text-[10px]">Vercel</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className={`h-8 rounded-md ${i % 2 === 0 ? 'bg-blue-500' : 'bg-slate-700'}`} />
            ))}
          </div>
        </div>
      )}

      {name === 'NEXA' && (
        <div className="relative z-10 mt-6 grid grid-cols-[1fr_160px] gap-5">
          <div>
            <h4 className="text-2xl font-bold">SaaS AI</h4>
            <p className="mt-2 text-xs leading-5 text-slate-400">Landing page para startup futurista.</p>
            <div className="mt-5 h-2 w-full rounded-full bg-white/10">
              <div className="h-2 w-2/3 rounded-full bg-purple-500" />
            </div>
          </div>
          <div className="rounded-2xl border border-purple-500/30 bg-white/5 p-4">
            <div className="mb-3 h-4 rounded bg-purple-500/50" />
            <div className="mb-3 h-4 w-2/3 rounded bg-purple-500/30" />
            <div className="h-16 rounded-xl bg-purple-500/20" />
          </div>
        </div>
      )}

      {name === 'Pulse CRM' && (
        <div className="relative z-10 mt-5 grid grid-cols-[90px_1fr] gap-4">
          <div className="rounded-2xl bg-emerald-500/10 p-3">
            {['Dash', 'Clientes', 'Vendas', 'Relat.'].map((item) => (
              <div key={item} className="mb-2 rounded-lg bg-white/10 px-2 py-1 text-[10px] text-slate-300">{item}</div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-emerald-500/20 bg-white/5 p-3">
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
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(96,165,250,0.08),transparent_30%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-30" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Lucas <span className="text-blue-400">Nassuato</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#projects">Projetos</a>
            <a className="transition hover:text-white" href="#services">Serviços</a>
            <a className="transition hover:text-white" href="#about">Sobre</a>
            <a className="transition hover:text-white" href="#contact">Contato</a>
          </nav>

          <a
            href="https://wa.me/5513991026619"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-blue-100"
          >
            Vamos conversar
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
        <div>
          <div className="mb-7 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-300">
            Desenvolvedor Web • Apps • Sistemas
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">
            Construindo experiências digitais premium para marcas modernas.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Desenvolvo sites profissionais, aplicativos para Android e iOS, sistemas web personalizados e soluções digitais modernas para empresas, startups, pequenos negócios e marcas que querem crescer no digital.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-2xl bg-[#3B82F6] px-7 py-4 font-medium shadow-2xl shadow-blue-500/25 transition hover:bg-blue-600">
              Ver projetos
            </a>
            <a href="https://wa.me/5513991026619" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 px-7 py-4 font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5">
              Chamar no WhatsApp
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">Premium</p>
              <p className="mt-1 text-sm text-slate-500">Design visual</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Fast</p>
              <p className="mt-1 text-sm text-slate-500">Performance</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Clean</p>
              <p className="mt-1 text-sm text-slate-500">Código moderno</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="relative rounded-[36px] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#070B16]">
              <img
                src="/lucas-premium.png"
                alt="Lucas Nassuato"
                className="h-[620px] w-full object-cover object-center"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-500">Contato</p>
                <p className="mt-3 text-lg font-medium">13 99102-6619</p>
                <p className="text-sm text-slate-400">WhatsApp</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm text-slate-500">Site</p>
                <p className="mt-3 text-lg font-medium">nassusinfo.netlify.app</p>
                <p className="text-sm text-slate-400">Portfólio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-blue-400">Projetos em destaque</p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
              Trabalhos criados para mostrar design, tecnologia e valor de negócio.
            </h2>
          </div>
          <p className="max-w-sm text-slate-400">
            Projetos reais e conceitos premium usados para demonstrar qualidade visual e técnica.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const bg = project.color === 'purple' ? 'bg-purple-500 hover:bg-purple-600' : project.color === 'green' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-blue-500 hover:bg-blue-600'
            const text = project.color === 'purple' ? 'text-purple-300' : project.color === 'green' ? 'text-emerald-300' : 'text-blue-300'
            return (
              <article key={project.name} className="group rounded-[32px] border border-white/10 bg-white/[0.035] p-5 transition hover:border-blue-400/30 hover:bg-white/[0.06]">
                <ProjectPreview color={project.color} name={project.name} />
                <p className={`mt-6 text-sm ${text}`}>{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 min-h-24 leading-7 text-slate-400">{project.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className={`mt-6 inline-flex w-full justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white transition ${bg}`}
                >
                  Ver projeto online
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.035] p-8 md:p-12">
          <p className="mb-3 text-blue-400">Serviços</p>
          <h2 className="mb-10 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Desenvolvimento de sites, aplicativos e sistemas modernos.
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={service} className="rounded-3xl border border-white/10 bg-[#050816] p-6">
                <p className="mb-4 text-sm text-blue-300">0{index + 1}</p>
                <h3 className="text-2xl font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-blue-400">Sobre</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Não é só código. É percepção de valor.</h2>
        </div>
        <div className="text-lg leading-9 text-slate-400">
          <p>
            Meu foco é criar interfaces modernas que transmitam confiança, sofisticação e profissionalismo. Trabalho com uma estética clean e futurista, unindo design premium, performance e desenvolvimento web moderno.
          </p>
          <p className="mt-6">
            Ideal para pessoas físicas, pequenos comércios, startups, SaaS, empresas premium e marcas que querem sair do visual comum e construir uma presença digital mais forte.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 pt-16">
        <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-gradient-to-b from-blue-500/15 to-white/[0.03] p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.25),transparent_45%)]" />
          <div className="relative">
            <p className="mb-4 text-blue-300">Vamos tirar sua ideia do papel</p>
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              Precisa de um site, app ou sistema com cara premium?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Entre em contato e vamos construir uma experiência digital moderna para sua marca.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/5513991026619" target="_blank" rel="noreferrer" className="inline-flex rounded-2xl bg-white px-8 py-4 font-medium text-black transition hover:bg-blue-100">
                WhatsApp
              </a>
              <a href="mailto:lucasnassuato2025@gmail.com" className="inline-flex rounded-2xl border border-white/10 px-8 py-4 font-medium text-white transition hover:bg-white/5">
                lucasnassuato2025@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Lucas Nassuato da Silva. Desenvolvido com Next.js e Tailwind CSS.
      </footer>
    </main>
  )
}
