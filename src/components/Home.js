import React from "react";
import {Link} from "react-router-dom";

const Home = () => {

    return (
        <>
            <div className="px-4 pt-3 text-center">
                <h1 className="display-4 fw-bold text-body-emphasis">
                    Launch Your Tech Career Today!
                </h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Master Coding in Just Weeks – Learn from industry experts, build
                        real-world projects, and land your dream job in tech.
                    </p>
                    <p className="lead mb-4">
                        No experience? No problem! Our hands-on curriculum and dedicated mentors
                        will guide you every step of the way.
                    </p>
                    <p className="lead mb-4">
                        Join thousands of successful graduates.
                    </p>
                    <p className="lead mb-4">
                        Ready to code your future?
                    </p>
                    <p className="lead mb-4">
                        <Link to="/registration">Apply Now </Link>
                        & Start Your Journey!
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <button type="button" className="btn btn-light btn-lg px-4 me-sm-3 custom-btn">Apply</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Tuition, Financing &
                            Scholarships
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden" style={{maxHeight: "30vh"}}>
                    <div className="container px-5">
                        <img src="Rare-App/georgie-cobbs-muOHbrFGEQY-unsplash.jpg" alt={"Hero-image"} className="img-fluid border rounded-3 shadow-lg mb-4" width={"700"} height={"500"} loading="lazy"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
