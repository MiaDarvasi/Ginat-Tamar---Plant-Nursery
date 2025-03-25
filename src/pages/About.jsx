import { aboutText } from "../data/app.texts.js"
import { aboutTitles } from "../data/app.titles.js"

export function About() {
    return <section className="about" id="about" dir="rtl">
        <img src="https://res.cloudinary.com/dn3rdygdn/image/upload/v1741413394/IMG_6461_b9ab9g.jpg" />
        <h1>{aboutTitles.title}</h1>
        <section>
            <p>{aboutText.start}</p>
            <p>{aboutText.mid1}</p>
            <p>{aboutText.mid2}</p>
            <p>{aboutText.mid3}</p>
            <p>{aboutText.end}</p>
        </section>
    </section>
}
