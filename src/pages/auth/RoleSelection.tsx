import { ArrowRight, Building2, Rocket, GraduationCap } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const roles = [
  {
    id: 'student',
    title: 'Student / Participant',
    description:
      'Discover events and opportunities, participate in activities, collaborate with peers, and showcase your work.',
    icon: GraduationCap,
    badge: 'Popular',
  },
  {
    id: 'organizer',
    title: 'Organizer',
    description:
      'Create and manage events, participant cohorts, submissions, results, certificates, and institutional activities.',
    icon: Building2,
  },
  {
    id: 'startup',
    title: 'Startup',
    description:
      'Showcase your startup, product, or innovation journey and connect with mentors, programs, and the ecosystem.',
    icon: Rocket,
  },
]

function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState('student')
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate(`/onboarding/${selectedRole}`)
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#F6FAF8] px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <Link
            to="/signup"
            className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#68707A] hover:text-[#7838F0]"
          >
            ← Back to signup
          </Link>

          <span className="mb-2 inline-flex rounded-md bg-[#E9E6FF] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7838F0]">
            Step 2 of 3
          </span>

          <h1 className="text-2xl font-bold tracking-tight text-[#081018] sm:text-3xl">
            How will you use INCOMATE?
          </h1>
          <p className="mt-1.5 text-sm leading-relaxed text-[#68707A]">
            Choose the option that best describes you to personalize your workspace.
          </p>
        </div>

        <div className="space-y-3">
          {roles.map((role) => {
            const Icon = role.icon
            const isSelected = selectedRole === role.id

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => setSelectedRole(role.id)}
                className={`relative flex w-full items-start gap-3.5 rounded-xl border-2 p-4 text-left transition-all ${
                  isSelected
                    ? 'border-[#7838F0] bg-[#F4F1FD]'
                    : 'border-[#E4E9E6] bg-white hover:border-[#7838F0]/50 hover:bg-[#F6FAF8]'
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    isSelected
                      ? 'bg-[#7838F0] text-white'
                      : 'bg-[#E9E6FF] text-[#7838F0]'
                  }`}
                >
                  <Icon size={20} />
                </span>

                <span className="min-w-0 flex-1 pr-7">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold uppercase tracking-wide text-[#081018]">
                      {role.title}
                    </span>
                    {role.badge && (
                      <span className="rounded bg-[#7838F0] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        {role.badge}
                      </span>
                    )}
                  </span>

                  <span className="mt-1 block text-xs leading-relaxed text-[#68707A] sm:text-sm">
                    {role.description}
                  </span>
                </span>

                <span
                  className={`absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    isSelected
                      ? 'border-[#7838F0] bg-[#7838F0] text-white'
                      : 'border-[#E4E9E6] bg-white'
                  }`}
                >
                  {isSelected && <span className="text-xs font-bold">✓</span>}
                </span>
              </button>
            )
          })}
        </div>

        <button
          type="button"
          onClick={handleContinue}
          className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-[#7838F0]/25 transition-all hover:bg-[#6528DC]"
        >
          Continue to Setup
          <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
        </button>

        <p className="mt-4 text-center text-xs text-[#68707A]">
          You can update your profile details later.
        </p>
      </div>
    </div>
  )
}

export default RoleSelection
