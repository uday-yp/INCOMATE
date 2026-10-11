import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,

  CalendarDays,

  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  Compass,
  Eye,
  GraduationCap,
  Info,
  Layers3,
  MapPin,

  Users,
  UsersRound,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const eventData: Record<
  string,
  {
    type: string
    status: string
    title: string
    description: string
    date: string
    time: string
    mode: string
    location: string
    participants: string
    organizer: string
    about: string
    eligibility: string[]
    timeline: {
      date: string
      title: string
      text: string
    }[]
  }
> = {
  'campus-hack-challenge': {
    type: 'Hackathon',
    status: 'Registration Open',
    title: 'Campus Hack Challenge',
    description:
      'Solve real-world challenges with multidisciplinary teams and turn ideas into working prototypes.',
    date: '12 November 2026',
    time: '10:00 AM – 6:00 PM',
    mode: 'Hybrid',
    location: 'Campus Innovation Lab',
    participants: '42 Teams Registered',
    organizer: 'INCOMATE Innovation Network',
    about:
      'Campus Hack Challenge brings students together to identify meaningful problems, develop practical solutions and present their prototypes. Participants can collaborate across disciplines and receive guidance throughout the challenge.',
    eligibility: [
      'Open to college students',
      'Individuals and teams can participate',
      'Teams can have 2–4 members',
      'Basic technical or problem-solving knowledge is recommended',
    ],
    timeline: [
      {
        date: '01 Nov',
        title: 'Registration Opens',
        text: 'Participants can register individually or create a team.',
      },
      {
        date: '08 Nov',
        title: 'Registration Closes',
        text: 'Final deadline for submitting participant details.',
      },
      {
        date: '12 Nov',
        title: 'Hackathon Day',
        text: 'Teams work on their ideas and develop their prototypes.',
      },
      {
        date: '13 Nov',
        title: 'Results & Showcase',
        text: 'Selected teams present their solutions and results.',
      },
    ],
  },

  'future-tech-workshop': {
    type: 'Workshop',
    status: 'Limited Seats',
    title: 'Future Tech Workshop',
    description:
      'A practical guided session covering modern web technologies, APIs and prototype development.',
    date: '18 November 2026',
    time: '2:00 PM – 4:00 PM',
    mode: 'Online',
    location: 'Online Session',
    participants: 'Limited Seats',
    organizer: 'INCOMATE Learning Community',
    about:
      'Future Tech Workshop is a hands-on learning session for students who want to understand how modern web applications are designed and developed.',
    eligibility: [
      'Open to college students',
      'Basic programming knowledge recommended',
      'Individual participation',
      'Laptop with internet connection required',
    ],
    timeline: [
      {
        date: '10 Nov',
        title: 'Registration Opens',
        text: 'Participants can register for the workshop.',
      },
      {
        date: '16 Nov',
        title: 'Registration Closes',
        text: 'Final registration deadline.',
      },
      {
        date: '18 Nov',
        title: 'Workshop',
        text: 'Live guided workshop and practical activities.',
      },
    ],
  },

  'design-build-sprint': {
    type: 'Competition',
    status: 'Registration Open',
    title: 'Design & Build Sprint',
    description:
      'A rapid product design and prototyping challenge focused on solving user problems.',
    date: '22 November 2026',
    time: '11:00 AM – 5:00 PM',
    mode: 'Online',
    location: 'Online',
    participants: 'Solo & Pairs',
    organizer: 'INCOMATE Design Community',
    about:
      'Participants will research a problem, design a solution and create a functional prototype within a limited time. The focus is on user experience, clarity and practical execution.',
    eligibility: [
      'Open to college students',
      'Solo or pair participation',
      'Design and development skills are welcome',
      'No previous competition experience required',
    ],
    timeline: [
      {
        date: '10 Nov',
        title: 'Registration Opens',
        text: 'Participants can register for the sprint.',
      },
      {
        date: '20 Nov',
        title: 'Registration Closes',
        text: 'Final registration deadline.',
      },
      {
        date: '22 Nov',
        title: 'Design Sprint',
        text: 'Participants design and build their solutions.',
      },
    ],
  },

  'startup-idea-challenge': {
    type: 'Competition',
    status: 'Coming Soon',
    title: 'Startup Idea Challenge',
    description:
      'Present your startup idea, receive feedback and explore the next steps toward building a venture.',
    date: '28 November 2026',
    time: '10:00 AM – 4:00 PM',
    mode: 'Campus',
    location: 'Innovation Hub',
    participants: 'Open for Applications',
    organizer: 'INCOMATE Startup Ecosystem',
    about:
      'Startup Idea Challenge gives aspiring founders an opportunity to present early-stage ideas, receive feedback and understand the next steps involved in developing a startup.',
    eligibility: [
      'Open to college students and early founders',
      'Individual or team participation',
      'Idea-stage startups are welcome',
      'No registered company required',
    ],
    timeline: [
      {
        date: '15 Nov',
        title: 'Applications Open',
        text: 'Participants can submit their startup ideas.',
      },
      {
        date: '24 Nov',
        title: 'Applications Close',
        text: 'Final deadline for applications.',
      },
      {
        date: '28 Nov',
        title: 'Idea Challenge',
        text: 'Selected participants present their startup ideas.',
      },
    ],
  },
}


function EventDetails() {
  const { eventId } = useParams()
  const [isCompactRegistration, setIsCompactRegistration] = useState(false)
  


  const event = eventId ? eventData[eventId] : undefined

  useEffect(() => {
    const handleScroll = () => {
      setIsCompactRegistration(window.scrollY > 240)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  

  if (!event) {
    return (
      <section className="min-h-[70vh] bg-[#F6FAF8] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#7838F0]">Event not found</p>
          <h1 className="mt-3 text-3xl font-bold text-[#081018]">
            We couldn&apos;t find this event.
          </h1>
          <p className="mt-4 text-sm leading-6 text-[#505C75]">
            The event may have been removed or the link may be incorrect.
          </p>
          <Link
            to="/events"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white hover:bg-[#6F41D8]"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>
        </div>
      </section>
    )
  }

  const relatedEvents = Object.entries(eventData)
    .filter(([id]) => id !== eventId)
    .slice(0, 3)

  const timelineItems = [
    ...event.timeline,
    {
      date: event.time.split('–')[0]?.trim() || 'Event Day',
      title: 'Showcase & Wrap-up',
      text: 'Final presentations, feedback, closing notes and participation verification.',
    },
  ]

  const experienceCards = [
    {
      number: '01 / DISCOVERY',
      title: 'Problem Solving',
      text: 'Work on practical challenges and develop solutions tailored to real-world friction points and community needs.',
      footer: 'Challenge Tracks Provided',
      icon: Compass,
      tone: 'bg-[#E9E6FF] text-[#7838F0]',
    },
    {
      number: '02 / SYNERGY',
      title: 'Team Collaboration',
      text: 'Work with passionate peers across design, software, product strategy and other disciplines.',
      footer: 'Open Team Formation',
      icon: Users,
      tone: 'bg-[#BEECE0] text-[#234E45]',
    },
    {
      number: '03 / EXECUTION',
      title: 'Build & Experiment',
      text: 'Turn your initial hypotheses into working concepts, interactive prototypes or software demos.',
      footer: 'Rapid Prototyping',
      icon: Layers3,
      tone: 'bg-[#F4F2FF] text-[#6F41D8]',
    },
    {
      number: '04 / PRESENTATION',
      title: 'Showcase Your Work',
      text: 'Present your completed build to peers and mentors and explain your creative and technical decisions.',
      footer: 'Peer Review & Feedback',
      icon: Eye,
      tone: 'bg-[#E7E9EF] text-[#081018]',
    },
  ]

  const participationSteps = [
    ['01', 'Register', 'One-click registration using your INCOMATE profile with instant confirmation.'],
    ['02', 'Form Team', 'Invite teammates or connect with collaborators when team formation is enabled.'],
    ['03', 'Participate', 'Attend the event, follow the schedule and use the provided event resources.'],
    ['04', 'Build & Submit', 'Complete the required work and submit links, files or demos when applicable.'],
    ['05', 'Showcase', 'Present your work and receive the participation record associated with the event.'],
  ]

  return (
    <div className="bg-[#F6FAF8]">
      {/* Existing Event Hero — intentionally preserved */}
      <section className="bg-[#083830] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Events
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#7838F0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide">
                {event.type}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/75">
                {event.status}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
              {event.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              {event.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-sm text-white/75">
              <span className="flex items-center gap-2">
                <CalendarDays size={17} className="text-[#B9AEFF]" />
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={17} className="text-[#B9AEFF]" />
                {event.time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={17} className="text-[#B9AEFF]" />
                {event.location}
              </span>
            </div>
          </div>
        </div>
      </section>

    
      {/* Main event content */}
      <main className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Main content expands to full width after the registration card compacts */}
            <div
              className={`space-y-6 transition-all duration-300 ${
                isCompactRegistration ? 'lg:col-span-12' : 'lg:col-span-8'
              }`}
            >
              <section className="border-t border-[#081018]/8 pt-10">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  Comprehensive Brief
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
                  About the Event
                </h2>
                <p className="mt-5 text-base leading-8 text-[#505C75]">
                  {event.about}
                </p>
              </section>

              {/* Metadata grid */}
              <section className="border-t border-[#081018]/8 pt-10">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {[
                    ['Event Type', event.type, 'Event format and activity type', Code2, 'bg-[#E9E6FF]'],
                    ['Mode', event.mode, 'How participants join the event', MapPin, 'bg-[#BEECE0]'],
                    ['Category', 'Innovation & Technology', 'Skills, ideas and practical creation', Compass, 'bg-[#F4F2FF]'],
                    ['Eligibility', event.eligibility[0], 'Participation requirements', GraduationCap, 'bg-[#E7E9EF]'],
                    ['Participants', event.participants, 'Current event participation status', Users, 'bg-[#F4F2FF]'],
                    ['Credential', 'Participation Certificate', 'Event participation record', BadgeCheck, 'bg-[#BEECE0]'],
                  ].map(([label, value, text, Icon, tone]) => {
                    const MetaIcon = Icon as typeof Code2
                    return (
                      <article
                        key={label as string}
                        className="rounded-xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tone as string}`}
                          >
                            <MetaIcon size={21} className="text-[#7838F0]" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#68707A]">
                              {label as string}
                            </span>
                            <h3 className="mt-1 text-sm font-bold text-[#081018]">
                              {value as string}
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-[#505C75]">
                              {text as string}
                            </p>
                          </div>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </section>

              {/* What to expect */}
              <section className="border-t border-[#081018]/8 pt-10">
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                      Experience Design
                    </span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
                      What to Expect
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-6 text-[#505C75]">
                    Everything you will experience during the event, designed
                    to keep participation practical and collaborative.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {experienceCards.map((item) => {
                    const ExperienceIcon = item.icon
                    return (
                      <article
                        key={item.title}
                        className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div>
                          <div
                            className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.tone}`}
                          >
                            <ExperienceIcon size={23} />
                          </div>
                          <span className="text-[10px] font-bold tracking-[0.12em] text-[#7838F0]">
                            {item.number}
                          </span>
                          <h3 className="mt-1 text-xl font-bold text-[#081018]">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-[#505C75]">
                            {item.text}
                          </p>
                        </div>
                        <div className="mt-5 border-t border-[#081018]/6 pt-4 text-xs font-semibold text-[#505C75]">
                          {item.footer}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </section>

              {/* Event timeline */}
              <section className="border-t border-[#081018]/8 pt-10">
                <div className="mb-10">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                    Chronology
                  </span>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
                    Event Timeline
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#505C75]">
                    A structured breakdown of checkpoints from registration
                    through the final event wrap-up.
                  </p>
                </div>

                <div className="overflow-x-auto pb-4">
                  <div className="relative flex min-w-[780px] items-start justify-between gap-4 px-2">
                    <div className="absolute left-8 right-8 top-5 h-px bg-[#D8DEE7]" />
                    {timelineItems.map((item, index) => (
                      <div
                        key={`${item.title}-${index}`}
                        className="relative z-10 flex w-36 shrink-0 flex-col items-center text-center"
                      >
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow-sm ${
                            index === 0
                              ? 'bg-[#7838F0] text-white'
                              : index === timelineItems.length - 1
                                ? 'bg-[#BEECE0] text-[#234E45]'
                                : 'border-2 border-[#7838F0] bg-white text-[#7838F0]'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="mt-3 rounded bg-[#E9E6FF] px-2 py-1 text-[10px] font-semibold text-[#7838F0]">
                          {item.date}
                        </span>
                        <h3 className="mt-2 text-sm font-bold text-[#081018]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-[#505C75]">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* How participation works */}
              <section className="border-t border-[#081018]/8 pt-10">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                    Process
                  </span>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
                    How Participation Works
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#505C75]">
                    Follow the event-specific flow from registration to
                    participation and showcase.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {participationSteps.map(([number, title, text]) => (
                    <article
                      key={number}
                      className="rounded-xl bg-white p-5 shadow-sm"
                    >
                      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9E6FF] text-xs font-bold text-[#7838F0]">
                        {number}
                      </div>
                      <h3 className="text-sm font-bold text-[#081018]">
                        {title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-[#505C75]">
                        {text}
                      </p>
                      <div className="mt-4 border-t border-[#081018]/6 pt-3 text-[10px] font-semibold text-[#7838F0]">
                        INCOMATE flow
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Rules */}
              <section className="border-t border-[#081018]/8 pt-10">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                    Guidelines
                  </span>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
                    Rules & Requirements
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#505C75]">
                    Clear participation guidance for this event.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    [
                      'Eligibility',
                      'badge',
                      event.eligibility.join(' • '),
                    ],
                    [
                      'Team Requirements',
                      'group',
                      'Team size and collaboration requirements follow the event configuration shown above. If team formation is enabled, participants can join or create a team through INCOMATE.',
                    ],
                    [
                      'Submission Guidelines',
                      'code',
                      'If this event requires a submission, participants should follow the organizer-provided submission format and deadline. Required links or files will appear in the participant dashboard.',
                    ],
                    [
                      'Important Instructions',
                      'info',
                      `Please arrive or join on time, keep your registration details available, and follow the instructions shared by ${event.organizer}.`,
                    ],
                  ].map(([title, icon, text], index) => (
                    <details
                      key={title}
                      open={index === 0}
                      className="group overflow-hidden rounded-xl bg-white shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-bold text-[#081018] transition-colors hover:bg-[#F6FAF8]">
                        <span className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E9E6FF] text-[#7838F0]">
                            {icon === 'badge' ? (
                              <BadgeCheck size={18} />
                            ) : icon === 'group' ? (
                              <UsersRound size={18} />
                            ) : icon === 'code' ? (
                              <Code2 size={18} />
                            ) : (
                              <Info size={18} />
                            )}
                          </span>
                          {title}
                        </span>
                        <ChevronDown
                          size={18}
                          className="shrink-0 text-[#68707A] transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <div className="border-t border-[#081018]/6 px-5 pb-5 pt-4 text-sm leading-7 text-[#505C75]">
                        {text}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Organizer */}
              <section className="border-t border-[#081018]/8 pt-10">
                <div className="mb-7">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                    Community Host
                  </span>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
                    Organized By
                  </h2>
                </div>

                <div className="flex w-full flex-col gap-5 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E9E6FF] text-lg font-extrabold text-[#7838F0]">
                      IN
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-[#081018]">
                          {event.organizer}
                        </h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#BEECE0] px-2.5 py-1 text-[10px] font-semibold text-[#234E45]">
                          <BadgeCheck size={13} />
                          Verified Organizer
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-[#505C75]">
                        Community host for this INCOMATE event. Organizer
                        details, mentor rosters and additional contacts can be
                        managed through the event dashboard.
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/about"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#E7E9EF] px-4 py-2.5 text-sm font-semibold text-[#081018] transition-colors hover:bg-[#DCE0E7]"
                  >
                    Contact Host
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </section>

              {/* Related events */}
              <section className="border-t border-[#081018]/8 pt-10">
                <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                      Discover More
                    </span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
                      More Events You May Like
                    </h2>
                  </div>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#7838F0] hover:text-[#6F41D8]"
                  >
                    View all events
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                  {relatedEvents.map(([id, related]) => (
                    <article
                      key={id}
                      className="flex flex-col justify-between rounded-2xl bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="rounded-md bg-[#E9E6FF] px-2.5 py-1 text-[10px] font-semibold text-[#7838F0]">
                            {related.type}
                          </span>
                          <span className="text-xs text-[#68707A]">
                            {related.date.split(' ').slice(0, 2).join(' ')}
                          </span>
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-[#081018]">
                          {related.title}
                        </h3>
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#505C75]">
                          {related.description}
                        </p>
                      </div>

                      <Link
                        to={`/events/${id}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7838F0]"
                      >
                        Details
                        <ChevronRight size={16} />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            {/* Desktop registration card — transforms on scroll */}
            <aside
              className={`transition-all duration-300 ${
                isCompactRegistration ? 'hidden' : 'lg:col-span-4'
              }`}
            >
              <div
                className={`transition-all duration-300 ${
                  isCompactRegistration
                    ? 'pointer-events-none opacity-0 lg:h-[120px]'
                    : 'opacity-100'
                }`}
              >
                <div className="sticky top-28 rounded-2xl bg-[#083830] p-6 text-white shadow-xl sm:p-7">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                    Registration
                  </span>

                  <h2 className="mt-3 text-2xl font-bold tracking-tight">
                    Ready to participate?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Register now to participate in this INCOMATE activity.
                  </p>

                  <div className="mt-6 space-y-3 border-y border-white/10 py-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-white/55">Format</span>
                      <span className="text-sm font-semibold">{event.mode}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-white/55">Participants</span>
                      <span className="text-right text-sm font-semibold">
                        {event.participants}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-white/55">Organizer</span>
                      <span className="text-right text-sm font-semibold">
                        {event.organizer}
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/signup"
                    className="group mt-6 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
                  >
                    Register for Event
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
                    <Users size={14} />
                    Login required for registration
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Mobile/desktop floating registration bar — same interaction pattern as Opportunity Details */}
        <div
          className={`pointer-events-none fixed inset-x-0 top-[76px] z-40 px-3 sm:px-5 transition-all duration-300 ${
            isCompactRegistration
              ? 'translate-y-3 opacity-100'
              : '-translate-y-5 opacity-0'
          }`}
        >
          <div className="mx-auto max-w-7xl rounded-xl border border-[#081018]/8 bg-white/95 p-2.5 shadow-lg backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#083830] text-white sm:flex">
                <CalendarDays size={17} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-[#081018] sm:text-sm">
                  {event.title}
                </p>
                <p className="truncate text-[10px] text-[#68707A] sm:text-xs">
                  {event.date} • {event.mode} • {event.participants}
                </p>
              </div>

              

              <Link
                to="/signup"
                className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#7838F0] px-3.5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#6F41D8] sm:px-5 sm:text-sm"
              >
                <span className="hidden sm:inline">Register Now</span>
                <span className="sm:hidden">Register</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <section className="mb-16 rounded-3xl bg-[#052721] p-8 text-white shadow-lg sm:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BEECE0]">
              Take The Next Step
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to Participate?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#BEECE0]/90">
              Register for this event and take the next step in your learning
              and innovation journey.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#6F41D8]"
              >
                Register Now
                <ArrowRight size={17} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                Browse More Events
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default EventDetails
