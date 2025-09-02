import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from './pages/auth/login';
import { protectedRoutes } from "./constant/RouteNavigation";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {protectedRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
