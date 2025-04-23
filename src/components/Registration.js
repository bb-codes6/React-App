import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Registration = ({ onRegister }) => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmedPassword, setConfirmedPassword] = useState("");
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await fetch("http://localhost:8080/register", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name, email, password, confirmedPassword}),
                });
                const status = response.status;
                const responseJson = await response.json();
                console.log('responseJson', responseJson);
                if (status === 200) {
                    onRegister();
                    //console.log("Navigating to home!");
                    navigate("/");

                }
                else {
                    alert('Registration failed: ' + (responseJson.message || 'Invalid Data'));
                }

               /* // Simulate a login and call the login handler
               if (name && email && password && confirmedPassword) {
                    onRegister();
                }*/
            }
            catch (e) {
                alert(`Error: ${e.message}`);
            }
        };

    return (
        <>
            <main>
                {/*Registration Form*/}
                <div className="container mt-5">
                    <h2 className="text-center">Register for Rare Tech Bootcamp</h2>
                    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
                        {/*Full Name*/}
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="fullName"
                                   placeholder="Enter your full name"
                                   onChange={(e) => setName(e.target.value)}
                                   required
                            />
                        </div>

                        {/*Email */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   placeholder="Enter your email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                            />
                        </div>


                        {/*Password*/}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   placeholder="Create a password"
                                   onChange={(e) => setPassword(e.target.value)}
                                   required
                            />
                        </div>

                        {/*Confirm Password*/}
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="confirmPassword"
                                   placeholder="Confirm your password"
                                   onChange={(e) => setConfirmedPassword(e.target.value)}
                                   required
                            />
                        </div>

                        {/*Agreement Checkbox*/}
                        <div className="d-flex justify-content-between">
                            {/*Submit Button*/}
                            <button type="submit" className="btn btn-light custom-btn">
                                Register
                            </button>
                            <button type="reset" className="btn btn-secondary">Reset</button>

                        </div>
                    </form>
                </div>

            </main>
        </>
    );
};

export default Registration;