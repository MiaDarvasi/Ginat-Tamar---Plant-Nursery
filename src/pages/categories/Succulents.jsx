import { Ctg } from "../../cmps/Ctg.jsx";
import { succulents } from "../../data/app.titles.js";
import { vining, blooming, colorful, grafting } from "../../data/ctg.lists.js";

export function Succulents() {

    const categories = [
        { title: grafting.title, items: grafting.examples },
        { title: colorful.title, items: colorful.examples },
        { title: blooming.title, items: blooming.examples },
        { title: vining.title, items: vining.examples }
    ];

    return (
        <>
            <section dir="rtl" className="ctg">
                <Ctg
                    categories={categories}
                    title={succulents.title}
                    subTitle={succulents.subTitle} />
            </section>
        </>
    );
}
