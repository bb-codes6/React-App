import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = ({ onRegister }) => {
    // Separate states for first name, last name, and username
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmedPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    user_name: userName,
                    email,
                    password,
                    confirmedPassword,
                }),
            });
            const status = response.status;
            const responseJson = await response.json();
            console.log("responseJson", responseJson);
            if (status === 200 || status === 201) {
                onRegister();
                navigate("/");
            } else {
                alert("Registration failed: " + (responseJson.message || "Invalid Data"));
            }
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Register for Rare Tech Bootcamp</h2>
            <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        placeholder="Enter your first name"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        placeholder="Enter your last name"
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="user_name" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="user_name"
                        placeholder="Enter your user name"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Create a password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-light custom-btn">Register</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default Registration;
