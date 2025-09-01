import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from './pages/auth/login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        <Route path="/attendance" element={<div>Attendance Page</div>} />
        <Route path="/employees" element={<div>Employees Page</div>} />
        <Route path="/evaluation" element={<div>Evaluation Page</div>} />
        <Route path="/training" element={<div>Training Page</div>} />
        <Route path="/job-title" element={<div>Job Title Page</div>} />
        <Route path="/salary" element={<div>Salary Page</div>} />
        <Route path="/recruitment" element={<div>Recruitment Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
