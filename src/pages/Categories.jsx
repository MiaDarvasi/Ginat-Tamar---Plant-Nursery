import { CategoriesCmp } from '../cmps/CategoriesCmp.jsx'
import { ctgTitles } from '../data/app.titles.js'

export function Categories() {
    return <>
        <section className="categories">
            <section className="categories-title">
                <h1 dir="rtl">{ctgTitles.title}</h1>
                <p dir="rtl">{ctgTitles.subTitle}</p>
            </section>
            <CategoriesCmp />
            <p dir="rtl">{ctgTitles.disclaimer}</p>
        </section>
    </>
}
