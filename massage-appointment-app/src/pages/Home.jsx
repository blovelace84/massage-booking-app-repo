import { Link } from "react-router-dom";
import './Home.css';

export default function Home() {
    return(
        <div className="home-container">
            <h1 className="home-heading">Welcome To MassageMate</h1>
            <p className="home-text">Booking your next massage in seconds.</p>
            <Link to='/dashboard'>
                <button className="home-button">Schedule an Appointment</button>
            </Link>
        </div>
    );
}