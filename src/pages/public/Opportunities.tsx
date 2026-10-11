import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bookmark,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Trophy,
  Compass,
  Code2,
  Eye,
  GraduationCap,
  Handshake,
  RotateCcw,
  Rocket,
  Search,
  Send,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'

const opportunities = [
  {
    id: 'campus-innovation',
    title: 'Build for Tomorrow',
    type: 'Innovation Challenge',
    category: 'Innovation Challenges',
    eligibility: 'Students',
    mode: 'Online',
    deadline: '25 October 2026',
    deadlineValue: '2026-10-25',
    status: 'Open',
    benefit: 'Milestone Support',
    description:
      'Develop a solution to a practical problem through structured milestone development and peer review.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnFG3ORr0b5-MKY2cRoDWFk4rQbs4tN0AE5OUpj6hJnm_NniEYyDm8d31hCUFI8bzanIXfMD4dNHQifUPEBrFzBRFQEGWlCTvB5c-jZMWLGPh285u18UFe6tfrY2b_JE_GzOh9j8tLUnK_UqB-rhyX0QifqNpEkOSnSMuZmywQRUlM232eoDG1oJlEHyHHu0_CM0HmNpVOYw-0dg-HjA_cSF70ai07xnOkycq7Kra3S9k7y2UYADw',
  },
  {
    id: 'internships',
    title: 'Student Innovation Challenge',
    type: 'Student Fellowship',
    category: 'Fellowships',
    eligibility: 'Student Teams',
    mode: 'Hybrid',
    deadline: '02 November 2026',
    deadlineValue: '2026-11-02',
    status: 'Open',
    benefit: 'Lab Equipment Access',
    description:
      'Semester-long initiative supporting students building community-first technology and hardware prototypes.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWCPBhuGu58ZbqGb31b86EZx2Pi5Ct7rNQBsrAENJEJJNhSmDa7byeTNuJ79YtaMKB-9YxcvMHCcxxLIVDzLVd5H6BRlyNv0bcB33gz3ZLYLO7mOZrgpGGbvLtd9q35QBui1mJ8gswXebP8Gce_lgtCd2o65DSBTjRLbYM1h1B-WabHZ4QxUeqJHu1cwAD_iSFLIDNjS4woGinKlkad0_1GErca9Yf08hRPKPSx9lM46Hry1j2PLs',
  },
  {
    id: 'startup-programs',
    title: 'Future Founders Program',
    type: 'Startup Program',
    category: 'Startup Programs',
    eligibility: 'Early Founders',
    mode: 'Online',
    deadline: '12 November 2026',
    deadlineValue: '2026-11-12',
    status: 'Open',
    benefit: 'Founder Sessions',
    description:
      'Structured guidance helping student-led initiatives validate problem hypotheses and build MVP prototypes.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6RYUUf13LE36ENa1rcB2bSHrk4XOo0O-hATYS1PnSiDwLVdYUvxgfhqzPT7Xi14JYHEB0DiIKwr8z0TZ1J2nuwXneD91CSJxYyDUwgaSqKFdbVlbjYHT10nIHXLMAI2Jyw811hQJBXxSX93qj09EkhqvRgNVsSojaSicUsec-KC6QEa3XilTUxbqMgklBRZr4odB-84hYnHyYKBFNJAYtWLyDoSuURQZinp8LyPRPXgzbiPdp5-U',
  },
  {
    id: 'research-programs',
    title: 'Campus Problem Solving Challenge',
    type: 'Competition',
    category: 'Competitions',
    eligibility: 'Students',
    mode: 'Offline',
    deadline: '18 November 2026',
    deadlineValue: '2026-11-18',
    status: 'Open',
    benefit: 'Mentor Reviews',
    description:
      'A multidisciplinary challenge where students work on real campus problems and present practical solutions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAazPTeCHr4wvkHZxyW7-VRAPq42mKQm6lMMDxq0z3a5LP-BV6p2sb47UbKbFasQCAolQAaK6HlUiJR_6CDnhwOW6qHRrbtVO3VHEwOVt5EQYheq_UhH2TU6Cu1r7SYkoWsn2n9e69SqMJZn2ooT7jr1JeuE9pQTBnCU9pB_LtLV79Kvn9It7YkbIcb636l5mSSt4QwYMEcZlAp5GMtMRz8O6zAQSHI631GRYCv7YN8Ydgywx432So',
  },
  {
    id: 'young-innovators',
    title: 'Young Innovators Program',
    type: 'Innovation Challenge',
    category: 'Calls for Ideas',
    eligibility: 'Open to All',
    mode: 'Hybrid',
    deadline: '24 November 2026',
    deadlineValue: '2026-11-24',
    status: 'Open',
    benefit: 'Expert Feedback',
    description:
      'Explore emerging ideas with guided feedback, interdisciplinary collaboration and practical experimentation.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIdVF4r3Ajwa6AxlUTnVEmwDRzwy7wA86oiBpNRfNFSfnYsAARmoYSJA4h8oq7eDja4Kfst36bGRRwuvNPEJvgUmlTw-__BGStwGHZgXoF88LqbIU6N91y7VgFBk7nD6CYzi0mQak8YrliQ__tZUvzcfbG4i3OJosmB2KZCDyJeP30_BL7Y9IZ35KAmS9MJWtzV_bV01LKz07MTMPIlPiJHN-CkiztbNx95iqACn_xDtvPX8_q_Xg',
  },
  {
    id: 'ideas-into-action',
    title: 'Ideas Into Action',
    type: 'Startup Program',
    category: 'Incubation',
    eligibility: 'Early Founders',
    mode: 'Online',
    deadline: '30 November 2026',
    deadlineValue: '2026-11-30',
    status: 'Open',
    benefit: 'Incubation Support',
    description:
      'Turn promising ideas into structured projects with validation guidance, peer learning and incubation support.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBW7OwA0_EIKkeUjixrYm37O-1H15pz88MSqAgJEQ5-3-SFxuYsFArvDRF3oFZvSY4bffo26bZuDlG_-9sCaDo7KZW6zNIiH0cwviS2BEKlNjniYtKhSrwZTgW3aSRlCMG_JNRHRAV7mQXPn7qKA29bWz5RF-W3qLvJeZCu2vBK1veUWaJp8HL067xaBLRE0CMOaLFC84dKZ6BxitGscfJZxPCWMK87hCWlII7UlETsBJnnYYHdQz4',
  },
]

function Opportunities() {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('All Types')
  const [eligibility, setEligibility] = useState('All Eligibilities')
  const [mode, setMode] = useState('All Modes')
  const [deadline, setDeadline] = useState('All Deadlines')
  const [activeCategory, setActiveCategory] = useState('All Opportunities')

  const filteredOpportunities = useMemo(() => {
    const query = search.trim().toLowerCase()

    return opportunities.filter((opportunity) => {
      const matchesSearch =
        !query ||
        `${opportunity.title} ${opportunity.type} ${opportunity.description}`
          .toLowerCase()
          .includes(query)
      const matchesType = type === 'All Types' || opportunity.category === type
      const matchesEligibility =
        eligibility === 'All Eligibilities' || opportunity.eligibility === eligibility
      const matchesMode = mode === 'All Modes' || opportunity.mode === mode
      const matchesCategory =
        activeCategory === 'All Opportunities' ||
        (activeCategory === 'Competitions' && opportunity.category === 'Competitions') ||
        (activeCategory === 'Hackathons' && opportunity.type.toLowerCase().includes('hackathon')) ||
        (activeCategory === 'Workshops' && opportunity.type.toLowerCase().includes('workshop')) ||
        (activeCategory === 'Innovation' && opportunity.category === 'Innovation Challenges') ||
        (activeCategory === 'Community' && opportunity.eligibility === 'Open to All') ||
        (activeCategory === 'Startups' && opportunity.category === 'Startup Programs')
      const matchesDeadline =
        deadline === 'All Deadlines' ||
        (deadline === 'Closing Soon' && ['campus-innovation', 'internships', 'startup-programs'].includes(opportunity.id)) ||
        (deadline === 'This Month' && opportunity.deadlineValue <= '2026-10-31') ||
        (deadline === 'Upcoming' && opportunity.deadlineValue > '2026-10-31')

      return (
        matchesSearch &&
        matchesType &&
        matchesEligibility &&
        matchesMode &&
        matchesCategory &&
        matchesDeadline
      )
    })
  }, [search, type, eligibility, mode, deadline, activeCategory])

  const resetFilters = () => {
    setSearch('')
    setType('All Types')
    setEligibility('All Eligibilities')
    setMode('All Modes')
    setDeadline('All Deadlines')
    setActiveCategory('All Opportunities')
  }

  return (
    <div className="bg-[#F6FAF8]">
      {/* Hero + opportunity categories */}
      <section className="border-b border-[#081018]/6 bg-[#F6FAF8]">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-12 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14 lg:pt-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#E9E6FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7838F0]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7838F0]" />
              Opportunity Ecosystem
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-[#081018] sm:text-5xl lg:text-6xl">
              Discover opportunities.{' '}
              <span className="text-[#7838F0]">Build what’s next.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#68707A] sm:text-lg">
              Find competitions, hackathons, workshops, innovation challenges,
              fellowships and startup programs that help you learn, build and
              move your ideas forward.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#explore-opportunities"
                className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#6F41D8]"
              >
                Explore Opportunities
                <ArrowRight size={17} />
              </a>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-[#081018]/10 bg-white px-5 py-3.5 text-sm font-bold text-[#081018] transition-colors hover:border-[#7838F0]/25 hover:text-[#7838F0]"
              >
                Learn About INCOMATE
              </Link>
            </div>

            
          </div>

          <div className="mt-9 border-t border-[#081018]/8 pt-7">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7838F0]">
                  Explore by type
                </p>
                <p className="mt-1 text-sm text-[#68707A]">
                  Find the format that matches what you want to build.
                </p>
              </div>
              <span className="hidden text-xs font-semibold text-[#68707A] sm:block">
                6 opportunity tracks
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              <OpportunityCategoryCard
                icon={<Trophy size={21} />}
                label="Competitions"
                active={activeCategory === 'Competitions'}
                onClick={() => setActiveCategory('Competitions')}
              />
              <OpportunityCategoryCard
                icon={<Code2 size={21} />}
                label="Hackathons"
                active={activeCategory === 'Hackathons'}
                onClick={() => setActiveCategory('Hackathons')}
              />
              <OpportunityCategoryCard
                icon={<BookOpen size={21} />}
                label="Workshops"
                active={activeCategory === 'Workshops'}
                onClick={() => setActiveCategory('Workshops')}
              />
              <OpportunityCategoryCard
                icon={<Sparkles size={21} />}
                label="Innovation"
                active={activeCategory === 'Innovation'}
                onClick={() => setActiveCategory('Innovation')}
              />
              <OpportunityCategoryCard
                icon={<Users size={21} />}
                label="Community"
                active={activeCategory === 'Community'}
                onClick={() => setActiveCategory('Community')}
              />
              <OpportunityCategoryCard
                icon={<Rocket size={21} />}
                label="Startups"
                active={activeCategory === 'Startups'}
                onClick={() => setActiveCategory('Startups')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <div className="rounded-2xl bg-white p-4 shadow-sm lg:p-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
            <div className="relative sm:col-span-2 lg:col-span-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#68707A]" size={18} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search opportunities, keywords..."
                className="w-full rounded-xl bg-[#F6FAF8] py-3 pl-10 pr-3 text-sm text-[#081018] outline-none placeholder:text-[#68707A] focus:bg-white focus:ring-2 focus:ring-[#7838F0]/20"
              />
            </div>

            <FilterSelect value={type} onChange={setType} options={['All Types', 'Innovation Challenges', 'Fellowships', 'Startup Programs', 'Competitions']} />
            <FilterSelect value={eligibility} onChange={setEligibility} options={['All Eligibilities', 'Students', 'Student Teams', 'Early Founders', 'Open to All']} />
            <FilterSelect value={mode} onChange={setMode} options={['All Modes', 'Online', 'Offline', 'Hybrid']} />
            <div className="flex gap-2 lg:col-span-2">
              <FilterSelect value={deadline} onChange={setDeadline} options={['All Deadlines', 'Closing Soon', 'This Month', 'Upcoming']} />
              <button
                type="button"
                onClick={resetFilters}
                title="Reset filters"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F6FAF8] text-[#68707A] transition-colors hover:bg-[#E9E6FF] hover:text-[#7838F0]"
              >
                <RotateCcw size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-white shadow-md">
          <div className="grid lg:grid-cols-12">
            <div className="relative min-h-[280px] lg:col-span-5">
              <img src={opportunities[0].image} alt="Students collaborating on an innovation project" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#052721]/80 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#7838F0] shadow-sm">
                Featured Spotlight
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-[#A3D0C4]">Cohort 2026/27</p>
                <p className="mt-1 text-lg font-extrabold">Direct Mentorship & Peer Reviews</p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-7 p-6 lg:col-span-7 lg:p-10">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#E9E6FF] px-3 py-1 text-xs font-bold text-[#7838F0]">Innovation Challenge</span>
                  <span className="rounded-full bg-[#BEECE0] px-3 py-1 text-xs font-semibold text-[#234E45]">Engineering & Design</span>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#081018] sm:text-3xl">Build for Tomorrow</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#68707A] sm:text-base">
                  A practical innovation challenge encouraging students to identify real-world problems and develop meaningful solutions through milestone guidance, functional prototyping and peer collaboration.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-[#F6FAF8] p-4 sm:grid-cols-4">
                  <Meta label="Deadline" value="25 Oct 2026" />
                  <Meta label="Eligibility" value="Students & Grads" />
                  <Meta label="Mode" value="Online" />
                  <Meta label="Format" value="Teams 1–4" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link to="/opportunities/campus-innovation" className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white hover:bg-[#6F41D8]">
                  View Opportunity <ArrowRight size={16} />
                </Link>
                <button type="button" className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EDF1F0] text-[#505C75] hover:bg-[#E9E6FF] hover:text-[#7838F0]" title="Save opportunity">
                  <Bookmark size={18} />
                </button>
                <span className="ml-auto hidden text-xs font-semibold text-[#68707A] sm:block">Closing in 9 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section id="explore-opportunities" className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7838F0]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7838F0]" /> Curated Catalog
            </div>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#081018] sm:text-3xl">Explore Opportunities</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#68707A] sm:text-base">Curated programs, competitions and incubation calls across student innovation tracks.</p>
          </div>
          <span className="text-xs font-semibold text-[#68707A]">Showing <strong>{filteredOpportunities.length}</strong> curated listings</span>
        </div>

        {filteredOpportunities.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityRow key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#081018]/8 bg-white px-6 py-14 text-center shadow-sm">
            <Search size={28} className="mx-auto text-[#7838F0]" />
            <h3 className="mt-4 text-lg font-bold text-[#081018]">No opportunities found</h3>
            <p className="mt-2 text-sm text-[#68707A]">Try a different search term or reset your filters.</p>
            <button type="button" onClick={resetFilters} className="mt-5 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white">Reset Filters</button>
          </div>
        )}

        <div className="flex justify-center pt-8">
          <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#081018] shadow-sm hover:bg-[#F6FAF8]">
            Load More Opportunities <ChevronDown size={16} />
          </button>
        </div>
      </section>

      {/* Closing Soon */}
      <section className="bg-[#EDF4F0] py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FFDBC7] px-2.5 py-1 text-xs font-bold text-[#311300]"><Clock3 size={14} /> High Priority</span>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#081018] sm:text-3xl">Closing Soon</h2>
              <p className="mt-2 text-sm text-[#68707A] sm:text-base">Opportunities accepting submissions this week — finalize your application before the deadline.</p>
            </div>
            <button type="button" onClick={() => setDeadline('Closing Soon')} className="text-left text-sm font-bold text-[#7838F0] hover:text-[#6F41D8]">View all ending soon →</button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Campus Innovation Challenge', 'Innovation Challenge', '20 October 2026', 'Closing in 4 days', 'Solve operational bottlenecks with user research, iterative testing, and peer feedback cycles.'],
              ['Startup Idea Program', 'Startup Program', '24 October 2026', 'Closing in 8 days', 'Early problem statement evaluation and customer discovery clinic for first-time builders.'],
              ['Student Design Challenge', 'Design Challenge', '28 October 2026', 'Closing in 12 days', 'Design sprint addressing accessible interfaces and campus digital services.'],
            ].map(([title, typeLabel, date, urgency, description]) => (
              <div key={title} className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm">
                <div className="absolute left-0 right-0 top-0 h-1 bg-[#D97706]" />
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-[#EDF1F0] px-2 py-1 text-[11px] font-bold text-[#505C75]">{typeLabel}</span>
                    <span className="rounded bg-[#D97706]/10 px-2 py-1 text-[11px] font-bold text-[#D97706]">{urgency}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#081018]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#68707A]">{description}</p>
                </div>
                <div className="mt-6 flex items-end justify-between gap-3 border-t border-[#081018]/7 pt-4">
                  <div><p className="text-[11px] text-[#68707A]">Deadline</p><p className="text-sm font-bold text-[#081018]">{date}</p></div>
                  <Link to="/signup" className="text-sm font-bold text-[#7838F0]">Apply Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="rounded-full bg-[#E9E6FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7838F0]">Pathways</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#081018] sm:text-3xl">Something For Every Stage</h2>
          <p className="mt-2 text-sm leading-6 text-[#68707A] sm:text-base">INCOMATE connects diverse pathways so you can step in at whatever point matches your curiosity and skills.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Pathway icon={<BookOpen size={24} />} phase="Phase 01" title="LEARN" text="Workshops, seminars and guided learning programs designed to build technical and design foundations." footer="Foundations & Sprints →" className="bg-[#F4F2FF] text-[#7838F0]" />
          <Pathway icon={<Sparkles size={24} />} phase="Phase 02" title="COMPETE" text="Competitions, hackathons and time-bound challenges to test your ideas against real problem statements." footer="Hackathons & Challenges →" className="bg-[#BEECE0]/45 text-[#3C665D]" />
          <Pathway icon={<Wrench size={24} />} phase="Phase 03" title="BUILD" text="Innovation programs, project sprints and open calls for ideas turning concepts into functional prototypes." footer="Prototypes & Labs →" className="bg-[#FFDBC7]/35 text-[#7D3B00]" />
          <Pathway icon={<Rocket size={24} />} phase="Phase 04" title="GROW" text="Startup programs, incubation cohorts and fellowships supporting continuous development and team expansion." footer="Incubation & Cohorts →" className="bg-[#EDF1F0] text-[#7838F0]" />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7838F0]">Simple Process</span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#081018] sm:text-3xl">How It Works</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Step number="01" icon={<Compass size={17} />} title="Discover" text="Find opportunities relevant to your interests, skill domain, and academic milestone level." label="Multi-track exploration" />
            <Step number="02" icon={<CheckCircle2 size={17} />} title="Explore" text="Review eligibility criteria, timeline checkpoints, team requirements, and submission rules." label="Transparent guidelines" />
            <Step number="03" icon={<Send size={17} />} title="Apply / Participate" text="Complete the structured application, assemble teammates, or submit an individual proposal." label="1-Click registration" />
            <Step number="04" icon={<Rocket size={17} />} title="Grow" text="Build tangible project experience, gain verified participation credentials, and meet peer builders." label="Verified credentials" />
          </div>
        </div>
      </section>

      {/* Student advantages */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="rounded-full bg-[#E9E6FF] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#7838F0]">Student Advantages</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#081018] sm:text-4xl">Your Next Opportunity Could Start Here.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#68707A]">Whether you want to compete, learn, build a project or explore innovation, INCOMATE helps you discover opportunities in one place without fragmented links or opaque forms.</p>
            <a href="#explore-opportunities" className="mt-7 inline-flex rounded-xl bg-[#7838F0] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#6F41D8]">Explore Opportunities</a>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-6">
            <Advantage icon={<Eye size={19} />} title="Discover new experiences" text="Broaden your perspective with hands-on initiatives across varied technology and design disciplines." />
            <Advantage icon={<Wrench size={19} />} title="Build practical skills" text="Move beyond classroom theory into tangible systems engineering, rapid user feedback, and MVPs." />
            <Advantage icon={<Users size={19} />} title="Work with other students" text="Find co-creators, engineers, writers, and product thinkers across your university network." />
            <Advantage icon={<GraduationCap size={19} />} title="Showcase your work" text="Earn verified project badges and build a persistent portfolio of your completed milestones." />
            <Advantage icon={<Rocket size={19} />} title="Explore innovation pathways" text="Connect seamlessly to incubation pods, student grants, and university research facilities." />
          </div>
        </div>
      </section>

      {/* Organizer CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#052721] p-8 shadow-xl sm:p-12">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#3C665D]/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#3C665D]/40 px-3 py-1 text-xs font-bold text-[#BEECE0]"><Handshake size={14} /> For Student Clubs & Academic Centers</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Have an Opportunity to Share?</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#D6E5E1]">Organizations, clubs and academic chapters can use INCOMATE to publish opportunities and connect with motivated student participants across universities.</p>
              <p className="mt-2 text-xs text-[#A3D0C4]">* Requires organizer verification & university affiliation review.</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link to="/signup" className="inline-flex rounded-xl bg-[#BEECE0] px-7 py-3.5 text-sm font-bold text-[#052721] hover:bg-white">Create an Opportunity</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 text-center sm:px-8 lg:px-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9E6FF] text-[#7838F0]"><Rocket size={24} /></div>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-[#081018] sm:text-4xl">Keep Exploring. Keep Building.</h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-[#68707A]">Discover opportunities that help turn curiosity into experience and ideas into action.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#explore-opportunities" className="rounded-xl bg-[#7838F0] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#6F41D8]">Explore Opportunities</a>
            <Link to="/signup" className="rounded-xl bg-[#F6FAF8] px-5 py-3.5 text-sm font-bold text-[#081018] hover:bg-[#EDF1F0]">Join Community</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] text-[#68707A]">{label}</p>
      <p className="mt-0.5 text-xs font-bold leading-5 text-[#081018]">{value}</p>
    </div>
  )
}

function FilterSelect({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <div className="relative lg:col-span-2">
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-11 w-full appearance-none rounded-xl bg-[#F6FAF8] px-3 pr-9 text-sm text-[#081018] outline-none focus:bg-white focus:ring-2 focus:ring-[#7838F0]/20">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#68707A]" size={16} />
    </div>
  )
}

function OpportunityCategoryCard({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group min-h-[118px] rounded-2xl border p-5 text-left transition-all ${
        active
          ? 'border-[#7838F0] bg-[#E9E6FF] shadow-sm'
          : 'border-[#081018]/8 bg-white hover:-translate-y-0.5 hover:border-[#7838F0]/25 hover:shadow-sm'
      }`}
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
          active
            ? 'bg-[#7838F0] text-white'
            : 'bg-[#E9E6FF] text-[#7838F0] group-hover:bg-[#E1DAFF]'
        }`}
      >
        {icon}
      </span>
      <span className="mt-5 block text-sm font-extrabold text-[#081018] sm:text-base">
        {label}
      </span>
    </button>
  )
}

function OpportunityRow({ opportunity }: { opportunity: (typeof opportunities)[number] }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
      <div className="grid items-center gap-5 md:grid-cols-12">
        <div className="h-40 overflow-hidden rounded-xl bg-[#EDF1F0] md:col-span-3 md:h-28">
          <img src={opportunity.image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#E9E6FF] px-2.5 py-1 text-[11px] font-bold text-[#7838F0]">{opportunity.type}</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#059669]"><span className="h-1.5 w-1.5 rounded-full bg-[#059669]" /> {opportunity.status}</span>
          </div>
          <h3 className="text-lg font-extrabold text-[#081018]">{opportunity.title}</h3>
          <p className="line-clamp-2 text-sm leading-5 text-[#68707A]">{opportunity.description}</p>
          <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs text-[#68707A] sm:gap-3">
            <span className="inline-flex items-center gap-1"><CalendarDays size={14} /> {opportunity.deadline}</span>
            <span>•</span><span className="inline-flex items-center gap-1"><Users size={14} /> {opportunity.eligibility}</span>
            <span>•</span><span>{opportunity.mode}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 pt-2 md:col-span-3 md:flex-col md:items-end md:pt-0">
          <span className="rounded-full bg-[#EDF1F0] px-2.5 py-1 text-[11px] font-semibold text-[#68707A]">{opportunity.benefit}</span>
          <Link to={`/opportunities/${opportunity.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-[#7838F0] hover:text-[#6F41D8]">View Opportunity <ArrowRight size={15} /></Link>
        </div>
      </div>
    </div>
  )
}

function Pathway({ icon, phase, title, text, footer, className }: { icon: React.ReactNode; phase: string; title: string; text: string; footer: string; className: string }) {
  return (
    <div className={`flex min-h-[285px] flex-col justify-between rounded-2xl p-6 shadow-sm ${className}`}>
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">{icon}</div>
        <span className="text-xs font-bold uppercase tracking-wider">{phase}</span>
        <h3 className="mt-1 text-xl font-extrabold text-[#081018]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#68707A]">{text}</p>
      </div>
      <span className="pt-6 text-xs font-bold">{footer}</span>
    </div>
  )
}

function Step({ number, icon, title, text, label }: { number: string; icon: React.ReactNode; title: string; text: string; label: string }) {
  return (
    <div className="rounded-2xl bg-[#F6FAF8] p-6 shadow-sm">
      <span className="text-4xl font-extrabold leading-none text-[#D1BCFF]/70">{number}</span>
      <h3 className="mt-4 text-lg font-extrabold text-[#081018]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#68707A]">{text}</p>
      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#7838F0]">{icon} {label}</div>
    </div>
  )
}

function Advantage({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E9E6FF] text-[#7838F0]">{icon}</div>
      <div><h4 className="text-sm font-extrabold text-[#081018]">{title}</h4><p className="mt-1 text-xs leading-5 text-[#68707A] sm:text-sm">{text}</p></div>
    </div>
  )
}

export default Opportunities
