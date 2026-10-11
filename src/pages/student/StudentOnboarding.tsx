import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const interests = [
  'Hackathons',
  'Coding',
  'Design',
  'AI & ML',
  'Entrepreneurship',
  'Innovation',
  'Robotics',
  'Research',
  'Startups',
  'Cybersecurity',
  'Web Development',
  'Networking',
]

const skills = [
  'C / C++',
  'Java',
  'Python',
  'JavaScript',
  'React',
  'UI/UX',
  'Machine Learning',
  'Data Science',
  'Cloud',
  'Git & GitHub',
  'Public Speaking',
  'Leadership',
]

function StudentOnboarding() {
  const navigate = useNavigate()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const toggleItem = (
    item: string,
    selected: string[],
    setSelected: (items: string[]) => void,
  ) => {
    setSelected(
      selected.includes(item)
        ? selected.filter((value) => value !== item)
        : [...selected, item],
    )
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/student/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F6FAF8] px-5 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-7">
          <Link
            to="/signup/role"
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#68707A] transition-colors hover:text-[#7838F0]"
          >
            <ArrowLeft size={14} />
            Back to role selection
          </Link>

          <div className="flex items-start justify-between gap-5">
            <div>
              <span className="mb-2 inline-flex rounded-md bg-[#E9E6FF] px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#7838F0]">
                Student Profile
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-[#081018] sm:text-3xl">
                Tell us a little about yourself
              </h1>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[#68707A]">
                Complete your profile so INCOMATE can personalize your student experience.
              </p>
            </div>

            <span className="hidden shrink-0 text-xs font-semibold text-[#68707A] sm:block">
              Step 3 of 3
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <section className="rounded-2xl border border-[#E4E9E6] bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-5">
                <h2 className="text-base font-bold text-[#081018]">Basic Information</h2>
                <p className="mt-1 text-xs text-[#68707A]">
                  Add your academic details and contact information.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Full Name
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-3 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    College / Institution
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Vivekananda Global University"
                    className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-3 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Enrollment / Student ID
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="Your enrollment number"
                    className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-3 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Department
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Computer Science & Engineering"
                    className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-3 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Semester / Year
                  </span>
                  <select
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-[#E4E9E6] bg-white px-3.5 py-3 text-sm text-[#081018] outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  >
                    <option value="" disabled>Select your semester</option>
                    <option>1st Semester</option>
                    <option>2nd Semester</option>
                    <option>3rd Semester</option>
                    <option>4th Semester</option>
                    <option>5th Semester</option>
                    <option>6th Semester</option>
                    <option>7th Semester</option>
                    <option>8th Semester</option>
                    <option>Other / Alumni</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Phone Number
                  </span>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-[#E4E9E6] px-3.5 py-3 text-sm outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-2xl border border-[#E4E9E6] bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-5">
                <h2 className="text-base font-bold text-[#081018]">Interests & Skills</h2>
                <p className="mt-1 text-xs text-[#68707A]">
                  Select everything that matches your interests. You can change these later.
                </p>
              </div>

              <div>
                <div className="mb-2.5 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Areas of Interest
                  </span>
                  <span className="text-[11px] text-[#68707A]">
                    {selectedInterests.length} selected
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => {
                    const selected = selectedInterests.includes(item)
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleItem(item, selectedInterests, setSelectedInterests)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all ${
                          selected
                            ? 'border-[#7838F0] bg-[#7838F0] text-white'
                            : 'border-[#E4E9E6] bg-white text-[#081018]/75 hover:border-[#7838F0]/50 hover:bg-[#F4F1FD]'
                        }`}
                      >
                        {selected && <Check size={13} />}
                        {item}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-2.5 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#081018]">
                    Skills
                  </span>
                  <span className="text-[11px] text-[#68707A]">
                    {selectedSkills.length} selected
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((item) => {
                    const selected = selectedSkills.includes(item)
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleItem(item, selectedSkills, setSelectedSkills)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all ${
                          selected
                            ? 'border-[#7838F0] bg-[#7838F0] text-white'
                            : 'border-[#E4E9E6] bg-white text-[#081018]/75 hover:border-[#7838F0]/50 hover:bg-[#F4F1FD]'
                        }`}
                      >
                        {selected && <Check size={13} />}
                        {item}
                      </button>
                    )
                  })}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#E4E9E6] bg-white p-5 shadow-sm sm:p-7">
              <div className="mb-5">
                <h2 className="text-base font-bold text-[#081018]">About You</h2>
                <p className="mt-1 text-xs text-[#68707A]">
                  A short introduction helps other participants know what you build and enjoy.
                </p>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#081018]">
                  Short Bio
                </span>
                <textarea
                  rows={5}
                  maxLength={300}
                  placeholder="Tell us about yourself, what you enjoy building, or what you want to explore..."
                  className="w-full resize-none rounded-xl border border-[#E4E9E6] px-3.5 py-3 text-sm leading-relaxed outline-none transition-all placeholder:text-[#68707A]/60 focus:border-transparent focus:ring-2 focus:ring-[#7838F0]"
                />
                <span className="mt-1.5 block text-right text-[11px] text-[#68707A]">
                  Up to 300 characters
                </span>
              </label>
            </section>
          </div>

          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/signup/role"
              className="inline-flex items-center justify-center rounded-xl border border-[#E4E9E6] bg-white px-5 py-3 text-sm font-semibold text-[#081018] transition-colors hover:border-[#7838F0]/30 hover:text-[#7838F0]"
            >
              Back
            </Link>

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-[#7838F0]/25 transition-all hover:bg-[#6528DC]"
            >
              Complete Profile
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentOnboarding
