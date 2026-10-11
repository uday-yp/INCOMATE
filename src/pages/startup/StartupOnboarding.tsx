import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Rocket } from 'lucide-react'

const startupStages = [
  'Idea Stage',
  'Pre-Seed',
  'Seed',
  'Early Stage',
  'Growth Stage',
  'Other',
]

const startupCategories = [
  'Technology',
  'FinTech',
  'HealthTech',
  'EdTech',
  'AI & ML',
  'Sustainability',
  'Consumer',
  'Other',
]

function StartupOnboarding() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    startupName: '',
    founderName: '',
    stage: '',
    category: '',
    email: '',
    phone: '',
    website: '',
    description: '',
  })

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/startup/dashboard')
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

          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7838F0] text-sm font-extrabold text-white">
              I
            </span>
            <span className="text-lg font-extrabold tracking-[-0.04em] text-[#081018]">
              INCOMATE
            </span>
          </Link>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9E6FF] text-[#7838F0]">
              <Rocket size={26} />
            </div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#7838F0]">
              Startup profile
            </p>
            <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-[#081018] sm:text-4xl">
              Tell us about your startup
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#081018]/60 sm:text-base">
              Create your startup profile so you can discover opportunities, connect with the ecosystem and showcase what you are building.
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
              <h2 className="text-lg font-extrabold text-[#081018]">Startup Information</h2>
              <p className="mt-1 text-sm text-[#081018]/55">
                Add the basic details participants and ecosystem partners should know.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="startupName" className="mb-2 block text-sm font-bold text-[#081018]">
                    Startup Name
                  </label>
                  <input
                    id="startupName"
                    required
                    value={form.startupName}
                    onChange={(e) => updateField('startupName', e.target.value)}
                    placeholder="e.g. LearnLoop"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>

                <div>
                  <label htmlFor="founderName" className="mb-2 block text-sm font-bold text-[#081018]">
                    Founder Name
                  </label>
                  <input
                    id="founderName"
                    required
                    value={form.founderName}
                    onChange={(e) => updateField('founderName', e.target.value)}
                    placeholder="Founder / co-founder name"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>

                <div>
                  <label htmlFor="stage" className="mb-2 block text-sm font-bold text-[#081018]">
                    Startup Stage
                  </label>
                  <select
                    id="stage"
                    required
                    value={form.stage}
                    onChange={(e) => updateField('stage', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm text-[#081018] outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  >
                    <option value="">Select stage</option>
                    {startupStages.map((stage) => (
                      <option key={stage} value={stage}>{stage}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="category" className="mb-2 block text-sm font-bold text-[#081018]">
                    Category / Industry
                  </label>
                  <select
                    id="category"
                    required
                    value={form.category}
                    onChange={(e) => updateField('category', e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm text-[#081018] outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  >
                    <option value="">Select category</option>
                    {startupCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            <div className="my-8 border-t border-[#081018]/8" />

            <section>
              <h2 className="text-lg font-extrabold text-[#081018]">Contact Information</h2>
              <p className="mt-1 text-sm text-[#081018]/55">
                Provide a contact point for opportunities and ecosystem connections.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-[#081018]">
                    Contact Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="hello@yourstartup.com"
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
                    Startup Website <span className="font-medium text-[#081018]/40">(Optional)</span>
                  </label>
                  <input
                    id="website"
                    type="url"
                    value={form.website}
                    onChange={(e) => updateField('website', e.target.value)}
                    placeholder="https://yourstartup.com"
                    className="w-full rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                  />
                </div>
              </div>
            </section>

            <div className="my-8 border-t border-[#081018]/8" />

            <section>
              <h2 className="text-lg font-extrabold text-[#081018]">About Your Startup</h2>
              <p className="mt-1 text-sm text-[#081018]/55">
                Explain what your startup is building in a few sentences.
              </p>

              <div className="mt-6">
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
                  placeholder="What problem are you solving and what does your startup build?"
                  className="w-full resize-none rounded-2xl border border-[#081018]/10 bg-[#F6FAF8] px-4 py-3.5 text-sm leading-6 outline-none transition focus:border-[#7838F0] focus:bg-white focus:ring-4 focus:ring-[#7838F0]/10"
                />
                <p className="mt-2 text-right text-xs text-[#081018]/40">{form.description.length}/400</p>
              </div>
            </section>

            <div className="mt-7 rounded-2xl bg-[#E9E6FF]/55 p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7838F0] text-white">
                  <Check size={15} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-sm font-bold text-[#081018]">You can update these details later</p>
                  <p className="mt-1 text-xs leading-5 text-[#081018]/55">
                    Your startup profile can be edited from the dashboard after setup.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#7838F0] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#6F41D8]"
            >
              Continue to Startup Dashboard
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StartupOnboarding
