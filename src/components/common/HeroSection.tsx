import { ArrowRight, ArrowUpRight, Boxes, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F6FAF8]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-24 lg:pt-20">
        {/* Left content */}
        <div className="relative z-10 lg:col-span-6">
          <h1 className="max-w-2xl text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-[#081018] sm:text-5xl lg:text-[3.75rem]">
            Discover.
            <br />
            Participate.
            <br />
            Build.
            <br />
            <span className="text-[#7838F0]">Innovate.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#505C75] sm:text-lg sm:leading-8">
            One platform to discover events, opportunities, innovation
            activities and emerging startups.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              to="/events"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7838F0]/15 transition-all hover:bg-[#6F41D8] hover:shadow-xl sm:px-7"
            >
              Explore Events

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/opportunities"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F4F2FF] px-6 py-3.5 text-sm font-semibold text-[#7838F0] transition-colors hover:bg-[#E9E6FF] sm:px-7"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:aspect-square">
            {/* Ambient shapes */}
            <div className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 rounded-full bg-[#E9E6FF]/70 blur-3xl sm:h-72 sm:w-72" />

            <div className="pointer-events-none absolute -bottom-8 -left-8 h-52 w-52 rounded-full bg-[#BEECE0]/40 blur-3xl sm:h-64 sm:w-64" />

            {/* Main image */}
            <div className="absolute inset-x-5 bottom-4 top-5 overflow-hidden rounded-2xl bg-white shadow-2xl sm:inset-x-8 sm:bottom-5 sm:top-6 lg:inset-x-10 lg:bottom-8 lg:top-8">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA0wCg_CLSqaBWkFfI54AdzKaabOQIjfBfZpog00G8NxkEKL_ZDuRDMMVFy8r4M_lyco7OTJ87RwJ_aUplzXFhn7KMXvkXL4PUzYKAJyw4ArLLjo_bDbvetBqSc94Jpw1HBTY7uJUh9yzpBR6ZlaJBRddnDVrSflfQIp2D1aK0C0jZVSVvuxecOLyNG7tbYghtzucT12iCn2FN-6_JreTG1GAKgrVEK_RXpswbcNlTSQmXvi3CrlQ"
                alt="Students collaborating on an innovation project"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081018]/90 via-[#081018]/20 to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-6 sm:left-6 sm:right-6">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#059669] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
                    Campus Innovation
                  </span>

                  <span className="text-xs text-white/70">
                    Active Team Sprints
                  </span>
                </div>

                <h2 className="max-w-md text-lg font-bold leading-tight sm:text-xl">
                  Student Innovation Showcase — Hardware & Software Prototypes
                </h2>

                <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/70 sm:text-sm">
                  Cross-disciplinary teams collaborating on real-world
                  solutions.
                </p>
              </div>
            </div>

            {/* Floating project card */}
            <div className="absolute left-0 top-0 z-10 w-52 rounded-xl bg-white p-3.5 shadow-xl sm:w-60 sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#68707A]">
                  Project Sprint
                </span>

                <Users size={17} className="text-[#7838F0]" />
              </div>

              <p className="text-base font-bold text-[#081018] sm:text-lg">
                Prototype Track
              </p>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E7EEFA]">
                <div className="h-full w-4/5 rounded-full bg-[#7838F0]" />
              </div>

              <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-[#68707A] sm:text-xs">
                <span>Sprint Phase: Build</span>

                <span className="font-semibold text-[#7838F0]">
                  In Progress
                </span>
              </div>
            </div>

            {/* Floating bottom card */}
            <div className="absolute bottom-0 right-0 z-10 flex items-center gap-3 rounded-xl bg-[#083830] px-3.5 py-3 text-white shadow-xl sm:px-5 sm:py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#059669]/20 text-[#10B981] sm:h-10 sm:w-10">
                <Boxes size={19} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-white/55">
                  Ecosystem
                </p>

                <p className="text-xs font-semibold sm:text-sm">
                  Ideas → Projects → Startups
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="hidden text-white/50 sm:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection