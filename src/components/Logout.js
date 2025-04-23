import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ onLogout }) {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        onLogout(); // Calls the onLogout function from App.js
        navigate("/"); // Redirect to Home page
    };

    return (
        <div className="d-flex gap-3 p-5">
            <h2>Are you sure you want to log out?</h2>
            <button type="submit" className="btn btn-light custom-btn" onClick={handleLogoutClick}>Confirm Logout</button>
        </div>
    );
}

export default Logout;
