import { useState } from 'react'
import EcosystemDashboard from '../../common/EcosystemDashboard'
import {
  Pencil,
  Check,
  Building2,
  User,
  Mail,
  Phone,
  Globe,
  X,
} from 'lucide-react'

function StartupProfile() {
  const [editing, setEditing] = useState(false)

  const [profile, setProfile] = useState({
    startupName: 'LearnLoop',
    founderName: 'Aarav Sharma',
    stage: 'Early Stage',
    category: 'EdTech',
    email: 'founder@learnloop.in',
    phone: '+91 98765 43210',
    website: 'https://learnloop.in',
    description:
      'A technology-driven startup focused on creating accessible learning experiences for students.',
  })

  const updateField = (field: string, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <EcosystemDashboard role="startup">
      <div className="mx-auto max-w-6xl py-2">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-1 text-sm font-semibold text-[#7838F0]">
              My Profile
            </p>

            <h1 className="text-2xl font-extrabold tracking-tight text-[#081018] md:text-3xl">
              Startup Profile
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage the information provided during startup onboarding.
            </p>
          </div>

          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white hover:bg-[#6F41D8]"
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

        {/* Startup Header */}
        <section className="mb-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#E9E6FF] text-[#7838F0]">
              <Building2 size={32} />
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-[#081018]">
                {profile.startupName}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {profile.category}
              </p>

              <p className="mt-1 text-sm font-bold text-[#7838F0]">
                {profile.stage}
              </p>
            </div>
          </div>
        </section>

        {/* Startup Information */}
        <section className="mb-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <Building2 size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Startup Information
              </h2>

              <p className="text-sm text-slate-500">
                Information provided during startup onboarding.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ProfileField
              label="Startup Name"
              value={profile.startupName}
              editing={editing}
              onChange={(value) => updateField('startupName', value)}
              icon={<Building2 size={16} />}
            />

            <ProfileField
              label="Founder Name"
              value={profile.founderName}
              editing={editing}
              onChange={(value) => updateField('founderName', value)}
              icon={<User size={16} />}
            />

            <ProfileField
              label="Startup Stage"
              value={profile.stage}
              editing={editing}
              onChange={(value) => updateField('stage', value)}
              icon={<Building2 size={16} />}
            />

            <ProfileField
              label="Category / Industry"
              value={profile.category}
              editing={editing}
              onChange={(value) => updateField('category', value)}
              icon={<Building2 size={16} />}
            />

            <ProfileField
              label="Contact Email"
              value={profile.email}
              editing={editing}
              onChange={(value) => updateField('email', value)}
              icon={<Mail size={16} />}
            />

            <ProfileField
              label="Phone Number"
              value={profile.phone}
              editing={editing}
              onChange={(value) => updateField('phone', value)}
              icon={<Phone size={16} />}
            />

            <div className="md:col-span-2">
              <ProfileField
                label="Startup Website"
                value={profile.website}
                editing={editing}
                onChange={(value) => updateField('website', value)}
                icon={<Globe size={16} />}
              />
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <Building2 size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Short Description
              </h2>

              <p className="text-sm text-slate-500">
                Your startup description from onboarding.
              </p>
            </div>
          </div>

          {editing ? (
            <textarea
              value={profile.description}
              onChange={(event) =>
                updateField('description', event.target.value)
              }
              rows={5}
              className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#7838F0]"
            />
          ) : (
            <p className="rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              {profile.description}
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

export default StartupProfile