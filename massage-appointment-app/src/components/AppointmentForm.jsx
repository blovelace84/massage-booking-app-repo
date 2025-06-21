import { useState } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default function AppointmentForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'appointments'), form);
        setForm({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Client Name' value={form.name} onChange={handleChange} required />
            <input type="email" name='email' placeholder='Client Email' value={form.email} onChange={handleChange} required />
            <input type="phone" name='phone' placeholder='Client Phone Number' value={form.phone} onChange={handleChange} required />
            <input type="date" name='date' placeholder='Select Date' value={form.date} onChange={handleChange} required />
            <input type="time" name='time' placeholder='Select Time' value={form.time} onChange={handleChange} required />
            <button type='submit'>Book Appointment</button>
        </form>
    );
}