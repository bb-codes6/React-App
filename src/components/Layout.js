import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ({ isLoggedIn, handleLogout,  }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary custom-nav">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/rare..png" alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li className="nav-item">
                                        <Link to="/account" className="nav-link">Account</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/logout" className="nav-link" >Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/registration" className="nav-link">Registration</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                {/* Render the child components here */}
                <Outlet />
            </div>

            {/* Footer, always displayed */}
            <footer className="bg-light text-dark text-center py-4 mt-5">
                <img src="/rare..png" alt="Logo" width="100" height="100" className="d-inline-block align-text-top" />
                <div className="container">
                    <p className="mb-2">© 2024 <strong>Rare Tech</strong>. All Rights Reserved.</p>
                    <p className="mb-2">Empowering the next generation of tech leaders.</p>
                    <div className="mb-3">
                        <p className="mb-1"><strong>Location:</strong> St. Louis, MO</p>
                        <p className="mb-1">
                            <strong>Email:</strong> <a href="mailto:contact@raretech.com" className="text-dark">contact@raretech.com</a>
                        </p>
                        <p className="mb-1">
                            <strong>Phone:</strong> <a href="tel:+11234567890" className="text-dark">(123) 456-7890</a>
                        </p>
                    </div>
                    <div>
                        <a href="https://youtu.be/arQFAnGWjtA?si=KMwTeHQ9pfdxdxzg" target="_blank" rel="noopener noreferrer" className="text-dark me-3">📷 YouTube</a>
                        <a href="https://www.linkedin.com/in/breanna-b-6517991ba/" target="_blank" rel="noopener noreferrer" className="text-dark">💼 LinkedIn</a>
                    </div>
                    <p className="mt-3">"Your Future in Tech Starts Here!"</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
