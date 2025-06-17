// src/components/TherapistDashboard.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const TherapistDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const snapshot = await getDocs(collection(db, "appointments"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAppointments(data);
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Therapist Dashboard</h2>
      <ul>
        {appointments.map(app => (
          <li key={app.id}>
            {app.name} - {app.service} on {app.date} at {app.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TherapistDashboard;
