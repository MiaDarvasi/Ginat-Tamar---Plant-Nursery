import { Ctg } from "../../cmps/Ctg.jsx";
import { bulb, winter } from "../../data/ctg.lists.js";
import { flowersTitle } from "../../data/app.titles.js";

export function Flowers() {

    const categories = [
        { title: winter.title, items: winter.examples },
        { title: bulb.title, items: bulb.examples },
    ]

    return (
        <>
            <section dir="rtl" className="ctg">
                <Ctg
                    categories={categories}
                    title={flowersTitle.title}
                    subTitle={flowersTitle.subTitle} />
            </section>
        </>
    );
}
