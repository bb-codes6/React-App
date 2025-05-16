import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const responseJson = await response.json();

            if (response.status === 200) {
                // Pass the user ID to onLogin function
                onLogin(responseJson.id);
                navigate("/");
            } else if (response.status === 400) {
                setError("Account not found. Please register first.");
            } else if (response.status === 401) {
                setError("Incorrect password. Please try again.");
            } else {
                setError("Login failed: " + (responseJson.error || "Unknown error"));
            }
        } catch (e) {
            setError(`Server error: ${e.message}`);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Welcome back!</h2>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
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
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-light custom-btn">Login</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default Login;