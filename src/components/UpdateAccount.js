import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateAccount = ({ userId, userData, onUpdate }) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [user_name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Load user data when component mounts or userId/userData changes
    useEffect(() => {
        if (userData && Object.keys(userData).length > 0) {
            setFirstName(userData.first_name || "");
            setLastName(userData.last_name || "");
            setUserName(userData.user_name || "");
            setEmail(userData.email || "");
        } else if (userId) {
            // If we have userId but no userData, fetch it from the server
            fetchUserData();
        }
    }, [userId, userData]);

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/account/${userId}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                }
            });

            if (response.status === 200) {
                const userData = await response.json();
                setFirstName(userData.first_name || "");
                setLastName(userData.last_name || "");
                setUserName(userData.user_name || "");
                setEmail(userData.email || "");
            } else if (response.status === 204) {
                console.log("No user data available yet");
            } else {
                setError("Failed to load user data");
            }
        } catch (e) {
            setError(`Error: ${e.message}`);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password && password !== confirmedPassword) {
            setError("Passwords do not match.");
            return;
        }

        // Make sure we have a userId
        if (!userId) {
            setError("User ID is missing. Please log in again.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/updateAccount`, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: userId,
                    first_name,
                    last_name,
                    user_name,
                    email,
                    password: password || undefined // Only send password if it's set
                }),
            });

            const responseData = await response.json();

            if (response.status === 200) {
                onUpdate(responseData.data);
                navigate("/account");
            } else {
                setError('Account update failed: ' + (responseData.message || 'Invalid Data'));
            }
        } catch (e) {
            setError(`Error: ${e.message}`);
        }
    };

    return (
        <main>
            <div className="container mt-5">
                <h2 className="text-center">Account Update</h2>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            value={first_name}
                            placeholder="Enter your first name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            value={last_name}
                            placeholder="Enter your last name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user_name" className="form-label">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="user_name"
                            value={user_name}
                            placeholder="Enter your user name"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">New Password (leave blank to keep current)</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Create a new password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmedPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmedPassword"
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmedPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-light custom-btn">
                            Update Account
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => navigate("/account")}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default UpdateAccount;