import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ onLogout }) {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout(); // Calls the onLogout function from App.js
        navigate("/"); // Redirect to Home page
    };

    return (
        <div>
            <h2>Are you sure you want to log out?</h2>
            <button onClick={handleLogoutClick}>Confirm Logout</button>
        </div>
    );
}

export default Logout;
