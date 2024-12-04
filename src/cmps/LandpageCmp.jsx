import React, { useState, useEffect } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import strawberry from "../assets/imgs/strawberry.png";
import pottery from "../assets/imgs/pottery.png";
import flowers from "../assets/imgs/flowers1.png";
import succulents from "../assets/imgs/succulents1.jpg";



export function LandpageCmp() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [strawberry, pottery, flowers, succulents];

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
        }, 5000);

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
                    <div className="item">
                        <section>
                            <h2 className="item-main-title">גינת תמר</h2>
                            <h3 className="item-main-address" dir="rtl">דרך בית לחם 34</h3>
                            <p>משתלה ירושלמית המציעה מגוון רחב של צמחים מכל הסוגים</p>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                    <div className="item">
                        <section>
                            <h2>צמחי בית</h2>
                            <h3 dir="rtl">אווירה ירוקה בתוך הבית</h3>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                    <div className="item">
                        <section>
                            <h2>עצי פרי</h2>
                            <h3 dir="rtl">פירות הדר, מטפסים, רב עונתיים ועוד</h3>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                    <div className="item">
                        <section>
                            <h2>תבלינים</h2>
                            <h3 dir="rtl">תבלינים לתה, סלט, בישול ועוד</h3>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                    <div className="item">
                        <section>
                            <h2>פרחים לגינה</h2>
                            <h3 dir="rtl">עונתיים ורב שנתיים במגוון גדלים</h3>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                    <div className="item">
                        <section>
                            <h2>סוקולנטים</h2>
                            <h3 dir="rtl">מבחר ענק של סוקולנטים צבעוניים ומיוחדים</h3>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                    <div className="item">
                        <section>
                            <h2>עציצים וכלים</h2>
                            <h3 dir="rtl">עציצי חרס קרמיקה פלסטיק ועוד</h3>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                    <div className="item">
                        <section>
                            <h2>כלי גינון והשקייה</h2>
                            <h3 dir="rtl">צינורות וטפטפות, עט חפירה, מעדר, כפפות ועוד</h3>
                        </section>
                        <a href="#connect"><button className="contact-btn">דברו איתנו</button></a>
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
