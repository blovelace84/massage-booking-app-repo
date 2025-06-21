// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import './Navbar.css'; // ✅ Import the styles

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">Home</Link>
      {!user && <Link className="navbar-link" to="/login">Login</Link>}
      {!user && <Link className="navbar-link" to="/signup">Sign Up</Link>}
      {user && <Link className="navbar-link" to="/dashboard">Dashboard</Link>}
      {user && (
        <button className="navbar-button" onClick={() => signOut(auth)}>
          Logout
        </button>
      )}
    </nav>
  );
}
