import { useEffect, useState } from "react";
import { db } from '../firebase/config';
import { collection, onSnapshot } from "firebase/firestore";

export default function AppointmentList() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'appointments'), (snapshot) => {
            const appointmentsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setAppointments(appointmentsData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        {appointment.name} - {appointment.date} at {appointment.time}
                    </li>
                ))}
            </ul>
        </div>
    );
}