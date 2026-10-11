import { Outlet } from 'react-router-dom'

function StudentLayout() {
  return (
    <div className="min-h-screen bg-[#F6FAF8]">
      <Outlet />
    </div>
  )
}

export default StudentLayout