import React, { useMemo, useState } from 'react'
import {
  Award,
  CalendarDays,
  CheckCircle2,
  Download,
  ExternalLink,
  FileBadge2,
  Search,
  ShieldCheck,
  Trophy,
} from 'lucide-react'

type Certificate = {
  id: string
  title: string
  event: string
  type: 'Participation' | 'Winner' | 'Finalist' | 'Achievement'
  issuedOn: string
  certificateId: string
  status: 'Verified' | 'Pending'
}

const certificates: Certificate[] = [
  {
    id: 'cert-001',
    title: 'Certificate of Participation',
    event: 'INNOVATE 2026: Collegiate Hackathon & AI Showcase',
    type: 'Participation',
    issuedOn: '20 Oct 2026',
    certificateId: 'INC-2026-8F42K',
    status: 'Verified',
  },
  {
    id: 'cert-002',
    title: 'Certificate of Achievement',
    event: 'Future Tech Workshop: Web3 & Distributed AI',
    type: 'Achievement',
    issuedOn: '24 Oct 2026',
    certificateId: 'INC-2026-5D91P',
    status: 'Verified',
  },
  {
    id: 'cert-003',
    title: 'Certificate of Finalist',
    event: 'Campus Innovation Sprint: Hardware & IoT',
    type: 'Finalist',
    issuedOn: '05 Nov 2026',
    certificateId: 'INC-2026-3M77Q',
    status: 'Verified',
  },
]

const typeStyles: Record<Certificate['type'], string> = {
  Participation: 'bg-blue-50 text-blue-700 border-blue-100',
  Winner: 'bg-amber-50 text-amber-700 border-amber-100',
  Finalist: 'bg-purple-50 text-purple-700 border-purple-100',
  Achievement: 'bg-emerald-50 text-emerald-700 border-emerald-100',
}

export default function StudentCertificates() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'All' | Certificate['type']>('All')

  const filteredCertificates = useMemo(() => {
    const query = search.trim().toLowerCase()

    return certificates.filter((certificate) => {
      const matchesSearch =
        !query ||
        certificate.title.toLowerCase().includes(query) ||
        certificate.event.toLowerCase().includes(query) ||
        certificate.certificateId.toLowerCase().includes(query)

      const matchesFilter =
        filter === 'All' || certificate.type === filter

      return matchesSearch && matchesFilter
    })
  }, [search, filter])

  const handleDownload = (certificate: Certificate) => {
    alert(`Download will be connected to certificate storage later.\n\n${certificate.title}`)
  }

  const handleView = (certificate: Certificate) => {
    alert(`Certificate preview will be connected later.\n\nCertificate ID: ${certificate.certificateId}`)
  }

  const verifiedCount = certificates.filter(
    (certificate) => certificate.status === 'Verified'
  ).length

  const achievementCount = certificates.filter(
    (certificate) =>
      certificate.type === 'Achievement' || certificate.type === 'Winner'
  ).length

  return (
    <div className="min-h-screen bg-[#F6FAF8] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-purple-600">
              <Award className="h-4 w-4" />
              My Certificates
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Certificates
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              View and manage certificates earned through your INCOMATE events
              and activities.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-4 py-3 shadow-sm">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />

            <div>
              <p className="text-xs font-medium text-slate-500">
                Certificate Status
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {verifiedCount} Verified
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Total Certificates</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {certificates.length}
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-3">
                <FileBadge2 className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Verified</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {verifiedCount}
                </p>
              </div>

              <div className="rounded-xl bg-emerald-50 p-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Achievements</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {achievementCount}
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-3">
                <Trophy className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search certificates or events..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-2 focus:ring-purple-100"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                'All',
                'Participation',
                'Winner',
                'Finalist',
                'Achievement',
              ].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() =>
                    setFilter(option as 'All' | Certificate['type'])
                  }
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    filter === option
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate list */}
        <div className="space-y-4">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((certificate) => (
              <div
                key={certificate.id}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                      <Award className="h-6 w-6 text-purple-600" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-base font-bold text-slate-900">
                          {certificate.title}
                        </h2>

                        <span
                          className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${typeStyles[certificate.type]}`}
                        >
                          {certificate.type}
                        </span>
                      </div>

                      <p className="mt-1 text-sm font-medium text-slate-700">
                        {certificate.event}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" />
                          Issued {certificate.issuedOn}
                        </span>

                        <span>
                          ID:{' '}
                          <span className="font-medium text-slate-700">
                            {certificate.certificateId}
                          </span>
                        </span>

                        <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {certificate.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      onClick={() => handleView(certificate)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDownload(certificate)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50">
                <Award className="h-7 w-7 text-purple-500" />
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900">
                No certificates found
              </h3>

              <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
                Try changing your search or filter. Certificates earned from
                INCOMATE events will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}