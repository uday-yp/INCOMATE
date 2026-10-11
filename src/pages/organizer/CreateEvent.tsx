import {  useState } from 'react'
import {
  Award,
  BarChart3,
  Blocks,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardList,
  Eye,
  FileCheck2,
  FileText,
  Flag,
  GraduationCap,
  Image,
  Layers3,
  ListChecks,
  MapPin,
  Plus,
  Settings2,
  Sparkles,
  Trophy,
  Upload,
  UserRound,
  Users,
  UsersRound,
  X,
} from 'lucide-react'

type TemplateKey =
  | 'hackathon'
  | 'competition'
  | 'workshop'
  | 'seminar'
  | 'ideathon'
  | 'pitch'
  | 'quiz'
  | 'custom'

type ModuleKey =
  | 'basic'
  | 'page'
  | 'schedule'
  | 'eligibility'
  | 'registration'
  | 'teams'
  | 'timeline'
  | 'rounds'
  | 'submissions'
  | 'judging'
  | 'results'
  | 'certificates'
  | 'speakers'
  | 'prizes'

interface ModuleDefinition {
  id: ModuleKey
  label: string
  description: string
  icon: typeof CalendarDays
  category: 'core' | 'participation' | 'competition' | 'content'
}

const templates: {
  id: TemplateKey
  name: string
  description: string
  modules: ModuleKey[]
}[] = [
  {
    id: 'hackathon',
    name: 'Hackathon',
    description: 'Teams, rounds, submissions, judging and results.',
    modules: [
      'basic',
      'page',
      'schedule',
      'eligibility',
      'registration',
      'teams',
      'timeline',
      'rounds',
      'submissions',
      'judging',
      'results',
      'certificates',
    ],
  },
  {
    id: 'competition',
    name: 'Competition',
    description: 'Participant registration, evaluation and winners.',
    modules: [
      'basic',
      'page',
      'schedule',
      'eligibility',
      'registration',
      'teams',
      'timeline',
      'rounds',
      'submissions',
      'judging',
      'results',
      'certificates',
    ],
  },
  {
    id: 'workshop',
    name: 'Workshop',
    description: 'Learning sessions with speakers and attendance.',
    modules: [
      'basic',
      'page',
      'schedule',
      'eligibility',
      'registration',
      'speakers',
      'timeline',
      'certificates',
    ],
  },
  {
    id: 'seminar',
    name: 'Seminar / Webinar',
    description: 'Speaker-led sessions, schedule and participation.',
    modules: [
      'basic',
      'page',
      'schedule',
      'registration',
      'speakers',
      'timeline',
      'certificates',
    ],
  },
  {
    id: 'ideathon',
    name: 'Ideathon',
    description: 'Ideas, teams, submissions and evaluation.',
    modules: [
      'basic',
      'page',
      'schedule',
      'eligibility',
      'registration',
      'teams',
      'timeline',
      'submissions',
      'judging',
      'results',
      'certificates',
    ],
  },
  {
    id: 'pitch',
    name: 'Pitch Event',
    description: 'Applications, pitch rounds, judges and awards.',
    modules: [
      'basic',
      'page',
      'schedule',
      'eligibility',
      'registration',
      'timeline',
      'rounds',
      'submissions',
      'judging',
      'results',
      'prizes',
    ],
  },
  {
    id: 'quiz',
    name: 'Quiz',
    description: 'Questions, attempts, evaluation and leaderboard.',
    modules: [
      'basic',
      'page',
      'schedule',
      'eligibility',
      'registration',
      'timeline',
      'rounds',
      'judging',
      'results',
      'certificates',
    ],
  },
  {
    id: 'custom',
    name: 'Custom Event',
    description: 'Start from a blank event and choose your own modules.',
    modules: ['basic', 'page', 'schedule', 'registration'],
  },
]

const moduleDefinitions: ModuleDefinition[] = [
  {
    id: 'basic',
    label: 'Basic Information',
    description: 'Title, type, category, cover and description.',
    icon: FileText,
    category: 'core',
  },
  {
    id: 'page',
    label: 'Event Page',
    description: 'Control the public Event Details page sections.',
    icon: Layers3,
    category: 'core',
  },
  {
    id: 'schedule',
    label: 'Schedule & Venue',
    description: 'Dates, time, location and online/offline mode.',
    icon: CalendarDays,
    category: 'core',
  },
  {
    id: 'eligibility',
    label: 'Eligibility',
    description: 'Define who can participate.',
    icon: GraduationCap,
    category: 'core',
  },
  {
    id: 'registration',
    label: 'Registration Form',
    description: 'Create your participant registration form.',
    icon: ClipboardList,
    category: 'participation',
  },
  {
    id: 'teams',
    label: 'Teams',
    description: 'Team formation and member rules.',
    icon: UsersRound,
    category: 'participation',
  },
  {
    id: 'timeline',
    label: 'Event Timeline',
    description: 'Registration, event and important checkpoints.',
    icon: ListChecks,
    category: 'participation',
  },
  {
    id: 'rounds',
    label: 'Rounds / Stages',
    description: 'Configure multiple competition stages.',
    icon: Flag,
    category: 'competition',
  },
  {
    id: 'submissions',
    label: 'Submissions',
    description: 'Configure files, links and deliverables.',
    icon: Upload,
    category: 'competition',
  },
  {
    id: 'judging',
    label: 'Judging & Evaluation',
    description: 'Judges, criteria and scoring.',
    icon: BarChart3,
    category: 'competition',
  },
  {
    id: 'results',
    label: 'Results & Leaderboard',
    description: 'Winners, rankings and result publishing.',
    icon: Trophy,
    category: 'competition',
  },
  {
    id: 'prizes',
    label: 'Prizes & Awards',
    description: 'Configure awards and prize information.',
    icon: Award,
    category: 'competition',
  },
  {
    id: 'certificates',
    label: 'Certificates',
    description: 'Participation, finalist and winner certificates.',
    icon: FileCheck2,
    category: 'participation',
  },
  {
    id: 'speakers',
    label: 'Speakers / Guests',
    description: 'Speakers, mentors, guests and panelists.',
    icon: UserRound,
    category: 'content',
  },
]

function CreateEvent() {
  const [template, setTemplate] = useState<TemplateKey>('hackathon')
  const [activeModule, setActiveModule] =
    useState<ModuleKey>('basic')

  const [enabledModules, setEnabledModules] = useState<ModuleKey[]>(
    templates[0].modules,
  )

  const [eventTitle, setEventTitle] = useState(
    'Campus Hack Challenge',
  )

  const [eventType, setEventType] = useState('Hackathon')

  const [category, setCategory] = useState(
    'Innovation & Technology',
  )

  const [description, setDescription] = useState(
    'Solve real-world challenges with multidisciplinary teams and turn ideas into working prototypes.',
  )

  const [date, setDate] = useState('12 November 2026')
  const [time, setTime] = useState('10:00 AM – 6:00 PM')
  const [mode, setMode] = useState('Hybrid')
  const [location, setLocation] = useState(
    'Campus Innovation Lab',
  )

  const [registrationFields, setRegistrationFields] = useState([
    'Full Name',
    'Email Address',
    'Mobile Number',
    'College',
  ])

  const [teamEnabled, setTeamEnabled] = useState(true)
  const [minTeamSize, setMinTeamSize] = useState('2')
  const [maxTeamSize, setMaxTeamSize] = useState('4')

  const [timeline, setTimeline] = useState([
    {
      title: 'Registration Opens',
      date: '01 Nov',
    },
    {
      title: 'Registration Closes',
      date: '08 Nov',
    },
    {
      title: 'Hackathon Day',
      date: '12 Nov',
    },
    {
      title: 'Results & Showcase',
      date: '13 Nov',
    },
  ])

  const [rounds, setRounds] = useState([
    'Idea Submission',
    'Prototype Development',
    'Final Presentation',
  ])

  const [pageSections, setPageSections] = useState([
    'Hero',
    'About the Event',
    'Event Facts',
    'What to Expect',
    'Event Timeline',
    'How Participation Works',
    'Rules & Requirements',
    'Organized By',
    'Registration',
  ])

  

  const changeTemplate = (value: TemplateKey) => {
    setTemplate(value)

    const selected = templates.find(
      (item) => item.id === value,
    )

    if (selected) {
      setEnabledModules(selected.modules)
      setActiveModule('basic')
    }

    const selectedTemplate =
      templates.find((item) => item.id === value)

    if (selectedTemplate) {
      setEventType(selectedTemplate.name)
    }
  }

  const toggleModule = (id: ModuleKey) => {
    if (id === 'basic') return

    setEnabledModules((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  const addRegistrationField = () => {
    setRegistrationFields((items) => [
      ...items,
      `Custom Field ${items.length - 3}`,
    ])
  }

  const removeRegistrationField = (index: number) => {
    setRegistrationFields((items) =>
      items.filter((_, itemIndex) => itemIndex !== index),
    )
  }

  const addTimelineItem = () => {
    setTimeline((items) => [
      ...items,
      {
        title: 'New Event Stage',
        date: 'Date',
      },
    ])
  }

  const removeTimelineItem = (index: number) => {
    setTimeline((items) =>
      items.filter((_, itemIndex) => itemIndex !== index),
    )
  }

  const addRound = () => {
    setRounds((items) => [
      ...items,
      `Round ${items.length + 1}`,
    ])
  }

  const removeRound = (index: number) => {
    setRounds((items) =>
      items.filter((_, itemIndex) => itemIndex !== index),
    )
  }

  const togglePageSection = (section: string) => {
    setPageSections((items) =>
      items.includes(section)
        ? items.filter((item) => item !== section)
        : [...items, section],
    )
  }

  return (
    <div className="mx-auto max-w-[1500px] pb-10">
      {/* Header */}
      <section className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7838F0]">
            Organizer Studio
          </p>

          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-[#081018] sm:text-4xl">
            Create Event
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#505C75]">
            Build any type of event using configurable modules.
            The final configuration powers the public INCOMATE
            Event Details page.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold shadow-sm"
          >
            <Eye size={16} />
            Preview
          </button>

          <button
            type="button"
            className="rounded-xl bg-[#7838F0] px-5 py-2.5 text-sm font-bold text-white"
          >
            Save Draft
          </button>
        </div>
      </section>

      {/* Template selector */}
      <section className="mb-5 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
            Step 01
          </span>

          <h2 className="text-xl font-bold">
            Choose an Event Template
          </h2>

          <p className="text-sm text-[#68707A]">
            Start with a ready-made configuration. Every module
            can still be customized afterwards.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((item) => {
            const selected = template === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => changeTemplate(item.id)}
                className={`relative rounded-2xl border p-4 text-left transition ${
                  selected
                    ? 'border-[#7838F0] bg-[#F4F2FF] shadow-sm'
                    : 'border-[#E4EAE6] bg-white hover:border-[#B9AEFF] hover:bg-[#F9FAFC]'
                }`}
              >
                {selected && (
                  <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#7838F0] text-white">
                    <Check size={13} />
                  </span>
                )}

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    selected
                      ? 'bg-[#E9E6FF] text-[#7838F0]'
                      : 'bg-[#F4F2FF] text-[#7838F0]'
                  }`}
                >
                  <Blocks size={19} />
                </div>

                <h3 className="mt-3 text-sm font-bold">
                  {item.name}
                </h3>

                <p className="mt-1 pr-3 text-xs leading-5 text-[#68707A]">
                  {item.description}
                </p>
              </button>
            )
          })}
        </div>
      </section>

      {/* Builder */}
      <section className="grid gap-5 xl:grid-cols-[245px_minmax(0,1fr)_390px]">
        {/* Module palette */}
        <aside className="h-fit rounded-2xl bg-white p-3 shadow-sm xl:sticky xl:top-5">
          <div className="px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Step 02
            </p>

            <h2 className="mt-1 text-lg font-bold">
              Event Modules
            </h2>

            <p className="mt-1 text-xs leading-5 text-[#68707A]">
              Enable the capabilities required for this event.
            </p>
          </div>

          <div className="space-y-1">
            {(['core', 'participation', 'competition', 'content'] as const).map(
              (category) => {
                const heading =
                  category === 'core'
                    ? 'Core'
                    : category === 'participation'
                      ? 'Participation'
                      : category === 'competition'
                        ? 'Competition'
                        : 'Content'

                return (
                  <div key={category} className="pt-3">
                    <p className="px-3 pb-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#68707A]">
                      {heading}
                    </p>

                    {moduleDefinitions
                      .filter(
                        (module) =>
                          module.category === category,
                      )
                      .map((module) => {
                        const Icon = module.icon
                        const enabled =
                          enabledModules.includes(module.id)
                        const active =
                          activeModule === module.id

                        return (
                          <button
                            key={module.id}
                            type="button"
                            onClick={() => {
                              setActiveModule(module.id)

                              if (
                                module.id !== 'basic' &&
                                !enabled
                              ) {
                                toggleModule(module.id)
                              }
                            }}
                            className={`group flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left transition ${
                              active
                                ? 'bg-[#F4F2FF] text-[#7838F0]'
                                : 'text-[#505C75] hover:bg-[#F8FAF9]'
                            }`}
                          >
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                                active
                                  ? 'bg-[#E9E6FF]'
                                  : 'bg-[#F4F2FF]'
                              }`}
                            >
                              <Icon size={14} />
                            </span>

                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-xs font-bold">
                                {module.label}
                              </span>
                            </span>

                            {module.id === 'basic' ? (
                              <Check
                                size={14}
                                className="text-[#7838F0]"
                              />
                            ) : (
                              <span
                                onClick={(event) => {
                                  event.stopPropagation()
                                  toggleModule(module.id)
                                }}
                                className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                  enabled
                                    ? 'border-[#7838F0] bg-[#7838F0] text-white'
                                    : 'border-[#CBD3D0] bg-white'
                                }`}
                              >
                                {enabled && <Check size={11} />}
                              </span>
                            )}
                          </button>
                        )
                      })}
                  </div>
                )
              },
            )}
          </div>
        </aside>

        {/* Editor */}
        <main className="min-w-0 rounded-2xl bg-white shadow-sm">
          <div className="border-b border-[#E4EAE6] p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Settings2 size={18} className="text-[#7838F0]" />

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                  Step 03
                </p>

                <h2 className="text-xl font-bold">
                  Configure{' '}
                  {
                    moduleDefinitions.find(
                      (item) => item.id === activeModule,
                    )?.label
                  }
                </h2>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            {activeModule === 'basic' && (
              <BasicEditor
                eventTitle={eventTitle}
                setEventTitle={setEventTitle}
                eventType={eventType}
                setEventType={setEventType}
                category={category}
                setCategory={setCategory}
                description={description}
                setDescription={setDescription}
              />
            )}

            {activeModule === 'page' && (
              <PageBuilder
                pageSections={pageSections}
                togglePageSection={togglePageSection}
              />
            )}

            {activeModule === 'schedule' && (
              <ScheduleEditor
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                mode={mode}
                setMode={setMode}
                location={location}
                setLocation={setLocation}
              />
            )}

            {activeModule === 'eligibility' && (
              <EligibilityEditor />
            )}

            {activeModule === 'registration' && (
              <RegistrationEditor
                fields={registrationFields}
                addField={addRegistrationField}
                removeField={removeRegistrationField}
              />
            )}

            {activeModule === 'teams' && (
              <TeamsEditor
                enabled={teamEnabled}
                setEnabled={setTeamEnabled}
                min={minTeamSize}
                setMin={setMinTeamSize}
                max={maxTeamSize}
                setMax={setMaxTeamSize}
              />
            )}

            {activeModule === 'timeline' && (
              <TimelineEditor
                items={timeline}
                addItem={addTimelineItem}
                removeItem={removeTimelineItem}
              />
            )}

            {activeModule === 'rounds' && (
              <RoundsEditor
                rounds={rounds}
                addRound={addRound}
                removeRound={removeRound}
              />
            )}

            {activeModule === 'submissions' && (
              <SimpleModuleEditor
                title="Submission Configuration"
                description="Define what participants or teams must submit and when."
                fields={[
                  'Submission title',
                  'Submission deadline',
                  'GitHub / repository URL',
                  'Demo URL',
                  'Project description',
                ]}
              />
            )}

            {activeModule === 'judging' && (
              <SimpleModuleEditor
                title="Judging & Evaluation"
                description="Create the evaluation structure used by judges."
                fields={[
                  'Problem Understanding — 20%',
                  'Innovation — 25%',
                  'Technical Execution — 25%',
                  'Impact — 20%',
                  'Presentation — 10%',
                ]}
              />
            )}

            {activeModule === 'results' && (
              <SimpleModuleEditor
                title="Results & Leaderboard"
                description="Configure how rankings and winners will be displayed."
                fields={[
                  'Enable leaderboard',
                  'Publish winners',
                  'Display scores',
                  'Number of winners',
                ]}
              />
            )}

            {activeModule === 'prizes' && (
              <SimpleModuleEditor
                title="Prizes & Awards"
                description="Configure awards that appear on the event page."
                fields={[
                  '1st Prize',
                  '2nd Prize',
                  '3rd Prize',
                  'Special Awards',
                ]}
              />
            )}

            {activeModule === 'certificates' && (
              <SimpleModuleEditor
                title="Certificates"
                description="Configure participation and achievement credentials."
                fields={[
                  'Participation Certificate',
                  'Finalist Certificate',
                  'Winner Certificate',
                  'QR Verification',
                ]}
              />
            )}

            {activeModule === 'speakers' && (
              <SimpleModuleEditor
                title="Speakers / Guests"
                description="Add keynote speakers, mentors, judges, panelists or guests."
                fields={[
                  'Person Name',
                  'Role / Designation',
                  'Organization',
                  'Photo',
                  'Short Bio',
                ]}
              />
            )}
          </div>
        </main>

        {/* Live preview */}
        <EventPreview
          title={eventTitle}
          type={eventType}
          description={description}
          date={date}
          time={time}
          mode={mode}
          location={location}
          category={category}
          enabledModules={enabledModules}
          pageSections={pageSections}
          teamEnabled={teamEnabled}
          timeline={timeline}
        />
      </section>

      {/* Bottom actions */}
      <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold">Ready to publish?</p>
          <p className="mt-1 text-xs text-[#68707A]">
            You can save this event as a draft and continue configuring it
            later.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="rounded-xl bg-[#edf4ff] px-5 py-2.5 text-sm font-bold"
          >
            Save Draft
          </button>

          <button
            type="button"
            className="rounded-xl bg-[#7838F0] px-5 py-2.5 text-sm font-bold text-white"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Editors                                                                    */
/* -------------------------------------------------------------------------- */

function BasicEditor({
  eventTitle,
  setEventTitle,
  eventType,
  setEventType,
  category,
  setCategory,
  description,
  setDescription,
}: {
  eventTitle: string
  setEventTitle: (value: string) => void
  eventType: string
  setEventType: (value: string) => void
  category: string
  setCategory: (value: string) => void
  description: string
  setDescription: (value: string) => void
}) {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Core Event"
        title="Basic Information"
        description="These values power the hero and primary identity of the public event page."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Event Title" required>
          <input
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            className="form-input"
          />
        </Field>

        <Field label="Event Type">
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="form-input"
          >
            <option>Hackathon</option>
            <option>Competition</option>
            <option>Workshop</option>
            <option>Seminar</option>
            <option>Webinar</option>
            <option>Ideathon</option>
            <option>Pitch Event</option>
            <option>Quiz</option>
          </select>
        </Field>

        <Field label="Category">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input"
          />
        </Field>

        <Field label="Cover Image">
          <div className="flex h-11 items-center gap-2 rounded-xl border border-dashed border-[#CBD3D0] px-4 text-xs font-semibold text-[#68707A]">
            <Image size={16} />
            Upload / select event cover
          </div>
        </Field>

        <div className="md:col-span-2">
          <Field label="Short Description" required>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="form-input resize-y"
            />
          </Field>
        </div>
      </div>
    </div>
  )
}

function PageBuilder({
  pageSections,
  togglePageSection,
}: {
  pageSections: string[]
  togglePageSection: (section: string) => void
}) {
  const availableSections = [
    'Hero',
    'About the Event',
    'Event Facts',
    'What to Expect',
    'Event Timeline',
    'How Participation Works',
    'Rules & Requirements',
    'Organized By',
    'Registration',
    'Speakers',
    'Mentors',
    'Judges',
    'Prizes',
    'FAQs',
    'Resources',
  ]

  return (
    <div className="space-y-5">
      <EditorIntro
        label="Public Experience"
        title="Event Page Builder"
        description="Choose the sections that will appear on your public INCOMATE event page."
      />

      <div className="space-y-2">
        {availableSections.map((section, index) => {
          const enabled = pageSections.includes(section)

          return (
            <button
              key={section}
              type="button"
              onClick={() => togglePageSection(section)}
              className="flex w-full items-center gap-3 rounded-xl border border-[#E4EAE6] bg-white p-4 text-left hover:bg-[#F8FAF9]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4F2FF] text-xs font-bold text-[#7838F0]">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="flex-1">
                <span className="block text-sm font-bold">
                  {section}
                </span>

                <span className="mt-0.5 block text-xs text-[#68707A]">
                  {enabled
                    ? 'Visible on the public event page'
                    : 'Currently hidden'}
                </span>
              </span>

              <span
                className={`flex h-6 w-11 items-center rounded-full p-1 ${
                  enabled
                    ? 'justify-end bg-[#7838F0]'
                    : 'justify-start bg-[#D8DEE7]'
                }`}
              >
                <span className="h-4 w-4 rounded-full bg-white" />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ScheduleEditor({
  date,
  setDate,
  time,
  setTime,
  mode,
  setMode,
  location,
  setLocation,
}: {
  date: string
  setDate: (value: string) => void
  time: string
  setTime: (value: string) => void
  mode: string
  setMode: (value: string) => void
  location: string
  setLocation: (value: string) => void
}) {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Event Logistics"
        title="Schedule & Venue"
        description="Configure when and where the event takes place."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Event Date">
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input"
          />
        </Field>

        <Field label="Time">
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-input"
          />
        </Field>

        <Field label="Mode">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="form-input"
          >
            <option>Hybrid</option>
            <option>Offline</option>
            <option>Online</option>
          </select>
        </Field>

        <Field label="Location / Meeting">
          <div className="relative">
            <MapPin
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#68707A]"
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-input pl-9"
            />
          </div>
        </Field>
      </div>
    </div>
  )
}

function EligibilityEditor() {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Participation Rules"
        title="Eligibility"
        description="Define who can participate in this event."
      />

      <div className="space-y-3">
        {[
          'Open to college students',
          'Individual participation allowed',
          'Team participation allowed',
          'Basic technical or problem-solving knowledge recommended',
        ].map((item) => (
          <label
            key={item}
            className="flex items-center gap-3 rounded-xl border border-[#E4EAE6] p-4 text-sm font-semibold"
          >
            <input
              type="checkbox"
              defaultChecked
              className="h-4 w-4 accent-[#7838F0]"
            />
            {item}
          </label>
        ))}
      </div>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl bg-[#F4F2FF] px-4 py-2.5 text-xs font-bold text-[#7838F0]"
      >
        <Plus size={14} />
        Add Eligibility Rule
      </button>
    </div>
  )
}

function RegistrationEditor({
  fields,
  addField,
  removeField,
}: {
  fields: string[]
  addField: () => void
  removeField: (index: number) => void
}) {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Participant Intake"
        title="Registration Form"
        description="Build a form similar to a Google Form, but using the INCOMATE event system."
      />

      <div className="rounded-2xl bg-[#F6FAF8] p-3">
        {fields.map((field, index) => (
          <div
            key={`${field}-${index}`}
            className="mb-3 grid gap-2 rounded-xl bg-white p-3 last:mb-0 md:grid-cols-[1fr_150px_auto]"
          >
            <input
              defaultValue={field}
              className="form-input"
            />

            <select className="form-input">
              <option>Short Answer</option>
              <option>Email</option>
              <option>Mobile</option>
              <option>Long Answer</option>
              <option>Dropdown</option>
              <option>Checkbox</option>
              <option>File Upload</option>
            </select>

            <button
              type="button"
              onClick={() => removeField(index)}
              className="rounded-xl px-3 text-xs font-bold text-[#7838F0]"
            >
              <X size={15} />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addField}
        className="inline-flex items-center gap-2 rounded-xl bg-[#F4F2FF] px-4 py-2.5 text-xs font-bold text-[#7838F0]"
      >
        <Plus size={14} />
        Add Question
      </button>
    </div>
  )
}

function TeamsEditor({
  enabled,
  setEnabled,
  min,
  setMin,
  max,
  setMax,
}: {
  enabled: boolean
  setEnabled: (value: boolean) => void
  min: string
  setMin: (value: string) => void
  max: string
  setMax: (value: string) => void
}) {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Collaboration"
        title="Team Formation"
        description="Configure how participants create and manage teams."
      />

      <label className="flex items-center justify-between rounded-xl border border-[#E4EAE6] p-4">
        <div>
          <p className="text-sm font-bold">Enable Team Formation</p>
          <p className="mt-1 text-xs text-[#68707A]">
            Allow participants to create or join teams.
          </p>
        </div>

        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
          className="h-5 w-5 accent-[#7838F0]"
        />
      </label>

      {enabled && (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Minimum Team Size">
            <input
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="form-input"
            />
          </Field>

          <Field label="Maximum Team Size">
            <input
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="form-input"
            />
          </Field>
        </div>
      )}
    </div>
  )
}

function TimelineEditor({
  items,
  addItem,
  removeItem,
}: {
  items: { title: string; date: string }[]
  addItem: () => void
  removeItem: (index: number) => void
}) {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Chronology"
        title="Event Timeline"
        description="Build the checkpoints participants will see on the event page."
      />

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="grid gap-3 rounded-xl bg-[#F6FAF8] p-4 md:grid-cols-[100px_1fr_auto]"
          >
            <input
              defaultValue={item.date}
              className="form-input"
            />

            <input
              defaultValue={item.title}
              className="form-input"
            />

            <button
              type="button"
              onClick={() => removeItem(index)}
              className="rounded-xl px-3 text-xs font-bold text-[#7838F0]"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addItem}
        className="inline-flex items-center gap-2 rounded-xl bg-[#F4F2FF] px-4 py-2.5 text-xs font-bold text-[#7838F0]"
      >
        <Plus size={14} />
        Add Timeline Stage
      </button>
    </div>
  )
}

function RoundsEditor({
  rounds,
  addRound,
  removeRound,
}: {
  rounds: string[]
  addRound: () => void
  removeRound: (index: number) => void
}) {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Competition Engine"
        title="Rounds / Stages"
        description="Configure the stages participants move through."
      />

      <div className="space-y-3">
        {rounds.map((round, index) => (
          <div
            key={`${round}-${index}`}
            className="flex items-center gap-3 rounded-xl border border-[#E4EAE6] p-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E9E6FF] text-xs font-bold text-[#7838F0]">
              {index + 1}
            </span>

            <input
              defaultValue={round}
              className="form-input"
            />

            <button
              type="button"
              onClick={() => removeRound(index)}
              className="text-xs font-bold text-[#7838F0]"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addRound}
        className="inline-flex items-center gap-2 rounded-xl bg-[#F4F2FF] px-4 py-2.5 text-xs font-bold text-[#7838F0]"
      >
        <Plus size={14} />
        Add Round
      </button>
    </div>
  )
}

function SimpleModuleEditor({
  title,
  description,
  fields,
}: {
  title: string
  description: string
  fields: string[]
}) {
  return (
    <div className="space-y-5">
      <EditorIntro
        label="Configurable Module"
        title={title}
        description={description}
      />

      <div className="space-y-3">
        {fields.map((field) => (
          <div
            key={field}
            className="rounded-xl border border-[#E4EAE6] p-4"
          >
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 accent-[#7838F0]"
              />

              <span className="text-sm font-semibold">
                {field}
              </span>
            </label>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl bg-[#F4F2FF] px-4 py-2.5 text-xs font-bold text-[#7838F0]"
      >
        <Plus size={14} />
        Add Configuration
      </button>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Preview                                                                    */
/* -------------------------------------------------------------------------- */

function EventPreview({
  title,
  type,
  description,
  date,
  time,
  mode,
  location,
  category,
    pageSections,
  teamEnabled,
  timeline,
}: {
  title: string
  type: string
  description: string
  date: string
  time: string
  mode: string
  location: string
  category: string
  enabledModules: ModuleKey[]
  pageSections: string[]
  teamEnabled: boolean
  timeline: { title: string; date: string }[]
}) {
  return (
    <aside className="min-w-0 xl:sticky xl:top-5 xl:h-[calc(100vh-40px)]">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#083830] shadow-sm">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#B9AEFF]">
              Step 04
            </p>

            <h2 className="mt-1 text-sm font-bold text-white">
              Live Event Preview
            </h2>
          </div>

          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
            <Eye size={15} />
          </span>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#F6FAF8]">
          {/* Hero */}
          {pageSections.includes('Hero') && (
            <section className="bg-[#083830] px-5 pb-7 pt-6 text-white">
              <span className="inline-flex rounded-full bg-[#7838F0] px-2.5 py-1 text-[9px] font-bold">
                {type}
              </span>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
                {title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/70">
                {description}
              </p>

              <div className="mt-5 space-y-2 text-[10px] text-white/80">
                <div className="flex gap-2">
                  <CalendarDays size={13} />
                  {date}
                </div>

                <div className="flex gap-2">
                  <ClockIcon />
                  {time}
                </div>

                <div className="flex gap-2">
                  <MapPin size={13} />
                  {location}
                </div>
              </div>
            </section>
          )}

          <div className="space-y-5 p-4">
            {pageSections.includes('About the Event') && (
              <PreviewSection
                label="Comprehensive Brief"
                title="About the Event"
              >
                <p className="text-xs leading-5 text-[#505C75]">
                  {description} This section will contain the
                  detailed event description entered by the
                  organizer.
                </p>
              </PreviewSection>
            )}

            {pageSections.includes('Event Facts') && (
              <PreviewSection
                label="Event Information"
                title="Event Facts"
              >
                <div className="grid grid-cols-2 gap-2">
                  {[
                    ['Type', type],
                    ['Mode', mode],
                    ['Category', category],
                    ['Eligibility', 'College Students'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white p-3 shadow-sm"
                    >
                      <span className="text-[8px] font-bold uppercase tracking-wider text-[#68707A]">
                        {label}
                      </span>

                      <p className="mt-1 text-[10px] font-bold text-[#081018]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </PreviewSection>
            )}

            {pageSections.includes('What to Expect') && (
              <PreviewSection
                label="Experience Design"
                title="What to Expect"
              >
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Problem Solving',
                    'Team Collaboration',
                    'Build & Experiment',
                    'Showcase Your Work',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-3 shadow-sm"
                    >
                      <Sparkles
                        size={14}
                        className="text-[#7838F0]"
                      />

                      <p className="mt-2 text-[10px] font-bold">
                        {item}
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-[#68707A]">
                        Event-specific experience content.
                      </p>
                    </div>
                  ))}
                </div>
              </PreviewSection>
            )}

            {pageSections.includes('Event Timeline') && (
              <PreviewSection
                label="Chronology"
                title="Event Timeline"
              >
                <div className="space-y-2">
                  {timeline.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="flex gap-3 rounded-xl bg-white p-3 shadow-sm"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9E6FF] text-[9px] font-bold text-[#7838F0]">
                        {index + 1}
                      </span>

                      <div>
                        <span className="text-[8px] font-bold text-[#7838F0]">
                          {item.date}
                        </span>

                        <p className="mt-0.5 text-[10px] font-bold">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </PreviewSection>
            )}

            {pageSections.includes(
              'How Participation Works',
            ) && (
              <PreviewSection
                label="Process"
                title="How Participation Works"
              >
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Register',
                    ...(teamEnabled ? ['Form Team'] : []),
                    'Participate',
                    'Build & Submit',
                    'Showcase',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-3 shadow-sm"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#E9E6FF] text-[8px] font-bold text-[#7838F0]">
                        {index + 1}
                      </span>

                      <p className="mt-2 text-[10px] font-bold">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </PreviewSection>
            )}

            {pageSections.includes(
              'Rules & Requirements',
            ) && (
              <PreviewSection
                label="Guidelines"
                title="Rules & Requirements"
              >
                <div className="space-y-2">
                  {[
                    'Eligibility',
                    'Team Requirements',
                    'Submission Guidelines',
                    'Important Instructions',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm"
                    >
                      <span className="text-[10px] font-bold">
                        {item}
                      </span>

                      <ChevronDown
                        size={13}
                        className="text-[#68707A]"
                      />
                    </div>
                  ))}
                </div>
              </PreviewSection>
            )}

            {pageSections.includes('Organized By') && (
              <PreviewSection
                label="Community Host"
                title="Organized By"
              >
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E9E6FF] text-[#7838F0]">
                      <Users size={16} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold">
                        INCOMATE Innovation Network
                      </p>

                      <p className="text-[9px] text-[#68707A]">
                        Verified organizer
                      </p>
                    </div>
                  </div>
                </div>
              </PreviewSection>
            )}

            {pageSections.includes('Registration') && (
              <div className="rounded-2xl bg-[#083830] p-4 text-white">
                <p className="text-[9px] font-bold uppercase tracking-wider text-[#B9AEFF]">
                  Registration
                </p>

                <h3 className="mt-1 text-lg font-bold">
                  Ready to Participate?
                </h3>

                <p className="mt-2 text-[10px] leading-4 text-white/70">
                  Register through INCOMATE to participate in this
                  event.
                </p>

                <button
                  type="button"
                  className="mt-4 w-full rounded-xl bg-[#7838F0] py-2 text-[10px] font-bold text-white"
                >
                  Register for Event →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}

function PreviewSection({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
        {label}
      </span>

      <h3 className="mt-1 text-base font-bold text-[#081018]">
        {title}
      </h3>

      <div className="mt-3">{children}</div>
    </section>
  )
}

function EditorIntro({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <div>
      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
        {label}
      </span>

      <h3 className="mt-1 text-2xl font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#68707A]">
        {description}
      </p>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-[#505C75]">
        {label}
        {required && (
          <span className="ml-1 text-[#7838F0]">*</span>
        )}
      </span>

      {children}
    </label>
  )
}

function ClockIcon() {
  return (
    <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full border border-white/60 text-[7px]">
      •
    </span>
  )
}

export default CreateEvent