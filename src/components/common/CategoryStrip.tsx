import {
  Code2,
  GraduationCap,
  Lightbulb,
  Rocket,
  Trophy,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    icon: Trophy,
    title: 'Competitions',
    path: '/events',
  },
  {
    icon: Code2,
    title: 'Hackathons',
    path: '/events',
  },
  {
    icon: GraduationCap,
    title: 'Workshops',
    path: '/events',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    path: '/opportunities',
  },
  {
    icon: Users,
    title: 'Community',
    path: '/events',
  },
  {
    icon: Rocket,
    title: 'Startups',
    path: '/startups',
  },
]

function CategoryStrip() {
  return (
    <section className="bg-[#F6FAF8] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7838F0]">
              Explore by category
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#081018] sm:text-3xl">
              Find where you belong.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#505C75]">
            Explore different parts of the INCOMATE ecosystem and discover
            activities that match your interests.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <Link
                key={category.title}
                to={category.path}
                className="group flex min-h-[130px] flex-col justify-between rounded-2xl border border-[#081018]/8 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#7838F0]/20 hover:shadow-lg hover:shadow-[#081018]/5 sm:p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0] transition-transform duration-200 group-hover:scale-105">
                  <Icon size={19} />
                </div>

                <div className="flex items-end justify-between gap-2">
                  <span className="text-sm font-bold text-[#081018]">
                    {category.title}
                  </span>

                  <span className="text-[#7838F0] opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoryStrip