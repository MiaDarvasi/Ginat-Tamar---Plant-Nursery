import { About } from './About.jsx'
import { LandpageCmp } from '../cmps/LandpageCmp.jsx'
import { CategoriesCmp } from '../cmps/CategoriesCmp.jsx'




export function HomePage() {
    return <>
    <section className="home-page">
        <LandpageCmp />
        <CategoriesCmp />
    </section>
    </>
}
