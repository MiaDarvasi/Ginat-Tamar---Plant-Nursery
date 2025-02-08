import { galleryTitles } from "../data/app.titles.js";
import { galleryImages } from "../data/ctg.lists.js";

export function Gallery() {

    return (
        <section className="gallery">
            <h1 dir="rtl">{galleryTitles.title}</h1>
            <p dir="rtl">{galleryTitles.subTitle}</p>
            <section className="gallery-imgs">
                {galleryImages.map((imgSrc, index) => (
                    <img key={index} src={galleryImages[index]} alt={`Gallery Image ${index + 1}`} />
                ))}
            </section>
        </section>
    );
}
