const linkedinUrl = 'https://www.linkedin.com/in/lucas-nassuato-da-silva-854882372/'

export function LinkedInLink() {
  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="me noreferrer"
      aria-label="LinkedIn — Lucas Nassuato da Silva"
      className="fixed bottom-20 right-3 z-50 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#0A66C2]/35 bg-[#0a0d12]/95 px-3 py-2 text-sm font-bold text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#0A66C2]/70 hover:bg-[#0A66C2] sm:right-5 lg:bottom-6 lg:right-6 lg:px-4"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
      </svg>
      <span>LinkedIn</span>
      <svg viewBox="0 0 24 24" fill="none" className="hidden h-4 w-4 lg:block" aria-hidden="true">
        <path d="M14 5h5v5M19 5l-8 8M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
