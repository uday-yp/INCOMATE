import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Compass,
  FileText,
  Gauge,
 
  LogOut,
  Menu,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Trophy,
  
  UserCircle,
  Users,
 
  BriefcaseBusiness,
  CheckCircle2,
  
  MapPin,
  ExternalLink,
} from 'lucide-react'

type DashboardRole = 'student' | 'startup'

interface EcosystemDashboardProps {
  role: DashboardRole
  children?: React.ReactNode
}

const studentNavItems = [
  { label: 'Overview', icon: Gauge, href: '/student/dashboard' },
  { label: 'Events', icon: CalendarDays, href: '/events' },
  { label: 'Opportunities', icon: Compass, href: '/opportunities' },
  { label: 'My Registrations', icon: ShieldCheck, href: '/student/registrations' },
  { label: 'My Applications', icon: FileText, href: '/student/applications' },
  { label: 'Submissions', icon: FileText, href: '/student/submissions' },
]

const startupNavItems = [
  { label: 'Overview', icon: Gauge, href: '/startup/dashboard' },
  { label: 'Events', icon: CalendarDays, href: '/events' },
  { label: 'Opportunities', icon: Compass, href: '/opportunities' },
  { label: 'My Registrations', icon: ShieldCheck, href: '/startup/registrations' },
  { label: 'My Applications', icon: FileText, href: '/startup/applications' },
  { label: 'Submissions', icon: FileText, href: '/startup/submissions' },
]

const secondaryItems = [
  { label: 'Discover', icon: Compass, href: '/events' },
  { label: 'Profile', icon: UserCircle, href: '' },
  { label: 'Settings', icon: Settings, href: '' },
]

const activities = [
  {
    status: 'Registered',
    tag: 'Flagship Hackathon',
    title: 'INNOVATE 2026: Collegiate Hackathon',
    date: '18 October 2026 • 09:00 IST',
    place: 'INCOMATE Campus Arena',
    extra: 'Team: CodeCraft (4/4 members)',
    statusNote: 'Check-in pass ready',
    action: 'Team Space',
    icon: Users,
  },
  {
    status: 'Registered',
    tag: 'Technical Masterclass',
    title: 'Future Tech Workshop: Web3 & Distributed AI',
    date: '22 October 2026 • 16:30 IST',
    place: 'INCOMATE Virtual Studio Room B',
    extra: '',
    statusNote: '',
    action: 'Join Room',
    icon: ExternalLink,
  },
  {
    status: 'Application Submitted',
    tag: 'Prototyping Residency',
    title: 'Campus Innovation Sprint: Hardware & IoT',
    date: '02 November 2026 • Physical Lab',
    place: 'Jury review in progress',
    extra: '',
    statusNote: 'Decision expected Oct 26',
    action: 'View Submission',
    icon: FileText,
  },
]

const opportunities = [
  {
    type: 'Innovation Grant',
    title: 'Campus Innovation Challenge',
    organization: 'INCOMATE Innovation Network',
    deadline: '12 October 2026',
    note: 'Open call • 32 spots',
  },
  {
    type: 'Fellowship',
    title: 'Student Startup Fellowship',
    organization: 'Innovation Hub',
    deadline: '18 October 2026',
    note: 'Mentorship + ecosystem access',
  },
  {
    type: 'Hackathon',
    title: 'Hackathon 2026',
    organization: 'Tech Community',
    deadline: '24 October 2026',
    note: 'Teams of 2–4',
  },
]
function EcosystemDashboard({
  role,
  children,
}: EcosystemDashboardProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const location = useLocation()

  const isStartup = role === 'startup'
  const profilePath = isStartup ? '/startup/profile' : '/student/profile'
  const displayName = isStartup ? 'LearnLoop' : 'Aarav Sharma'
  const roleLabel = isStartup ? 'Startup / Builder' : 'Student / Builder'
  const verifiedLabel = isStartup ? 'Verified Startup' : 'Verified Student'
  const profileInitial = isStartup ? 'L' : 'A'
  const navItems = isStartup ? startupNavItems : studentNavItems

  const sidebar = (
    <aside className="flex h-full w-64 flex-col justify-between bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex h-16 shrink-0 items-center gap-2 border-b border-[#E4EAE6] px-6">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7838F0] text-sm font-extrabold text-white">
              I
            </span>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-[#141c25]">INCOMATE</div>
              <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#68707A]">
                Participant
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#68707A]">
            Main
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = location.pathname === item.href ||
                (item.href === '/events' && location.pathname.startsWith('/events')) ||
                (item.href === '/opportunities' && location.pathname.startsWith('/opportunities'))

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? 'bg-[#7838F0] text-white'
                      : 'text-[#4a4455] hover:bg-[#F4F2FF] hover:text-[#141c25]'
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="my-4 h-px bg-[#E4EAE6]" />

          <div className="px-2 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#68707A]">
            Secondary
          </div>

          <nav className="space-y-1">
            {secondaryItems.map((item) => {
              const Icon = item.icon
              const href = item.label === 'Profile' ? profilePath : item.label === 'Discover' ? '/events' : isStartup ? '/startup/settings' : '/student/settings'
              const active = location.pathname === href

              return (
                <Link
                  key={item.label}
                  to={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${active ? 'bg-[#7838F0] text-white' : 'text-[#4a4455] hover:bg-[#F4F2FF] hover:text-[#141c25]'}`}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      <div className="space-y-1 border-t border-[#E4EAE6] p-4">
        <Link
          to="/about"
          className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-semibold text-[#4a4455] hover:bg-[#F4F2FF]"
        >
          <CircleHelp size={19} />
          Help & Support
        </Link>
        <Link
          to="/"
          className="flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-semibold text-[#ba1a1a] hover:bg-[#ffdad6]"
        >
          <LogOut size={19} />
          Logout
        </Link>
      </div>
    </aside>
  )

  return (
    <div className="min-h-screen bg-[#F6FAF8] text-[#141c25]">
      <div className="fixed inset-y-0 left-0 z-50 hidden lg:block">{sidebar}</div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-[#081018]/35"
          />
          <div className="relative h-full w-72">{sidebar}</div>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="fixed left-0 right-0 top-0 z-40 h-16 border-b border-[#E4EAE6] bg-white/90 px-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:px-6 lg:left-64">
          <div className="flex h-full items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#141c25] hover:bg-[#F4F2FF] lg:hidden"
              aria-label="Open dashboard menu"
            >
              <Menu size={21} />
            </button>

            <div className="relative hidden w-full max-w-md sm:block">
              <Search size={19} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#68707A]" />
              <input
                type="search"
                placeholder="Search events, opportunities, teams..."
                className="w-full rounded-xl bg-[#edf4ff] py-2.5 pl-10 pr-4 text-sm text-[#141c25] outline-none transition focus:bg-white focus:ring-2 focus:ring-[#7838F0]/30"
              />
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/"
                className="hidden items-center gap-1 text-xs font-bold text-[#3c665d] hover:text-[#083830] xl:flex"
              >
                <ArrowLeft size={16} />
                Back to Public Portal
              </Link>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotificationsOpen((value) => !value)}
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl text-[#4a4455] hover:bg-[#F4F2FF]"
                  aria-label="Notifications"
                >
                  <Bell size={21} />
                  <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#7838F0] text-[9px] font-extrabold text-white">
                    4
                  </span>
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 top-12 w-[calc(100vw-2rem)] max-w-96 rounded-2xl border border-[#E4EAE6] bg-white p-4 shadow-[0_12px_32px_rgba(8,16,24,0.10)]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-extrabold">Notifications</p>
                      <span className="rounded-full bg-[#beece0] px-2 py-1 text-[10px] font-bold text-[#234e45]">4 New</span>
                    </div>
                    <div className="mt-3 space-y-2">
                      {[
                        'Your event registration is confirmed.',
                        'A submission deadline is approaching.',
                        'Your certificate is now available.',
                        'Your team has been updated.',
                      ].map((message) => (
                        <div key={message} className="rounded-xl bg-[#edf4ff] p-3 text-xs font-semibold text-[#4a4455]">
                          {message}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="hidden h-8 w-px bg-[#E4EAE6] sm:block" />

              <Link to={profilePath} className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7838F0] text-xs font-extrabold text-white">
                  {profileInitial}
                </div>
                <div className="hidden text-left md:block">
                  <p className="text-xs font-bold leading-tight text-[#141c25]">{displayName}</p>
                  <p className="mt-0.5 text-[10px] font-semibold leading-tight text-[#3c665d]">{roleLabel}</p>
                </div>
                <UserCircle size={22} className="hidden text-[#7838F0] md:block" />
              </Link>
            </div>
          </div>
        </header>

       <main className="min-h-screen bg-[#F6FAF8] px-4 pb-10 pt-20 sm:px-6 lg:px-8">
  {children ? (
    <div className="mx-auto max-w-[1500px]">
      {children}
    </div>
  ) : (
    <div className="mx-auto max-w-[1500px] space-y-8">
            <section className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow-sm md:flex-row md:items-end md:justify-between md:p-7">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#beece0] px-3 py-1.5 text-[11px] font-bold text-[#234e45]">
                    <CheckCircle2 size={14} />
                    {verifiedLabel}
                  </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-[#141c25] sm:text-3xl">
                  Good morning, {displayName}.
                </h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#505C75]">
                  Here&apos;s what&apos;s happening across your INCOMATE journey today.
                  Your events, opportunities and ecosystem activity are all in one place.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Link
                  to={profilePath}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#edf4ff] px-4 py-2.5 text-sm font-semibold text-[#141c25] hover:bg-[#F4F2FF]"
                >
                  <UserCircle size={17} />
                  Profile
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#edf4ff] px-4 py-2.5 text-sm font-semibold text-[#141c25] hover:bg-[#F4F2FF]"
                >
                  <ExternalLink size={17} />
                  Public Profile
                </button>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  icon: CalendarDays,
                  eyebrow: 'Active Regs Open',
                  title: 'Explore Events',
                  text: 'Discover hackathons, sprints & technical masterclasses.',
                  footer: '8 deadlines this week',
                  href: '/events',
                },
                {
                  icon: BriefcaseBusiness,
                  eyebrow: 'Grants & Fellowships',
                  title: 'Find Opportunities',
                  text: 'Explore innovation grants, incubators & programs.',
                  footer: '12 active opportunities',
                  href: '/opportunities',
                },
                {
                  icon: Users,
                  eyebrow: 'Collaboration',
                  title: 'Squads & Teams',
                  text: 'Find skilled collaborators or manage your current teams.',
                  footer: '1 pending team invite',
                  href: '/student/teams',
                },
                {
                  icon: Trophy,
                  eyebrow: 'Verifiable Records',
                  title: 'Certificates',
                  text: 'View verified credentials and participation records.',
                  footer: '2 official records ready',
                  href: '/student/certificates',
                },
              ].map((card, index) => {
                const Icon = card.icon
                const backgrounds = ['bg-[#7838F0] text-white', 'bg-[#beece0] text-[#234e45]', 'bg-[#E9E6FF] text-[#6F41D8]', 'bg-[#e7eefa] text-[#141c25]']

                return (
                  <Link
                    key={card.title}
                    to={card.href}
                    className="group flex min-h-56 flex-col justify-between overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${backgrounds[index]}`}>
                        <Icon size={23} />
                      </div>
                      <ArrowRight size={19} className="text-[#68707A] transition group-hover:translate-x-0.5 group-hover:text-[#7838F0]" />
                    </div>
                    <div className="mt-6">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6F41D8]">{card.eyebrow}</span>
                      <h3 className="mt-1 text-lg font-semibold text-[#141c25]">{card.title}</h3>
                      <p className="mt-1 text-sm leading-5 text-[#505C75]">{card.text}</p>
                    </div>
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#059669]">
                      <Sparkles size={14} />
                      {card.footer}
                    </div>
                  </Link>
                )
              })}
            </section>

            <div className="grid grid-cols-1 items-start gap-8 xl:grid-cols-12">
              <div className="min-w-0 space-y-8 xl:col-span-8">
                <section className="space-y-5 rounded-xl bg-white p-5 shadow-sm sm:p-6 lg:p-7">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7838F0]">Timeline & Schedules</span>
                      <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#141c25]">Your Upcoming Activities</h2>
                    </div>
                    <Link to="/events" className="inline-flex items-center gap-1 text-sm font-semibold text-[#7838F0]">
                      View All Schedules <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {activities.map((item) => {
                      const ActionIcon = item.icon
                      return (
                        <article key={item.title} className="rounded-xl bg-[#edf4ff] p-5 transition hover:bg-[#F4F2FF]">
                          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${item.status === 'Registered' ? 'bg-[#beece0] text-[#234e45]' : 'bg-[#E9E6FF] text-[#6F41D8]'}`}>
                                  {item.status}
                                </span>
                                <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#505C75]">
                                  {item.tag}
                                </span>
                              </div>

                              <h3 className="mt-3 text-base font-bold text-[#141c25] sm:text-lg">{item.title}</h3>

                              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#505C75]">
                                <span className="inline-flex items-center gap-1.5"><CalendarDays size={15} />{item.date}</span>
                                <span className="inline-flex items-center gap-1.5"><MapPin size={15} />{item.place}</span>
                                {item.extra && <span className="inline-flex items-center gap-1.5"><Users size={15} />{item.extra}</span>}
                                {item.statusNote && <span className="inline-flex items-center gap-1.5 text-[#059669]"><CheckCircle2 size={15} />{item.statusNote}</span>}
                              </div>
                            </div>

                            <Link
                              to={item.status === 'Application Submitted' ? '/student/applications' : '/student/registrations'}
                              className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-[#141c25] shadow-sm hover:bg-[#E9E6FF]"
                            >
                              {item.action}
                              <ActionIcon size={15} />
                            </Link>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                </section>

                <section className="space-y-5 rounded-xl bg-white p-5 shadow-sm sm:p-6 lg:p-7">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3c665d]">Funding & Ecosystem</span>
                      <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#141c25]">Opportunities For You</h2>
                    </div>
                    <span className="rounded-full bg-[#edf4ff] px-3 py-1.5 text-[10px] font-semibold text-[#505C75]">
                      Curated from your profile
                    </span>
                  </div>

                  <div className="space-y-4">
                    {opportunities.map((item) => (
                      <Link key={item.title} to="/opportunities" className="group block rounded-xl border border-[#E4EAE6] bg-white p-5 shadow-sm transition hover:border-[#7838F0]/20 hover:shadow-md">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#6F41D8]">{item.type}</span>
                            <h3 className="mt-1 text-base font-bold text-[#141c25] group-hover:text-[#7838F0]">{item.title}</h3>
                            <p className="mt-1 text-xs text-[#68707A]">{item.organization}</p>
                          </div>
                          <div className="sm:text-right">
                            <p className="text-xs font-bold text-[#141c25]">Deadline {item.deadline}</p>
                            <p className="mt-1 text-xs text-[#68707A]">{item.note}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="space-y-5 xl:col-span-4">
                <section className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7838F0]">Profile</span>
                      <h2 className="mt-1 text-lg font-bold text-[#141c25]">Complete your profile</h2>
                    </div>
                    <span className="text-sm font-extrabold text-[#7838F0]">80%</span>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#E9E6FF]">
                    <div className="h-full w-4/5 rounded-full bg-[#7838F0]" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#505C75]">
                    Add more details to improve your ecosystem recommendations and public profile.
                  </p>
                  <Link to={profilePath} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#7838F0]">
                    Complete profile <ArrowRight size={16} />
                  </Link>
                </section>

                <section className="rounded-xl bg-[#E9E6FF] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#7838F0]">
                    <Sparkles size={20} />
                  </span>
                  <h2 className="mt-5 text-xl font-bold tracking-tight text-[#141c25]">Keep building</h2>
                  <p className="mt-2 text-sm leading-6 text-[#505C75]">
                    Discover what is happening across the INCOMATE ecosystem and find the next opportunity that fits your journey.
                  </p>
                  <Link to="/opportunities" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#6F41D8]">
                    Explore <ArrowRight size={16} />
                  </Link>
                </section>

                <section className="rounded-xl bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-[#141c25]">Quick Actions</h2>
                  <div className="mt-4 space-y-2">
                    {[
                      ['Browse events', '/events', CalendarDays],
                      ['Browse opportunities', '/opportunities', Compass],
                      ['View profile', profilePath, UserCircle],
                    ].map(([label, path, Icon]) => {
                      const ActionIcon = Icon as typeof UserCircle
                      return (
                        <Link key={label as string} to={path as string} className="flex items-center justify-between rounded-xl bg-[#edf4ff] px-4 py-3 text-sm font-semibold text-[#141c25] hover:bg-[#F4F2FF]">
                          <span className="inline-flex items-center gap-2"><ActionIcon size={17} />{label as string}</span>
                          <ChevronRight size={17} />
                        </Link>
                      )
                    })}
                  </div>
                </section>
              </aside>
            </div>

            <section className="rounded-xl bg-white p-6 shadow-sm sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#68707A]">Need a hand?</span>
                  <h2 className="mt-1 text-xl font-bold text-[#141c25]">Explore the ecosystem or get support</h2>
                  <p className="mt-1 text-sm text-[#505C75]">Everything you do here can later be powered by your live INCOMATE profile and activity data.</p>
                </div>
                <Link to="/about" className="inline-flex items-center gap-2 rounded-xl bg-[#083830] px-5 py-3 text-sm font-bold text-white hover:bg-[#052721]">
                  Learn about INCOMATE <ArrowRight size={17} />
                </Link>
              </div>
                        </section>
          </div>
  )}
</main>
      </div>
    </div>
  )
}

export default EcosystemDashboard
