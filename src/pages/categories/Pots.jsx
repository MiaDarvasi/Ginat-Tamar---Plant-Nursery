import clay from '../../assets/imgs/pots/clay.jpg';
import plastic from '../../assets/imgs/pots/plastic.jpg';
import ceramic from '../../assets/imgs/pots/ceramic.jpg';
import terracotta from '../../assets/imgs/pots/terracotta.jpg';

import { potsTitles } from '../../data/app.titles';
import { potsTxts } from '../../data/app.texts';

export function Pots() {

    const potsData = [
        {
            imgSrc: clay,
            title: potsTxts[0].clayTitle,
            description: potsTxts[0].clayDescription
        },
        {
            imgSrc: plastic,
            title: potsTxts[1].plasticTitle,
            description: potsTxts[1].plasticDescription
        },
        {
            imgSrc: ceramic,
            title: potsTxts[2].ceramicTitle,
            description: potsTxts[2].ceramicDescription
        },
        {
            imgSrc: terracotta,
            title: potsTxts[3].terracottaTitle,
            description: potsTxts[3].terracottaDescription
        }
    ]

    return (
        <>
            <section dir="rtl" className="pots">
                <h1>{potsTitles.title}</h1>
                <p>{potsTitles.subTitle}</p>
                <section className="pots-type-list">
                    {potsData.map((pot, index) => (
                        <div className="pots-type" key={index}>
                            <img src={pot.imgSrc} alt={pot.title} />
                            <section>
                                <h2>{pot.title}</h2>
                                <p>{pot.description}</p>
                            </section>
                        </div>
                    ))}
                </section>
            </section>
        </>
    )
}
