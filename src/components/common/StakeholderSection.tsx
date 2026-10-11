import { ArrowRight, GraduationCap, Lightbulb, Rocket, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const stakeholders = [
  {
    icon: GraduationCap,
    label: 'STUDENTS',
    title: 'Discover. Participate. Build.',
    text: 'Find events, competitions, programs and opportunities to learn, collaborate and create.',
    link: '/events',
  },
  {
    icon: Users,
    label: 'ORGANIZERS',
    title: 'Create. Manage. Measure.',
    text: 'Run events, manage registrations and coordinate innovation activities from one workspace.',
    link: '/signup',
  },
  {
    icon: Lightbulb,
    label: 'MENTORS & ECOSYSTEM',
    title: 'Connect. Guide. Support.',
    text: 'Connect with participants and projects while contributing knowledge and guidance.',
    link: '/about',
  },
  {
    icon: Rocket,
    label: 'STARTUPS',
    title: 'Showcase. Connect. Grow.',
    text: 'Give emerging ventures a place to showcase their work and connect with opportunities.',
    link: '/startups',
  },
]

function StakeholderSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7838F0]">
            Built for each stakeholder
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#081018] sm:text-4xl lg:text-[2.8rem]">
            One platform, different journeys.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#505C75] sm:text-base">
            INCOMATE brings students, organizers, mentors and startups into
            one connected ecosystem.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="group flex min-h-[290px] flex-col rounded-2xl border border-[#081018]/8 bg-[#F6FAF8] p-5 transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-bold text-[#081018]/25">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7A8490]">
                    {item.label}
                  </span>

                  <h3 className="mt-2 text-lg font-bold leading-tight text-[#081018]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#505C75]">
                    {item.text}
                  </p>
                </div>

                <Link
                  to={item.link}
                  className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#7838F0]"
                >
                  Explore
                  <ArrowRight size={16} />
                </Link>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default StakeholderSection