import { useState } from 'react'
import {
  Building2,
  Camera,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Phone,
  Save,
  User,
} from 'lucide-react'

export default function OrganizerProfile() {
  const [saved, setSaved] = useState(false)

  const [profile, setProfile] = useState({
    organizerName: 'VGU Innovation Hub',
    contactPerson: 'Dr. Satish Jangid',
    email: 'organizer@vgu.ac.in',
    phone: '+91 98765 43210',
    website: 'https://vgu.ac.in',
    location: 'Jaipur, Rajasthan',
    description:
      'Innovation and entrepreneurship ecosystem focused on supporting students, startups and emerging ideas.',
  })

  const updateField = (field: keyof typeof profile, value: string) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)

    setTimeout(() => {
      setSaved(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#F6FAF8] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <span>Organizer</span>
            <span>/</span>
            <span className="font-medium text-[#7838F0]">Profile</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Organizer Profile
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your organizer information and public profile details.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Profile Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-[#EDE6FF] text-[#7838F0]">
                  <Building2 size={46} strokeWidth={1.7} />
                </div>

                <button
                  type="button"
                  className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-xl border-4 border-white bg-[#7838F0] text-white shadow-sm transition hover:bg-[#6727df]"
                  title="Change profile image"
                >
                  <Camera size={16} />
                </button>
              </div>

              <h2 className="mt-5 text-lg font-bold text-slate-900">
                {profile.organizerName}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Event Organizer
              </p>

              <div className="mt-5 flex items-center gap-2 rounded-full bg-[#F1FBF8] px-3 py-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 size={14} />
                Organizer Account
              </div>
            </div>

            <div className="mt-7 border-t border-slate-100 pt-5">
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-[#7838F0]"
                  />
                  <span className="text-slate-600">
                    {profile.location}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0 text-[#7838F0]"
                  />
                  <span className="break-all text-slate-600">
                    {profile.email}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Globe
                    size={17}
                    className="mt-0.5 shrink-0 text-[#7838F0]"
                  />
                  <span className="break-all text-slate-600">
                    {profile.website}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE6FF] text-[#7838F0]">
                  <User size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Organization Details
                  </h2>
                  <p className="text-sm text-slate-500">
                    Keep your organizer information up to date.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 p-6">
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Organizer / Organization Name"
                  value={profile.organizerName}
                  onChange={(value) =>
                    updateField('organizerName', value)
                  }
                />

                <FormField
                  label="Contact Person"
                  value={profile.contactPerson}
                  onChange={(value) =>
                    updateField('contactPerson', value)
                  }
                />

                <FormField
                  label="Email Address"
                  type="email"
                  value={profile.email}
                  onChange={(value) => updateField('email', value)}
                  icon={<Mail size={16} />}
                />

                <FormField
                  label="Phone Number"
                  value={profile.phone}
                  onChange={(value) => updateField('phone', value)}
                  icon={<Phone size={16} />}
                />

                <FormField
                  label="Website"
                  value={profile.website}
                  onChange={(value) => updateField('website', value)}
                  icon={<Globe size={16} />}
                />

                <FormField
                  label="Location"
                  value={profile.location}
                  onChange={(value) => updateField('location', value)}
                  icon={<MapPin size={16} />}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Organization Description
                </label>

                <textarea
                  value={profile.description}
                  onChange={(event) =>
                    updateField('description', event.target.value)
                  }
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#7838F0] focus:ring-4 focus:ring-[#7838F0]/10"
                  placeholder="Tell participants about your organization..."
                />
              </div>

              {/* Save */}
              <div className="flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-end">
                {saved && (
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                    <CheckCircle2 size={17} />
                    Changes saved
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6727df]"
                >
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FormField({
  label,
  value,
  onChange,
  type = 'text',
  icon,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  icon?: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full rounded-xl border border-slate-200 bg-white py-3 text-sm text-slate-800 outline-none transition focus:border-[#7838F0] focus:ring-4 focus:ring-[#7838F0]/10 ${
            icon ? 'pl-10 pr-4' : 'px-4'
          }`}
        />
      </div>
    </div>
  )
}