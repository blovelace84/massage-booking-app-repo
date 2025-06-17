import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth, email, pass);
            navigate('/dashboard');
        }catch(err){
            alert("Login failed:" + err.message);
        }
    };

    return(
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' />
            <button type='submit'>Login</button>
        </form>
    );
};

export default Login;