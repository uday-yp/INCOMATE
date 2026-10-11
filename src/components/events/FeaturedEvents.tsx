import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function FeaturedEvents() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#7838F0]">
              Curated Ecosystem Calendar
            </span>

            <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#081018] sm:text-4xl lg:text-[2.75rem]">
              What's happening
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#505C75] sm:text-base sm:leading-7">
              Discover events, competitions and activities happening across
              the INCOMATE ecosystem.
            </p>
          </div>

          <Link
            to="/events"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#7838F0]"
          >
            View All Events

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Event grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Featured event */}
          <article className="flex overflow-hidden rounded-2xl bg-[#FFFFFF] shadow-sm ring-1 ring-[#081018]/5 transition-shadow duration-300 hover:shadow-xl lg:col-span-7">
            <div className="flex w-full flex-col">
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-80">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAarcNPYi6muO81Y4C2s_e4eogoPpZoXLSPos58W0kPUllxWfy_Pm7U_drh0HE7efrDPkMAyMbSxuRciSPumh3GnMyXtT9vrNo_hZlt-YGBu3hW379LDLO7_WzgRNKeN2Wy2VCoftgqRnBjghLDi6HyM71a4ug1fZ-LON-GJ_Ga0i8O01T595JXBsCObGL6fRg6R7xmW2yYhEFKEou8jd1h4cg7NOsyPVwp4ydhBQ7-1cXH5Wft4k"
                  alt="Students participating in a technology hackathon"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />

                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-[#083830] shadow-sm backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#059669]" />
                    Featured Hackathon
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 rounded-lg bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#081018] backdrop-blur-md">
                  24 Oct • Online
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-7 lg:p-8">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-[#7838F0]">
                      24 Oct, 2025
                    </span>

                    <span className="text-[#7A8490]">•</span>

                    <span className="text-[#7A8490]">
                      Online Participation
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-[-0.025em] text-[#081018] sm:text-2xl">
                    National Student Hackathon
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#505C75]">
                    A nationwide collaborative hackathon bringing students
                    together to build practical software and hardware
                    solutions.
                  </p>
                </div>

                {/* Tags + CTA */}
                <div className="mt-6 flex flex-col gap-4 rounded-xl bg-[#F6FAF8] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-[#40505A]">
                      Software
                    </span>

                    <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-[#40505A]">
                      Hardware
                    </span>

                    <span className="rounded-md bg-[#E9E6FF] px-2.5 py-1 text-xs font-semibold text-[#6F41D8]">
                      Open Track
                    </span>
                  </div>

                  <Link
                    to="/events/campus-hack-challenge"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
                  >
                    View Event
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Smaller events */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Event 2 */}
            <article className="flex flex-1 flex-col justify-between rounded-2xl bg-[#F6FAF8] p-6 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md sm:p-7">
              <div>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#D9F1E8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#083830]">
                    Innovation Challenge
                  </span>

                  <span className="shrink-0 text-xs text-[#7A8490]">
                    12 Nov
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-[-0.02em] text-[#081018] sm:text-xl">
                  Campus Innovation Challenge
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#505C75]">
                  A challenge for student teams developing practical solutions
                  for campus and community needs.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#081018]/6 pt-4">
                <span className="text-xs font-medium text-[#7A8490]">
                  Campus Innovation Chapter
                </span>

                <Link
                  to="/events/startup-idea-challenge"
                  className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#7838F0]"
                >
                  Details
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>

            {/* Event 3 */}
            <article className="flex flex-1 flex-col justify-between rounded-2xl bg-[#F6FAF8] p-6 shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md sm:p-7">
              <div>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#E9E6FF] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#7838F0]">
                    Competition
                  </span>

                  <span className="shrink-0 text-xs text-[#7A8490]">
                    20 Nov
                  </span>
                </div>

                <h3 className="text-lg font-bold tracking-[-0.02em] text-[#081018] sm:text-xl">
                  Inter-College Coding Competition
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#505C75]">
                  Collaborative algorithmic problem-solving and software
                  development contest.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#081018]/6 pt-4">
                <span className="text-xs font-medium text-[#7A8490]">
                  Student Developer Club
                </span>

                <Link
                  to="/events/code-arena"
                  className="group inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#7838F0]"
                >
                  Details
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedEvents