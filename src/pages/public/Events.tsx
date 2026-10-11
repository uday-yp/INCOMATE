import { useMemo, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  
  FileUp,
  GraduationCap,
  MapPin,
  Plus,
  Rocket,
  Search,
  Users,
  UserRoundCheck,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'

type Event = {
  id: string
  type: string
  category: string
  status: string
  statusStyle: 'green' | 'orange' | 'purple' | 'neutral'
  date: string
  mode: string
  location: string
  title: string
  description: string
  tags: string[]
  registrations?: string
  featured?: boolean
  icon: 'code' | 'workshop' | 'competition' | 'innovation' | 'meetup'
}

const events: Event[] = [
  {
    id: 'campus-hack-challenge',
    type: 'Hackathon',
    category: 'Hackathons',
    status: 'Registration Open',
    statusStyle: 'green',
    date: '12 Nov',
    mode: 'Hybrid',
    location: 'Campus Lab',
    title: 'Campus Hack Challenge',
    description:
      'Solve real-world challenges with multidisciplinary teams over a weekend sprint. Focus areas include student campus utility apps, sustainable footprint tools, and collaborative learning utilities.',
    tags: ['Teams: 2-4', 'Mentorship Included', 'Physical + Discord Stream'],
    registrations: '42 Teams Registered',
    featured: false,
    icon: 'code',
  },
  {
    id: 'future-tech-workshop',
    type: 'Workshop',
    category: 'Workshops',
    status: 'Limited Seats',
    statusStyle: 'orange',
    date: '18 Nov',
    mode: 'Online Session',
    location: '',
    title: 'Future Tech Workshop',
    description:
      'Hands-on guided walkthrough covering modern web standards, APIs, and state systems. Build an active prototype with live mentor guidance.',
    tags: ['2h Guided Session'],
    icon: 'workshop',
  },
  {
    id: 'design-build-sprint',
    type: 'Competition',
    category: 'Competitions',
    status: 'Registration Open',
    statusStyle: 'green',
    date: '22 Nov',
    mode: 'Online',
    location: '',
    title: 'Design & Build Sprint',
    description:
      'Rapid UI/UX prototyping sprint focusing on accessible product interaction and user research. Complete structured design challenges with real user criteria.',
    tags: ['Solo & Pairs'],
    icon: 'competition',
  },
  {
    id: 'startup-idea-challenge',
    type: 'Innovation Challenge',
    category: 'Cultural & Other',
    status: 'Open Call',
    statusStyle: 'purple',
    date: '29 Nov',
    mode: 'Offline',
    location: 'Main Auditorium',
    title: 'Startup Idea Challenge',
    description:
      'Present early-stage concepts, gather peer feedback, and validate working hypotheses in front of ecosystem mentors and student community founders.',
    tags: ['Peer Review Format'],
    icon: 'innovation',
  },
  {
    id: 'code-arena',
    type: 'Coding Contest',
    category: 'Competitions',
    status: 'Upcoming',
    statusStyle: 'neutral',
    date: '05 Dec',
    mode: 'Online',
    location: '',
    title: 'Code Arena',
    description:
      'Algorithmic problem-solving round testing data structures and efficient execution. Timed challenge sets with automated unit verification.',
    tags: ['3 Hours', 'Live Scoreboard'],
    icon: 'code',
  },
  {
    id: 'innovation-meetup',
    type: 'Seminar & Meetup',
    category: 'Seminars',
    status: 'Open to All',
    statusStyle: 'green',
    date: '10 Dec',
    mode: 'Hybrid',
    location: '',
    title: 'Innovation Meetup',
    description:
      'Casual community gathering of builders, creators, and mentors sharing project updates, open-source repositories, and upcoming team openings.',
    tags: ['Networking Session'],
    icon: 'meetup',
  },
]

const categories = [
  'All Events',
  'Hackathons',
  'Competitions',
  'Workshops',
  'Seminars',
  'Webinars',
  'Conferences',
  'Cultural & Other',
]

const getIcon = (icon: Event['icon']) => {
  if (icon === 'code') return Code2
  if (icon === 'workshop') return Wrench
  if (icon === 'competition') return Compass
  if (icon === 'innovation') return Rocket
  return Users
}

function Events() {
  const [search, setSearch] = useState('')
  const [eventType, setEventType] = useState('all')
  const [eventMode, setEventMode] = useState('all')
  const [eventDate, setEventDate] = useState('upcoming')
  const [activeCategory, setActiveCategory] = useState('All Events')
  const [bookmarked, setBookmarked] = useState(false)

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase()

    return events.filter((event) => {
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)

      const matchesType =
        eventType === 'all' ||
        event.type.toLowerCase().includes(eventType)

      const matchesMode =
        eventMode === 'all' ||
        event.mode.toLowerCase().includes(eventMode)

      const matchesCategory =
        activeCategory === 'All Events' ||
        event.category === activeCategory

      return (
        matchesSearch &&
        matchesType &&
        matchesMode &&
        matchesCategory &&
        eventDate === 'upcoming'
      )
    })
  }, [activeCategory, eventDate, eventMode, eventType, search])

  const resetFilters = () => {
    setSearch('')
    setEventType('all')
    setEventMode('all')
    setEventDate('upcoming')
    setActiveCategory('All Events')
  }

  const featuredEvent = events[0]
  const upcomingEvents = filteredEvents.filter(
    (event) => event.id !== featuredEvent.id,
  )

  return (
    <div className="bg-[#F6FAF8]">
      {/* Hero — kept from the existing Events page */}
      <section className="border-b border-[#081018]/6">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#E9E6FF]/70 px-3.5 py-1.5 text-[#7838F0]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7838F0]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] sm:text-xs">
                Campus & Ecosystem Activities
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-[-0.045em] text-[#081018] sm:text-5xl lg:text-[3.75rem]">
              Discover Events.
              <br />
              <span className="text-[#7838F0]">
                Find Your Next Opportunity.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#505C75] sm:text-lg sm:leading-8">
              Explore hackathons, competitions, workshops, seminars, webinars
              and other events happening across the INCOMATE ecosystem.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#events-catalog"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
              >
                Explore Events
                <ArrowDown size={17} />
              </a>

              <Link
                to="/signup"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#081018] shadow-sm transition-colors hover:bg-[#F4F2FF] hover:text-[#7838F0]"
              >
                Create an Event
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 sm:gap-12">
              <div>
                <p className="text-2xl font-bold tracking-tight text-[#081018]">
                  140+
                </p>
                <p className="mt-1 text-xs text-[#68707A]">Active Sessions</p>
              </div>

              <div className="h-10 w-px bg-[#081018]/10" />

              <div>
                <p className="text-2xl font-bold tracking-tight text-[#081018]">
                  32
                </p>
                <p className="mt-1 text-xs text-[#68707A]">Upcoming Events</p>
              </div>

              <div className="h-10 w-px bg-[#081018]/10" />

              <div>
                <p className="text-2xl font-bold tracking-tight text-[#081018]">
                  18
                </p>
                <p className="mt-1 text-xs text-[#68707A]">Organizers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 sm:px-8 lg:px-10">
        {/* Category navigation — Stitch style */}
        <section className="sticky top-20 z-30 -mx-1 mb-6 w-[calc(100%+0.5rem)] rounded-xl bg-white py-3 shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto px-4">
            {categories.map((category) => {
              const active = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'bg-[#7838F0] text-white'
                      : 'bg-[#F6F7FA] text-[#505C75] hover:bg-[#E7E9EF]'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </section>

        {/* Discovery & filter bar */}
        <section id="events-catalog" className="mb-12 w-full">
          <div className="rounded-xl bg-white p-4 shadow-sm sm:p-5">
            <div className="grid grid-cols-1 items-center gap-3 md:grid-cols-2 lg:grid-cols-12">
              <div className="relative lg:col-span-4">
                <Search
                  size={19}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#68707A]"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search events, keywords, or topics..."
                  className="w-full rounded-lg bg-[#F6FAF8] py-2.5 pl-10 pr-4 text-sm text-[#081018] outline-none placeholder:text-[#68707A] focus:ring-2 focus:ring-[#7838F0]/20"
                />
              </div>

              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-lg bg-[#F6FAF8] px-3.5 py-2.5 text-sm text-[#081018] outline-none focus:ring-2 focus:ring-[#7838F0]/20 lg:col-span-2"
                aria-label="Event Type"
              >
                <option value="all">All Types</option>
                <option value="hackathon">Hackathon</option>
                <option value="competition">Competition</option>
                <option value="workshop">Workshop</option>
                <option value="seminar">Seminar</option>
              </select>

              <select
                value={eventMode}
                onChange={(e) => setEventMode(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-lg bg-[#F6FAF8] px-3.5 py-2.5 text-sm text-[#081018] outline-none focus:ring-2 focus:ring-[#7838F0]/20 lg:col-span-2"
                aria-label="Mode"
              >
                <option value="all">All Modes</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>

              <select
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-lg bg-[#F6FAF8] px-3.5 py-2.5 text-sm text-[#081018] outline-none focus:ring-2 focus:ring-[#7838F0]/20 lg:col-span-2"
                aria-label="Date"
              >
                <option value="upcoming">Upcoming</option>
                <option value="weekend">This Weekend</option>
                <option value="month">This Month</option>
                <option value="30days">Next 30 Days</option>
              </select>

              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex w-full items-center justify-center gap-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-[#505C75] transition-colors hover:bg-[#F4F2FF] hover:text-[#7838F0] lg:col-span-2"
              >
                <ArrowDown size={17} className="rotate-45" />
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="mb-16 w-full">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#081018]">
                Featured Event
              </h2>
              <p className="mt-1 text-sm text-[#505C75]">
                Curated spotlight from across the ecosystem
              </p>
            </div>

            <span className="hidden items-center gap-1.5 rounded-full bg-[#F4F2FF] px-3 py-1 text-xs font-semibold text-[#7838F0] sm:inline-flex">
              <CheckCircle2 size={14} />
              Verified Program
            </span>
          </div>

          <div className="overflow-hidden rounded-xl bg-white shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative min-h-[280px] overflow-hidden lg:col-span-5">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuuFGZkcSKlEfeVoyp84Dtt9Mab062SWgnu7CsExTG1Xd-OBFF0d_ssdiGFM0CAGJkEN0A83httgAMmCsddTognWVZwDvh8dLSUsLmUUfkgJwUPCvsBt4UgjMys2YDUxEk7kH2AJ9HSX7y_mp5hBLkzU3esM6swTC9CtqUxCJf-kpO0aq7gmnDeG9R2zzAkkwm3_aEtbXqagekIdo_1ju40KSHfZOPpN_r1ggB2lxPlBBfghu7QV4"
                  alt="Students collaborating in an innovation lab"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/85 via-transparent to-[#0F1722]/30" />

                <div className="absolute left-4 right-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#7838F0] px-3 py-1 text-xs font-semibold text-white">
                    Featured Spotlight
                  </span>
                  <span className="rounded-full bg-[#059669]/90 px-3 py-1 text-xs font-semibold text-white">
                    Open Registration
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-[#BEECE0]">
                    Campus & Community Sprint
                  </p>
                  <p className="mt-1 text-xl font-bold">
                    48-Hour Prototyping Cycle
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-6 p-6 sm:p-8 lg:col-span-7 lg:p-10">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#F6F7FA] px-3 py-1 text-xs font-bold uppercase text-[#7838F0]">
                      Annual Flagship
                    </span>
                    <span className="text-xs text-[#68707A]">•</span>
                    <span className="text-sm text-[#505C75]">
                      Inter-disciplinary Cohort
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#081018]">
                      INNOVATE 2026
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-[#6F41D8]">
                      Build ideas. Solve problems. Create impact.
                    </p>
                  </div>

                  <p className="text-base leading-7 text-[#505C75]">
                    A collaborative 48-hour prototype challenge bringing
                    together student designers, engineers, and creators to
                    develop working solutions for campus and community needs.
                    Form teams, brainstorm rapid hypotheses, and build
                    tangible submissions with guided peer evaluations.
                  </p>

                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F6F7FA] px-3 py-1.5 text-xs font-medium text-[#081018]">
                      <CalendarDays size={15} className="text-[#7838F0]" />
                      24-26 Oct • Online & Campus Hubs
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F6F7FA] px-3 py-1.5 text-xs font-medium text-[#081018]">
                      <Users size={15} className="text-[#7838F0]" />
                      Format: Team Sprint (2-4 Members)
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F6F7FA] px-3 py-1.5 text-xs font-medium text-[#081018]">
                      <GraduationCap size={15} className="text-[#7838F0]" />
                      Eligibility: Open to All Students
                    </span>
                  </div>
                </div>

                <div className="-mx-6 -mb-6 flex flex-col gap-4 bg-[#EDF4FF]/50 p-6 sm:-mx-8 sm:-mb-8 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:-mx-10 lg:-mb-10 lg:p-10">
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/events/${featuredEvent.id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6F41D8]"
                    >
                      View Event Details
                      <ArrowRight size={17} />
                    </Link>

                    <button
                      type="button"
                      aria-label="Bookmark Event"
                      onClick={() => setBookmarked((value) => !value)}
                      className={`rounded-xl bg-white p-3 shadow-sm transition-colors hover:bg-[#F4F2FF] ${
                        bookmarked ? 'text-[#7838F0]' : 'text-[#505C75]'
                      }`}
                    >
                      {bookmarked ? (
                        <BookmarkCheck size={20} />
                      ) : (
                        <Bookmark size={20} />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#505C75]">
                    <span className="h-2 w-2 rounded-full bg-[#059669]" />
                    Registration ends in 18 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-20 w-full">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#081018]">
                Upcoming Events
              </h2>
              <p className="mt-1 text-base text-[#505C75]">
                Browse upcoming sessions, coding challenges, and collaborative
                meetups.
              </p>
            </div>
            <span className="text-xs text-[#68707A]">
              Showing {upcomingEvents.length || 0} ecosystem activities
            </span>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event, index) => {
                const Icon = getIcon(event.icon)
                const prominent = index === 0

                return (
                  <article
                    key={event.id}
                    className={`flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      prominent ? 'lg:col-span-2 sm:p-8' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full bg-[#7838F0]/10 px-3 py-1 text-xs font-bold uppercase text-[#7838F0]">
                          {event.type}
                        </span>
                        <span
                          className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                            event.statusStyle === 'green'
                              ? 'bg-[#BEECE0] text-[#234E45]'
                              : event.statusStyle === 'orange'
                                ? 'bg-[#FFDBC7] text-[#733500]'
                                : event.statusStyle === 'purple'
                                  ? 'bg-[#E9E6FF] text-[#7838F0]'
                                  : 'bg-[#E7E9EF] text-[#505C75]'
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>

                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-1.5 text-sm text-[#505C75]">
                          <CalendarDays
                            size={15}
                            className="text-[#7838F0]"
                          />
                          <span className="font-semibold text-[#081018]">
                            {event.date}
                          </span>
                          <span>•</span>
                          <span>{event.mode}</span>
                          {event.location && (
                            <>
                              <span>•</span>
                              <MapPin size={14} />
                              <span>{event.location}</span>
                            </>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-[#081018]">
                          {event.title}
                        </h3>
                      </div>

                      <p
                        className={`text-sm leading-6 text-[#505C75] ${
                          prominent ? 'max-w-3xl text-base' : ''
                        }`}
                      >
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded bg-[#F6FAF8] px-2.5 py-1 text-xs font-medium text-[#505C75]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#081018]/6 pt-5">
                      <div className="flex items-center gap-2 text-xs text-[#505C75]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7838F0]/10">
                          <Icon size={15} className="text-[#7838F0]" />
                        </span>
                        {event.registrations || 'INCOMATE Event'}
                      </div>

                      <Link
                        to={`/events/${event.id}`}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${
                          prominent
                            ? 'bg-[#7838F0] text-white hover:bg-[#6F41D8]'
                            : 'bg-[#F6F7FA] text-[#081018] hover:bg-[#E7E9EF]'
                        }`}
                      >
                        View Event
                        <ChevronRight size={15} />
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="rounded-xl bg-white px-6 py-14 text-center shadow-sm">
              <Search size={30} className="mx-auto text-[#7838F0]" />
              <h3 className="mt-4 text-lg font-bold text-[#081018]">
                No events found
              </h3>
              <p className="mt-2 text-sm text-[#68707A]">
                Try a different search term, category, or filter.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-lg bg-[#7838F0] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6F41D8]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* More Than Just an Event */}
        <section className="mb-20 w-full rounded-xl bg-[#F6FAF8] p-8 sm:p-12">
          <div className="mb-12 max-w-3xl">
            <span className="inline-flex rounded-full bg-[#E9E6FF] px-3 py-1 text-xs font-semibold text-[#7838F0]">
              Core Value
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#081018]">
              More Than Just an Event
            </h2>
            <p className="mt-2 text-base leading-7 text-[#505C75] sm:text-lg">
              Participating through INCOMATE gives you a structured way to
              learn, connect, and document your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: '1.',
                title: 'Discover',
                description:
                  'Find events, workshops, and activities tailored to your skillset and curiosity. Filter through vetted opportunities across departments and domains.',
                label: 'Targeted Recommendations',
                icon: Compass,
                green: false,
              },
              {
                number: '2.',
                title: 'Participate',
                description:
                  'Seamless registration and direct access to event guidelines, resources, and live schedules without fragmented third-party signups.',
                label: 'Zero Friction Enrollment',
                icon: UserRoundCheck,
                green: true,
              },
              {
                number: '3.',
                title: 'Collaborate',
                description:
                  'Form cross-disciplinary teams, meet co-creators, and build with fellow students from engineering, design, science, and business.',
                label: 'Team Matchmaking Hub',
                icon: Users,
                green: false,
              },
              {
                number: '4.',
                title: 'Showcase',
                description:
                  'Submit functional projects, track verified milestones, and build a lasting portfolio directly linked to your student credentials.',
                label: 'Verified Ecosystem Record',
                icon: CheckCircle2,
                green: true,
              },
            ].map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.number}
                  className="flex flex-col justify-between rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="space-y-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        item.green
                          ? 'bg-[#BEECE0] text-[#234E45]'
                          : 'bg-[#F4F2FF] text-[#7838F0]'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#081018]">
                      {item.number} {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#505C75]">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-[#081018]/6 pt-4">
                    <span
                      className={`text-xs font-semibold ${
                        item.green ? 'text-[#3C665D]' : 'text-[#7838F0]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* Event Journey */}
        <section className="mb-20 w-full">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Step-by-Step Pathway
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#081018]">
              How Participation Works
            </h2>
            <p className="mt-2 text-base text-[#505C75]">
              A transparent, verified sequence designed to keep participants
              focused on building and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {[
              ['01', 'Discover', 'Browse verified campus challenges and technical sessions tailored to your focus areas.', Search],
              ['02', 'Register', 'Simple one-click registration with team invites or solo participant options.', FileUp],
              ['03', 'Participate', 'Attend briefings, workshops, and interactive sprint rounds with active mentor check-ins.', Code2],
              ['04', 'Submit', 'Upload repository links, presentations, prototype demos, or live URLs securely.', FileUp],
              ['05', 'Showcase', 'Receive participation records and showcase your work permanently on your profile.', CheckCircle2],
            ].map(([number, title, description, Icon]) => {
              const StepIcon = Icon as typeof Search

              return (
                <article
                  key={number as string}
                  className="flex flex-col rounded-xl bg-white p-5 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#7838F0]/30">
                      {number as string}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4F2FF] text-[#7838F0]">
                      <StepIcon size={16} />
                    </span>
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-[#081018]">
                    {title as string}
                  </h3>
                  <p className="text-sm leading-6 text-[#505C75]">
                    {description as string}
                  </p>
                </article>
              )
            })}
          </div>
        </section>

        {/* Organizer CTA */}
        <section className="mb-20 w-full">
          <div className="relative overflow-hidden rounded-xl bg-[#052721] p-8 text-white shadow-xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#7838F0]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#3C665D]/30 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="mb-4 inline-block rounded-full bg-[#3C665D]/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#BEECE0]">
                For Clubs, Labs & Institutions
              </span>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Have an Event to Organize?
              </h2>

              <p className="mt-4 mb-8 max-w-2xl text-base leading-7 text-[#BEECE0]/90 sm:text-lg">
                Create and manage events, registrations, participants,
                submissions and certificates through INCOMATE. Simplify
                coordination, track attendee progress, and give participants
                verified credentials.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-[#0F1722] shadow-md transition-colors hover:bg-[#E7E9EF]"
                >
                  <Plus size={18} className="text-[#7838F0]" />
                  Create an Event
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl px-6 py-4 text-sm font-semibold text-[#BEECE0] transition-colors hover:bg-white/10 hover:text-white"
                >
                  Learn About Host Tools
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full pb-20">
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F2FF] text-[#7838F0] shadow-sm">
              <Rocket size={28} />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#081018] sm:text-4xl">
              Find Something Worth Participating In.
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#505C75] sm:text-lg">
              Discover events, meet people, build projects and take part in
              experiences that help you grow throughout your academic and
              engineering journey.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#events-catalog"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-8 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#6F41D8] sm:w-auto"
              >
                <Search size={18} />
                Explore Events
              </a>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory('All Events')
                  document
                    .getElementById('events-catalog')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#F6F7FA] px-8 py-4 text-sm font-semibold text-[#081018] transition-colors hover:bg-[#E7E9EF] sm:w-auto"
              >
                Browse All Categories
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Events
