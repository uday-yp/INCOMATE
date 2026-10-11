import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardPlus,
  Clock3,
  Download,
  GripVertical,
  Plus,
  QrCode,
  Save,
  Search,
  Trash2,
  Users,
  X,
  XCircle,
} from 'lucide-react'

import ModulePlaceholder from './ModulePlaceholder'

type RegistrationStatus =
  | 'Confirmed'
  | 'Waitlisted'
  | 'Cancelled'

type AttendanceStatus =
  | 'Present'
  | 'Absent'
  | 'Not Marked'

type AttendanceFieldType =
  | 'short-text'
  | 'email'
  | 'phone'
  | 'number'
  | 'dropdown'
  | 'checkbox'

type AttendanceField = {
  id: string
  label: string
  type: AttendanceFieldType
  required: boolean
  options: string[]
}

type OrganizerEvent = {
  id: string
  title: string
  date: string
  venue: string
}

type Participant = {
  id: string
  eventId: string
  name: string
  email: string
  enrollment: string
  department: string
  semester: string
  registrationStatus: RegistrationStatus
  attendance: AttendanceStatus
}

const EVENTS: OrganizerEvent[] = [
  {
    id: 'event-1',
    title: 'INNOVATE 2026: Collegiate Hackathon & AI Showcase',
    date: '18 October 2026',
    venue: 'VGU Innovation Hub',
  },
  {
    id: 'event-2',
    title: 'Future Tech Workshop: Web3 & Distributed AI',
    date: '22 October 2026',
    venue: 'Main Auditorium',
  },
  {
    id: 'event-3',
    title: 'Campus Innovation Sprint: Hardware & IoT',
    date: '02 November 2026',
    venue: 'Innovation Lab',
  },
]

const INITIAL_PARTICIPANTS: Participant[] = [
  {
    id: 'p-1',
    eventId: 'event-1',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    enrollment: 'VGU23CSE001',
    department: 'CSE',
    semester: '6th',
    registrationStatus: 'Confirmed',
    attendance: 'Present',
  },
  {
    id: 'p-2',
    eventId: 'event-1',
    name: 'Priya Meena',
    email: 'priya.meena@example.com',
    enrollment: 'VGU23CSE014',
    department: 'CSE',
    semester: '6th',
    registrationStatus: 'Confirmed',
    attendance: 'Not Marked',
  },
  {
    id: 'p-3',
    eventId: 'event-1',
    name: 'Rohan Verma',
    email: 'rohan.verma@example.com',
    enrollment: 'VGU24IT031',
    department: 'IT',
    semester: '4th',
    registrationStatus: 'Confirmed',
    attendance: 'Absent',
  },
  {
    id: 'p-4',
    eventId: 'event-1',
    name: 'Ananya Singh',
    email: 'ananya.singh@example.com',
    enrollment: 'VGU24AIML008',
    department: 'AI & ML',
    semester: '4th',
    registrationStatus: 'Confirmed',
    attendance: 'Present',
  },
  {
    id: 'p-5',
    eventId: 'event-1',
    name: 'Kunal Gupta',
    email: 'kunal.gupta@example.com',
    enrollment: 'VGU23ECE019',
    department: 'ECE',
    semester: '6th',
    registrationStatus: 'Waitlisted',
    attendance: 'Not Marked',
  },
  {
    id: 'p-6',
    eventId: 'event-2',
    name: 'Dev Patel',
    email: 'dev.patel@example.com',
    enrollment: 'VGU24CSE022',
    department: 'CSE',
    semester: '4th',
    registrationStatus: 'Confirmed',
    attendance: 'Present',
  },
  {
    id: 'p-7',
    eventId: 'event-2',
    name: 'Simran Kaur',
    email: 'simran.kaur@example.com',
    enrollment: 'VGU24IT017',
    department: 'IT',
    semester: '4th',
    registrationStatus: 'Confirmed',
    attendance: 'Not Marked',
  },
  {
    id: 'p-8',
    eventId: 'event-2',
    name: 'Aditya Jain',
    email: 'aditya.jain@example.com',
    enrollment: 'VGU23CSE044',
    department: 'CSE',
    semester: '6th',
    registrationStatus: 'Confirmed',
    attendance: 'Absent',
  },
  {
    id: 'p-9',
    eventId: 'event-3',
    name: 'Harsh Vyas',
    email: 'harsh.vyas@example.com',
    enrollment: 'VGU24ECE012',
    department: 'ECE',
    semester: '4th',
    registrationStatus: 'Confirmed',
    attendance: 'Present',
  },
  {
    id: 'p-10',
    eventId: 'event-3',
    name: 'Nisha Kumari',
    email: 'nisha.kumari@example.com',
    enrollment: 'VGU23ME021',
    department: 'ME',
    semester: '6th',
    registrationStatus: 'Confirmed',
    attendance: 'Not Marked',
  },
]

export default function OrganizerModule({
  title,
}: {
  title: string
}) {
  if (title === 'Participants') {
    return <ParticipantsModule />
  }

  return <ModulePlaceholder
  title={title}
  description={`Manage ${title.toLowerCase()} for your events.`}
  backHref="/organizer/dashboard"
/>
}

function ParticipantsModule() {
  const [selectedEventId, setSelectedEventId] = useState(EVENTS[0].id)

  const [participants, setParticipants] = useState<Participant[]>(
    INITIAL_PARTICIPANTS
  )

  const [search, setSearch] = useState('')

  const [attendanceFilter, setAttendanceFilter] = useState<
    'All' | AttendanceStatus
  >('All')

  const [showFormBuilder, setShowFormBuilder] = useState(false)

  const [showQr, setShowQr] = useState(false)

  const [attendanceFields, setAttendanceFields] = useState<
    AttendanceField[]
  >([
    {
      id: 'field-1',
      label: 'Full Name',
      type: 'short-text',
      required: true,
      options: [],
    },
    {
      id: 'field-2',
      label: 'Email Address',
      type: 'email',
      required: true,
      options: [],
    },
    {
      id: 'field-3',
      label: 'Enrollment Number',
      type: 'short-text',
      required: true,
      options: [],
    },
  ])

  const [formTitle, setFormTitle] = useState('Event Attendance')

  const [formDescription, setFormDescription] = useState(
    'Please fill in your details to mark your attendance.'
  )

  const selectedEvent = useMemo(
    () =>
      EVENTS.find((event) => event.id === selectedEventId) ??
      EVENTS[0],
    [selectedEventId]
  )

  const eventParticipants = useMemo(
    () =>
      participants.filter(
        (participant) => participant.eventId === selectedEventId
      ),
    [participants, selectedEventId]
  )

  const filteredParticipants = useMemo(() => {
    const query = search.trim().toLowerCase()

    return eventParticipants.filter((participant) => {
      const matchesSearch =
        !query ||
        participant.name.toLowerCase().includes(query) ||
        participant.email.toLowerCase().includes(query) ||
        participant.enrollment.toLowerCase().includes(query) ||
        participant.department.toLowerCase().includes(query)

      const matchesAttendance =
        attendanceFilter === 'All' ||
        participant.attendance === attendanceFilter

      return matchesSearch && matchesAttendance
    })
  }, [
    eventParticipants,
    search,
    attendanceFilter,
  ])

  const totalParticipants = eventParticipants.length

  const presentCount = eventParticipants.filter(
    (participant) => participant.attendance === 'Present'
  ).length

  const absentCount = eventParticipants.filter(
    (participant) => participant.attendance === 'Absent'
  ).length

  const notMarkedCount = eventParticipants.filter(
    (participant) => participant.attendance === 'Not Marked'
  ).length

  const attendanceRate =
    totalParticipants === 0
      ? 0
      : Math.round((presentCount / totalParticipants) * 100)

  const markAttendance = (
    participantId: string,
    status: Exclude<AttendanceStatus, 'Not Marked'>
  ) => {
    setParticipants((current) =>
      current.map((participant) =>
        participant.id === participantId
          ? {
              ...participant,
              attendance: status,
            }
          : participant
      )
    )
  }

  const addAttendanceField = () => {
    setAttendanceFields((current) => [
      ...current,
      {
        id: `field-${Date.now()}`,
        label: 'New Field',
        type: 'short-text',
        required: false,
        options: [],
      },
    ])
  }

  const updateAttendanceField = (
    id: string,
    updates: Partial<AttendanceField>
  ) => {
    setAttendanceFields((current) =>
      current.map((field) =>
        field.id === id
          ? {
              ...field,
              ...updates,
            }
          : field
      )
    )
  }

  const deleteAttendanceField = (id: string) => {
    setAttendanceFields((current) =>
      current.filter((field) => field.id !== id)
    )
  }

  const handleEventChange = (eventId: string) => {
    setSelectedEventId(eventId)
    setSearch('')
    setAttendanceFilter('All')
  }

  const exportParticipants = () => {
    const rows = filteredParticipants.map((participant) => [
      participant.name,
      participant.email,
      participant.enrollment,
      participant.department,
      participant.semester,
      participant.registrationStatus,
      participant.attendance,
    ])

    const csv = [
      [
        'Name',
        'Email',
        'Enrollment',
        'Department',
        'Semester',
        'Registration Status',
        'Attendance',
      ],
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(',')
      )
      .join('\n')

    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;',
    })

    const url = URL.createObjectURL(blob)

    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${selectedEvent.title
      .replace(/[^a-z0-9]+/gi, '-')
      .toLowerCase()}-participants.csv`

    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
            Organizer Workspace
          </p>

          <h1 className="mt-1 text-2xl font-extrabold text-[#141c25]">
            Participants
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68707A]">
            Manage registered participants and attendance for each event
            from one place.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowFormBuilder(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#6727DF]"
          >
            <ClipboardPlus className="h-4 w-4" />
            Create Attendance Form
          </button>

          <button
            type="button"
            onClick={() => setShowQr(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-[#DDE5E1] bg-white px-4 py-2.5 text-sm font-bold text-[#38413C] transition hover:bg-[#F5F9F7]"
          >
            <QrCode className="h-4 w-4 text-[#7838F0]" />
            Generate QR
          </button>
        </div>
      </div>

      {/* EVENT SELECTOR */}
      <div className="rounded-2xl border border-[#E4EAE6] bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#68707A]">
              Select Event
            </p>

            <p className="mt-1 text-sm text-[#89918D]">
              Participant and attendance data is shown for the selected event.
            </p>
          </div>

          <div className="relative w-full lg:w-[440px]">
            <select
              value={selectedEventId}
              onChange={(event) =>
                handleEventChange(event.target.value)
              }
              className="w-full appearance-none rounded-xl border border-[#DDE5E1] bg-white px-4 py-3 pr-10 text-sm font-semibold text-[#141c25] outline-none transition focus:border-[#7838F0] focus:ring-2 focus:ring-[#7838F0]/10"
            >
              {EVENTS.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#68707A]" />
          </div>
        </div>
      </div>

      {/* EVENT CARD */}
      <div className="rounded-2xl border border-[#E4EAE6] bg-[#F5F9F7] p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#beece0] px-2.5 py-1 text-[11px] font-bold text-[#245E52]">
                Selected Event
              </span>
            </div>

            <h2 className="mt-2 text-lg font-extrabold text-[#141c25]">
              {selectedEvent.title}
            </h2>

            <div className="mt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#68707A]">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-[#7838F0]" />
                {selectedEvent.date}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-4 w-4 text-[#7838F0]" />
                {selectedEvent.venue}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-[#DDE5E1] bg-white px-4 py-3">
            <p className="text-xs font-semibold text-[#89918D]">
              Registered
            </p>

            <p className="mt-1 text-xl font-extrabold text-[#141c25]">
              {totalParticipants}
            </p>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">

        <StatCard
          label="Total Participants"
          value={totalParticipants}
          icon={<Users className="h-5 w-5" />}
          iconClass="bg-[#EEE8FF] text-[#7838F0]"
        />

        <StatCard
          label="Present"
          value={presentCount}
          icon={<CheckCircle2 className="h-5 w-5" />}
          iconClass="bg-[#E3F6EF] text-[#26745F]"
        />

        <StatCard
          label="Absent"
          value={absentCount}
          icon={<XCircle className="h-5 w-5" />}
          iconClass="bg-[#FFF0EF] text-[#A84C47]"
        />

        <StatCard
          label="Attendance"
          value={`${attendanceRate}%`}
          icon={<ClipboardPlus className="h-5 w-5" />}
          iconClass="bg-[#EAF1FF] text-[#4168B5]"
          footer={`${notMarkedCount} not marked`}
        />

      </div>

      {/* ATTENDANCE PANEL */}
      <div className="rounded-2xl border border-[#E4EAE6] bg-white">

        <div className="border-b border-[#E4EAE6] p-5">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

            <div>
              <h2 className="text-lg font-extrabold text-[#141c25]">
                Attendance
              </h2>

              <p className="mt-1 text-sm text-[#68707A]">
                Search participants and mark attendance manually.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">

              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#89918D]" />

                <input
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search participant..."
                  className="w-full rounded-xl border border-[#DDE5E1] bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-[#7838F0] sm:w-[250px]"
                />
              </div>

              <div className="relative">
                <select
                  value={attendanceFilter}
                  onChange={(event) =>
                    setAttendanceFilter(
                      event.target.value as
                        | 'All'
                        | AttendanceStatus
                    )
                  }
                  className="w-full appearance-none rounded-xl border border-[#DDE5E1] bg-white px-3 py-2.5 pr-9 text-sm font-semibold outline-none focus:border-[#7838F0]"
                >
                  <option value="All">All Attendance</option>
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                  <option value="Not Marked">
                    Not Marked
                  </option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#68707A]" />
              </div>

              <button
                type="button"
                onClick={exportParticipants}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#DDE5E1] px-4 py-2.5 text-sm font-bold text-[#38413C] transition hover:bg-[#F5F9F7]"
              >
                <Download className="h-4 w-4" />
                Export
              </button>

            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b border-[#E4EAE6] bg-[#F8FBFA]">
                <TableHead>Participant</TableHead>
                <TableHead>Enrollment</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Registration</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead align="right">
                  Action
                </TableHead>
              </tr>
            </thead>

            <tbody>
              {filteredParticipants.map((participant) => (
                <tr
                  key={participant.id}
                  className="border-b border-[#EEF2F0] last:border-b-0"
                >
                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-bold text-[#141c25]">
                        {participant.name}
                      </p>

                      <p className="mt-1 text-xs text-[#89918D]">
                        {participant.email}
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-semibold text-[#38413C]">
                    {participant.enrollment}
                  </td>

                  <td className="px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold text-[#38413C]">
                        {participant.department}
                      </p>

                      <p className="mt-1 text-xs text-[#89918D]">
                        {participant.semester} Semester
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <StatusBadge
                      status={participant.registrationStatus}
                    />
                  </td>

                  <td className="px-5 py-4">
                    <AttendanceBadge
                      status={participant.attendance}
                    />
                  </td>

                  <td className="px-5 py-4 text-right">
                    <div className="flex justify-end gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          markAttendance(
                            participant.id,
                            'Present'
                          )
                        }
                        className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                          participant.attendance ===
                          'Present'
                            ? 'bg-[#26745F] text-white'
                            : 'border border-[#CFE6DE] bg-[#F3FBF8] text-[#26745F] hover:bg-[#E3F6EF]'
                        }`}
                      >
                        Present
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          markAttendance(
                            participant.id,
                            'Absent'
                          )
                        }
                        className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                          participant.attendance ===
                          'Absent'
                            ? 'bg-[#A84C47] text-white'
                            : 'border border-[#F0D7D5] bg-[#FFF7F6] text-[#A84C47] hover:bg-[#FFF0EF]'
                        }`}
                      >
                        Absent
                      </button>

                    </div>
                  </td>
                </tr>
              ))}

              {filteredParticipants.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-14 text-center"
                  >
                    <Users className="mx-auto h-8 w-8 text-[#AAB4AF]" />

                    <p className="mt-3 text-sm font-bold text-[#38413C]">
                      No participants found
                    </p>

                    <p className="mt-1 text-xs text-[#89918D]">
                      Try changing your search or attendance filter.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* ATTENDANCE FORM BUILDER */}
      {showFormBuilder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#141c25]/40 p-4">
          <div className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-[#E4EAE6] px-6 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  Attendance Builder
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-[#141c25]">
                  Create Attendance Form
                </h2>

                <p className="mt-1 text-sm text-[#68707A]">
                  Manually create the fields participants will fill while
                  marking attendance.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowFormBuilder(false)}
                className="rounded-xl p-2 text-[#68707A] transition hover:bg-[#F4F7F5] hover:text-[#141c25]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* BUILDER */}
            <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">

              {/* LEFT */}
              <div className="border-b border-[#E4EAE6] p-6 lg:border-b-0 lg:border-r">

                {/* FORM DETAILS */}
                <div className="rounded-2xl border border-[#E4EAE6] bg-[#F8FBFA] p-5">

                  <div>
                    <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#68707A]">
                      Form Title
                    </label>

                    <input
                      value={formTitle}
                      onChange={(event) =>
                        setFormTitle(event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-[#DDE5E1] bg-white px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#7838F0] focus:ring-2 focus:ring-[#7838F0]/10"
                      placeholder="Enter attendance form title"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-bold uppercase tracking-[0.1em] text-[#68707A]">
                      Description
                    </label>

                    <textarea
                      value={formDescription}
                      onChange={(event) =>
                        setFormDescription(event.target.value)
                      }
                      rows={3}
                      className="mt-2 w-full resize-none rounded-xl border border-[#DDE5E1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#7838F0] focus:ring-2 focus:ring-[#7838F0]/10"
                      placeholder="Explain what participants need to submit."
                    />
                  </div>
                </div>

                {/* FIELDS HEADER */}
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-[#141c25]">
                      Form Fields
                    </h3>

                    <p className="mt-1 text-xs text-[#68707A]">
                      Add and configure the information you want to collect.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={addAttendanceField}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#6727DF]"
                  >
                    <Plus className="h-4 w-4" />
                    Add Field
                  </button>
                </div>

                {/* FIELDS */}
                <div className="mt-4 space-y-4">

                  {attendanceFields.map((field, index) => (
                    <div
                      key={field.id}
                      className="rounded-2xl border border-[#E4EAE6] bg-white p-5"
                    >
                      <div className="flex items-start gap-3">

                        <div className="mt-2 cursor-grab text-[#A4ADA8]">
                          <GripVertical className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#7838F0]">
                              Field {index + 1}
                            </p>

                            <button
                              type="button"
                              onClick={() =>
                                deleteAttendanceField(field.id)
                              }
                              className="rounded-lg p-2 text-[#9A625F] transition hover:bg-[#FFF1F0]"
                              title="Delete field"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          {/* LABEL */}
                          <div className="mt-3">
                            <label className="text-xs font-semibold text-[#68707A]">
                              Field Label
                            </label>

                            <input
                              value={field.label}
                              onChange={(event) =>
                                updateAttendanceField(
                                  field.id,
                                  {
                                    label: event.target.value,
                                  }
                                )
                              }
                              className="mt-1.5 w-full rounded-xl border border-[#DDE5E1] px-3.5 py-2.5 text-sm outline-none focus:border-[#7838F0]"
                              placeholder="Example: Enrollment Number"
                            />
                          </div>

                          {/* TYPE */}
                          <div className="mt-3">
                            <label className="text-xs font-semibold text-[#68707A]">
                              Field Type
                            </label>

                            <div className="relative mt-1.5">
                              <select
                                value={field.type}
                                onChange={(event) =>
                                  updateAttendanceField(
                                    field.id,
                                    {
                                      type: event.target
                                        .value as AttendanceFieldType,
                                      options:
                                        event.target.value ===
                                        'dropdown'
                                          ? ['Option 1']
                                          : [],
                                    }
                                  )
                                }
                                className="w-full appearance-none rounded-xl border border-[#DDE5E1] bg-white px-3.5 py-2.5 pr-10 text-sm outline-none focus:border-[#7838F0]"
                              >
                                <option value="short-text">
                                  Short Answer
                                </option>
                                <option value="email">
                                  Email
                                </option>
                                <option value="phone">
                                  Phone Number
                                </option>
                                <option value="number">
                                  Number
                                </option>
                                <option value="dropdown">
                                  Dropdown
                                </option>
                                <option value="checkbox">
                                  Checkbox
                                </option>
                              </select>

                              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#68707A]" />
                            </div>
                          </div>

                          {/* DROPDOWN OPTIONS */}
                          {field.type === 'dropdown' && (
                            <div className="mt-3">
                              <label className="text-xs font-semibold text-[#68707A]">
                                Dropdown Options
                              </label>

                              <input
                                value={field.options.join(', ')}
                                onChange={(event) =>
                                  updateAttendanceField(
                                    field.id,
                                    {
                                      options: event.target.value
                                        .split(',')
                                        .map((item) =>
                                          item.trim()
                                        )
                                        .filter(Boolean),
                                    }
                                  )
                                }
                                className="mt-1.5 w-full rounded-xl border border-[#DDE5E1] px-3.5 py-2.5 text-sm outline-none focus:border-[#7838F0]"
                                placeholder="Example: CSE, IT, ECE"
                              />

                              <p className="mt-1 text-[11px] text-[#89918D]">
                                Separate options using commas.
                              </p>
                            </div>
                          )}

                          {/* REQUIRED */}
                          <label className="mt-4 flex cursor-pointer items-center gap-3">
                            <input
                              type="checkbox"
                              checked={field.required}
                              onChange={(event) =>
                                updateAttendanceField(
                                  field.id,
                                  {
                                    required:
                                      event.target.checked,
                                  }
                                )
                              }
                              className="h-4 w-4 accent-[#7838F0]"
                            />

                            <span className="text-sm font-semibold text-[#38413C]">
                              Required field
                            </span>
                          </label>

                        </div>
                      </div>
                    </div>
                  ))}

                  {attendanceFields.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-[#C9D5D0] bg-[#F8FBFA] px-6 py-12 text-center">
                      <Plus className="mx-auto h-8 w-8 text-[#7838F0]" />

                      <p className="mt-3 text-sm font-bold text-[#141c25]">
                        No fields added yet
                      </p>

                      <p className="mt-1 text-xs text-[#68707A]">
                        Click “Add Field” to start creating your attendance
                        form.
                      </p>
                    </div>
                  )}

                </div>
              </div>

              {/* RIGHT — LIVE PREVIEW */}
              <div className="bg-[#F5F9F7] p-6">
                <div className="sticky top-0">

                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                      Live Preview
                    </p>

                    <h3 className="mt-1 text-lg font-extrabold text-[#141c25]">
                      Participant View
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-[#E4EAE6] bg-white p-6 shadow-sm">

                    <h2 className="text-xl font-extrabold text-[#141c25]">
                      {formTitle || 'Attendance Form'}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-[#68707A]">
                      {formDescription ||
                        'Attendance form description'}
                    </p>

                    <div className="mt-6 space-y-5">

                      {attendanceFields.map((field) => (
                        <div key={field.id}>

                          <label className="text-sm font-bold text-[#38413C]">
                            {field.label || 'Untitled Field'}

                            {field.required && (
                              <span className="ml-1 text-[#7838F0]">
                                *
                              </span>
                            )}
                          </label>

                          {field.type === 'checkbox' ? (
                            <label className="mt-2 flex items-center gap-2 text-sm text-[#68707A]">
                              <input
                                type="checkbox"
                                disabled
                                className="h-4 w-4 accent-[#7838F0]"
                              />
                              Confirm
                            </label>
                          ) : field.type === 'dropdown' ? (
                            <select
                              disabled
                              className="mt-2 w-full rounded-xl border border-[#DDE5E1] bg-white px-3.5 py-3 text-sm text-[#68707A]"
                            >
                              <option>
                                Select{' '}
                                {field.label || 'option'}
                              </option>

                              {field.options.map(
                                (option) => (
                                  <option
                                    key={option}
                                  >
                                    {option}
                                  </option>
                                )
                              )}
                            </select>
                          ) : (
                            <input
                              disabled
                              type={
                                field.type === 'email'
                                  ? 'email'
                                  : field.type === 'number'
                                    ? 'number'
                                    : 'text'
                              }
                              placeholder={`Enter ${
                                field.label || 'value'
                              }`}
                              className="mt-2 w-full rounded-xl border border-[#DDE5E1] bg-white px-3.5 py-3 text-sm text-[#68707A]"
                            />
                          )}

                        </div>
                      ))}

                      {attendanceFields.length === 0 && (
                        <p className="py-8 text-center text-sm text-[#89918D]">
                          Your form preview will appear here.
                        </p>
                      )}

                    </div>

                    <button
                      type="button"
                      disabled
                      className="mt-6 w-full rounded-xl bg-[#7838F0] py-3 text-sm font-bold text-white opacity-70"
                    >
                      Submit Attendance
                    </button>

                  </div>
                </div>
              </div>

            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-between gap-3 border-t border-[#E4EAE6] bg-white px-6 py-4">

              <p className="text-xs text-[#89918D]">
                {attendanceFields.length} field
                {attendanceFields.length !== 1 ? 's' : ''}{' '}
                configured
              </p>

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={() => setShowFormBuilder(false)}
                  className="rounded-xl border border-[#DDE5E1] px-5 py-2.5 text-sm font-bold text-[#38413C] transition hover:bg-[#F5F9F7]"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowFormBuilder(false)
                    setShowQr(true)
                  }}
                  disabled={attendanceFields.length === 0}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#6727DF] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Save className="h-4 w-4" />
                  Save Attendance Form
                </button>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* QR MODAL */}
      {showQr && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#141c25]/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  Attendance
                </p>

                <h2 className="mt-1 text-xl font-extrabold text-[#141c25]">
                  Attendance QR
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowQr(false)}
                className="rounded-xl p-2 text-[#68707A] hover:bg-[#F4F7F5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-[#E4EAE6] bg-[#F8FBFA] p-8 text-center">

              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-2xl border-4 border-[#7838F0] bg-white">
                <QrCode className="h-32 w-32 text-[#141c25]" />
              </div>

              <p className="mt-5 text-sm font-extrabold text-[#141c25]">
                {selectedEvent.title}
              </p>

              <p className="mt-2 text-xs leading-5 text-[#68707A]">
                Participants can scan this QR to open the attendance form.
              </p>

            </div>

            <div className="mt-5 flex gap-3">

              <button
                type="button"
                onClick={() => setShowQr(false)}
                className="flex-1 rounded-xl border border-[#DDE5E1] px-4 py-3 text-sm font-bold text-[#38413C]"
              >
                Close
              </button>

              <button
                type="button"
                className="flex-1 rounded-xl bg-[#7838F0] px-4 py-3 text-sm font-bold text-white"
                onClick={() => {
                  setShowQr(false)
                }}
              >
                Download QR
              </button>

            </div>

            <p className="mt-3 text-center text-[11px] text-[#89918D]">
              QR generation is currently a frontend preview. Real
              QR generation will be connected with the attendance form
              URL during the Supabase/backend phase.
            </p>

          </div>
        </div>
      )}

    </div>
  )
}

function StatCard({
  label,
  value,
  icon,
  iconClass,
  footer,
}: {
  label: string
  value: string | number
  icon: ReactNode
  iconClass: string
  footer?: string
}) {
  return (
    <div className="rounded-2xl border border-[#E4EAE6] bg-white p-5">

      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-[#89918D]">
            {label}
          </p>

          <p className="mt-2 text-2xl font-extrabold text-[#141c25]">
            {value}
          </p>

          {footer && (
            <p className="mt-1 text-[11px] font-semibold text-[#89918D]">
              {footer}
            </p>
          )}
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>
      </div>

    </div>
  )
}

function TableHead({
  children,
  align = 'left',
}: {
  children: ReactNode
  align?: 'left' | 'right'
}) {
  return (
    <th
      className={`px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#89918D] ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      {children}
    </th>
  )
}

function StatusBadge({
  status,
}: {
  status: RegistrationStatus
}) {
  const styles: Record<RegistrationStatus, string> = {
    Confirmed: 'bg-[#E3F6EF] text-[#26745F]',
    Waitlisted: 'bg-[#FFF7E6] text-[#9A6A16]',
    Cancelled: 'bg-[#FFF0EF] text-[#A84C47]',
  }

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${styles[status]}`}
    >
      {status}
    </span>
  )
}

function AttendanceBadge({
  status,
}: {
  status: AttendanceStatus
}) {
  const styles: Record<AttendanceStatus, string> = {
    Present: 'bg-[#E3F6EF] text-[#26745F]',
    Absent: 'bg-[#FFF0EF] text-[#A84C47]',
    'Not Marked': 'bg-[#F1F3F2] text-[#68707A]',
  }

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold ${styles[status]}`}
    >
      {status}
    </span>
  )
}