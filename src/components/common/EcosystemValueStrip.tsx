import {
  Compass,
  Trophy,
  Hammer,
  Rocket,
  ArrowUpRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const valueItems = [
  {
    number: '01',
    category: 'EVENTS',
    title: 'Discover',
    description:
      'Explore hackathons, workshops, and community meetups.',
    path: '/events',
    icon: Compass,
    iconClass: 'bg-[#E9E6FF] text-[#7838F0]',
  },
  {
    number: '02',
    category: 'COMPETITIONS',
    title: 'Participate',
    description:
      'Join challenges, coding sprints, and innovation contests.',
    path: '/events',
    icon: Trophy,
    iconClass: 'bg-[#D9F1E8] text-[#083830]',
  },
  {
    number: '03',
    category: 'PROJECTS',
    title: 'Build',
    description:
      'Collaborate with peers to develop functional prototypes.',
    path: '/events',
    icon: Hammer,
    iconClass: 'bg-[#E8EEF5] text-[#083830]',
  },
  {
    number: '04',
    category: 'INNOVATION & STARTUPS',
    title: 'Grow',
    description:
      'Showcase projects and take the next step toward emerging startups.',
    path: '/startups',
    icon: Rocket,
    iconClass: 'bg-[#E9E6FF] text-[#7838F0]',
  },
]

function EcosystemValueStrip() {
  return (
    <section className="w-full bg-[#F6FAF8] pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-3 rounded-2xl bg-[#EFF4F2] p-3 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.title}
                to={item.path}
                className="group flex min-h-[250px] flex-col justify-between rounded-xl bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F9F7FF] hover:shadow-md sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.iconClass} transition-transform duration-200 group-hover:scale-105`}
                  >
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[#081018]/25 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#7838F0]"
                  />
                </div>

                <div className="mt-8">
                  <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-[#7A8490]">
                    {item.number} • {item.category}
                  </span>

                  <h3 className="text-xl font-bold tracking-[-0.025em] text-[#081018] transition-colors group-hover:text-[#7838F0]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#505C75]">
                    {item.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EcosystemValueStrip