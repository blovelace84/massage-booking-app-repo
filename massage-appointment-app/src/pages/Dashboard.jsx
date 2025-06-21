import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

export default function Dashboard() {
    const { user } = useAuth();
    if(!user) return <Navigate to="/login" />
    return(
        <div>
            <h1>Welcome, {user.email}</h1>
            <button onClick={() => signOut(auth)}>Logout</button>
            <AppointmentForm />
            <AppointmentList />
        </div>
    );
}