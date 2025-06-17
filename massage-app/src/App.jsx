// ✅ NO BrowserRouter here
import { Routes, Route } from "react-router-dom";
import AppointmentForm from "./components/AppointmentForm";
import TherapistDashboard from "./components/TherapistDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AppointmentForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute allowedRoles={["therapist"]}>
              <TherapistDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
