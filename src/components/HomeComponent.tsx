import React from "react";
import "./HomeComponent.css";

type Props = {
    items: ItemModel[];
    setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>;
};

function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}


export const HomeComponent = ({ items, setItems }: Props) => {
    const visibleItems = items.filter(i => i.active);
    const slides = chunk(visibleItems, 3);
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


            <div
                id="itemsCarousel"
                className="carousel slide e carousel-strong-controls"
                data-bs-ride="carousel"

                data-bs-touch="true"
            >
                <div className="carousel-inner">
                    {slides.map((group, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                        >
                            <div className="container py-4">
                                <div className="row g-3 justify-content-center">
                                    {group.map((item) => (
                                        <div className="col-12 col-md-4" key={item.code}>
                                            <div className="card h-100 d-flex flex-column">
                                                {/* fixed-height image area (shrinks image to fit, no crop) */}
                                                <div
                                                    style={{
                                                        height: 220,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        backgroundColor: "#f8f9fa",
                                                    }}
                                                >
                                                    {item.itemImage ? (
                                                        <img
                                                            src={item.itemImage}
                                                            alt={item.description1}
                                                            className="img-fluid"
                                                            style={{
                                                                maxHeight: "100%",
                                                                maxWidth: "100%",
                                                                objectFit: "contain",
                                                            }}
                                                        />
                                                    ) : (
                                                        <span className="text-muted">No Image</span>
                                                    )}
                                                </div>

                                                <div className="card-body d-flex flex-column">
                                                    <h6 className="card-title">{item.description1}</h6>

                                                    {item.description2 && (
                                                        <p className="card-text small text-muted mb-2">
                                                            {item.description2}
                                                        </p>
                                                    )}

                                                    {/* bottom aligned */}
                                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                                        <span className="badge text-bg-secondary">
                                                            {item.category}
                                                        </span>
                                                        <span className="fw-bold">
                                                            ${item.unitPrice.toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* pad last slide so layout stays aligned */}
                                    {group.length < 3 &&
                                        Array.from({ length: 3 - group.length }).map((_, i) => (
                                            <div className="col-12 col-md-4" key={`empty-${i}`} />
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#itemsCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#itemsCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>




        </div>
    );
};
