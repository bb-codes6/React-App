import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles.css';
import Home from "./components/Home";
import Registration from "./components/Registration";
import Account from "./components/Account";
import UpdateAccount from "./components/UpdateAccount";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Layout from "./components/Layout";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userData, setUserData] = useState({});

    // Check if user is already logged in (using localStorage)
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        const storedLoggedInStatus = localStorage.getItem('isLoggedIn');

        if (storedUserId && storedLoggedInStatus === 'true') {
            setUserId(storedUserId);
            setIsLoggedIn(true);

            // Fetch user data if we have a userId
            fetchUserData(storedUserId);
        }
    }, []);

    // Function to fetch user data when needed
    const fetchUserData = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/account/${id}`);
            if (response.status === 200) {
                const data = await response.json();
                setUserData(data);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const handleLogin = (userId) => {
        setIsLoggedIn(true);
        setUserId(userId);

        // Store in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', userId);

        // Fetch user data
        fetchUserData(userId);

        console.log("User logged in with ID:", userId);
    };

    const handleRegister = (userId) => {
        setIsLoggedIn(true);
        setUserId(userId);

        // Store in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', userId);

        console.log("User registered with ID:", userId);
    };

    const handleUpdate = async (updatedUserData) => {
        setUserData(updatedUserData);
        console.log("User updated account:", updatedUserData);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserId(null);
        setUserData({});

        // Clear localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');

        console.log("User logged out");
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}>
                    <Route index element={<Home />} />
                    <Route path="registration" element={
                        isLoggedIn ?
                            <Navigate to="/account" replace /> :
                            <Registration onRegister={handleRegister} />
                    } />
                    <Route path="registration.html" element={<Navigate to="/registration" replace />} />
                    <Route path="account" element={
                        !isLoggedIn ?
                            <Navigate to="/login" replace /> :
                            <Account userData={userData} />
                    } />
                    <Route path="account.html" element={<Navigate to="/account" replace />} />
                    <Route path="updateaccount" element={
                        !isLoggedIn ?
                            <Navigate to="/login" replace /> :
                            <UpdateAccount userId={userId} userData={userData} onUpdate={handleUpdate} />
                    } />
                    <Route path="updateaccount.html" element={<Navigate to="/updateaccount" replace />} />
                    <Route path="login" element={
                        isLoggedIn ?
                            <Navigate to="/account" replace /> :
                            <Login onLogin={handleLogin} />
                    } />
                    <Route path="login.html" element={<Navigate to="/login" replace />} />
                    <Route path="logout" element={<Logout onLogout={handleLogout} />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;