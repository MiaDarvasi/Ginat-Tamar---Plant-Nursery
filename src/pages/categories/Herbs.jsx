import { herbs } from "../../data/ctg.lists.js";
import { herbsTitles } from "../../data/app.titles.js";

export function Herbs() {

    return (
        <section dir="rtl" className="herbs">
            <h1>{herbsTitles.title}</h1>
            <h3>{herbsTitles.subTitle}</h3>
            <section className="herb-list">
                {herbs.map((herb, index) => (
                    <div key={index} className="herb">
                        <img src={herb.imgSrc} alt={herb.name} />
                        <section className="herb-description">
                            <h2>{herb.name}</h2>
                            <p>{herb.description}</p>
                        </section>
                    </div>
                ))}
            </section>
            <p className='disclaimer'>{herbsTitles.disclaimer}</p>
        </section>
    );
}
