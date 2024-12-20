import { About } from './About.jsx'
import { LandpageCmp } from '../cmps/LandpageCmp.jsx'
import { CategoriesCmp } from '../cmps/CategoriesCmp.jsx'
import { CustomerImgCarousel } from '../cmps/CustomerImgCarousel.jsx'




export function HomePage() {
    return <>
    <section className="home-page">
        <LandpageCmp />
        <CategoriesCmp />
        {/* <CustomerImgCarousel /> */}
    </section>
    </>
}
