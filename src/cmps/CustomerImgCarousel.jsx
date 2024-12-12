import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import flowers from "../assets/imgs/flowers1.png";


import  cus1  from '../assets/imgs/cusimgs/cus1.jpg';
import  cus2  from '../assets/imgs/cusimgs/cus2.jpg';
import  cus3  from '../assets/imgs/cusimgs/cus3.jpg';



export function CustomerImgCarousel() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1000 },
            items: 1
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
        <section className="customer-img-carousel">
            <h1>לקוחות מצלמים</h1>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={cus1} />
                </div>
                <div className="item">
                    <img src={cus2} />
                </div>
                <div className="item">
                    <img src={cus3} />
                </div>
            </Carousel>
        </section>
    </>
}
