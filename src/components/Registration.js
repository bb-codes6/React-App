import React from "react";

const Registration = () => {
    return (
        <>
            <main>
                {/*Registration Form*/}
                <div className="container mt-5">
                    <h2 className="text-center">Register for Rare Tech Bootcamp</h2>
                    <form className="p-4 border rounded bg-light">
                        {/*Full Name*/}
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" placeholder="Enter your full name"
                                   required/>
                        </div>

                        {/*Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                   required/>
                        </div>


                        {/*Password*/}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password"
                                   placeholder="Create a password" required/>
                        </div>

                        {/*Confirm Password*/}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword"
                                   placeholder="Confirm your password" required/>
                        </div>

                        {/*Agreement Checkbox*/}
                        <div className="d-flex justify-content-between">
                            {/*Submit Button*/}
                            <button type="submit" className="btn btn-light custom-btn">Register</button>
                            <button type="reset" className="btn btn-secondary">Reset</button>

                        </div>


                    </form>
                </div>

            </main>

        </>
    );
};

export default Registration;