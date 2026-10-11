import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Code2,
  Compass,
 CalendarDays,
  Flag,
  GraduationCap,
  Handshake,
  Lightbulb,
  Rocket,
  Search,
  Sparkles,
  Store,
  Users,
  UsersRound,
  Workflow,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  {
    number: '01',
    title: 'Events',
    icon: CalendarDays,
    tone: 'bg-[#E9E6FF] text-[#7838F0]',
    hover: 'hover:bg-[#F4F2FF]',
    description:
      'Hackathons, workshops, sprints, and competitions where people participate, test ideas, and form rapid initial iterations.',
    link: 'Discover Hackathons',
    path: '/events',
  },
  {
    number: '02',
    title: 'Opportunities',
    icon: Wrench,
    tone: 'bg-[#BEECE0] text-[#3C665D]',
    hover: 'hover:bg-[#EEF8F5]',
    description:
      'Fellowships, open research challenges, grants, and residency calls designed for structured skill acquisition and career growth.',
    link: 'Explore Calls',
    path: '/opportunities',
  },
  {
    number: '03',
    title: 'Innovation',
    icon: Lightbulb,
    tone: 'bg-[#E9E6FF] text-[#7838F0]',
    hover: 'hover:bg-[#F4F2FF]',
    description:
      'Collaborative workspaces, project repositories, and structured milestones where theoretical concepts become tangible prototypes.',
    link: 'Track Projects',
    path: '/events',
  },
  {
    number: '04',
    title: 'Startups',
    icon: Rocket,
    tone: 'bg-[#BEECE0] text-[#3C665D]',
    hover: 'hover:bg-[#EEF8F5]',
    description:
      'Emerging student-led ventures, early software prototypes, and public team profiles ready for peer feedback and campus validation.',
    link: 'Browse Ventures',
    path: '/startups',
  },
]

const processSteps = [
  ['01', 'Discover', 'Find events, opportunities, projects, and startups tailored to your interests.', Search, 'Search & Filter'],
  ['02', 'Participate', 'Register and take part in activities with unified profile credentials.',  CalendarDays, 'Direct Sign-up'],
  ['03', 'Collaborate', 'Form multidisciplinary teams, match with peer builders, and connect with organizers.', UsersRound, 'Team Matching'],
  ['04', 'Build', 'Turn ideas into functional projects, testable prototypes, and working code.', Code2, 'Sprint & Ship'],
  ['05', 'Showcase', 'Present your work, share your progress milestones, and build a verified portfolio.', Store, 'Public Record'],
] as const

const stakeholders = [
  {
    title: 'For Students',
    icon: GraduationCap,
    description:
      'Discover hackathons & grants, collaborate with campus peers across departments, participate in hands-on challenges, and build a demonstrable track record.',
    link: 'Explore Student Journey',
    path: '/events',
  },
  {
    title: 'For Organizers',
    icon: UsersRound,
    description:
      'Publish events to an engaged demographic, track applicant registrations, streamline submission reviews, and issue participation credentials with minimal admin overhead.',
    link: 'Explore Organizer Tools',
    path: '/login',
  },
  {
    title: 'For Institutions',
    icon: Building2,
    description:
      'Foster student-led entrepreneurship without maintaining fragile custom portals. Provide structured venues for open innovation and track participation.',
    link: 'Explore Institutional Solutions',
    path: '/login',
  },
  {
    title: 'For Founders & Teams',
    icon: Rocket,
    description:
      'Showcase early prototypes beyond transient social posts. Recruit student co-founders, gather feedback, and prepare your team for incubator applications.',
    link: 'Explore Startup Hub',
    path: '/startups',
  },
]

const principles = [
  ['01', 'One Place', 'Bringing fragmented discovery into one coherent, distraction-free environment without algorithm-driven noise.'],
  ['02', 'Discovery', 'Making relevant collegiate activities effortless to find and filter by domain, technical discipline, or commitment.'],
  ['03', 'Participation', 'Removing administrative friction so learners can move immediately from passive reading to actively building.'],
  ['04', 'Showcase', 'Providing early builders a credible, public stage to present real work without vanity metrics or superficial hype.'],
]

const futureItems = [
  ['Inter-Campus Networks', 'Unlocking cross-university team formation so engineers, designers, and students from different disciplines can partner beyond physical institutional boundaries.', 'Phase Exploration', Users],
  ['Milestone Credentialing', 'Timestamped achievement badges and contribution records that can serve as evidence of practical work and participation.', 'Standards Development', BadgeCheck],
  ['Student-to-Venture Pathways', 'Direct pipeline handoffs from successful prototypes to university incubators, micro-grants, and other structured support.', 'Partner Architecture', Workflow],
] as const

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#3C665D]">{eyebrow}</span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-[#081018] sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-7 text-[#68707A]">{description}</p>
    </div>
  )
}

function About() {
  return (
    <div className="w-full overflow-hidden bg-[#F6FAF8]">
      {/* Hero */}
      <section className="bg-[#F6FAF8] pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F2FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#7838F0]" />
                About the Platform
              </div>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-[-0.055em] text-[#081018] sm:text-5xl lg:text-[3.65rem]">
                One Place to Discover, Participate and Build.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#505C75]">
                INCOMATE is a platform connecting people with events, opportunities, innovation activities and emerging startups.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/events" className="group inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#6F41D8]">
                  Explore INCOMATE <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
                </Link>
                <Link to="/events" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#081018] shadow-sm transition hover:bg-[#F4F2FF]">
                  <CalendarDays size={18} className="text-[#7838F0]" /> Explore Events
                </Link>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#68707A]">
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#7838F0]" />Single Unified Hub</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#3C665D]" />Student & Builder Driven</span>
                <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />Transparent Pathways</span>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="relative aspect-[16/11] overflow-hidden rounded-3xl bg-[#E7EEFA] shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5nbkeXYENVy4YjyIoK4UCQfpeSRluQPnZA0f_SaJKXMR5kwofaVS7d4l4gVyo3XCje3StJRkDdNDUatUdA30iTJzPUuJPqw_ma_a9UW2AMQagWAVVF5K25yNihwrVq-W8WJ4wSmxnxakrEG_VDIi_OzhwUHZFkf4Vxq6FSphop1Fi3H3wKc6KHT15WoVMX6GkdKqbUnhcDPGE-8F66MppXprl2-fIscgJRojMS0xpsXfmeuYy2uM"
                  alt="Students collaborating in an innovation workspace"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1722]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-sm font-bold"><Sparkles size={16} /> Built around participation, not just discovery.</div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-white p-4 shadow-lg sm:block">
                <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]"><Handshake size={20} /></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#68707A]">Connected</p><p className="text-sm font-extrabold text-[#081018]">People → Ideas → Action</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="The Platform" title="What Is INCOMATE?" description="A unified layer connecting the activities, people, projects, and pathways that make an innovation ecosystem move." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return <Link key={pillar.number} to={pillar.path} className={`group flex min-h-[310px] flex-col justify-between rounded-2xl bg-[#F7F9FF] p-6 shadow-sm transition ${pillar.hover}`}>
                <div>
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm ${pillar.tone}`}><Icon size={24} /></div>
                  <div className="mb-1 flex items-center justify-between"><h3 className="text-xl font-bold text-[#081018]">{pillar.title}</h3><span className="font-mono text-xs text-[#68707A]">{pillar.number}</span></div>
                  <p className="mt-3 text-sm leading-6 text-[#68707A]">{pillar.description}</p>
                </div>
                <span className="flex items-center gap-1 pt-6 text-xs font-bold text-[#7838F0] transition-all group-hover:gap-2">{pillar.link}<ArrowRight size={15} /></span>
              </Link>
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="bg-[#F6FAF8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="System Architecture" title="An Ecosystem, Not Just a Listing Platform." description="A unified circular model connecting participants with practical innovation stages." />
          <div className="relative overflow-hidden rounded-3xl bg-white p-5 shadow-sm sm:p-8 lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F4F2FF]/60 via-transparent to-[#BEECE0]/20" />
            <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['Students', 'Curious learners & multidisciplinary builders looking for meaningful collaborative work.', GraduationCap, 'Initiates participation'],
                ['Organizers', 'Campus clubs, event hosts & challenge directors seeking high-intent participants.', Users, 'Curates experiences'],
                ['Institutions', 'Colleges, academic departments & research labs driving innovation outcomes.', Building2, 'Sponsors & validates'],
                ['Founders & Teams', 'Emerging creators converting prototypes into active public ventures.', Flag, 'Scales innovation'],
              ].map(([title, desc, Icon, action]) => {
                const ItemIcon = Icon as typeof GraduationCap
                return <div key={title as string} className="flex min-h-[190px] flex-col justify-between rounded-2xl bg-[#F7F9FF] p-5 shadow-sm">
                  <div><div className="mb-2 flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F4F2FF] text-[#7838F0]"><ItemIcon size={16} /></span><h4 className="text-base font-bold text-[#081018]">{title as string}</h4></div><p className="text-sm leading-6 text-[#68707A]">{desc as string}</p></div>
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#7838F0]">{action as string}<ArrowRight size={14} /></div>
                </div>
              })}
            </div>
            <div className="relative mt-5 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#E7EEFA] p-5 sm:p-6 lg:flex-row">
              <div className="flex items-center gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7838F0] text-white shadow-md"><Workflow size={24} /></div><div><p className="text-lg font-bold text-[#081018]">Continuous Lifecycle Flow</p><p className="text-sm text-[#68707A]">How value flows across the INCOMATE pipeline</p></div></div>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-[#3C665D] sm:gap-3"><span>Discover</span><ChevronRight size={14} /><span>Participate</span><ChevronRight size={14} /><span>Build</span><ChevronRight size={14} /><span>Showcase</span><ChevronRight size={14} /><span>Connect</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / shift */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="The Structural Shift" title="Too Many Places. One Experience." description="Students and organizers currently face fragmented tools, scattered group chats, and disconnected forms." />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl bg-[#F7F9FF] p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#081018] text-white"><Compass size={20} /></div><h3 className="text-xl font-bold text-[#081018]">Today — The Fragmented Landscape</h3></div>
              <div className="space-y-4">
                {['Dispersed across 5+ social apps and chat groups', 'Fragmented forms, expired links, and lost emails', 'Isolated projects that dissolve after the weekend', 'Disconnected portfolios with no verifiable history'].map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-white p-4"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#081018] text-white"><span className="text-sm">×</span></span><p className="text-sm font-semibold leading-6 text-[#505C75]">{item}</p></div>)}
              </div>
              <p className="mt-5 text-sm font-bold text-[#68707A]">High friction, low retention, wasted collegiate momentum.</p>
            </div>
            <div className="rounded-3xl bg-[#083830] p-6 text-white sm:p-8">
              <div className="mb-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Check size={20} /></div><h3 className="text-xl font-bold">INCOMATE — Designed For Continuity</h3></div>
              <div className="space-y-4">
                {['One connected platform for campus & civic innovation', 'One discovery experience for events, calls, and startups', 'One participation journey with continuous project milestones'].map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#083830]"><Check size={14} /></span><p className="text-sm font-semibold leading-6 text-white/90">{item}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#052721] py-16 text-white lg:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#BEECE0]">Our Core Purpose</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">Building a More Connected Innovation Ecosystem.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">Our vision is to make it easier for people to discover opportunities, participate in meaningful activities, build ideas and showcase what they create. We believe innovation flourishes when the friction between having an idea and finding the right team, challenge, or audience is removed.</p>
          <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80"><BadgeCheck size={16} className="text-[#BEECE0]" /> Grounded in genuine collegiate initiative.</div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F6FAF8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Process & Flow" title="How INCOMATE Works" description="A clear step-by-step pathway from initial curiosity to public showcase." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(([number, title, description, Icon, label]) => {
              const StepIcon = Icon as typeof Search
              return <div key={number} className="relative rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center justify-between"><span className="font-mono text-xs font-bold text-[#7838F0]">{number}</span><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F2FF] text-[#7838F0]"><StepIcon size={18} /></span></div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#081018]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#68707A]">{description}</p>
                <div className="mt-5 border-t border-[#E4EAE6] pt-4 text-xs font-semibold text-[#7838F0]">{label}</div>
              </div>
            })}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Stakeholders" title="Built for the Ecosystem" description="Designed specifically to serve each key stakeholder in university innovation." />
          <div className="grid gap-5 md:grid-cols-2">
            {stakeholders.map((item) => {
              const Icon = item.icon
              return <Link key={item.title} to={item.path} className="group rounded-3xl bg-[#F7F9FF] p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]"><Icon size={21} /></div>
                <h3 className="mt-5 text-xl font-bold text-[#081018]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#68707A]">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-[#7838F0] transition group-hover:gap-2">{item.link}<ArrowRight size={15} /></span>
              </Link>
            })}
          </div>
        </div>
      </section>

      {/* Feedback loop */}
      <section className="bg-[#F6FAF8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Feedback Loop" title="Everything Connected" description="A continuous loop where each stage naturally feeds into the next." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['1. Events', 'Where participants first mobilize, meet peers, and test preliminary hypotheses.', Flag],
              ['2. Opportunities', 'Where validated ideas find structured grant calls and formal fellowships.', Compass],
              ['3. Innovation', 'Where working prototypes, public repos, and milestone commits take shape.', Wrench],
              ['4. Startups', 'Where viable projects publish live apps, recruit talent, and mentor junior builders.', Store],
            ].map(([title, description, Icon], index) => {
              const LoopIcon = Icon as typeof Flag
              return <div key={title as string} className="relative rounded-2xl bg-white p-6 shadow-sm"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F2FF] text-[#7838F0]"><LoopIcon size={19} /></div><h3 className="mt-5 text-lg font-bold text-[#081018]">{title as string}</h3><p className="mt-2 text-sm leading-6 text-[#68707A]">{description as string}</p>{index < 3 && <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-[#E9E6FF] p-1.5 text-[#7838F0] lg:block" size={24} />}</div>
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Founding Principles" title="Why INCOMATE?" description="Four fundamental tenets directing every platform feature we construct." />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-[#E4EAE6] bg-[#E4EAE6] md:grid-cols-2 lg:grid-cols-4">
            {principles.map(([number, title, description]) => <div key={number} className="bg-white p-6 sm:p-7"><span className="font-mono text-xs font-bold text-[#7838F0]">Principle {number}</span><h3 className="mt-4 text-lg font-bold text-[#081018]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#68707A]">{description}</p></div>)}
          </div>
        </div>
      </section>

      {/* Future direction */}
      <section className="bg-[#F6FAF8] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Future Direction" title="Where INCOMATE Can Go" description="Over time, INCOMATE can evolve into enduring infrastructure for student builders while solving today's practical friction points." />
          <div className="grid gap-5 lg:grid-cols-3">
            {futureItems.map(([title, description, tag, Icon]) => {
              const FutureIcon = Icon as typeof Users
              return <div key={title} className="rounded-3xl bg-white p-6 shadow-sm sm:p-7"><div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]"><FutureIcon size={21} /></div><ArrowUpRight size={18} className="text-[#68707A]" /></div><h3 className="mt-6 text-lg font-bold text-[#081018]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#68707A]">{description}</p><div className="mt-6 border-t border-[#E4EAE6] pt-4 text-xs font-bold uppercase tracking-wider text-[#3C665D]">{tag}</div></div>
            })}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white pb-20 pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="overflow-hidden rounded-3xl bg-[#E9E6FF] px-6 py-12 text-center sm:px-10 lg:py-16">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#7838F0]">Join the Ecosystem</span>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-[#081018] sm:text-4xl">Be Part of the Ecosystem.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#505C75]">Discover opportunities, participate in meaningful experiences and explore what others are building.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/events" className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#6F41D8]">Explore Events <ArrowRight size={17} /></Link>
              <Link to="/opportunities" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#081018] shadow-sm transition hover:bg-[#F6FAF8]">Explore Opportunities <ArrowRight size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
