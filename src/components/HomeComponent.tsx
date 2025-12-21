import React from "react";
import "./HomeComponent.css";

type Props = {
    items: ItemModel[];
    setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>;
};

export const HomeComponent = ({ items, setItems }: Props) => {
    return (
        <div>
            <div className="container mt-4">
                <section className="home-hero mb-4">
                    <div className="text-center">
                        <h1 className="home-title mb-3">
                            Toolroom Management System
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
                    Welcome! The Tool Room Management App helps tool room attendants in manufacturing environments
                    efficiently track and manage the check-out(issue) of tools and parts and return of durable type items back in the toolroom by shop floor personnel.
                    <br />
                </p>
            </div>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
};
