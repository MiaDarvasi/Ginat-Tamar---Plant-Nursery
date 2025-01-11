import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { vining, blooming, colorful } from "../../services/ctg.service.js"

export function Succulents() {
    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1000, min: 775 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 775, min: 550 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 550, min: 0 },
            items: 2
        }
    };

    return (
        <>
            <section dir="rtl" className="ctg ctg-succelents">
                <h1>קקטוסים וסוקולנטים</h1>
                <p>אלו רק דוגמאות בודדות מהמבחר הרחב של הקקטוסים והסוקולנטים שיש למשתלה להציע. אם מצאתם משהו באתר שאתם אוהבים, אל תהססו להראות לנו, ואם לא נמצא בדיוק את הצמח שחיפשתם, אנחנו תמיד כאן כדי להמליץ לכם על משהו דומה!</p>
                <p className='ctg-disclaimer'>*מלאי הצמחים במשתלה משתנה לפי עונות ואספקה.</p>
                
                <section className='ctg-sec'>
                    <h2>פורחים</h2>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        {blooming.map((plant, index) => (
                            <div className="item" key={index}>
                                <img src={plant.imgSrc} alt={plant.name} />
                                <h3>{plant.name}</h3>
                            </div>
                        ))}
                    </Carousel>
                </section>

                <section className='ctg-sec'>
                    <h2>נשפכים</h2>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        {vining.map((plant, index) => (
                            <div className="item" key={index}>
                                <img src={plant.imgSrc} alt={plant.name} />
                                <h3>{plant.name}</h3>
                            </div>
                        ))}
                    </Carousel>
                </section>

                <section className='ctg-sec'>
                    <h2>צבעוניים ומיוחדים</h2>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        {colorful.map((plant, index) => (
                            <div className="item" key={index}>
                                <img src={plant.imgSrc} alt={plant.name} />
                                <h3>{plant.name}</h3>
                            </div>
                        ))}
                    </Carousel>
                </section>

                <h2>הרכבות</h2>
            </section>
        </>
    );
}
