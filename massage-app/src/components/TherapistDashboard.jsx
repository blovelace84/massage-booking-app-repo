// src/components/TherapistDashboard.jsx
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const TherapistDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h2>Welcome, {user?.email}</h2>
      <p>This is the therapist dashboard.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TherapistDashboard;
