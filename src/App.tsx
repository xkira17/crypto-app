import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashboardLayout from "./layouts/DashboardLayout"

function App() {
  return (
    <Router>
      <Routes>
        {/* Все роуты теперь внутри DashboardLayout */}
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/:id" element={<DashboardLayout />} />
      </Routes>
    </Router>
  )
}

export default App
