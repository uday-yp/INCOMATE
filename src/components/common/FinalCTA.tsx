import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function FinalCTA() {
  return (
    <section className="bg-[#F6FAF8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#7838F0] px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#E9E6FF]/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Sparkles size={23} />
            </div>

            <span className="mt-5 block text-xs font-bold uppercase tracking-[0.16em] text-white/65">
              Start your journey
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
              Your next idea could start here.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Discover opportunities, participate in meaningful activities,
              build projects and connect with the innovation ecosystem through
              INCOMATE.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#7838F0] transition-all hover:bg-[#F6FAF8] hover:shadow-lg"
              >
                Get Started
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/events"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA