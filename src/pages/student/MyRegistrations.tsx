import { useMemo, useState } from 'react'
import { CalendarDays, Clock3, MapPin, Search, Users, ExternalLink, BadgeCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import EcosystemDashboard from '../../common/EcosystemDashboard'

const registrations = [
  {
    month: 'Oct', day: '18', type: 'Flagship Hackathon', status: 'Confirmed',
    title: 'INNOVATE 2026: Collegiate Hackathon',
    description: '48-hour prototype sprint addressing autonomous logistics, clean energy grids, and digital identity.',
    time: '10:00 AM – 6:00 PM IST', location: 'IIT Bombay Main Campus (Auditorium Hall)',
    mode: 'Offline', team: 'CodeCraft (4/4 members ready)', registered: '10 Oct 2026',
  },
  {
    month: 'Oct', day: '22', type: 'Technical Masterclass', status: 'Confirmed',
    title: 'Future Tech Workshop: Web3 & Distributed AI',
    description: 'Technical masterclass with live virtual participation and guided resources.',
    time: '2:00 PM – 4:00 PM IST', location: 'Virtual Studio Room B', mode: 'Online',
    team: '', registered: '12 Oct 2026',
  },
  {
    month: 'Oct', day: '28', type: 'Prototyping Competition', status: 'Confirmed',
    title: 'Design & Build Sprint: Campus Climate Tech',
    description: 'Build and present a practical campus climate solution with mentor feedback.',
    time: '09:30 AM – 5:30 PM IST', location: 'Hybrid (Lab 4 + Discord Channel)', mode: 'Hybrid',
    team: '', registered: '14 Oct 2026',
  },
]

interface MyRegistrationsProps {
  role?: 'student' | 'startup'
}

function MyRegistrations({ role = 'student' }: MyRegistrationsProps) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Upcoming')

  const visible = useMemo(() => registrations.filter((item) => {
    const matchesQuery = `${item.title} ${item.type}`.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'Upcoming' || (filter === 'Completed' ? false : filter === 'Cancelled' ? false : true)
    return matchesQuery && matchesFilter
  }), [query, filter])

  return (
    <EcosystemDashboard role={role}>
      <div className="mx-auto max-w-[1200px] space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7838F0]">Student Portal • 3 Active Registrations • 3 Completed</p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#141c25] sm:text-4xl">My Registrations</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#505C75]">Keep track of the events you&apos;ve registered for, coordinate with your squads, and download verifiable certificates.</p>
          </div>
          <Link to="/events" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white hover:bg-[#6F41D8]"><ExternalLink size={17} /> Explore Events</Link>
        </div>

        <section className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-wrap gap-1 rounded-xl bg-[#edf4ff] p-1">
              {['Upcoming', 'Completed', 'Cancelled'].map((tab) => (
                <button key={tab} onClick={() => setFilter(tab)} className={`rounded-lg px-4 py-2 text-sm font-bold transition ${filter === tab ? 'bg-[#7838F0] text-white' : 'text-[#505C75] hover:bg-white'}`}>{tab}{tab === 'Upcoming' && <span className="ml-2 rounded-full bg-white/20 px-1.5 py-0.5 text-[10px]">3</span>}</button>
              ))}
            </div>
            <div className="relative flex-1 lg:max-w-md"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#68707A]" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search your registrations..." className="w-full rounded-xl bg-[#edf4ff] py-2.5 pl-9 pr-3 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-[#7838F0]/20" /></div>
            <select className="rounded-xl bg-[#edf4ff] px-3 py-2.5 text-sm font-semibold text-[#505C75] outline-none"><option>Type: All Types</option><option>Hackathons</option><option>Workshops</option><option>Competitions</option></select>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="absolute inset-y-0 left-0 w-1.5 bg-[#7838F0]" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-[#052721] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#beece0]">Next Up • Starts in 3 Days</span><span className="rounded-full bg-[#beece0] px-2.5 py-1 text-[10px] font-bold text-[#234e45]">Confirmed</span><span className="rounded-full bg-[#E9E6FF] px-2.5 py-1 text-[10px] font-semibold text-[#7838F0]">Flagship Hackathon</span></div>
              <h2 className="mt-3 text-2xl font-bold text-[#141c25]">INNOVATE 2026: Collegiate Hackathon</h2>
              <p className="mt-1 text-sm text-[#505C75]">48-hour prototype sprint addressing autonomous logistics, clean energy grids, and digital identity.</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#505C75]"><span className="inline-flex items-center gap-1.5 font-semibold text-[#141c25]"><CalendarDays size={16} className="text-[#7838F0]" />18 October 2026</span><span className="inline-flex items-center gap-1.5"><Clock3 size={16} />10:00 AM – 6:00 PM IST</span><span className="inline-flex items-center gap-1.5"><MapPin size={16} />IIT Bombay Main Campus</span><span className="inline-flex items-center gap-1.5 font-semibold text-[#059669]"><BadgeCheck size={16} />Check-in Pass Ready</span></div>
            </div>
            <div className="flex flex-wrap gap-2"><button className="rounded-xl bg-[#F4F2FF] px-4 py-2.5 text-sm font-bold text-[#7838F0]">View Registration</button><Link to="/events/campus-hack-challenge" className="rounded-xl bg-[#7838F0] px-4 py-2.5 text-sm font-bold text-white">View Event</Link></div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between"><h2 className="text-sm font-bold uppercase tracking-wider text-[#505C75]">All Registered Upcoming Activities ({visible.length})</h2><span className="text-xs text-[#68707A]">Sorted by start date</span></div>
          {visible.map((item) => (
            <article key={item.title} className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-[#F4F2FF] text-[#7838F0]"><span className="text-[10px] font-bold uppercase">{item.month}</span><span className="text-2xl font-extrabold leading-none">{item.day}</span></div>
                <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="rounded-full bg-[#E9E6FF] px-2.5 py-1 text-[10px] font-bold text-[#7838F0]">{item.type}</span><span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#059669]"><span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />{item.status}</span><span className="text-[10px] text-[#68707A]">• Registered {item.registered}</span></div><h3 className="mt-2 text-xl font-bold text-[#141c25]">{item.title}</h3><div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-[#505C75]"><span className="inline-flex items-center gap-1.5"><Clock3 size={15} />{item.time}</span><span className="inline-flex items-center gap-1.5"><MapPin size={15} />{item.location}</span>{item.team && <span className="inline-flex items-center gap-1.5 text-[#234e45]"><Users size={15} />Team: {item.team}</span>}</div></div>
                <div className="flex shrink-0 gap-2"><button className="rounded-xl bg-[#edf4ff] px-4 py-2.5 text-xs font-bold text-[#141c25]">View Registration</button><Link to="/events" className="rounded-xl bg-[#7838F0] px-4 py-2.5 text-xs font-bold text-white">View Event</Link></div>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-wider text-[#7838F0]">Your INCOMATE registration lifecycle</p><h2 className="mt-1 text-xl font-bold text-[#141c25]">From discovery to credentials</h2></div><span className="hidden text-xs text-[#68707A] sm:block">Automated accreditation path</span></div><div className="mt-5 grid gap-3 md:grid-cols-5">{[['01','Discover','Browse & Filter'],['02','Register','Slot & Team Lock'],['03','Participate','Build & Check-in'],['04','Complete','Project Evaluation'],['05','Certificate','Verifiable Credential']].map(([n,t,d])=><div key={n} className="rounded-xl bg-[#edf4ff] p-4"><p className="text-[10px] font-extrabold text-[#7838F0]">{n} {t.toUpperCase()}</p><p className="mt-2 text-sm font-bold text-[#141c25]">{d}</p></div>)}</div></section>
      </div>
    </EcosystemDashboard>
  )
}

export default MyRegistrations
