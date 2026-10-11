import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#083830] text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* Main Footer */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5"
              aria-label="INCOMATE home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7838F0] text-sm font-extrabold text-white">
                I
              </span>

              <span className="text-xl font-extrabold tracking-[-0.04em]">
                INCOMATE
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/65">
              One platform to discover, create, manage and measure events,
              innovation programs, entrepreneurship activities and
              competitions.
            </p>

            {/* Social placeholders */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[11px] font-bold text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                in
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[10px] font-bold text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs font-bold text-white/70 transition-colors hover:border-white/30 hover:text-white"
              >
                X
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold">Explore</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/events"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Events
              </Link>

              <Link
                to="/opportunities"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Opportunities
              </Link>

              <Link
                to="/startups"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Startups
              </Link>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-bold">Platform</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                About INCOMATE
              </Link>

              <Link
                to="/login"
                className="text-sm text-white/65 transition-colors hover:text-white"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
              >
                Create account
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Organizer */}
          <div className="hidden md:block">
            <h3 className="text-sm font-bold">For Organizers</h3>

            <p className="mt-4 text-sm leading-6 text-white/65">
              Create and manage events, participants, submissions and
              innovation activities from one workspace.
            </p>

            <Link
              to="/signup"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#E9E6FF]"
            >
              Get started
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/45 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} INCOMATE. All rights reserved.</p>

          <div className="flex gap-5">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer