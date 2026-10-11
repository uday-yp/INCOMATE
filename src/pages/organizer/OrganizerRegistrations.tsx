import { useMemo, useState } from 'react'
import {
  CheckCircle2,
  Download,
  Mail,
  MoreHorizontal,
  Search,
  Users,
  XCircle,
} from 'lucide-react'

type RegistrationStatus =
  | 'Registered'
  | 'Confirmed'
  | 'Waitlisted'
  | 'Cancelled'

const events = [
  {
    id: 'event-1',
    title: 'INNOVATE 2026: Collegiate Hackathon & AI Showcase',
  },
  {
    id: 'event-2',
    title: 'Future Tech Workshop',
  },
  {
    id: 'event-3',
    title: 'Campus AI Ideathon',
  },
]

const registrations = [
  {
    id: 1,
    eventId: 'event-1',
    name: 'Aarav Sharma',
    email: 'aarav@example.com',
    college: 'VGU Jaipur',
    team: 'Team Phoenix',
    status: 'Confirmed' as RegistrationStatus,
    date: '18 Oct 2026',
  },
  {
    id: 2,
    eventId: 'event-1',
    name: 'Priya Mehta',
    email: 'priya@example.com',
    college: 'Manipal University Jaipur',
    team: 'Team Nova',
    status: 'Registered' as RegistrationStatus,
    date: '18 Oct 2026',
  },
  {
    id: 3,
    eventId: 'event-1',
    name: 'Ananya Singh',
    email: 'ananya@example.com',
    college: 'Poornima University',
    team: 'Team Phoenix',
    status: 'Waitlisted' as RegistrationStatus,
    date: '17 Oct 2026',
  },
  {
    id: 4,
    eventId: 'event-1',
    name: 'Kunal Joshi',
    email: 'kunal@example.com',
    college: 'SKIT Jaipur',
    team: 'Individual',
    status: 'Cancelled' as RegistrationStatus,
    date: '15 Oct 2026',
  },
  {
    id: 5,
    eventId: 'event-2',
    name: 'Rohan Verma',
    email: 'rohan@example.com',
    college: 'JECRC University',
    team: 'Individual',
    status: 'Confirmed' as RegistrationStatus,
    date: '16 Oct 2026',
  },
  {
    id: 6,
    eventId: 'event-2',
    name: 'Neha Gupta',
    email: 'neha@example.com',
    college: 'VGU Jaipur',
    team: 'Individual',
    status: 'Registered' as RegistrationStatus,
    date: '16 Oct 2026',
  },
  {
    id: 7,
    eventId: 'event-3',
    name: 'Rahul Meena',
    email: 'rahul@example.com',
    college: 'Apex University',
    team: 'Team Alpha',
    status: 'Confirmed' as RegistrationStatus,
    date: '14 Oct 2026',
  },
]

function OrganizerRegistrations() {
  const [selectedEventId, setSelectedEventId] = useState(events[0].id)
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<'All' | RegistrationStatus>('All')

  const selectedEvent = events.find(
    (event) => event.id === selectedEventId,
  )

  const eventRegistrations = useMemo(() => {
    return registrations.filter(
      (registration) =>
        registration.eventId === selectedEventId,
    )
  }, [selectedEventId])

  const filteredRegistrations = useMemo(() => {
    return eventRegistrations.filter((registration) => {
      const searchValue = search.toLowerCase()

      const matchesSearch =
        registration.name.toLowerCase().includes(searchValue) ||
        registration.email.toLowerCase().includes(searchValue) ||
        registration.college.toLowerCase().includes(searchValue) ||
        registration.team.toLowerCase().includes(searchValue)

      const matchesStatus =
        status === 'All' || registration.status === status

      return matchesSearch && matchesStatus
    })
  }, [eventRegistrations, search, status])

  const total = eventRegistrations.length

  const confirmed = eventRegistrations.filter(
    (item) => item.status === 'Confirmed',
  ).length

  const waitlisted = eventRegistrations.filter(
    (item) => item.status === 'Waitlisted',
  ).length

  const cancelled = eventRegistrations.filter(
    (item) => item.status === 'Cancelled',
  ).length

  return (
    <div className="mx-auto max-w-[1300px] space-y-6">

      {/* Header */}
      <section>
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7838F0]">
          Event Management
        </p>

        <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Registrations
        </h1>

        <p className="mt-2 text-sm text-[#505C75]">
          View and manage registrations for your events.
        </p>
      </section>

      {/* Event selector */}
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs font-bold text-[#68707A]">
              SELECT EVENT
            </p>

            <p className="mt-1 text-sm text-[#505C75]">
              Select an event to view its registration dashboard.
            </p>
          </div>

          <select
            value={selectedEventId}
            onChange={(e) => {
              setSelectedEventId(e.target.value)
              setSearch('')
              setStatus('All')
            }}
            className="w-full rounded-xl bg-[#edf4ff] px-4 py-3 text-sm font-semibold outline-none sm:w-[420px]"
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}
              </option>
            ))}
          </select>

        </div>
      </section>

      {/* Selected event */}
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#7838F0]">
          Selected Event
        </p>

        <h2 className="mt-1 text-xl font-bold">
          {selectedEvent?.title}
        </h2>

        <p className="mt-1 text-xs text-[#68707A]">
          Registration dashboard for this event only.
        </p>
      </section>

      {/* Statistics */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          label="Total Registrations"
          value={total}
          icon={<Users size={17} />}
        />

        <StatCard
          label="Confirmed"
          value={confirmed}
          icon={<CheckCircle2 size={17} />}
        />

        <StatCard
          label="Waitlisted"
          value={waitlisted}
          icon={<Users size={17} />}
        />

        <StatCard
          label="Cancelled"
          value={cancelled}
          icon={<XCircle size={17} />}
        />

      </section>

      {/* Registration table */}
      <section className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="border-b border-[#E4EAE6] p-5">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-lg font-bold">
                Event Registrations
              </h2>

              <p className="mt-1 text-xs text-[#68707A]">
                {filteredRegistrations.length} registrations shown
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-4 py-2.5 text-xs font-bold text-white"
            >
              <Download size={15} />
              Export
            </button>

          </div>

          {/* Filters */}
          <div className="mt-5 flex flex-col gap-3 lg:flex-row">

            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#68707A]"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search participant, email, college or team..."
                className="w-full rounded-xl bg-[#edf4ff] py-3 pl-9 pr-3 text-sm outline-none"
              />
            </div>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value as
                    | 'All'
                    | RegistrationStatus,
                )
              }
              className="rounded-xl bg-[#edf4ff] px-4 py-3 text-xs font-semibold outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="Registered">Registered</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Waitlisted">Waitlisted</option>
              <option value="Cancelled">Cancelled</option>
            </select>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px] text-left">

            <thead>
              <tr className="border-b border-[#E4EAE6] bg-[#F8FAF9] text-[10px] uppercase tracking-wider text-[#68707A]">
                <th className="px-5 py-3">Participant</th>
                <th className="px-5 py-3">College</th>
                <th className="px-5 py-3">Team</th>
                <th className="px-5 py-3">Registered</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredRegistrations.map((registration) => (

                <tr
                  key={registration.id}
                  className="border-b border-[#E4EAE6] last:border-0 hover:bg-[#FBFCFC]"
                >

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9E6FF] text-xs font-bold text-[#7838F0]">
                        {registration.name
                          .split(' ')
                          .map((word) => word[0])
                          .join('')
                          .slice(0, 2)}
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          {registration.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-[#68707A]">
                          {registration.email}
                        </p>
                      </div>

                    </div>
                  </td>

                  <td className="px-5 py-4 text-xs">
                    {registration.college}
                  </td>

                  <td className="px-5 py-4 text-xs font-semibold">
                    {registration.team}
                  </td>

                  <td className="px-5 py-4 text-xs text-[#68707A]">
                    {registration.date}
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge status={registration.status} />
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex gap-2">

                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf4ff] text-[#7838F0]"
                      >
                        <Mail size={14} />
                      </button>

                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F8FAF9]"
                      >
                        <MoreHorizontal size={15} />
                      </button>

                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {filteredRegistrations.length === 0 && (
          <div className="px-5 py-16 text-center">

            <Users
              size={30}
              className="mx-auto text-[#68707A]"
            />

            <p className="mt-3 text-sm font-bold">
              No registrations found
            </p>

            <p className="mt-1 text-xs text-[#68707A]">
              No registrations match the selected filters.
            </p>

          </div>
        )}

      </section>
    </div>
  )
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string
  value: number
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-bold uppercase tracking-wider text-[#68707A]">
          {label}
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4F2FF] text-[#7838F0]">
          {icon}
        </span>

      </div>

      <p className="mt-4 text-3xl font-extrabold">
        {value}
      </p>

    </div>
  )
}

function StatusBadge({
  status,
}: {
  status: RegistrationStatus
}) {
  const styles: Record<RegistrationStatus, string> = {
    Registered: 'bg-[#edf4ff] text-[#7838F0]',
    Confirmed: 'bg-[#beece0] text-[#234e45]',
    Waitlisted: 'bg-orange-100 text-orange-700',
    Cancelled: 'bg-red-100 text-red-700',
  }

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${styles[status]}`}
    >
      {status}
    </span>
  )
}

export default OrganizerRegistrations