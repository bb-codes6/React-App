import React, { useState } from "react";
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

    const handleLogin = () => {
        setIsLoggedIn(true);
        console.log("User logged in");
    };

    const handleRegister = () => {
        setIsLoggedIn(true);
        console.log("User Registered");
    };

    const handleUpdate = () => {
        setIsLoggedIn(true);
        console.log("User updated account!");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        console.log("User logged out");
    };


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} isRegister={isLoggedIn} />}>
                    <Route index element={<Home />} />
                    <Route path="registration" element={<Registration onRegister={handleRegister} />} />
                    <Route path="registration.html" element={<Navigate to="/registration" />} />
                    <Route path="account" element={<Account />} />
                    <Route path="account.html" element={<Navigate to="/account" />} />
                    <Route path="updateAccount" element={<UpdateAccount onUpdate={handleUpdate} />} />
                    <Route path="updateacount.html" element={<Navigate to="/updateaccount" />} />
                    <Route path="login" element={<Login onLogin={handleLogin} />} />
                    <Route path="login.html" element={<Navigate to="/login" />} />
                    <Route path="logout" element={<Logout onLogout={handleLogout} />} />
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
