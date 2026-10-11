import { useState } from 'react'
import EcosystemDashboard from '../../common/EcosystemDashboard'
import {
  Pencil,
  Check,
  GraduationCap,
  Phone,
  Mail,
  BookOpen,
  User,
  X,
} from 'lucide-react'

function StudentProfile() {
  const [editing, setEditing] = useState(false)

  const [profile, setProfile] = useState({
    fullName: 'Aarav Sharma',
    college: 'Vivekananda Global University',
    enrollmentId: 'VGU2026CSE001',
    department: 'Computer Science & Engineering',
    semesterYear: '4th Semester',
    phone: '+91 98765 43210',
    interests: [
      'Web Development',
      'Artificial Intelligence',
      'Entrepreneurship',
    ],
    skills: ['React', 'JavaScript', 'Python'],
    bio: 'Computer Science student interested in technology, innovation and building practical solutions.',
  })

  const updateField = (field: string, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <EcosystemDashboard role="student">
      <div className="mx-auto max-w-6xl py-2">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold text-[#7838F0]">
              My Profile
            </p>

            <h1 className="text-2xl font-extrabold tracking-tight text-[#081018] md:text-3xl">
              Student Profile
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage the information provided during your onboarding.
            </p>
          </div>

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#6F41D8]"
            >
              <Pencil size={17} />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => setEditing(false)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700"
              >
                <X size={17} />
                Cancel
              </button>

              <button
                onClick={() => setEditing(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white hover:bg-[#6F41D8]"
              >
                <Check size={17} />
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Profile Header */}
        <section className="mb-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#E9E6FF] text-2xl font-extrabold text-[#7838F0]">
              {profile.fullName
                .split(' ')
                .map((name) => name[0])
                .join('')
                .slice(0, 2)}
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#081018]">
                {profile.fullName}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {profile.department}
              </p>

              <p className="mt-1 text-sm font-medium text-[#7838F0]">
                {profile.college}
              </p>
            </div>
          </div>
        </section>

        {/* Personal & Academic Information */}
        <section className="mb-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <User size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Personal & Academic Information
              </h2>

              <p className="text-sm text-slate-500">
                Information provided during student onboarding.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ProfileField
              label="Full Name"
              value={profile.fullName}
              editing={editing}
              onChange={(value) => updateField('fullName', value)}
              icon={<User size={16} />}
            />

            <ProfileField
              label="College / Institution"
              value={profile.college}
              editing={editing}
              onChange={(value) => updateField('college', value)}
              icon={<GraduationCap size={16} />}
            />

            <ProfileField
              label="Enrollment / Student ID"
              value={profile.enrollmentId}
              editing={editing}
              onChange={(value) => updateField('enrollmentId', value)}
              icon={<BookOpen size={16} />}
            />

            <ProfileField
              label="Department"
              value={profile.department}
              editing={editing}
              onChange={(value) => updateField('department', value)}
              icon={<GraduationCap size={16} />}
            />

            <ProfileField
              label="Semester / Year"
              value={profile.semesterYear}
              editing={editing}
              onChange={(value) => updateField('semesterYear', value)}
              icon={<BookOpen size={16} />}
            />

            <ProfileField
              label="Phone Number"
              value={profile.phone}
              editing={editing}
              onChange={(value) => updateField('phone', value)}
              icon={<Phone size={16} />}
            />
          </div>
        </section>

        {/* Interests & Skills */}
        <section className="mb-6 grid gap-6 lg:grid-cols-2">
          <TagSection
            title="Areas of Interest"
            values={profile.interests}
          />

          <TagSection
            title="Skills"
            values={profile.skills}
          />
        </section>

        {/* Bio */}
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <Mail size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Short Bio
              </h2>

              <p className="text-sm text-slate-500">
                Your introduction from onboarding.
              </p>
            </div>
          </div>

          {editing ? (
            <textarea
              value={profile.bio}
              onChange={(event) => updateField('bio', event.target.value)}
              rows={4}
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#7838F0]"
            />
          ) : (
            <p className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              {profile.bio}
            </p>
          )}
        </section>
      </div>
    </EcosystemDashboard>
  )
}

function ProfileField({
  label,
  value,
  editing,
  onChange,
  icon,
}: {
  label: string
  value: string
  editing: boolean
  onChange: (value: string) => void
  icon: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
        {icon}
        {label}
      </label>

      {editing ? (
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#081018] outline-none focus:border-[#7838F0]"
        />
      ) : (
        <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-[#081018]">
          {value}
        </div>
      )}
    </div>
  )
}

function TagSection({
  title,
  values,
}: {
  title: string
  values: string[]
}) {
  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 className="mb-4 font-extrabold text-[#081018]">{title}</h2>

      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <span
            key={value}
            className="rounded-full bg-[#E9E6FF] px-3 py-2 text-xs font-bold text-[#6F41D8]"
          >
            {value}
          </span>
        ))}
      </div>
    </section>
  )
}

export default StudentProfile