import { useState } from 'react'
import {
  Bell,
  CalendarDays,
  CheckCircle2,
  Globe2,
  Lock,
  Save,
  Shield,
  Trash2,
  UserRound,
} from 'lucide-react'

export default function OrganizerSettings() {
  const [saved, setSaved] = useState(false)

  const [settings, setSettings] = useState({
    emailNotifications: true,
    registrationNotifications: true,
    eventReminders: true,
    publicOrganizerProfile: true,
    showContactDetails: false,
    allowParticipantMessages: true,
    autoCloseRegistration: true,
    defaultRegistrationStatus: 'Confirmed',
    timezone: 'Asia/Kolkata',
  })

  const updateSetting = (
    field: keyof typeof settings,
    value: boolean | string,
  ) => {
    setSettings((current) => ({
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
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <span>Organizer</span>
            <span>/</span>
            <span className="font-medium text-[#7838F0]">Settings</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Organizer Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your organizer preferences and event settings.
          </p>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <SettingsSection
            icon={<Bell size={19} />}
            title="Notifications"
            description="Choose which notifications you want to receive."
          >
            <ToggleRow
              title="Email Notifications"
              description="Receive important updates about your organizer account."
              checked={settings.emailNotifications}
              onChange={(value) =>
                updateSetting('emailNotifications', value)
              }
            />

            <ToggleRow
              title="Registration Notifications"
              description="Get notified when someone registers for your events."
              checked={settings.registrationNotifications}
              onChange={(value) =>
                updateSetting('registrationNotifications', value)
              }
            />

            <ToggleRow
              title="Event Reminders"
              description="Receive reminders about your upcoming events."
              checked={settings.eventReminders}
              onChange={(value) =>
                updateSetting('eventReminders', value)
              }
            />
          </SettingsSection>

          {/* Event preferences */}
          <SettingsSection
            icon={<CalendarDays size={19} />}
            title="Event Preferences"
            description="Configure default behavior for your events."
          >
            <ToggleRow
              title="Automatically Close Registration"
              description="Automatically stop registrations when the event reaches its capacity."
              checked={settings.autoCloseRegistration}
              onChange={(value) =>
                updateSetting('autoCloseRegistration', value)
              }
            />

            <div className="border-t border-slate-100 pt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Default Registration Status
              </label>

              <select
                value={settings.defaultRegistrationStatus}
                onChange={(event) =>
                  updateSetting(
                    'defaultRegistrationStatus',
                    event.target.value,
                  )
                }
                className="w-full max-w-sm rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#7838F0] focus:ring-4 focus:ring-[#7838F0]/10"
              >
                <option value="Confirmed">Confirmed</option>
                <option value="Waitlisted">Waitlisted</option>
              </select>

              <p className="mt-2 text-xs text-slate-500">
                This will be used as the default status for new registrations.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Default Timezone
              </label>

              <div className="relative max-w-sm">
                <Globe2
                  size={17}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  value={settings.timezone}
                  onChange={(event) =>
                    updateSetting('timezone', event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition focus:border-[#7838F0] focus:ring-4 focus:ring-[#7838F0]/10"
                >
                  <option value="Asia/Kolkata">
                    India Standard Time (IST)
                  </option>
                  <option value="Asia/Dubai">
                    Gulf Standard Time (GST)
                  </option>
                  <option value="UTC">UTC</option>
                </select>
              </div>
            </div>
          </SettingsSection>

          {/* Privacy */}
          <SettingsSection
            icon={<Shield size={19} />}
            title="Privacy & Visibility"
            description="Control how your organizer profile appears to participants."
          >
            <ToggleRow
              title="Public Organizer Profile"
              description="Allow participants to view your organizer profile on INCOMATE."
              checked={settings.publicOrganizerProfile}
              onChange={(value) =>
                updateSetting('publicOrganizerProfile', value)
              }
            />

            <ToggleRow
              title="Show Contact Details"
              description="Display your organization contact information to participants."
              checked={settings.showContactDetails}
              onChange={(value) =>
                updateSetting('showContactDetails', value)
              }
            />

            <ToggleRow
              title="Allow Participant Messages"
              description="Allow registered participants to contact the organizer."
              checked={settings.allowParticipantMessages}
              onChange={(value) =>
                updateSetting('allowParticipantMessages', value)
              }
            />
          </SettingsSection>

          {/* Account */}
          <SettingsSection
            icon={<UserRound size={19} />}
            title="Account"
            description="Manage your organizer account security."
          >
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:border-[#7838F0]/30 hover:bg-[#FAF8FF]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <Lock size={17} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Change Password
                  </p>
                  <p className="text-xs text-slate-500">
                    Update your account password.
                  </p>
                </div>
              </div>

              <span className="text-sm font-semibold text-[#7838F0]">
                Change
              </span>
            </button>
          </SettingsSection>

          {/* Danger zone */}
          <div className="rounded-2xl border border-red-200 bg-white shadow-sm">
            <div className="border-b border-red-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                  <Trash2 size={19} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Danger Zone
                  </h2>
                  <p className="text-sm text-slate-500">
                    Actions here can affect your organizer account.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Delete Organizer Account
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  This will permanently remove your organizer account and its data.
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
              >
                Delete Account
              </button>
            </div>
          </div>

          {/* Save */}
          <div className="flex flex-col gap-3 pb-8 pt-2 sm:flex-row sm:items-center sm:justify-end">
            {saved && (
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <CheckCircle2 size={17} />
                Settings saved
              </div>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7838F0] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6727df]"
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingsSection({
  icon,
  title,
  description,
  children,
}: {
  icon: React.ReactNode
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE6FF] text-[#7838F0]">
            {icon}
          </div>

          <div>
            <h2 className="font-bold text-slate-900">{title}</h2>
            <p className="text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">{children}</div>
    </section>
  )
}

function ToggleRow({
  title,
  description,
  checked,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-5">
      <div>
        <p className="text-sm font-semibold text-slate-800">{title}</p>
        <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition ${
          checked ? 'bg-[#7838F0]' : 'bg-slate-200'
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            checked ? 'left-6' : 'left-1'
          }`}
        />
      </button>
    </div>
  )
}