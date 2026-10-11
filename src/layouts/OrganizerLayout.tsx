import { Link, Outlet, useLocation } from 'react-router-dom'
import { Bell, CalendarDays, ClipboardCheck, FileCheck2, FileText, Gauge, HelpCircle, LogOut, Settings, Users, UserCircle, ArrowLeft } from 'lucide-react'

const mainItems = [
  { label: 'Overview / Dashboard', href: '/organizer/dashboard', icon: Gauge },
  { label: 'Events', href: '/organizer/events', icon: CalendarDays },
  { label: 'Registrations', href: '/organizer/registrations', icon: ClipboardCheck },
  { label: 'Participants', href: '/organizer/participants', icon: Users },
  { label: 'Submissions', href: '/organizer/submissions', icon: FileText },
  { label: 'Evaluations', href: '/organizer/evaluations', icon: ClipboardCheck },
  { label: 'Certificates', href: '/organizer/certificates', icon: FileCheck2 },
]

function OrganizerLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#F6FAF8] text-[#141c25]">
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col justify-between bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)] lg:flex">
        <div className="overflow-y-auto px-4 py-5">
          <Link to="/" className="mb-7 flex items-center gap-2 px-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7838F0] text-sm font-extrabold text-white">I</span>
            <div><p className="text-sm font-extrabold tracking-tight">INCOMATE</p><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#68707A]">Organizer</p></div>
          </Link>
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#68707A]">Event Management</p>
          <nav className="mt-2 space-y-1">
            {mainItems.map(({ label, href, icon: Icon }) => {
              const active = location.pathname === href
              return <Link key={href} to={href} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${active ? 'bg-[#7838F0] text-white shadow-sm' : 'text-[#4a4455] hover:bg-[#F4F2FF] hover:text-[#7838F0]'}`}><Icon size={18}/><span>{label}</span></Link>
            })}
          </nav>
          <div className="my-5 h-px bg-[#E4EAE6]" />
          <p className="px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#68707A]">Preferences</p>
          <nav className="mt-2 space-y-1">
            <Link to="/organizer/profile" className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${location.pathname === '/organizer/profile' ? 'bg-[#7838F0] text-white' : 'text-[#4a4455] hover:bg-[#F4F2FF]'}`}><UserCircle size={18}/>Profile</Link>
            <Link to="/organizer/settings" className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold ${location.pathname === '/organizer/settings' ? 'bg-[#7838F0] text-white' : 'text-[#4a4455] hover:bg-[#F4F2FF]'}`}><Settings size={18}/>Settings</Link>
            <Link to="/about" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#4a4455] hover:bg-[#F4F2FF]"><HelpCircle size={18}/>Help & Support</Link>
          </nav>
        </div>
        <div className="border-t border-[#E4EAE6] p-4"><Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-[#ba1a1a] hover:bg-[#ffdad6]"><LogOut size={18}/>Logout</Link></div>
      </aside>

      <div className="lg:pl-64">
        <header className="fixed left-0 right-0 top-0 z-40 h-16 border-b border-[#E4EAE6] bg-white/90 px-4 shadow-sm backdrop-blur-xl sm:px-6 lg:left-64">
          <div className="flex h-full items-center justify-between gap-4">
            <div className="hidden w-full max-w-md sm:block"><div className="flex items-center gap-2 rounded-xl bg-[#edf4ff] px-3 py-2.5"><FileText size={17} className="text-[#68707A]"/><input className="w-full bg-transparent text-sm outline-none" placeholder="Search events, registrations..."/></div></div>
            <div className="ml-auto flex items-center gap-3"><Link to="/" className="hidden items-center gap-1.5 text-xs font-bold text-[#7838F0] md:flex"><ArrowLeft size={15}/>Back to Public Portal</Link><button className="relative rounded-xl p-2 text-[#4a4455] hover:bg-[#F4F2FF]" aria-label="Notifications"><Bell size={19}/><span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#ba1a1a]"/></button><div className="flex items-center gap-2"><div className="hidden text-right sm:block"><p className="text-xs font-bold">Tech Club</p><p className="text-[10px] font-semibold text-[#68707A]">Organizer</p></div><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7838F0] text-white"><UserCircle size={18}/></div></div></div>
          </div>
        </header>
        <main className="min-h-screen px-4 pb-12 pt-20 sm:px-6 lg:px-8"><Outlet /></main>
      </div>
    </div>
  )
}

export default OrganizerLayout
