import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { specials } from "../data/ctg.lists";
import { specialsTitles } from "../data/app.titles";

export function OurSpecials() {

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

    return (
        <section dir='rtl' className="our-specials-cmp">
            <h1>{specialsTitles.title}</h1>
            <p>{specialsTitles.subTitle}</p>
            <section className="special-list">
                {specials.map((special, index) => (
                    <div className="special-item" key={index}>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            {special.images.map((image, idx) => (
                                <div key={idx}>
                                    <img src={image} alt={`Special ${special.title} Image ${idx + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                        <section className="special-item-description">
                            <h2>{special.title}</h2>
                            <p>{special.description}</p>
                        </section>
                    </div>
                ))}
            </section>
        </section>
    );
}
