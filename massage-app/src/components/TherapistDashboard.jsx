// src/components/TherapistDashboard.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const TherapistDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const snapshot = await getDocs(collection(db, "appointments"));
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAppointments(data);
      } catch (error) {
        console.error("Error loading appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Therapist Dashboard</h2>
      <ul>
        {appointments.map((app) => (
          <li key={app.id}>
            <strong>{app.name}</strong> - {app.service} <br />
            {app.date} at {app.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TherapistDashboard;