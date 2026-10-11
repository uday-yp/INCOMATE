import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.4 8.9 5 12 5z" />
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" />
      <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.4-.4-2.2s.2-1.5.4-2.2L1.6 7.4C.6 9.4 0 11.6 0 14.5s.6 5.1 1.6 7.1l3.7-2.9z" />
      <path fill="#34A853" d="M12 24c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.1-6.7-5.1L1.6 17.1C3.5 20.9 7.4 24 12 24z" />
    </svg>
  )
}

function Signup() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/signup/role')
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#F6FAF8] px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto grid min-h-[680px] max-w-6xl overflow-hidden rounded-2xl border border-[#E4E9E6] bg-white shadow-xl lg:grid-cols-12">
        <aside className="relative hidden overflow-hidden bg-[#083830] p-8 text-white lg:col-span-5 lg:flex lg:flex-col lg:justify-between xl:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#7838F0]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#052721] blur-2xl" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              Collegiate Innovation Platform
            </span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight xl:text-4xl">
              Your Next Opportunity Starts Here.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-white/75 xl:text-base">
              Discover events, explore opportunities, build collaborative projects,
              and connect with the collegiate innovation ecosystem.
            </p>
          </div>

          <div className="relative z-10 space-y-3.5">
            {[
              ['Events & Hackathons', 'Explore hackathons, workshops, and sprints to build rapid prototypes.'],
              ['Curated Opportunities', 'Find innovation challenges, fellowships, grants, and programs.'],
              ['Student Startups & Ventures', 'Showcase products and connect with the campus ecosystem.'],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/[0.07] p-3.5"
              >
                <h2 className="text-sm font-semibold">{title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
            <span>Student & Builder Driven</span>
            <span>● Verified Platform</span>
          </div>
        </aside>

        <main className="flex flex-col justify-center bg-white p-6 sm:p-10 xl:col-span-7 xl:p-12">
          <div className="mx-auto w-full max-w-md">
            <Link
              to="/"
              className="mb-7 inline-flex items-center gap-1.5 text-xs font-semibold text-[#68707A] transition-colors hover:text-[#7838F0]"
            >
              <ArrowLeft size={14} />
              Back to website
            </Link>

            <div className="mb-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7838F0]">
                Create Account
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-[#081018]">
                Create Your INCOMATE Account
              </h2>
              <p className="mt-1 text-sm text-[#68707A]">
                Join the ecosystem and start discovering opportunities.
              </p>
            </div>

            <button
              type="button"
              className="mb-4 flex w-full items-center justify-center gap-3 rounded-xl border border-[#E4E9E6] px-4 py-2.5 text-sm font-semibold text-[#081018] shadow-sm transition-colors hover:bg-[#F6FAF8]"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="relative mb-5 flex items-center justify-center">
              <div className="w-full border-t border-[#E4E9E6]" />
              <span className="absolute bg-white px-3 text-xs font-semibold uppercase tracking-wider text-[#68707A]">
                OR
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                  Full Name
                </span>
                <input
                  required
                  type="text"
                  placeholder="Aarav Sharma"
                  className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                  Email Address
                </span>
                <input
                  required
                  type="email"
                  placeholder="aarav@university.edu"
                  className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                />
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Password
                  </span>
                  <input
                    required
                    minLength={8}
                    type="password"
                    placeholder="Min 8 chars"
                    className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Confirm Password
                  </span>
                  <input
                    required
                    minLength={8}
                    type="password"
                    placeholder="Repeat password"
                    className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                  Phone Number <span className="font-normal lowercase text-[#68707A]">(optional)</span>
                </span>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-2.5 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                />
              </label>

              <p className="text-[11px] leading-tight text-[#68707A]">
                By registering, you agree to INCOMATE&apos;s{' '}
                <span className="font-semibold text-[#7838F0]">Terms of Service</span>{' '}
                and <span className="font-semibold text-[#7838F0]">Privacy Policy</span>.
              </p>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#7838F0]/25 transition-all hover:bg-[#6528DC]"
              >
                Create Account
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>

            <p className="mt-5 text-center text-xs text-[#68707A]">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#7838F0] hover:underline">
                Login
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Signup
