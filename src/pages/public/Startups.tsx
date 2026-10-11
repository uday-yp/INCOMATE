import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const startups = [
  {
    id: 'novagrid',
    name: 'NovaGrid',
    stage: 'Early Stage',
    category: 'Clean Technology',
    description:
      'Building practical technology solutions for smarter energy usage and sustainable infrastructure.',
    location: 'Jaipur, Rajasthan',
    founders: '2 Founders',
    tags: ['CleanTech', 'Sustainability'],
  },
  {
    id: 'campuslabs',
    name: 'CampusLabs',
    stage: 'Prototype',
    category: 'EdTech',
    description:
      'Helping students discover practical learning experiences, projects and opportunities through technology.',
    location: 'Jaipur, Rajasthan',
    founders: '3 Founders',
    tags: ['EdTech', 'Student Innovation'],
  },
  {
    id: 'finbridge',
    name: 'FinBridge',
    stage: 'Early Stage',
    category: 'FinTech',
    description:
      'Developing accessible digital tools to simplify financial learning and decision making for young users.',
    location: 'Delhi NCR',
    founders: '2 Founders',
    tags: ['FinTech', 'Digital'],
  },
  {
    id: 'healthloop',
    name: 'HealthLoop',
    stage: 'Idea Stage',
    category: 'HealthTech',
    description:
      'Exploring technology-enabled approaches to make everyday health information easier to understand.',
    location: 'Bengaluru, Karnataka',
    founders: '3 Founders',
    tags: ['HealthTech', 'AI'],
  },
  {
    id: 'makerspace-ai',
    name: 'MakerSpace AI',
    stage: 'Prototype',
    category: 'Artificial Intelligence',
    description:
      'Creating accessible AI tools that help students experiment, learn and build useful prototypes.',
    location: 'Pune, Maharashtra',
    founders: '2 Founders',
    tags: ['AI', 'Developer Tools'],
  },
  {
    id: 'ruralconnect',
    name: 'RuralConnect',
    stage: 'Early Stage',
    category: 'Social Innovation',
    description:
      'Working on technology-led solutions that connect underserved communities with useful services.',
    location: 'Jaipur, Rajasthan',
    founders: '4 Founders',
    tags: ['Social Impact', 'Community'],
  },
]


function Startups() {
  return (
    <div className="bg-[#F6FAF8]">
      {/* HERO */}
      <section className="border-b border-[#081018]/6">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E9E6FF] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#7838F0] sm:text-xs">
              <Sparkles size={13} />
              Innovation Ecosystem
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.045em] text-[#081018] sm:text-5xl lg:text-[3.75rem]">
              Discover startups.
              <br />
              <span className="text-[#7838F0]">
                Explore what they&apos;re building.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#505C75] sm:text-lg sm:leading-8">
              Explore emerging ventures, student startups and innovation
              projects growing across the INCOMATE ecosystem.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/startups/learnloop"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
              >
                Explore Startups
                <ArrowRight size={16} />
              </Link>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#081018]/10 bg-white px-5 py-3 text-sm font-semibold text-[#081018] transition-colors hover:border-[#7838F0]/30 hover:text-[#7838F0]"
              >
                <Rocket size={16} />
                Showcase Your Startup
              </button>
            </div>

            
          </div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      

      {/* SEARCH + FILTER STRIP */}
      <section className="py-5 sm:py-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 rounded-2xl border border-[#081018]/8 bg-white p-3 sm:p-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#68707A]"
              />

              <input
                type="text"
                placeholder="Search startups, founders, ideas..."
                className="h-11 w-full rounded-xl bg-[#F6FAF8] pl-10 pr-4 text-xs text-[#081018] outline-none placeholder:text-[#8A939C] focus:ring-2 focus:ring-[#7838F0]/20"
              />
            </div>

            {/* Filters */}
            <button
              type="button"
              className="flex h-11 items-center justify-between gap-5 rounded-xl border border-[#081018]/8 px-3.5 text-xs text-[#505C75] lg:min-w-[155px]"
            >
              Industry: All Industries
              <ChevronDown size={14} />
            </button>

            <button
              type="button"
              className="flex h-11 items-center justify-between gap-5 rounded-xl border border-[#081018]/8 px-3.5 text-xs text-[#505C75] lg:min-w-[135px]"
            >
              Stage: All Stages
              <ChevronDown size={14} />
            </button>

            <button
              type="button"
              className="flex h-11 items-center justify-between gap-5 rounded-xl border border-[#081018]/8 px-3.5 text-xs text-[#505C75] lg:min-w-[165px]"
            >
              Location: All Campuses
              <ChevronDown size={14} />
            </button>

            <button
              type="button"
              className="flex h-11 items-center justify-between gap-5 rounded-xl border border-[#081018]/8 px-3.5 text-xs text-[#505C75] lg:min-w-[125px]"
            >
              Founded: Any Time
              <ChevronDown size={14} />
            </button>

            <button
              type="button"
              className="h-11 shrink-0 rounded-xl px-3 text-xs font-semibold text-[#68707A] transition-colors hover:text-[#7838F0]"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED STARTUP */}
      <section className="pb-10 pt-4 sm:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-5 flex items-center gap-2">
            <Sparkles size={14} className="text-[#7838F0]" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Featured Startup
            </span>

            <span className="text-xs text-[#68707A]">
              Editor&apos;s Ecosystem Pick
            </span>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-[#081018]/8 bg-white lg:grid-cols-12">
            <div className="p-4 lg:col-span-6">
              <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl bg-[#E9E6FF]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR7SIsvAuyRe5h31Oen42GScQCwGmFExCc7CX0WhNIATeIGIiw6UZlUDjTSta5GjDePptXJXo2G-l32qjdvCIaXA2CaLLye2enVTGi-P2MFrQnvyhMfZCmGsWDhqf8xwwmSGn9M8y7NPbqC4OuWYBzqI5EQVhdAmCl7BKRAF3zH92qwAUiEnOBVmh88yAbu4Bji9DWKWKhqZL1-MhEG1KJ5qxM5yJepBTWA5rp8yqjc-GqwuN9bJ4"
                  alt="LearnLoop product"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
            </div>

            <div className="p-6 lg:col-span-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E9E6FF] px-2.5 py-1 text-[10px] font-bold text-[#7838F0]">
                  Prototype
                </span>

                <span className="text-[10px] text-[#68707A]">
                  Education Technology
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#081018]">
                LearnLoop
              </h2>

              <p className="mt-2 text-sm font-semibold text-[#7838F0]">
                Making collaborative learning easier for students.
              </p>

              <p className="mt-4 text-sm leading-6 text-[#505C75]">
                A student-focused platform designed to help learners
                collaborate, share resources and work together on projects
                through connected workspaces and shared knowledge.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#F6FAF8] p-3">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                    Stage
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#081018]">
                    Early Startup
                  </p>
                </div>

                <div className="rounded-xl bg-[#F6FAF8] p-3">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                    Focus Area
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#081018]">
                    Education
                  </p>
                </div>

                <div className="rounded-xl bg-[#F6FAF8] p-3">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                    Built By
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#081018]">
                    Student Founders
                  </p>
                </div>

                <div className="rounded-xl bg-[#F6FAF8] p-3">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                    Milestone
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#081018]">
                    Working Prototype
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  to="/startups/learnloop"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#7838F0] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#6F41D8]"
                >
                  View Startup
                  <ArrowRight size={14} />
                </Link>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#081018]/8 text-[#68707A] hover:text-[#7838F0]"
                  aria-label="Open startup"
                >
                  <ExternalLink size={15} />
                </button>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#081018]/8 text-[#68707A] hover:text-[#7838F0]"
                  aria-label="Share startup"
                >
                  <Share2 size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STARTUP DIRECTORY — ORIGINAL CARDS */}
      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                Startup Directory
              </span>

              <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#081018] sm:text-3xl">
                Explore emerging ventures
              </h2>
            </div>

            <p className="text-sm text-[#68707A]">
              Student founders & ecosystem startups
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {startups.map((startup) => (
              <article
                key={startup.id}
                className="group flex min-h-[330px] flex-col rounded-2xl border border-[#081018]/8 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7838F0]/15 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#083830] text-white">
                    <Building2 size={21} />
                  </div>

                  <span className="rounded-full bg-[#E9E6FF] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#7838F0]">
                    {startup.stage}
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7A8490]">
                    {startup.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold tracking-[-0.025em] text-[#081018]">
                    {startup.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#505C75]">
                    {startup.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {startup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[#F6FAF8] px-2.5 py-1 text-[11px] font-medium text-[#505C75]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#081018]/6 pt-4 text-xs text-[#68707A]">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {startup.location}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Users size={14} />
                      {startup.founders}
                    </span>
                  </div>

                  <Link
                    to={`/startups/${startup.id}`}
                    className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7838F0]"
                  >
                    View Startup
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              className="rounded-xl border border-[#081018]/10 bg-white px-5 py-2.5 text-xs font-semibold text-[#505C75] transition-colors hover:border-[#7838F0]/30 hover:text-[#7838F0]"
            >
              Load More Startups
            </button>
          </div>
        </div>
      </section>

      {/* CREATOR TOOLS */}
      <section className="border-t border-[#081018]/6 bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                Creator Tools
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#081018]">
                Building Something?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#505C75]">
                Showcase your startup, introduce your team and let people
                discover what you&apos;re working on across the INCOMATE
                ecosystem.
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
              >
                Showcase Your Startup
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-3">
              {[
                {
                  icon: Building2,
                  title: 'Create a startup profile',
                  text: 'Establish a credible public profile for your project or venture.',
                },
                {
                  icon: Lightbulb,
                  title: 'Present your idea',
                  text: 'Explain the problem, solution and vision behind what you are building.',
                },
                {
                  icon: Rocket,
                  title: 'Showcase your product',
                  text: 'Add screenshots, prototypes, demo links and product information.',
                },
                {
                  icon: Users,
                  title: 'Introduce your team',
                  text: 'Credit co-founders, advisors and contributors working on the venture.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Share your journey',
                  text: 'Document hackathons, prototypes, milestones and campus deployments.',
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#081018]/8 bg-[#F6FAF8] p-4"
                  >
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E9E6FF] text-[#7838F0]">
                        <Icon size={16} />
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-[#081018]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-[#68707A]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ECOSYSTEM */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Open Ecosystem
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#081018]">
              Who Can Showcase?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#505C75]">
              Whether you have a weekend prototype or a campus-wide launch,
              there is room for your project on INCOMATE.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#081018]/8 bg-white p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
                <GraduationCap size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#081018]">
                Student Founders
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#505C75]">
                Students turning ideas, hackathon projects and coursework into
                early ventures.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#7838F0]">
                Start Building
                <ArrowRight size={14} />
              </div>
            </div>

            <div className="rounded-2xl border border-[#081018]/8 bg-white p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
                <Rocket size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#081018]">
                Emerging Founders
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#505C75]">
                Early-stage builders testing hypotheses and validating
                real-world solutions.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#7838F0]">
                Showcase Your Venture
                <ArrowRight size={14} />
              </div>
            </div>

            <div className="rounded-2xl border border-[#081018]/8 bg-white p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
                <Users size={21} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#081018]">
                Innovation Teams
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#505C75]">
                Cross-disciplinary teams collaborating on prototypes,
                projects and university innovation.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#7838F0]">
                Build Together
                <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START YOUR LISTING TODAY */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl bg-[#083830] p-7 text-white sm:p-9 lg:p-11">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BFB4FF]">
                Start Your Listing Today
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                Have Something Worth Building?
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">
                Bring your idea, project or startup into the INCOMATE
                ecosystem and let others discover what you&apos;re creating.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
                >
                  Showcase Your Startup
                  <ArrowRight size={16} />
                </button>

                <Link
                  to="/startups"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Explore Startups
                </Link>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-16 -top-16 hidden h-64 w-64 rounded-full border border-white/10 lg:block" />
            <div className="pointer-events-none absolute -bottom-24 right-20 hidden h-56 w-56 rounded-full border border-white/10 lg:block" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Startups