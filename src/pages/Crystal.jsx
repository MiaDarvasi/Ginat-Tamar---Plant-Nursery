import React, { useState } from 'react';
import { crystals } from '../data/ctg.lists.js';
import { crystalsTitles } from '../data/app.titles.js';

export function Crystal() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <section className="crystal">
            <h2 dir="rtl">{crystalsTitles.title}</h2>
            <p dir="rtl" className="crystal-title-description">{crystalsTitles.subTitle}</p>
            <section className="crystal-list">
                {crystals.map((crystal, index) => (
                    <div
                        key={index}
                        className="crystal-item"
                        onClick={() => handleClick(index)}
                    >
                        <div className={`content ${activeIndex === index ? 'show-description' : ''}`}>
                            <img src={crystal.imgSrc} alt={crystal.name} className="crystal-image" />
                            <h1>{crystal.name}</h1>
                            {activeIndex === index && <section className="crystal-item-description">
                                <h3 dir="rtl">{crystal.name}</h3>
                                <p dir="rtl">{crystal.description}</p>
                            </section>
                            }
                        </div>
                    </div>
                ))}
            </section>
            <p dir="rtl" className="crystal-disclaimer">{crystalsTitles.disclaimer}</p>
        </section>
    );
}
