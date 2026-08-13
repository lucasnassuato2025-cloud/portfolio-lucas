import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formação Acadêmica | Análise e Desenvolvimento de Sistemas',
  description:
    'Formação acadêmica de Lucas Nassuato da Silva: Superior de Tecnologia em Análise e Desenvolvimento de Sistemas na UNICID, em andamento.',
  alternates: {
    canonical: '/formacao',
  },
}

const subjects = [
  'Algoritmos e Pensamento Computacional',
  'Desenvolvimento Front-End para Web',
  'Design Profissional',
  'Modelagem de Banco de Dados',
  'Meio Ambiente e Cuidados de Saúde',
]

export default function FormacaoPage() {
  return (
    <main className="min-h-screen bg-[#07090d] px-4 py-10 text-white sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-white/5 hover:text-white"
        >
          ← Voltar ao portfólio
        </a>

        <section className="mt-8 overflow-hidden rounded-3xl border border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(14,165,233,0.06),rgba(16,185,129,0.05))] p-6 sm:p-10 lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
            Formação acadêmica
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl">
            Superior de Tecnologia em Análise e Desenvolvimento de Sistemas
          </h1>
          <p className="mt-5 text-lg font-semibold text-zinc-200">
            UNICID — Universidade Cidade de São Paulo
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Status</p>
              <p className="mt-2 text-xl font-bold text-emerald-300">Cursando</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Início</p>
              <p className="mt-2 text-xl font-bold">2026</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Duração acadêmica</p>
              <p className="mt-2 text-xl font-bold">4 semestres</p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Graduação + prática
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Conhecimento acadêmico aplicado em projetos reais.
            </h2>
            <p className="mt-4 leading-8 text-zinc-400">
              A graduação complementa minha experiência prática com desenvolvimento web, sistemas, SaaS, CRM, interfaces, banco de dados, versionamento e publicação de aplicações.
            </p>
            <p className="mt-4 leading-8 text-zinc-400">
              O objetivo é fortalecer fundamentos de engenharia de software enquanto continuo construindo produtos e soluções digitais na prática.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-300">
              Disciplinas do período
            </p>
            <div className="mt-5 grid gap-3">
              {subjects.map((subject, index) => (
                <div
                  key={subject}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-black/15 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/[0.08] text-xs font-bold text-violet-200">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1 text-sm font-semibold leading-6 text-zinc-300 sm:text-base">
                    {subject}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-[#0b0e14] p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
            Direção profissional
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Desenvolvimento Full Stack, produtos web e sistemas.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
            Minha formação acadêmica está diretamente alinhada com a atuação profissional apresentada neste portfólio: desenvolvimento de software, front-end, bancos de dados, produto digital, integrações e evolução de sistemas web.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/#cases"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold transition hover:bg-blue-600"
            >
              Ver meus cases
            </a>
            <a
              href="/#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
            >
              Entrar em contato
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
