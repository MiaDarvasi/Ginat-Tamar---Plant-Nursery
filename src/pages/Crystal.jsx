import React, { useState } from 'react';
import { crystals } from '../services/ctg.service.js';

export function Crystal() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <section className="crystal">
            <h2 dir="rtl">קריסטלים</h2>
            <p dir="rtl" className="crystal-title-description">
                במשתלה שלנו תוכלו למצוא אוסף מיוחד של קריסטלים טבעיים. כל קריסטל מביא עמו אנרגיה חיובית ויופי טבעי שיכול להעשיר את הבית או הגינה. אצלנו תמצאו קריסטלים שמתאימים לאוהבי הרוחניות, למי שמחפש פתרונות להארה אישית או פשוט לאוהבי יופי טבעי. הקריסטלים שלנו מגיעים בגדלים שונים וכוללים אבני חן עם סגולות ריפוי, ויזואליות מרהיבה ומגע קסום. אנו מזמינים אתכם לבוא ולהתרשם מהמבחר שלנו ולהתנסות באנרגיות המיוחדות של כל קריסטל.
            </p>
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
            <p dir="rtl" className="crystal-disclaimer">מלאי הקריסטלים במשתלה משתנה לפי אספקה.</p>
        </section>
    );
}
