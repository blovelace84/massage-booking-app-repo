// src/App.jsx
import { Routes, Route } from "react-router-dom";
import AppointmentForm from "./components/AppointmentForm";
import TherapistDashboard from "./components/TherapistDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppointmentForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <TherapistDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
