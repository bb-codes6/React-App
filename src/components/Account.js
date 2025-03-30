import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    {/* Sidebar */}
                    <div className="list-group">
                        <Link to="/account" className="list-group-item list-group-item-action active">
                            Dashboard
                        </Link>
                        <Link to="/account/profile" className="list-group-item list-group-item-action">
                            Profile
                        </Link>
                        <Link to="/account/settings" className="list-group-item list-group-item-action">
                            Settings
                        </Link>
                        <Link to="/logout" className="list-group-item list-group-item-action text-danger">
                            Logout
                        </Link>
                    </div>
                </div>
                <div className="col-md-9">
                    {/* Main content */}
                    <div className="card">
                        <div className="card-header">
                            <h4>Account Dashboard</h4>
                        </div>
                        <div className="card-body">
                            <h5>Welcome back, User!</h5>
                            <p>Your account overview and settings are displayed here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
