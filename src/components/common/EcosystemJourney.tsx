import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const journeySteps = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Ideas',
    text: 'Start with a problem, curiosity or idea worth exploring.',
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Projects',
    text: 'Turn ideas into prototypes through collaboration and experimentation.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Validation',
    text: 'Test, improve and validate solutions through real challenges and programs.',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Startups',
    text: 'Take promising solutions forward into ventures and startup opportunities.',
  },
]

function EcosystemJourney() {
  return (
    <section className="overflow-hidden bg-[#083830] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          {/* Intro */}
          <div className="lg:col-span-5">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.16em] text-[#B9AEFF]">
              The INCOMATE Journey
            </span>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[2.8rem]">
              From raw ideas to real projects and startups.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              INCOMATE connects the different stages of an innovation
              journey—from discovering an idea to building something real and
              taking it forward.
            </p>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Understand the ecosystem

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Journey */}
          <div className="relative lg:col-span-7">
            {/* Connecting line */}
            <div className="pointer-events-none absolute left-[22px] top-6 hidden h-[calc(100%-48px)] w-px bg-white/10 sm:block" />

            <div className="space-y-3">
              {journeySteps.map((step) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.number}
                    className="group relative flex gap-4 rounded-2xl border border-white/8 bg-white/[0.045] p-4 transition-colors hover:bg-white/[0.08] sm:gap-5 sm:p-5"
                  >
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7838F0] text-white">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold tracking-[0.12em] text-white/35">
                          {step.number}
                        </span>

                        <h3 className="text-lg font-bold tracking-[-0.02em]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/55">
                        {step.text}
                      </p>
                    </div>

                    <ArrowRight
                      size={17}
                      className="mt-1 hidden shrink-0 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-white/60 sm:block"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EcosystemJourney