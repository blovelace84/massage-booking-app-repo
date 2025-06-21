import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard'); // Redirect to home page after login
        } catch (err) {
            alert(err.message); // Display error message
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    );
}