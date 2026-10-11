import { ArrowRight, ArrowUpRight, Briefcase, Lightbulb, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'

const opportunities = [
  {
    icon: Lightbulb,
    category: 'INNOVATION PROGRAM',
    title: 'Campus Innovation Programs',
    description:
      'Explore structured programs that help students turn ideas into validated projects and prototypes.',
    path: '/opportunities/campus-innovation',
    iconClass: 'bg-[#E9E6FF] text-[#7838F0]',
  },
  {
    icon: Briefcase,
    category: 'CAREER OPPORTUNITY',
    title: 'Internships & Industry Programs',
    description:
      'Find internships, industry challenges and practical opportunities to build experience.',
    path: '/opportunities/internships',
    iconClass: 'bg-[#D9F1E8] text-[#083830]',
  },
  {
    icon: Rocket,
    category: 'STARTUP PROGRAM',
    title: 'Founder & Startup Programs',
    description:
      'Discover incubation, mentorship and startup-focused programs for emerging founders.',
    path: '/opportunities/startup-programs',
    iconClass: 'bg-[#E9E6FF] text-[#6F41D8]',
  },
]

function OpportunityShowcase() {
  return (
    <section className="w-full bg-[#F6FAF8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#7838F0]">
              Beyond Events
            </span>

            <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#081018] sm:text-4xl lg:text-[2.75rem]">
              Opportunities & Programs
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#505C75] sm:text-base sm:leading-7">
              Find programs, internships and innovation opportunities that
              help you take the next step.
            </p>
          </div>

          <Link
            to="/opportunities"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#7838F0]"
          >
            Explore All Opportunities

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Showcase */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Main opportunity */}
          <Link
            to={opportunities[0].path}
            className="group relative min-h-[390px] overflow-hidden rounded-2xl bg-[#083830] p-7 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-9 lg:col-span-6 lg:min-h-[430px]"
          >
            {/* Decorative shapes */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border-[30px] border-[#7838F0]/20" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[40px] border-white/5" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7838F0] text-white">
                    <Lightbulb size={23} />
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="text-white/40 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>

                <span className="mt-8 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#AFA5FF]">
                  {opportunities[0].category}
                </span>

                <h3 className="mt-2 max-w-lg text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  {opportunities[0].title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                  {opportunities[0].description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs font-medium text-white/45">
                  Ideas → Validation → Prototype
                </span>

                <span className="text-sm font-semibold text-white">
                  Learn more
                </span>
              </div>
            </div>
          </Link>

          {/* Smaller opportunities */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
            {opportunities.slice(1).map((opportunity) => {
              const Icon = opportunity.icon

              return (
                <Link
                  key={opportunity.title}
                  to={opportunity.path}
                  className="group flex min-h-[280px] flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#081018]/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-7"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${opportunity.iconClass}`}
                      >
                        <Icon size={21} />
                      </div>

                      <ArrowUpRight
                        size={19}
                        className="text-[#081018]/25 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7838F0]"
                      />
                    </div>

                    <span className="mt-7 block text-[10px] font-bold uppercase tracking-[0.13em] text-[#7A8490]">
                      {opportunity.category}
                    </span>

                    <h3 className="mt-2 text-xl font-bold tracking-[-0.025em] text-[#081018] transition-colors group-hover:text-[#7838F0]">
                      {opportunity.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#505C75]">
                      {opportunity.description}
                    </p>
                  </div>

                  <span className="mt-6 text-sm font-semibold text-[#7838F0]">
                    Explore opportunity
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OpportunityShowcase