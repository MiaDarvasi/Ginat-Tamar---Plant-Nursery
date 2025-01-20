import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
            <h1>המיוחדים שלנו</h1>
            <p>מעבר למגוון הרחב של הצמחים במשתלה, יש לנו דברים קטנים שמייחדים את החוויה אצלנו.</p>
            <section className="special-list">
                <div className="special-item">
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618684/PXL_20241002_123809295_2_brayal.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1737397769/20180413_140037_aelxoq.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619094/galleryimg10_y9nvez.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618679/PXL_20241212_090137097_ccenae.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618676/PXL_20241204_131740398_2_hc564x.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736618679/PXL_20241204_131401508_2_wat6ms.jpg" />
                        </div>
                    </Carousel>
                    <section className="special-item-description">
                        <h2>מבחר קקטוסים נדירים</h2>
                        <p>במשתלה שלנו תוכלו ליהנות ממבחר רחב ומיוחד של קקטוסים וסוקולנטים, כולל סוגים נדירים וייחודיים שמגיעים מכל העולם. אנחנו כאן כדי להציע לכם צמחים שלא תמצאו בכל מקום, עם כל המידע וההכוונה שתצטרכו כדי להכניס את הטבע לבית או לגינה שלכם.</p>
                    </section>
                </div>
                <div className="special-item">
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619129/galleryimg31_ftcths.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619090/galleryimg11_fzkci2.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619092/galleryimg9_u7qvpu.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619138/galleryimg39_hfnvq1.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736619131/galleryimg34_xmlzzv.jpg" />
                        </div>
                    </Carousel>
                    <section className="special-item-description">
                        <h2>בריכת צפרדעים ודגים</h2>
                        <p>במשתלה שלנו תמצאו בריכות צפרדעים קסומות. כשקר הן שקטות ורגועות, נהנות משנת החורף שלהן. אך בקיץ, כל הבריכה מתמלאת בקולות מקרקרת מלאי חיים, והצפרדעים שוחות בין העלים וצבעי הבריכה, מוסיפות קסם טבעי ואווירה מיוחדת לכל פינה.</p>
                    </section>
                </div>
                <div className="special-item">
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617862/tigereye_s7vj71.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617862/rosequartz_fqmakr.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617862/tourmaline_tkqjhj.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617859/amethyst_i4gjch.jpg" />
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1736617861/jasper_kgzeq7.jpg" />
                        </div>
                    </Carousel>
                    <section className="special-item-description">
                        <h2>קריסטלים ואבנים מיוחדות</h2>
                        <p>יש לנו מבחר מגוון של אבנים וקריסטלים, כל אחד עם סגולות ואנרגיות  שמביאות עימן רוגע, איזון וחיזוק. תוכלו למצוא כאן אבנים בגדלים שונים, שמגיעות ממקורות שונים ברחבי העולם, כל אחת עם הכוחות הייחודיים שלה.</p>
                    </section>
                </div>
            </section>
        </section>
    );
}
