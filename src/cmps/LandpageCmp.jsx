import React, { useState, useEffect } from "react";
import strawberry from "../assets/imgs/strawberry.png";
import pottery from "../assets/imgs/pottery.png";
import flowers from "../assets/imgs/flowers1.png";
import succulents from "../assets/imgs/succulents1.jpg";

export function LandpageCmp() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [strawberry, pottery, flowers, succulents];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="landpage-cmp full">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`image-${index}`}
                    className={`fade-image ${currentImageIndex === index ? "visible" : ""}`}
                />
            ))}
        </section>
    );
}
