import React, { useState } from 'react';
import { vining } from "../../services/ctg.service"

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Succulents() {

    const [showDescription, setShowDescription] = useState(Array(vining.length).fill(false)); // Initialize state

    const toggleDescription = (index) => {
        setShowDescription(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1000, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return <>
        <section dir="rtl" className="ctg ctg-succelents">
            <h1>קקטוסים וסוקולנטים</h1>
            <p>אלו רק דוגמאות בודדות מהמבחר הרחב של הקקטוסים והסוקולנטים שיש למשתלה להציע. אם מצאתם משהו באתר שאתם אוהבים, אל תהססו להראות לנו, ואם לא נמצא בדיוק את הצמח שחיפשתם, אנחנו תמיד כאן כדי להמליץ לכם על משהו דומה!</p>
            <p className='ctg-disclaimer'>*מלאי הצמחים במשתלה משתנה לפי עונות ואספקה.</p>
            <h2>נשפכים</h2>
            {/* <section className='ctg-example-list'>
                {vining.map((plant, index) => (
                    <div key={index}>
                        <div className="ctg-example-item" onClick={() => toggleDescription(index)}>
                            {!showDescription[index] && (
                                <>
                                    <img src={plant.imgSrc} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                </>
                            )}
                            {showDescription[index] && (
                                <>
                                    <h3>{plant.name}</h3>
                                    <p>{plant.description}</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </section> */}
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                {vining.map((plant, index) => (
                    <div className="item" key={index}>
                        <img src={plant.imgSrc} alt={plant.name} />
                        <h3>{plant.name}</h3>
                    </div>
                ))}
            </Carousel>
            <h2>מיוחדים</h2>
            <h2>הרכבות</h2>
            <h2>צבעוניים</h2>
            <h2>פורחים</h2>
        </section>
    </>
}
