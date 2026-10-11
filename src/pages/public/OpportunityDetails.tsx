import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Lightbulb,
  Mail,
  MapPin,
  Rocket,
  ShieldCheck,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

const opportunityData: Record<
  string,
  {
    type: string
    title: string
    description: string
    organization: string
    status: string
    deadline: string
    mode: string
    location: string
    about: string
    benefits: string[]
    eligibility: string[]
    process: {
      number: string
      title: string
      text: string
    }[]
    timeline: {
      label: string
      title: string
      date: string
      state: 'completed' | 'active' | 'upcoming'
    }[]
    icon: typeof Lightbulb
  }
> = {
  'campus-innovation': {
    type: 'Innovation Program',
    title: 'Campus Innovation Programs',
    description:
      'Structured programs that help students turn ideas into practical projects and prototypes.',
    organization: 'INCOMATE Innovation Network',
    status: 'Applications Open',
    deadline: '30 November 2026',
    mode: 'Campus & Online',
    location: 'Participating Campuses',
    about:
      'Campus Innovation Programs provide students with a structured environment to explore problems, develop ideas and work toward practical solutions with guidance from the ecosystem.',
    benefits: [
      'Structured innovation activities',
      'Access to mentors and ecosystem guidance',
      'Opportunity to develop working prototypes',
      'Showcase promising projects',
    ],
    eligibility: [
      'Open to college students',
      'Students can participate individually or in teams',
      'Interest in innovation and problem solving',
      'No previous startup experience required',
    ],
    process: [
      {
        number: '01',
        title: 'Apply',
        text: 'Submit your basic details and information about your interest or idea.',
      },
      {
        number: '02',
        title: 'Explore',
        text: 'Work through structured activities and understand the problem you want to solve.',
      },
      {
        number: '03',
        title: 'Build',
        text: 'Develop and refine your solution with guidance from mentors.',
      },
      {
        number: '04',
        title: 'Showcase',
        text: 'Present your project and explore the next opportunities available.',
      },
    ],
    timeline: [
      {
        label: 'COMPLETED',
        title: 'Applications Open',
        date: '01 October 2026',
        state: 'completed',
      },
      {
        label: 'ACTIVE PHASE',
        title: 'Applications Close',
        date: '25 October 2026',
        state: 'active',
      },
      {
        label: 'UPCOMING',
        title: 'Briefing & Cohort Intro',
        date: '27 October 2026',
        state: 'upcoming',
      },
      {
        label: 'SPRINT WINDOW',
        title: 'Build & Checkpoints',
        date: '28 Oct – 15 Nov 2026',
        state: 'upcoming',
      },
      {
        label: 'CULMINATION',
        title: 'Showcase & Credentialing',
        date: '18 November 2026',
        state: 'upcoming',
      },
    ],
    icon: Lightbulb,
  },

  internships: {
    type: 'Industry Program',
    title: 'Internships & Industry Programs',
    description:
      'Discover internships and practical industry exposure opportunities from organizations and ecosystem partners.',
    organization: 'Industry Partners',
    status: 'Multiple Opportunities',
    deadline: 'Rolling Applications',
    mode: 'Online & On-site',
    location: 'Multiple Locations',
    about:
      'This space connects students with practical learning opportunities that can help them gain industry exposure, develop professional skills and understand real-world work environments.',
    benefits: [
      'Industry exposure',
      'Practical project experience',
      'Professional networking',
      'Opportunity to develop career-ready skills',
    ],
    eligibility: [
      'College students can apply',
      'Eligibility varies by individual opportunity',
      'Some opportunities may require specific skills',
      'Application requirements depend on the organization',
    ],
    process: [
      {
        number: '01',
        title: 'Explore',
        text: 'Browse available internships and industry programs.',
      },
      {
        number: '02',
        title: 'Review',
        text: 'Check the requirements, duration and application details.',
      },
      {
        number: '03',
        title: 'Apply',
        text: 'Submit your application through the available application process.',
      },
    ],
    timeline: [
      {
        label: 'DISCOVERY',
        title: 'Applications Open',
        date: 'Rolling',
        state: 'active',
      },
      {
        label: 'REVIEW',
        title: 'Profile & Eligibility Check',
        date: 'Ongoing',
        state: 'upcoming',
      },
      {
        label: 'SELECTION',
        title: 'Shortlisting',
        date: 'As opportunities close',
        state: 'upcoming',
      },
      {
        label: 'ENGAGEMENT',
        title: 'Industry Experience',
        date: 'Program dependent',
        state: 'upcoming',
      },
      {
        label: 'NEXT STEP',
        title: 'Career & Network Growth',
        date: 'Program dependent',
        state: 'upcoming',
      },
    ],
    icon: BriefcaseBusiness,
  },

  'startup-programs': {
    type: 'Startup Program',
    title: 'Founder & Startup Programs',
    description:
      'Incubation, mentorship and startup opportunities for early-stage founders and emerging ventures.',
    organization: 'INCOMATE Startup Ecosystem',
    status: 'Applications Open',
    deadline: '15 December 2026',
    mode: 'Hybrid',
    location: 'Innovation Hub',
    about:
      'Founder & Startup Programs are designed to help early-stage teams understand their users, validate ideas, build products and explore the next stage of their startup journey.',
    benefits: [
      'Mentorship and founder guidance',
      'Startup ecosystem connections',
      'Product and idea validation support',
      'Opportunities to showcase your venture',
    ],
    eligibility: [
      'Early-stage founders can apply',
      'Student founders are welcome',
      'Idea-stage and early ventures can participate',
      'Teams are encouraged to apply',
    ],
    process: [
      {
        number: '01',
        title: 'Apply',
        text: 'Share your startup or idea and provide basic information about your team.',
      },
      {
        number: '02',
        title: 'Validate',
        text: 'Work with mentors to understand your users and refine your direction.',
      },
      {
        number: '03',
        title: 'Build',
        text: 'Develop your product, prototype or business model.',
      },
      {
        number: '04',
        title: 'Grow',
        text: 'Explore further programs, partnerships and ecosystem opportunities.',
      },
    ],
    timeline: [
      {
        label: 'COMPLETED',
        title: 'Applications Open',
        date: '01 November 2026',
        state: 'completed',
      },
      {
        label: 'ACTIVE PHASE',
        title: 'Applications Close',
        date: '15 December 2026',
        state: 'active',
      },
      {
        label: 'UPCOMING',
        title: 'Screening & Mentoring',
        date: 'December 2026',
        state: 'upcoming',
      },
      {
        label: 'BUILD WINDOW',
        title: 'Product & Business Model',
        date: 'January 2027',
        state: 'upcoming',
      },
      {
        label: 'NEXT STAGE',
        title: 'Showcase & Ecosystem',
        date: 'Program dependent',
        state: 'upcoming',
      },
    ],
    icon: Rocket,
  },

  'research-programs': {
    type: 'Research',
    title: 'Research & Fellowship Programs',
    description:
      'Research-focused programs, fellowships and opportunities to work on meaningful problems.',
    organization: 'Academic & Research Partners',
    status: 'Coming Soon',
    deadline: 'To Be Announced',
    mode: 'Varies',
    location: 'Participating Institutions',
    about:
      'Research and fellowship opportunities can help students explore deeper questions, work with researchers and gain experience in structured research environments.',
    benefits: [
      'Research exposure',
      'Guidance from academic experts',
      'Opportunity to work on focused problems',
      'Academic and professional networking',
    ],
    eligibility: [
      'Eligibility depends on the individual program',
      'Students from relevant disciplines may apply',
      'Some programs may require prior research experience',
    ],
    process: [
      {
        number: '01',
        title: 'Discover',
        text: 'Explore research programs and understand their requirements.',
      },
      {
        number: '02',
        title: 'Prepare',
        text: 'Prepare the required documents and application material.',
      },
      {
        number: '03',
        title: 'Apply',
        text: 'Submit your application through the relevant program process.',
      },
    ],
    timeline: [
      {
        label: 'ANNOUNCEMENT',
        title: 'Program Opens',
        date: 'To Be Announced',
        state: 'active',
      },
      {
        label: 'PREPARATION',
        title: 'Application Preparation',
        date: 'Program dependent',
        state: 'upcoming',
      },
      {
        label: 'APPLICATION',
        title: 'Applications Close',
        date: 'To Be Announced',
        state: 'upcoming',
      },
      {
        label: 'SELECTION',
        title: 'Review & Shortlisting',
        date: 'Program dependent',
        state: 'upcoming',
      },
      {
        label: 'ENGAGEMENT',
        title: 'Research & Fellowship',
        date: 'Program dependent',
        state: 'upcoming',
      },
    ],
    icon: CalendarDays,
  },
}

function OpportunityDetails() {
  const { opportunityId } = useParams()
  const [isCompactDetails, setIsCompactDetails] = useState(false)

  const opportunity = opportunityId
    ? opportunityData[opportunityId]
    : undefined

  useEffect(() => {
    const handleScroll = () => {
      setIsCompactDetails(window.scrollY > 180)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!opportunity) {
    return (
      <section className="min-h-[70vh] bg-[#F6FAF8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#7838F0]">
            Opportunity not found
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#081018]">
            We couldn&apos;t find this opportunity.
          </h1>

          <p className="mt-4 text-sm leading-6 text-[#505C75]">
            The opportunity may have been removed or the link may be incorrect.
          </p>

          <Link
            to="/opportunities"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#6F41D8]"
          >
            <ArrowLeft size={16} />
            Back to Opportunities
          </Link>
        </div>
      </section>
    )
  }

  const Icon = opportunity.icon

  return (
    <div className="bg-[#F6FAF8]">
      {/* Hero */}
      <section className="bg-[#083830] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <Link
            to="/opportunities"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Opportunities
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7838F0]">
                <Icon size={21} />
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white/75">
                {opportunity.type}
              </span>

              <span className="rounded-full bg-[#BEECE0] px-3 py-1.5 text-[10px] font-bold text-[#234E45]">
                {opportunity.status}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
              {opportunity.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              {opportunity.description}
            </p>
          </div>
        </div>
      </section>

      {/* Compact floating details bar — appears after the user starts scrolling */}
      <div
        className={`pointer-events-none fixed inset-x-0 top-[76px] z-40 px-3 sm:px-5 transition-all duration-300 ${
          isCompactDetails
            ? 'translate-y-3 opacity-100'
            : '-translate-y-5 opacity-0'
        }`}
        aria-hidden={!isCompactDetails}
      >
        <div className="mx-auto max-w-7xl">
          <div className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-white/10 bg-[#083830]/95 px-3 py-2.5 text-white shadow-lg shadow-[#081018]/15 backdrop-blur-md sm:gap-3 sm:px-4 sm:py-3 xl:px-5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7838F0] sm:h-10 sm:w-10">
              <Icon size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-extrabold sm:text-sm">
                {opportunity.title}
              </p>
              <p className="truncate text-[10px] text-white/55 sm:text-xs">
                {opportunity.type}
              </p>
            </div>

            <div className="hidden items-center gap-6 xl:flex">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Deadline
                </p>
                <p className="mt-0.5 whitespace-nowrap text-xs font-semibold">
                  {opportunity.deadline}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Format
                </p>
                <p className="mt-0.5 whitespace-nowrap text-xs font-semibold">
                  {opportunity.mode}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40">
                  Location
                </p>
                <p className="mt-0.5 max-w-44 truncate text-xs font-semibold">
                  {opportunity.location}
                </p>
              </div>
            </div>

            <Link
              to="/signup"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#7838F0] px-3 py-2.5 text-[10px] font-bold text-white transition-colors hover:bg-[#6F41D8] sm:px-4 sm:text-xs"
            >
              <span className="hidden sm:inline">Apply Now</span>
              <span className="sm:hidden">Apply</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Primary information + original details card */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              {/* About */}
              <div className="rounded-2xl border border-[#081018]/8 bg-white p-6 shadow-sm sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  About this opportunity
                </span>

                <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#081018] sm:text-3xl">
                  Take the next step.
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#505C75] sm:text-base">
                  {opportunity.about}
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-5 rounded-2xl border border-[#081018]/8 bg-white p-6 shadow-sm sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  What you can gain
                </span>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {opportunity.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex gap-3 rounded-xl bg-[#F6FAF8] p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#7838F0]"
                      />

                      <span className="text-sm leading-6 text-[#505C75]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="mt-5 rounded-2xl border border-[#081018]/8 bg-white p-6 shadow-sm sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  Eligibility
                </span>

                <div className="mt-5 space-y-3">
                  {opportunity.eligibility.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#7838F0]"
                      />

                      <span className="text-sm leading-6 text-[#505C75]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop sidebar: full card before scrolling */}
            <aside
              className={`lg:col-span-4 transition-all duration-300 ${
                isCompactDetails
                  ? 'pointer-events-none opacity-0'
                  : 'translate-y-0 opacity-100'
              }`}
            >
              <div className="sticky top-28 rounded-2xl bg-[#083830] p-6 text-white shadow-xl sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                  Opportunity details
                </span>

                <div className="mt-6 space-y-5">
                  <div className="flex gap-3">
                    <CalendarDays
                      size={18}
                      className="mt-0.5 shrink-0 text-[#B9AEFF]"
                    />
                    <div>
                      <p className="text-xs text-white/45">Deadline</p>
                      <p className="mt-1 text-sm font-semibold">
                        {opportunity.deadline}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Clock3
                      size={18}
                      className="mt-0.5 shrink-0 text-[#B9AEFF]"
                    />
                    <div>
                      <p className="text-xs text-white/45">Format</p>
                      <p className="mt-1 text-sm font-semibold">
                        {opportunity.mode}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-[#B9AEFF]"
                    />
                    <div>
                      <p className="text-xs text-white/45">Location</p>
                      <p className="mt-1 text-sm font-semibold">
                        {opportunity.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <BriefcaseBusiness
                      size={18}
                      className="mt-0.5 shrink-0 text-[#B9AEFF]"
                    />
                    <div>
                      <p className="text-xs text-white/45">Organization</p>
                      <p className="mt-1 text-sm font-semibold">
                        {opportunity.organization}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/signup"
                  className="group mt-7 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
                >
                  Apply Now
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <button
                  type="button"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <ExternalLink size={15} />
                  Share Opportunity
                </button>
              </div>
            </aside>
          </div>

          {/* Full-width timeline */}
          <section className="mt-8 rounded-2xl border border-[#081018]/8 bg-white p-6 shadow-sm sm:p-8 lg:mt-10 lg:p-10">
            <div className="flex flex-col gap-3 border-b border-[#081018]/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  Key milestones
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#081018] sm:text-3xl">
                  Opportunity Timeline
                </h2>
              </div>
              <p className="text-xs font-semibold text-[#68707A] sm:text-sm">
                Timezone: GMT / Universal Asynchronous
              </p>
            </div>

            <div className="mt-8 overflow-x-auto pb-2">
              <div className="min-w-[800px]">
                <div className="relative px-1">
                  <div className="absolute left-7 right-7 top-7 h-1 rounded-full bg-[#E9E6FF]" />

                  <div className="relative grid grid-cols-5 gap-6">
                    {opportunity.timeline.map((item, index) => (
                      <div key={`${item.label}-${item.title}`} className="relative">
                        <div className="flex h-14 items-center">
                          <div
                            className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-sm font-extrabold ${
                              item.state === 'completed'
                                ? 'bg-[#7838F0] text-white'
                                : item.state === 'active'
                                  ? 'border-4 border-[#CFC7FF] bg-[#6F41D8] text-white'
                                  : 'border border-[#D9D3FF] bg-[#E9E6FF] text-[#081018]'
                            }`}
                          >
                            {index + 1}
                          </div>
                        </div>

                        <div className="mt-4 pr-3">
                          <p
                            className={`text-xs font-extrabold uppercase tracking-wide ${
                              item.state === 'active'
                                ? 'text-[#7838F0]'
                                : 'text-[#081018]'
                            }`}
                          >
                            {item.label}
                          </p>
                          <p className="mt-1.5 text-sm font-bold text-[#081018]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-5 text-[#68707A]">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Full-width submission CTA */}
          <section className="mt-5 rounded-2xl border border-[#7838F0]/12 bg-[#E9E6FF] p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  Ready when you are
                </span>
                <h2 className="mt-2 text-xl font-bold tracking-[-0.025em] text-[#081018] sm:text-2xl">
                  Ready to start your submission?
                </h2>
                <p className="mt-1.5 text-sm leading-6 text-[#505C75]">
                  Drafts can be modified until the closing deadline on{' '}
                  {opportunity.deadline}.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#6F41D8]"
                >
                  <FileText size={17} />
                  Launch Application Form
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#081018]/10 bg-white px-5 py-3.5 text-sm font-bold text-[#081018] transition-colors hover:border-[#7838F0]/25 hover:text-[#7838F0]"
                >
                  <Download size={17} />
                  Download Challenge Brief
                </button>
              </div>
            </div>
          </section>

          {/* Full-width organizer */}
          <section className="mt-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                Coordination
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#081018] sm:text-3xl">
                Organized By
              </h2>
            </div>

            <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-[#081018]/8 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#7838F0] text-white shadow-sm sm:h-16 sm:w-16">
                  <Rocket size={25} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[#081018] sm:text-xl">
                      INCOMATE Challenge Hub
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#E9E6FF] px-2.5 py-1 text-xs font-semibold text-[#5D51B7]">
                      <ShieldCheck size={13} />
                      Verified Host
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-[#68707A]">
                    Curated directly through the INCOMATE Academic &amp; Builder
                    Network.
                  </p>
                </div>
              </div>

              <div className="flex w-full gap-3 sm:w-auto">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F6FAF8] px-4 py-3 text-sm font-bold text-[#081018] transition-colors hover:bg-[#E9E6FF] sm:flex-none"
                >
                  <Mail size={16} />
                  Contact Organizer
                </button>

                <button
                  type="button"
                  aria-label="Open organizer"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6FAF8] text-[#081018] transition-colors hover:bg-[#E9E6FF]"
                >
                  <ExternalLink size={17} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default OpportunityDetails
