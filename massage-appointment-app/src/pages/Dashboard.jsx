import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

export default function Dashboard() {
    return(
        <div>
            <h1>Massage Appointment Booking App</h1>
            <AppointmentForm />
            <AppointmentList />
        </div>
    );
}