import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { carouselItems } from '../data/app.texts';
import { galleryImages } from "../data/ctg.lists";

export function LandpageCmp() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = galleryImages

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <section className="landpage-cmp">
            <div className="image-overlay"></div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    className={`fade-image ${currentImageIndex === index ? "visible" : ""}`}
                />
            ))}
            <div className="text-overlay">
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    {carouselItems.map((item, index) => (
                        <div className="item" key={index}>
                            <section>
                                <h2 className="item-main-title">{item.title}</h2>
                                {item.subtitle && <h3 className="item-main-address" dir="rtl">{item.subtitle}</h3>}
                                {item.description && <p dir="rtl">{item.description}</p>}
                            </section>
                        </div>
                    ))}
                </Carousel>
                <a href="#connect">
                    <button className="contact-btn">דברו איתנו</button>
                </a>
            </div>
        </section>
    );
}
