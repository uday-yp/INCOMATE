import {
  ArrowUpRight,
  CalendarDays,
  Layers3,
  Users,
  Zap,
} from 'lucide-react'

const reasons = [
  {
    icon: CalendarDays,
    title: 'Too many disconnected activities',
    text: 'Events, competitions, workshops and innovation programs often live across different platforms and channels.',
  },
  {
    icon: Layers3,
    title: 'One connected ecosystem',
    text: 'INCOMATE brings events, opportunities, projects and startups together in one place.',
  },
  {
    icon: Users,
    title: 'Built around people',
    text: 'Students, organizers, mentors and startup teams can participate and collaborate through the same ecosystem.',
  },
  {
    icon: Zap,
    title: 'From participation to progress',
    text: 'The platform is designed to help users move beyond registration and turn participation into meaningful outcomes.',
  },
]

function WhyIncomate() {
  return (
    <section className="bg-[#F6FAF8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Left content */}
          <div className="lg:col-span-5">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-[#7838F0]">
              Why INCOMATE exists
            </span>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.035em] text-[#081018] sm:text-4xl lg:text-[2.8rem]">
              Innovation should feel connected, not scattered.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#505C75] sm:text-base">
              Students discover opportunities in different places. Organizers
              manage activities through different tools. Projects and startup
              journeys often become disconnected.
            </p>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#505C75] sm:text-base">
              INCOMATE brings these experiences together into one structured
              ecosystem.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E9E6FF] px-4 py-2 text-xs font-semibold text-[#7838F0]">
              <span className="h-2 w-2 rounded-full bg-[#7838F0]" />
              One ecosystem. Multiple possibilities.
            </div>
          </div>

          {/* Right cards */}
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-[#081018]/8 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7838F0]/15 hover:shadow-lg hover:shadow-[#081018]/5 sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0EDFF] text-[#7838F0] transition-transform duration-200 group-hover:scale-105">
                      <Icon size={20} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#081018]/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7838F0]"
                    />
                  </div>

                  <div className="mt-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A939C]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-2 text-lg font-bold tracking-[-0.02em] text-[#081018]">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#505C75]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyIncomate