// src/App.jsx
import { Routes, Route, Link } from "react-router-dom";
import AppointmentForm from "./components/AppointmentForm";
import TherapistDashboard from "./components/TherapistDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      {/* Navigation for testing */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/dashboard">Dashboard</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AppointmentForm />} />
        <Route path="/dashboard" element={<TherapistDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
