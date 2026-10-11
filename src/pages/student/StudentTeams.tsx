import React, { useMemo, useState } from 'react'
import {
  Check,
  Copy,
  Plus,
  Search,
  Users,
  UserPlus,
  X,
} from 'lucide-react'

type Team = {
  id: string
  name: string
  event: string
  members: string[]
  maxMembers: number
  status: 'Active' | 'Pending'
}

const mockTeams: Team[] = [
  {
    id: 'team-1',
    name: 'Tech Titans',
    event: 'INNOVATE 2026: Collegiate Hackathon & AI Showcase',
    members: ['Aarav Sharma', 'Priya Mehta', 'Rahul Verma'],
    maxMembers: 4,
    status: 'Active',
  },
  {
    id: 'team-2',
    name: 'CodeCraft',
    event: 'Future Tech Workshop: Web3 & Distributed AI',
    members: ['Neha Singh', 'Karan Joshi'],
    maxMembers: 4,
    status: 'Active',
  },
]

const pendingRequests = [
  {
    id: 'request-1',
    name: 'Rohan Gupta',
    team: 'Tech Titans',
  },
]

export default function StudentTeams() {
  const [teams, setTeams] = useState(mockTeams)
  const [showCreate, setShowCreate] = useState(false)
  const [showJoin, setShowJoin] = useState(false)
  const [search, setSearch] = useState('')
  const [teamName, setTeamName] = useState('')
  const [eventName, setEventName] = useState('INNOVATE 2026: Collegiate Hackathon & AI Showcase')
  const [joinCode, setJoinCode] = useState('')

  const filteredTeams = useMemo(() => {
    const query = search.toLowerCase().trim()

    if (!query) return teams

    return teams.filter(
      (team) =>
        team.name.toLowerCase().includes(query) ||
        team.event.toLowerCase().includes(query)
    )
  }, [search, teams])

  const createTeam = () => {
    if (!teamName.trim()) return

    setTeams((current) => [
      ...current,
      {
        id: `team-${Date.now()}`,
        name: teamName.trim(),
        event: eventName,
        members: ['You'],
        maxMembers: 4,
        status: 'Active',
      },
    ])

    setTeamName('')
    setShowCreate(false)
  }

  const copyJoinCode = () => {
    navigator.clipboard?.writeText('INNO-7K4P')
  }

  return (
    <div className="min-h-screen bg-[#F6FAF8] px-4 py-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-medium text-[#7838F0]">
              Student Workspace
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Teams & Squads
            </h1>

            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Create teams, manage your teammates, and join teams for
              collaborative events.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setShowJoin(true)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-[#7838F0]/30 hover:text-[#7838F0]"
            >
              <UserPlus size={17} />
              Join Team
            </button>

            <button
              onClick={() => setShowCreate(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6928df]"
            >
              <Plus size={17} />
              Create Team
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            icon={<Users size={19} />}
            label="My Teams"
            value={teams.length}
          />

          <StatCard
            icon={<UserPlus size={19} />}
            label="Team Members"
            value={teams.reduce((total, team) => total + team.members.length, 0)}
          />

          <StatCard
            icon={<Check size={19} />}
            label="Pending Requests"
            value={pendingRequests.length}
          />
        </div>

        {/* Search */}
        <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search teams or events..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white"
            />
          </div>
        </div>

        {/* Teams */}
        <section className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">My Teams</h2>

            <span className="text-sm text-slate-400">
              {filteredTeams.length} team
              {filteredTeams.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filteredTeams.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <Users className="mx-auto mb-3 text-slate-300" size={32} />
              <p className="font-semibold text-slate-700">No teams found</p>
              <p className="mt-1 text-sm text-slate-400">
                Create a new team or join an existing one.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {filteredTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          )}
        </section>

        {/* Pending requests */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Pending Join Requests
            </h2>

            <span className="rounded-full bg-[#beece0]/50 px-3 py-1 text-xs font-semibold text-slate-600">
              {pendingRequests.length} pending
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {pendingRequests.map((request) => (
              <div
                key={request.id}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7838F0]/10 text-sm font-bold text-[#7838F0]">
                    {request.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-slate-800">
                      {request.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      wants to join <span className="font-medium">{request.team}</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                    Decline
                  </button>

                  <button className="rounded-lg bg-[#7838F0] px-3 py-2 text-sm font-medium text-white hover:bg-[#6928df]">
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Create Team Modal */}
      {showCreate && (
        <Modal
          title="Create a Team"
          onClose={() => setShowCreate(false)}
        >
          <div className="space-y-4">
            <Field label="Team Name">
              <input
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="e.g. Innovation Squad"
                className="input"
              />
            </Field>

            <Field label="Event">
              <select
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="input"
              >
                <option>
                  INNOVATE 2026: Collegiate Hackathon & AI Showcase
                </option>
                <option>Future Tech Workshop: Web3 & Distributed AI</option>
                <option>Campus Innovation Sprint: Hardware & IoT</option>
              </select>
            </Field>

            <div className="rounded-xl bg-[#F6FAF8] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Team Size
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Maximum 4 members for this demo.
              </p>
            </div>

            <button
              onClick={createTeam}
              className="w-full rounded-xl bg-[#7838F0] py-3 text-sm font-semibold text-white hover:bg-[#6928df]"
            >
              Create Team
            </button>
          </div>
        </Modal>
      )}

      {/* Join Team Modal */}
      {showJoin && (
        <Modal
          title="Join a Team"
          onClose={() => setShowJoin(false)}
        >
          <div className="space-y-4">
            <Field label="Team Join Code">
              <input
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
                placeholder="Enter team code"
                className="input"
              />
            </Field>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Demo Join Code
                  </p>
                  <p className="mt-1 font-mono text-sm font-semibold text-slate-800">
                    INNO-7K4P
                  </p>
                </div>

                <button
                  onClick={copyJoinCode}
                  className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 hover:text-[#7838F0]"
                  title="Copy code"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowJoin(false)}
              className="w-full rounded-xl bg-[#7838F0] py-3 text-sm font-semibold text-white hover:bg-[#6928df]"
            >
              Send Join Request
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: number
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#7838F0]/10 text-[#7838F0]">
        {icon}
      </div>

      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  )
}

function TeamCard({ team }: { team: Team }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-slate-900">{team.name}</h3>

            <span className="rounded-full bg-[#beece0]/60 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
              {team.status}
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">{team.event}</p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7838F0]/10 text-[#7838F0]">
          <Users size={19} />
        </div>
      </div>

      <div className="border-t border-slate-100 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Members
          </span>

          <span className="text-xs font-medium text-slate-500">
            {team.members.length}/{team.maxMembers}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {team.members.map((member) => (
            <span
              key={member}
              className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {member}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="font-bold text-slate-900">{title}</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">
        {label}
      </span>
      {children}
    </label>
  )
}