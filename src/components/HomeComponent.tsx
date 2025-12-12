import React from "react";
import "./HomeComponent.css";

export const HomeComponent: React.FC = () => {
    return (
        <div className="container mt-4">
            <section className="home-hero mb-4">
                <div className="text-center">
                    <h1 className="home-title mb-3">
                        Welcome to Toolroom Management System
                    </h1>

                    <div className="home-image-wrapper mb-3">
                        <div className="home-image-frame">
                            <img
                                src="/img/panoramicToolroom.jpg"
                                alt="Toolroom dashboard"
                                className="img-fluid home-hero-image"
                            />
                        </div>
                    </div>

                    <h3 className="home-subtitle">
                        Simplify, Track, and Manage Your Tools with Ease
                    </h3>
                </div>
            </section>

            <p className="mt-4 home-text">
                The Tool Room Management Application is designed to assist tool room
                attendants in manufacturing environments with efficiently managing the
                issuance and return of tools and parts to production team members.
                <br />
                <br />
                To get started, please click <strong>"Items"</strong> and set up your
                inventory items!
            </p>
        </div>
    );
};
