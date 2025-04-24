import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const UpdateAccount = ({ onUpdate }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/updateAccount", {
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
                onUpdate(responseJson);
                //console.log("Navigating to home!");
                navigate("/account");

            }
            else {
                alert('Account update failed: ' + (responseJson.message || 'Invalid Data'));
            }
        }
        catch (e) {
            alert(`Error: ${e.message}`);
        }
    };

    return (
        <>
            <main>
                {/*Account Update Form*/}
                <div className="container mt-5">
                    <h2 className="text-center">Account Update</h2>
                    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit}>
                        {/*Full Name*/}
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="fullName"
                                   placeholder="Enter your full name"
                                   onChange={(e) => setName(e.target.value)}

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

                            />
                        </div>

                        {/*Agreement Checkbox*/}
                        <div className="d-flex justify-content-between">
                            {/*Submit Button
                            ensure to create logic that will also notify the user when something
                            wasn't changed. Ex: User updates name but not the password and email.
                            Output: Name updated. or No changes to password and email.
                            */}
                            <button type="submit" className="btn btn-light custom-btn"
                            >
                                Update Account
                            </button>
                            <button type="button" className="btn btn-secondary"
                                    onClick={() => navigate("/account")}>
                            Cancel</button>

                        </div>
                    </form>
                </div>

            </main>
        </>
    );
};

export default UpdateAccount;