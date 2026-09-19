function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 px-6 py-4 text-slate-100">
      <div className="flex items-center gap-3">
        <svg
          className="h-6 w-6 text-green-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 0 0 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 0 0-4V9z" />
          <path d="M13 7v2m0 6v2" />
        </svg>
        <span className="text-lg font-bold tracking-tight">EventCheck</span>
      </div>
      <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
        Mar 14, 2026 · Bengaluru
      </span>
    </header>
  )
}

export default Header
