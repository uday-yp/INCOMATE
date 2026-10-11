import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Building2, Check } from 'lucide-react'

const organizationTypes = [
  'College / University',
  'IIC',
  'ACIC / Incubator',
  'E-Cell',
  'Department',
  'Club / Student Chapter',
  'Other',
]

function OrganizerOnboarding() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    organizationName: '',
    organizerName: '',
    organizationType: '',
    department: '',
    officialEmail: '',
    phone: '',
    website: '',
    description: '',
  })

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/organizer/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F6FAF8]">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/signup/role"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#081018]/65 transition-colors hover:text-[#7838F0]"
          >
            <ArrowLeft size={17} />
            Back
          </Link>

          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7838F0] text-sm font-extrabold text-white">
              I
            </span>
            <span className="text-lg font-extrabold tracking-[-0.04em] text-[#081018]">
              INCOMATE
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E6FF] text-[#7838F0]">
              <Building2 size={26} />
            </div>

            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#7838F0]">
              Organizer profile
            </p>
            <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-[#081018] sm:text-4xl">
              Set up your organization
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#081018]/60 sm:text-base">
              Tell us about the organization you represent. You can use INCOMATE
              to create events, opportunities and manage participants.
            </p>
          </div>

          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="h-2 w-16 rounded-full bg-[#7838F0]" />
            <span className="h-2 w-16 rounded-full bg-[#E9E6FF]" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-[#081018]/8 bg-white p-5 shadow-[0_18px_60px_rgba(8,16,24,0.06)] sm:p-8"
          >
            <section>
              <div className="mb-6">
                <h2 className="text-lg font-extrabold tracking-[-0.02em] text-[#081018]">
                  Organization Information
                </h2>
                <p className="mt-1 text-sm text-[#081018]/55">
                  Basic details that will appear on your organizer profile.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="organizationName" className="mb-2 block text-sm font-bold text-[#081018]">
                    Organization / Institution Name
                  </label>
                  <input
                    id="organizationName"
                    required
                    value={form.organizationName}
                    onChange={(e) => updateField('organizationName', e.target.value)}
                    placeholder="e.g. VGU Innovation & Incubation Centre"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>

                <div>
                  <label htmlFor="organizerName" className="mb-2 block text-sm font-bold text-[#081018]">
                    Organizer / Coordinator Name
                  </label>
                  <input
                    id="organizerName"
                    required
                    value={form.organizerName}
                    onChange={(e) => updateField('organizerName', e.target.value)}
                    placeholder="Full name"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>

                <div>
                  <label htmlFor="organizationType" className="mb-2 block text-sm font-bold text-[#081018]">
                    Organization Type
                  </label>
                  <select
                    id="organizationType"
                    required
                    value={form.organizationType}
                    onChange={(e) => updateField('organizationType', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm text-[#081018] outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  >
                    <option value="">Select type</option>
                    {organizationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="department" className="mb-2 block text-sm font-bold text-[#081018]">
                    Department / Cell
                  </label>
                  <input
                    id="department"
                    required
                    value={form.department}
                    onChange={(e) => updateField('department', e.target.value)}
                    placeholder="e.g. Department of CSE, IIC, E-Cell"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>
              </div>
            </section>

            <div className="my-8 border-t border-[#081018]/8" />

            <section>
              <div className="mb-6">
                <h2 className="text-lg font-extrabold tracking-[-0.02em] text-[#081018]">
                  Contact Information
                </h2>
                <p className="mt-1 text-sm text-[#081018]/55">
                  Use official contact details so participants know who is organizing the event.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="officialEmail" className="mb-2 block text-sm font-bold text-[#081018]">
                    Official Email
                  </label>
                  <input
                    id="officialEmail"
                    type="email"
                    required
                    value={form.officialEmail}
                    onChange={(e) => updateField('officialEmail', e.target.value)}
                    placeholder="organizer@institution.edu"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-[#081018]">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="website" className="mb-2 block text-sm font-bold text-[#081018]">
                    Organization Website <span className="font-medium text-[#081018]/40">(Optional)</span>
                  </label>
                  <input
                    id="website"
                    type="url"
                    value={form.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    placeholder="https://yourorganization.com"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>
              </div>
            </section>

            <div className="my-8 border-t border-[#081018]/8" />

            <section>
              <div className="mb-6">
                <h2 className="text-lg font-extrabold tracking-[-0.02em] text-[#081018]">
                  About the Organization
                </h2>
                <p className="mt-1 text-sm text-[#081018]/55">
                  Give participants a short introduction to your organization.
                </p>
              </div>

              <div>
                <label htmlFor="description" className="mb-2 block text-sm font-bold text-[#081018]">
                  Short Description
                </label>
                <textarea
                  id="description"
                  required
                  maxLength={400}
                  rows={5}
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="Tell participants what your organization does and the kind of events or opportunities you organize."
                  className="w-full resize-none rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm leading-6 outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                />
                <p className="mt-2 text-right text-xs text-[#081018]/40">
                  {form.description.length}/400
                </p>
              </div>
            </section>

            <div className="mt-8 rounded-2xl bg-[#E9E6FF]/55 p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7838F0] text-white">
                  <Check size={15} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#081018]">You can update these details later</p>
                  <p className="mt-1 text-xs leading-5 text-[#081018]/55">
                    Your organizer profile can be edited from the dashboard after setup.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7838F0] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#6F41D8]"
            >
              Continue to Organizer Dashboard
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-[#081018]/45">
            By continuing, you confirm that the information provided represents the organization you are authorized to organize for.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OrganizerOnboarding
