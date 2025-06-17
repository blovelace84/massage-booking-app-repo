// src/components/AppointmentForm.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AppointmentForm = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked by ${name} on ${date}`);
    setName("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      {user && <p>Logged in as: {user.email}</p>}
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;