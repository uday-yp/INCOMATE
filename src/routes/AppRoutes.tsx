import { Routes, Route } from 'react-router-dom'

import PublicLayout from '../layouts/PublicLayout'
import StudentLayout from '../layouts/StudentLayout'
import OrganizerLayout from '../layouts/OrganizerLayout'

import Home from '../pages/public/Home'
import Events from '../pages/public/Events'
import EventDetails from '../pages/public/EventDetails'
import Opportunities from '../pages/public/Opportunities'
import OpportunityDetails from '../pages/public/OpportunityDetails'
import Startups from '../pages/public/Startups'
import StartupDetails from '../pages/public/StartupDetails'
import About from '../pages/public/About'

import Login from '../pages/auth/Login'
import Signup from '../pages/auth/Signup'
import RoleSelection from '../pages/auth/RoleSelection'

import StudentOnboarding from '../pages/student/StudentOnboarding'
import StartupOnboarding from '../pages/startup/StartupOnboarding'
import StudentDashboard from '../pages/student/StudentDashboard'
import StudentProfile from '../pages/student/StudentProfile'
import MyRegistrations from '../pages/student/MyRegistrations'
import MyApplications from '../pages/student/MyApplications'
import MySubmissions from '../pages/student/MySubmissions'

import OrganizerOnboarding from '../pages/organizer/OrganizerOnboarding'
import OrganizerDashboard from '../pages/organizer/OrganizerDashboard'
import MyEvents from '../pages/organizer/MyEvents'
import OrganizerRegistrations from '../pages/organizer/OrganizerRegistrations'
import CreateEvent from '../pages/organizer/CreateEvent'

import StartupDashboard from '../pages/startup/StartupDashboard'
import StartupProfile from '../pages/startup/StartupProfile'
import StartupRegistrations from '../pages/startup/StartupRegistrations'
import StartupApplications from '../pages/startup/StartupApplications'
import StartupSettings from '../pages/startup/StartupSettings'

import StudentModule from '../pages/common/StudentModule'
import OrganizerModule from '../pages/common/OrganizerModule'

import OrganizerProfile from '../pages/organizer/OrganizerProfile'
import OrganizerSettings from '../pages/organizer/OrganizerSettings'
import StudentTeams from '../pages/student/StudentTeams'
import StudentCertificates from '../pages/student/StudentCertificates'

function AppRoutes() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route
          path="/opportunities/:opportunityId"
          element={<OpportunityDetails />}
        />
        <Route path="/startups" element={<Startups />} />
        <Route
          path="/startups/:startupId"
          element={<StartupDetails />}
        />
        <Route path="/about" element={<About />} />
      </Route>

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/role" element={<RoleSelection />} />

      {/* ONBOARDING */}
      <Route
        path="/onboarding/student"
        element={<StudentOnboarding />}
      />
      <Route
        path="/onboarding/organizer"
        element={<OrganizerOnboarding />}
      />
      <Route
        path="/onboarding/startup"
        element={<StartupOnboarding />}
      />

      {/* STUDENT */}
      <Route element={<StudentLayout />}>
        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />
        <Route
          path="/student/registrations"
          element={<MyRegistrations />}
        />
        <Route
          path="/student/applications"
          element={<MyApplications />}
        />
        <Route
          path="/student/submissions"
          element={<MySubmissions />}
        />
        <Route
          path="/student/profile"
          element={<StudentProfile />}
        />
        <Route path="/student/teams" element={<StudentTeams />} />
        <Route
  path="/student/certificates"
  element={<StudentCertificates />}
/>
        <Route
          path="/student/settings"
          element={<StudentModule title="Settings" />}
        />
      </Route>

      {/* ORGANIZER */}
      <Route element={<OrganizerLayout />}>
        <Route
          path="/organizer/dashboard"
          element={<OrganizerDashboard />}
        />

        <Route
          path="/organizer/events"
          element={<MyEvents />}
        />

        <Route
          path="/organizer/events/new"
          element={<CreateEvent />}
        />

        <Route
          path="/organizer/registrations"
          element={<OrganizerRegistrations />}
        />

        {/* EXISTING PARTICIPANTS TAB */}
        <Route
          path="/organizer/participants"
          element={<OrganizerModule title="Participants" />}
        />

        <Route
          path="/organizer/submissions"
          element={<OrganizerModule title="Submissions" />}
        />

        <Route
          path="/organizer/evaluations"
          element={<OrganizerModule title="Evaluations" />}
        />

        <Route
          path="/organizer/certificates"
          element={<OrganizerModule title="Certificates" />}
        />

        <Route
  path="/organizer/profile"
  element={<OrganizerProfile />}
/>

       <Route
  path="/organizer/settings"
  element={<OrganizerSettings />}
/>

        {/* STARTUP */}
        <Route
          path="/startup/dashboard"
          element={<StartupDashboard />}
        />

        <Route
          path="/startup/registrations"
          element={<StartupRegistrations />}
        />

        <Route
          path="/startup/applications"
          element={<StartupApplications />}
        />

        <Route
          path="/startup/profile"
          element={<StartupProfile />}
        />

        <Route
          path="/startup/settings"
          element={<StartupSettings />}
        />
      </Route>

    </Routes>
  )
}

export default AppRoutes