import { Ctg } from "../../cmps/Ctg.jsx";
import { indoorTitle } from "../../data/app.titles.js";
import { strongIndoor, colorfulIndoor, safeForPets } from "../../data/ctg.lists.js";

export function Indoor() {

    const categories = [
        { title: strongIndoor.title, items: strongIndoor.examples },
        { title: colorfulIndoor.title, items: colorfulIndoor.examples },
        { title: safeForPets.title, items: safeForPets.examples },
    ];

    return (
        <>
            <section dir="rtl" className="ctg">
                <Ctg
                    categories={categories}
                    title={indoorTitle.title}
                    subTitle={indoorTitle.subTitle} />
            </section>
        </>
    );
}
