import { LandpageCmp } from '../cmps/LandpageCmp.jsx'
import { CategoriesCmp } from '../cmps/CategoriesCmp.jsx'
import { OurSpecials } from '../cmps/OurSpecials.jsx'


export function HomePage() {
    return <>
    <section className="home-page">
        <LandpageCmp />
        <CategoriesCmp />
        <OurSpecials />
    </section>
    </>
}
