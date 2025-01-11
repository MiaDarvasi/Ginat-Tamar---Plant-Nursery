import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from "../assets/imgs/strawberry.png";
import img2 from "../assets/imgs/pottery.png";
import img3 from "../assets/imgs/galleryImgs/galleryimg20.jpg";
import img4 from "../assets/imgs/galleryImgs/galleryimg11.jpg";
import img5 from "../assets/imgs/galleryImgs/galleryimg3.jpg";
import img6 from "../assets/imgs/galleryImgs/galleryimg16.jpg";

export function LandpageCmp() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [img1, img2, img3, img4, img5, img6];

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
    
    const carouselItems = [
        {
            title: 'גינת תמר',
            subtitle: 'דרך בית לחם 34, ירושלים',
            description: 'המשתלה הירושלמית הותיקה ביותר, פועלת מאז 1984 ומציעה מגוון רחב של צמחים איכותיים בשירות אישי ומקצועי.',
        },
        {
            title: 'צמחי בית',
            subtitle: 'אווירה ירוקה בתוך הבית',
            description: '',
        },
        {
            title: 'עצי פרי',
            subtitle: 'פירות הדר, מטפסים, רב עונתיים ועוד',
            description: '',
        },
        {
            title: 'תבלינים',
            subtitle: 'תבלינים לתה, סלט, בישול ועוד',
            description: '',
        },
        {
            title: 'פרחים לגינה',
            subtitle: 'עונתיים ורב שנתיים במגוון גדלים',
            description: '',
        },
        {
            title: 'סוקולנטים',
            subtitle: 'מבחר ענק של סוקולנטים צבעוניים ומיוחדים',
            description: '',
        },
        {
            title: 'עציצים וכלים',
            subtitle: 'עציצי חרס, קרמיקה, פלסטיק ועוד',
            description: '',
        },
        {
            title: 'כלי גינון והשקייה',
            subtitle: 'צינורות וטפטפות, עט חפירה, מעדר, כפפות ועוד',
            description: '',
        }
    ];
    
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
                            <a href="#connect">
                                <button className="contact-btn">דברו איתנו</button>
                            </a>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
