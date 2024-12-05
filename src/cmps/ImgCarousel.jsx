import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import flowers from "../assets/imgs/flowers1.png";


export function ImgCarousel() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1000, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return <>
        <section className="img-carousel">
            <h1>לקוחות מצלמים</h1>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={flowers} />
                    <h5>Authentication & Authorization</h5>
                </div>
                <div className="item">
                    <img src={flowers} />
                    <h5>Debugging Complex Issues</h5>
                </div>
                <div className="item">
                    <img src={flowers} />
                    <h5>Responsive Design</h5>
                </div>
                <div className="item">
                    <img src={flowers} />
                    <h5>RESTful API</h5>
                </div>
                <div className="item">
                    <img src={flowers} />
                    <h5>Collaborative Work</h5>
                </div>
            </Carousel>
        </section>
    </>
}
