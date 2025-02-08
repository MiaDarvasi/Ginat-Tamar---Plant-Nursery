import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Ctg({ categories, title, subTitle }) {

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
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <p className='ctg-disclaimer'>*מלאי הצמחים במשתלה משתנה לפי עונות ואספקה.</p>

                {categories.map((category, index) => (
                    <section className='ctg-sec' key={index}>
                        <h2>{category.title}</h2>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            {category.items.map((plant, plantIndex) => (
                                <div className="item" key={plantIndex}>
                                    <img src={plant.imgSrc} alt={plant.name} />
                                    <h3>{plant.name}</h3>
                                </div>
                            ))}
                        </Carousel>
                    </section>
                ))}
            </section>
        </>
    );
}
