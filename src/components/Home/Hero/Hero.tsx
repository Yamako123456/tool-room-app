import React from 'react';
// import hero from "./Femail_attendant3.png";
import hero from "./Femail_attendant3.png";
import { ItemModel } from '../../../models/ItemModel';
import "./Hero.css";
import {useNavigate} from 'react-router-dom';

interface Props {
    items: ItemModel[];
    setItems: React.Dispatch<React.SetStateAction<ItemModel[]>>;
    cribs: CribModel[];
};

function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

export const Hero = ({ items, setItems, cribs }: Props) => {
      
    const visibleItems = items.filter(i => !i.disabled);
    const slides = chunk(visibleItems, 3);
    const navigate = useNavigate();

  return (
    <section id="hero">
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
        <div className="flex flex-col space-y-8 mb-44 m-4 lg:m-4 xl:m-4 lg:mt-16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-left lg:text-6xl lg:max-w-md lg:text-left">
            Simply Toolroom App
          </h1>
          <p className="text-2xl text-left text-gray-400 lg:max-w-md lg:text-left">
            Track, and Manage Your Tools with Ease, preventing loss and saving your time!
          </p>
          <div className="mx-0 lg:mx-0">
            <a
              href="/items"
              className="py-3 px-10 text-2xl font-bold text-white bg-lightGreen rounded lg:py-4 hover:opacity-70"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          {/* <img
            src={hero2}
            alt=""
            className="w-64 lg:w-80 rounded-2xl 
                        shadow-[0_20px_60px_rgba(0,0,0,0.4)] 
                        hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]
                        hover:-translate-y-2 hover:scale-105
                        transition-all duration-500 ease-out"
            /> */}
            <img
                src={hero}
                alt=""
                className="w-64 lg:w-80 rounded-3xl 
                            bg-white/5 backdrop-blur-md
                        border border-white/10
                        shadow-[0_25px_80px_rgba(0,0,0,0.5)]
                        hover:shadow-[0_40px_120px_rgba(59,130,246,0.4)]
                        hover:scale-125 hover:-translate-y-2
                        transition-all duration-500
                        cursor-pointer"
                onClick={() => navigate("/about")}
            />


        </div>
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
    </section>
  )
}

export default Hero