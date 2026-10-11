import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Copy,
  ExternalLink,
  FileText,
  
  Info,
  MapPin,
  MessageSquare,
  Rocket,
  Share2,
  Timer,
  Users,

  X,
  Globe,
} from 'lucide-react'



const startupDirectory = [
  {
    id: 'novagrid',
    name: 'NovaGrid',
    stage: 'Early Stage',
    category: 'Clean Technology',
    description:
      'Building practical technology solutions for smarter energy usage and sustainable infrastructure.',
    location: 'Jaipur, Rajasthan',
    founders: '2 Founders',
    externalUrl: 'https://www.linkedin.com/',
  },
  {
    id: 'campuslabs',
    name: 'CampusLabs',
    stage: 'Prototype',
    category: 'EdTech',
    description:
      'Helping students discover practical learning experiences, projects and opportunities through technology.',
    location: 'Jaipur, Rajasthan',
    founders: '3 Founders',
    externalUrl: 'https://www.linkedin.com/',
  },
  {
    id: 'finbridge',
    name: 'FinBridge',
    stage: 'Early Stage',
    category: 'FinTech',
    description:
      'Developing accessible digital tools to simplify financial learning and decision making for young users.',
    location: 'Delhi NCR',
    founders: '2 Founders',
    externalUrl: 'https://www.linkedin.com/',
  },
  {
    id: 'healthloop',
    name: 'HealthLoop',
    stage: 'Idea Stage',
    category: 'HealthTech',
    description:
      'Exploring technology-enabled approaches to make everyday health information easier to understand.',
    location: 'Bengaluru, Karnataka',
    founders: '3 Founders',
    externalUrl: 'https://www.linkedin.com/',
  },
  {
    id: 'makerspace-ai',
    name: 'MakerSpace AI',
    stage: 'Prototype',
    category: 'Artificial Intelligence',
    description:
      'Creating accessible AI tools that help students experiment, learn and build useful prototypes.',
    location: 'Pune, Maharashtra',
    founders: '2 Founders',
    externalUrl: 'https://www.linkedin.com/',
  },
  {
    id: 'ruralconnect',
    name: 'RuralConnect',
    stage: 'Early Stage',
    category: 'Social Innovation',
    description:
      'Working on technology-led solutions that connect underserved communities with useful services.',
    location: 'Jaipur, Rajasthan',
    founders: '4 Founders',
    externalUrl: 'https://www.linkedin.com/',
  },
  {
    id: 'learnloop',
    name: 'LearnLoop',
    stage: 'Early Startup',
    category: 'Education Technology',
    description:
      'LearnLoop is an early-stage student-led project focused on helping learners collaborate, share resources and work together on academic projects through connected digital workspaces.',
    location: 'India',
    founders: '4 Founders',
    externalUrl: 'https://www.linkedin.com/',
  },
]

function StartupDetails() {
  const { startupId } = useParams()
  const startup = startupDirectory.find((item) => item.id === startupId)

  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isLinkCopied, setIsLinkCopied] = useState(false)

  // Temporary external link. Replace with the startup's dynamic LinkedIn
  // or website URL when startup data is connected to the database.
  const startupExternalUrl = startup?.externalUrl ?? 'https://www.linkedin.com/'

  const handleShare = async () => {
    const shareData = {
      title: `${startup?.name ?? 'Startup'} • INCOMATE`,
      text: `Explore ${startup?.name ?? 'this startup'} on INCOMATE.`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // User cancelled sharing.
      }
    }

    setIsShareOpen(true)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setIsLinkCopied(true)

      window.setTimeout(() => {
        setIsLinkCopied(false)
      }, 2000)
    } catch {
      // Clipboard access can fail in some browser environments.
    }
  }

  if (!startup) {
    return (
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-[#081018]/8 bg-white p-8 text-center shadow-sm">
          <Rocket size={32} className="mx-auto text-[#7838F0]" />
          <h1 className="mt-5 text-2xl font-bold text-[#081018]">
            Startup not found
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#68707A]">
            This startup profile is not available in the current startup directory.
          </p>
          <Link
            to="/startups"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white"
          >
            <ChevronRight size={16} className="rotate-180" />
            Back to Startups
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#F6FAF8]">
      
     {/* STARTUP HERO */}
<section className="border-b border-[#081018]/6 bg-white">
  <div className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-14">
    <Link
      to="/startups"
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#68707A] transition-colors hover:text-[#7838F0]"
    >
      <ChevronRight size={16} className="rotate-180" />
      Back to Startups
    </Link>

    <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      {/* LEFT CONTENT */}
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#083830] text-white">
            <Rocket size={25} />
          </div>

          <span className="rounded-full bg-[#E9E6FF] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#7838F0]">
            {startup?.stage ?? 'Startup'}
          </span>
        </div>

        <span className="mt-7 block text-xs font-bold uppercase tracking-[0.14em] text-[#7838F0]">
          {startup?.category ?? 'Student Innovation'}
        </span>

        <h1 className="mt-2 text-4xl font-extrabold tracking-[-0.045em] text-[#081018] sm:text-5xl lg:text-[3.5rem]">
          {startup?.name ?? 'Startup'}
        </h1>

        <p className="mt-3 text-xl font-semibold leading-snug text-[#7838F0] sm:text-2xl">
          {startup?.id === 'learnloop' ? 'Making collaborative learning easier for students.' : startup?.description}
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#505C75] sm:text-lg sm:leading-8">
          {startup?.description}
        </p>
      </div>

      {/* RIGHT ACTIONS + STATS */}
      <div className="w-full lg:min-w-[390px] lg:max-w-[430px]">
        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#7838F0] bg-white px-4 py-3 text-sm font-bold text-[#7838F0] transition-colors hover:bg-[#E9E6FF]"
          >
            <Share2 size={17} />
            Share Startup
          </button>

          <a
            href={startupExternalUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#083830] bg-white px-4 py-3 text-sm font-bold text-[#083830] transition-colors hover:bg-[#083830] hover:text-white"
          >
            <Globe size={17} />
            Connect / Learn More
            <ExternalLink
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#081018]/8 bg-[#F6FAF8] p-4">
            <Rocket size={17} className="text-[#7838F0]" />
            <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-[#7A8490]">
              Stage
            </p>
            <p className="mt-1 text-sm font-semibold text-[#081018]">
              {startup?.stage ?? 'Startup'}
            </p>
          </div>

          <div className="rounded-2xl border border-[#081018]/8 bg-[#F6FAF8] p-4">
            <MapPin size={17} className="text-[#7838F0]" />
            <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-[#7A8490]">
              Location
            </p>
            <p className="mt-1 text-sm font-semibold text-[#081018]">
              {startup?.location ?? 'India'}
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-[#081018]/8 bg-[#F6FAF8] p-4 sm:col-span-1">
            <Users size={17} className="text-[#7838F0]" />
            <p className="mt-3 text-[10px] font-bold uppercase tracking-wide text-[#7A8490]">
              Team
            </p>
            <p className="mt-1 text-sm font-semibold text-[#081018]">
              {startup?.founders ?? 'Student Team'}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
    

      {/* WHAT THEY ARE BUILDING */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* MAIN DESCRIPTION */}
          <div className="lg:col-span-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Origin & Vision
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#141C25] sm:text-4xl">
              What They&apos;re Building
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#4A4455] sm:text-base">
              LearnLoop was initiated during a collegiate hackathon to address
              a persistent friction point in campus life: students often
              juggle five separate platforms just to organize a single course
              study group, share lecture synthesis notes, or review code
              collaboratively.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#4A4455] sm:text-base">
              The platform unifies shared digital sprint rooms, peer resource
              repositories, and structured question boards tailored
              specifically for undergraduate and polytechnic learning
              workflows. Rather than treating academic work like enterprise
              corporate sprints, LearnLoop structures knowledge sessions around
              term syllabi, assignment checkpoints, and real-time
              accountability.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#4A4455] sm:text-base">
              Developed by undergraduate builders who felt this bottleneck
              firsthand, LearnLoop creates frictionless spaces where students
              can jump into synchronous co-studying or contribute async
              summaries that stay organized for the entire class cohort.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#E4EAE6] bg-white p-4">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                  Environment
                </p>
                <p className="mt-2 text-xs font-semibold text-[#141C25]">
                  Lightweight Web & Desktop
                </p>
              </div>

              <div className="rounded-xl border border-[#E4EAE6] bg-white p-4">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                  Primary Use Case
                </p>
                <p className="mt-2 text-xs font-semibold text-[#141C25]">
                  Study Sprints & Collab Labs
                </p>
              </div>

              <div className="rounded-xl border border-[#E4EAE6] bg-white p-4">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                  Ecosystem Role
                </p>
                <p className="mt-2 text-xs font-semibold text-[#141C25]">
                  Peer Knowledge Mesh
                </p>
              </div>
            </div>
          </div>

          {/* PROBLEM */}
          <div className="rounded-2xl border border-[#F1D4D4] bg-[#FFF7F7] p-6 lg:col-span-5">
            <div className="flex items-center gap-2 text-[#BA1A1A]">
              <X size={18} />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
                The Problem
              </span>
            </div>

            <p className="mt-5 text-lg font-semibold leading-7 text-[#141C25]">
              “Students often work on projects in isolation or struggle to
              find the right peers, organized resources, and real-time support
              for academic collaboration.”
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex gap-3">
                <X
                  size={16}
                  className="mt-0.5 shrink-0 text-[#BA1A1A]"
                />
                <p className="text-xs leading-6 text-[#4A4455]">
                  Fragmented group chats lose critical files, assignment
                  rubrics, and discussion threads across endless message
                  noise.
                </p>
              </div>

              <div className="flex gap-3">
                <X
                  size={16}
                  className="mt-0.5 shrink-0 text-[#BA1A1A]"
                />
                <p className="text-xs leading-6 text-[#4A4455]">
                  Existing video conference tools lack context: no persistent
                  whiteboards, sync timers, or module-tied synthesis.
                </p>
              </div>

              <div className="flex gap-3">
                <X
                  size={16}
                  className="mt-0.5 shrink-0 text-[#BA1A1A]"
                />
                <p className="text-xs leading-6 text-[#4A4455]">
                  Hesitant peer networking leaves talented introverts studying
                  alone without structured spaces to ask questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
            System Architecture
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#141C25] sm:text-4xl">
            The Solution
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#4A4455]">
            How LearnLoop transforms fragmented group study into focused
            academic momentum through three integrated modes.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <SolutionCard
              number="01 / COLLABORATE"
              icon={<Timer size={21} />}
              title="Focused Peer Sprints"
              description="Real-time rooms with shared timers, voice sync, and collaborative canvas designed specifically around course modules and timed project milestones."
              bullets={[
                'Pomodoro group sync timers',
                'Drop-in audio without screen clutter',
              ]}
            />

            <SolutionCard
              number="02 / CREATE"
              icon={<FileText size={21} />}
              title="Integrated Project Workspace"
              description="Co-edit study summaries, organize research citations, and track task ownership in a single unified board without switching tabs or losing references."
              bullets={[
                'Shared lecture markdown & math formulas',
                'Deadlines tied to university calendar',
              ]}
            />

            <SolutionCard
              number="03 / LEARN"
              icon={<MessageSquare size={21} />}
              title="Knowledge Exchange"
              description="Peer-reviewed concept breakdowns where students can ask questions asynchronously and upvote the clearest explanations from senior cohorts."
              bullets={[
                'Course-specific tagging structure',
                'Reputation built on academic clarity',
              ]}
            />
          </div>
        </div>
      </section>

      

      {/* JOURNEY */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
            Evolution
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#141C25] sm:text-4xl">
            The Journey
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#4A4455]">
            How LearnLoop evolved from a campus problem into an early startup
            on the INCOMATE pipeline.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            <JourneyCard
              number="01 / Idea"
              title="Friction Identified"
              description="Recognizing the chaos of collegiate messaging apps and fragmented file sharing during midterm exam preparation."
              status="Completed"
            />

            <JourneyCard
              number="02 / Project"
              title="Hackathon MVP"
              description="First 48-hour functional prototype built and tested with 30 campus peers during the Annual Collegiate Code Jam."
              status="Completed"
            />

            <JourneyCard
              number="03 / Prototype"
              title="Peer Testing Cohort"
              description="Refined interaction models and validated study sprint rooms across 3 engineering and science university departments."
              status="Completed"
            />

            <JourneyCard
              number="04 / Early Startup"
              title="Platform Expansion"
              description="Structuring user feedback, hardening real-time sync systems, and preparing for open collegiate beta testing."
              status="Current Stage"
              current
            />
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
          Student Builders
        </span>

        <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#141C25] sm:text-4xl">
          Meet the Team
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#4A4455]">
          The student builders behind LearnLoop.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <TeamCard
            initial="A"
            name="Aarav"
            role="Co-Founder & Product Lead"
            field="CS & Human-Centered Design"
            label="Undergraduate Senior"
          />

          <TeamCard
            initial="M"
            name="Meera"
            role="Co-Founder & Interaction Design"
            field="Product Design & Research"
            label="Design Junior"
          />

          <TeamCard
            initial="R"
            name="Rohan"
            role="Core Engineering"
            field="Full-Stack & Real-time Systems"
            label="Polytechnic Scholar"
          />

          <TeamCard
            initial="A"
            name="Ananya"
            role="Community & Campus Outreach"
            field="Cognitive Science & Communications"
            label="Campus Ambassador"
          />
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs text-[#68707A]">
          <Users size={15} className="text-[#7838F0]" />
          Collegiate innovation squad building open tools for students
        </div>
      </section>

      {/* CURRENT STAGE + WHY IT STARTED */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* CURRENT STAGE */}
          <div className="rounded-2xl border border-[#E4EAE6] bg-white p-6 sm:p-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Where They Are Now
            </span>

            <h2 className="mt-3 text-2xl font-bold text-[#141C25]">
              Current Milestone
            </h2>

            <div className="mt-5 rounded-xl bg-[#F4F2FF] p-4">
              <p className="text-[9px] font-bold uppercase tracking-wide text-[#7838F0]">
                Current Milestone
              </p>

              <p className="mt-2 text-base font-bold text-[#141C25]">
                Product Usability & Sync Refinement
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                  Primary Track
                </p>
                <p className="mt-1 text-xs font-semibold text-[#141C25]">
                  Product Development & Peer Usability
                </p>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                  Current Focus
                </p>
                <p className="mt-1 text-xs font-semibold text-[#141C25]">
                  Real-time sync + usability feedback
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#4A4455]">
              Refining real-time collaborative document sync and gathering
              structured usability feedback from undergraduate study cohorts
              across two university departments.
            </p>

            <div className="mt-5 rounded-xl bg-[#F6FAF8] p-4">
              <p className="text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
                Next Milestone
              </p>

              <p className="mt-2 text-xs leading-5 text-[#141C25]">
                Opening closed beta testing to 500 collegiate learners and
                introducing course-specific departmental study hubs.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-2 text-[10px] text-[#68707A]">
              <Info size={14} />
              Zero institutional funding required • Focused purely on student
              usability
            </div>
          </div>

          {/* WHY IT STARTED */}
          <div className="rounded-2xl border border-[#D1E0FF] bg-[#F1F5FF] p-6 sm:p-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Why It Started
            </span>

            <h2 className="mt-3 text-2xl font-bold text-[#141C25]">
              Built from Dorm Room Frustration
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#4A4455]">
              Like thousands of university students, we spent our first two
              years drowning in chaotic WhatsApp threads, expired file links,
              and misaligned project schedules.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#4A4455]">
              During finals week, our dorm room whiteboard was covered in
              half-finished study plans that never came together. We realized
              students didn&apos;t need another generic enterprise project
              manager—they needed a lightweight, joyful workspace built around
              how collegiate minds actually learn and solve problems together.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#4A4455]">
              LearnLoop represents the collaborative platform we wished existed
              when we tackled our first major algorithmic and design group
              projects.
            </p>

            <div className="mt-6 border-l-2 border-[#7838F0] pl-4">
              <p className="text-sm font-semibold italic text-[#141C25]">
                — Aarav & Meera, Co-Founders
              </p>

              <p className="mt-1 text-[10px] text-[#68707A]">
                Class of 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="connect-section"
        className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 lg:px-10 lg:py-12"
      >
        <div className="rounded-2xl bg-[#052721] p-7 text-white sm:p-9 lg:p-11">
          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#BFB4FF]">
            Collegiate Interaction Open
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
            Want to Know More?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
            Explore the project, follow their build journey, or share peer
            feedback with the founding team as they iterate towards closed
            campus testing.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6F41D8]"
            >
              Connect With Team
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Visit Demo Concept
              <ExternalLink size={16} />
            </button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-[10px] text-white/55">
            <CheckCircle2
              size={14}
              className="text-[#34D399]"
            />
            Verified Student Venture • INCOMATE Ecosystem
          </div>
        </div>
      </section>

      {/* RELATED STARTUPS */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7838F0]">
              Campus Ventures
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#141C25] sm:text-3xl">
              More Startups to Explore
            </h2>

            <p className="mt-2 text-sm text-[#4A4455]">
              Discover other high-potential collegiate prototypes and student
              ventures.
            </p>
          </div>

          <Link
            to="/startups"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#7838F0]"
          >
            View all startups
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <RelatedStartup
            category="Sustainability"
            stage="Prototype"
            name="GreenGrid"
            description="Smart campus energy monitoring and automated IoT dashboard helping dormitories reduce peak electric loads."
            cohort="IIT Bombay Student Team"
          />

          <RelatedStartup
            category="Developer Tools"
            stage="Early Startup"
            name="BuildSpace"
            description="Lightweight local-first API mock server designed for fast-paced student hackathons and rapid frontend prototyping."
            cohort="BITS Pilani Builders"
          />

          <RelatedStartup
            category="Healthcare"
            stage="Idea Stage"
            name="HealthNest"
            description="Accessible mental well-being and campus resource coordination for undergraduate stress management and counseling."
            cohort="Delhi Univ. Cohort"
          />
        </div>
      </section>

      {/* CROSS DISCOVERY */}
      <section className="w-full border-t border-[#E4EAE6] bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-[#141C25]">
              Explore More Across INCOMATE
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#4A4455]">
              Connect with the broader collegiate innovation landscape across
              hackathons, grants, and student projects.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <CrossDiscoveryCard
              to="/events"
              icon={<CalendarDays size={21} />}
              title="Events"
              description="Find hackathons, design sprints, and collegiate workshops happening across top institutions."
              action="Browse Events →"
              variant="purple"
            />

            <CrossDiscoveryCard
              to="/opportunities"
              icon={<Rocket size={21} />}
              title="Opportunities"
              description="Discover student fellowships, innovation challenges, and open calls for university researchers."
              action="Browse Opportunities →"
              variant="green"
            />

            <CrossDiscoveryCard
              to="/startups"
              icon={<Rocket size={21} />}
              title="Startups"
              description="Explore other emerging student-led prototypes, software tools, and hardware devices."
              action="Browse All Startups →"
              variant="dark"
            />
          </div>
        </div>
      </section>

      {isShareOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081018]/45 px-5 py-6 backdrop-blur-sm"
          onClick={() => setIsShareOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-md rounded-3xl border border-[#081018]/8 bg-white p-6 shadow-2xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-startup-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
                  <Share2 size={20} />
                </div>
                <h3 id="share-startup-title" className="mt-4 text-xl font-extrabold text-[#081018]">
                  Share {startup?.name ?? 'Startup'}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[#68707A]">
                  Share this startup with students, founders and other members of the INCOMATE ecosystem.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsShareOpen(false)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#68707A] transition-colors hover:bg-[#F6FAF8] hover:text-[#081018]"
                aria-label="Close share dialog"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-[#081018]/8 bg-[#F6FAF8] p-3">
              <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#7A8490]">
                Shareable Link
              </p>
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1 rounded-xl bg-white px-3 py-2.5 text-sm text-[#505C75]">
                  <p className="truncate">{window.location.href}</p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-[#7838F0] px-4 text-sm font-bold text-white transition-colors hover:bg-[#6F41D8]"
                >
                  {isLinkCopied ? (
                    <>
                      <Check size={16} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#081018]/10 px-4 py-3 text-sm font-bold text-[#081018] transition-colors hover:border-[#7838F0]/40 hover:bg-[#E9E6FF]/50 hover:text-[#7838F0]"
              >
                <Copy size={17} />
                Copy Link
              </button>

              <button
                type="button"
                onClick={async () => {
                  if (!navigator.share) {
                    await handleCopyLink()
                    return
                  }

                  try {
                    await navigator.share({
                      title: `${startup?.name ?? 'Startup'} • INCOMATE`,
                      text: `Explore ${startup?.name ?? 'this startup'} on INCOMATE.`,
                      url: window.location.href,
                    })
                  } catch {
                    // User cancelled sharing.
                  }
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#083830] px-4 py-3 text-sm font-bold text-[#083830] transition-colors hover:bg-[#083830] hover:text-white"
              >
                <Share2 size={17} />
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SolutionCard({
  number,
  icon,
  title,
  description,
  bullets,
}: {
  number: string
  icon: React.ReactNode
  title: string
  description: string
  bullets: string[]
}) {
  return (
    <article className="rounded-2xl border border-[#E4EAE6] bg-[#F7F9FF] p-6">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
          {icon}
        </div>

        <span className="text-[9px] font-bold uppercase tracking-wide text-[#7838F0]">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#141C25]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#4A4455]">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {bullets.map((bullet) => (
          <div
            key={bullet}
            className="flex items-start gap-2 text-xs text-[#4A4455]"
          >
            <CheckCircle2
              size={14}
              className="mt-0.5 shrink-0 text-[#059669]"
            />
            <span>{bullet}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

function JourneyCard({
  number,
  title,
  description,
  status,
  current = false,
}: {
  number: string
  title: string
  description: string
  status: string
  current?: boolean
}) {
  return (
    <article
      className={`rounded-2xl border p-5 ${
        current
          ? 'border-[#7838F0]/40 bg-[#F4F2FF]'
          : 'border-[#E4EAE6] bg-[#F7F9FF]'
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            current
              ? 'bg-[#7838F0] text-white'
              : 'bg-[#E9E6FF] text-[#7838F0]'
          }`}
        >
          {current ? <Clock3 size={16} /> : <Check size={16} />}
        </div>

        <span
          className={`text-[9px] font-bold uppercase ${
            current ? 'text-[#7838F0]' : 'text-[#68707A]'
          }`}
        >
          {status}
        </span>
      </div>

      <p className="mt-6 text-[9px] font-bold uppercase tracking-wide text-[#68707A]">
        {number}
      </p>

      <h3 className="mt-2 text-base font-bold text-[#141C25]">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-5 text-[#4A4455]">
        {description}
      </p>
    </article>
  )
}

function TeamCard({
  initial,
  name,
  role,
  field,
  label,
}: {
  initial: string
  name: string
  role: string
  field: string
  label: string
}) {
  return (
    <article className="rounded-2xl border border-[#E4EAE6] bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E9E6FF] text-lg font-bold text-[#7838F0]">
        {initial}
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#141C25]">
        {name}
      </h3>

      <p className="mt-1 text-xs font-semibold text-[#7838F0]">
        {role}
      </p>

      <p className="mt-3 text-xs leading-5 text-[#4A4455]">
        {field}
      </p>

      <span className="mt-4 inline-flex rounded-full bg-[#F6FAF8] px-3 py-1 text-[9px] font-semibold text-[#68707A]">
        {label}
      </span>
    </article>
  )
}

function RelatedStartup({
  category,
  stage,
  name,
  description,
  cohort,
}: {
  category: string
  stage: string
  name: string
  description: string
  cohort: string
}) {
  return (
    <div className="group flex min-h-[250px] flex-col justify-between rounded-2xl border border-[#E4EAE6] bg-white p-6 shadow-sm transition-all hover:border-[#7838F0]/30 hover:shadow-md">
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#E9E6FF] px-3 py-1 text-[10px] font-semibold text-[#7838F0]">
            {category}
          </span>

          <span className="flex items-center gap-1 text-[10px] text-[#68707A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7838F0]" />
            {stage}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#141C25] transition-colors group-hover:text-[#7838F0]">
          {name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#4A4455]">
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#E4EAE6] pt-4">
        <span className="text-[10px] text-[#68707A]">
          {cohort}
        </span>

        <Link
          to="/startups"
          className="text-xs font-semibold text-[#7838F0] hover:underline"
        >
          View Venture →
        </Link>
      </div>
    </div>
  )
}

function CrossDiscoveryCard({
  to,
  icon,
  title,
  description,
  action,
  variant,
}: {
  to: string
  icon: React.ReactNode
  title: string
  description: string
  action: string
  variant: 'purple' | 'green' | 'dark'
}) {
  const iconClass =
    variant === 'purple'
      ? 'bg-[#7838F0] text-white'
      : variant === 'green'
        ? 'bg-[#3C665D] text-white'
        : 'bg-[#052721] text-white'

  return (
    <Link
      to={to}
      className="group flex flex-col rounded-2xl border border-[#E4EAE6] bg-[#F6FAF8] p-6 shadow-sm transition-all hover:border-[#7838F0]/40 hover:bg-[#F4F2FF]/50"
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
      >
        {icon}
      </div>

      <h4 className="mt-5 text-xl font-semibold text-[#141C25] transition-colors group-hover:text-[#7838F0]">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-[#4A4455]">
        {description}
      </p>

      <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#7838F0]">
        {action}
      </span>
    </Link>
  )
}

export default StartupDetails