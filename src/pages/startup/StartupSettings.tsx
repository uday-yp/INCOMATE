import { useState } from 'react'
import EcosystemDashboard from '../../common/EcosystemDashboard'
import { Bell, Lock, Shield, UserRound, Save } from 'lucide-react'

function StartupSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [eventUpdates, setEventUpdates] = useState(true)
  const [profileVisibility, setProfileVisibility] = useState(true)

  return (
    <EcosystemDashboard role="startup">
      <div className="mx-auto max-w-5xl py-2">
        <div className="mb-8">
          <p className="mb-1 text-sm font-semibold text-[#7838F0]">
            Account
          </p>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#081018] md:text-3xl">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your startup account preferences and privacy settings.
          </p>
        </div>

        {/* Notifications */}
        <section className="mb-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <Bell size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Notifications
              </h2>
              <p className="text-sm text-slate-500">
                Choose which updates you want to receive.
              </p>
            </div>
          </div>

          <SettingToggle
            title="Email Notifications"
            description="Receive important account and platform updates by email."
            checked={emailNotifications}
            onChange={setEmailNotifications}
          />

          <SettingToggle
            title="Event & Opportunity Updates"
            description="Receive updates about events, opportunities and applications."
            checked={eventUpdates}
            onChange={setEventUpdates}
          />
        </section>

        {/* Privacy */}
        <section className="mb-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <Shield size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Privacy
              </h2>
              <p className="text-sm text-slate-500">
                Control how your startup profile appears on INCOMATE.
              </p>
            </div>
          </div>

          <SettingToggle
            title="Public Startup Profile"
            description="Allow other users to discover your startup profile."
            checked={profileVisibility}
            onChange={setProfileVisibility}
          />
        </section>

        {/* Account */}
        <section className="mb-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <UserRound size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Account
              </h2>
              <p className="text-sm text-slate-500">
                Manage your account information.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                Account Type
              </label>
              <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-[#081018]">
                Startup
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
                Startup
              </label>
              <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-[#081018]">
                LearnLoop
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9E6FF] text-[#7838F0]">
              <Lock size={19} />
            </div>

            <div>
              <h2 className="font-extrabold text-[#081018]">
                Security
              </h2>
              <p className="text-sm text-slate-500">
                Manage your account security.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#7838F0] px-5 py-3 text-sm font-bold text-white hover:bg-[#6F41D8]"
          >
            <Save size={17} />
            Change Password
          </button>
        </section>
      </div>
    </EcosystemDashboard>
  )
}

function SettingToggle({
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
    <div className="flex items-center justify-between gap-6 border-b border-slate-100 py-4 last:border-b-0">
      <div>
        <h3 className="text-sm font-bold text-[#081018]">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? 'bg-[#7838F0]' : 'bg-slate-300'
        }`}
        aria-label={title}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            checked ? 'left-6' : 'left-1'
          }`}
        />
      </button>
    </div>
  )
}

export default StartupSettings