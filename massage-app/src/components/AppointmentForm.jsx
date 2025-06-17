// src/components/AppointmentForm.jsx
import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

const AppointmentForm = () => {
  const { user } = useAuth();
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "appointments"), {
        ...form,
        userId: user.uid,
        createdAt: Timestamp.now(),
      });
      alert("Appointment booked!");
    } catch (err) {
      alert("Booking failed: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Book an Appointment</h3>
      <input name="name" onChange={handleChange} placeholder="Your Name" required />
      <input name="service" onChange={handleChange} placeholder="Massage Type" required />
      <input type="date" name="date" onChange={handleChange} required />
      <input type="time" name="time" onChange={handleChange} required />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentForm;
