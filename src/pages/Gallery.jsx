import { galleryImages } from "../services/ctg.service.js";

export function Gallery() {

    return (
        <section className="gallery">
            <h1 dir="rtl">קצת תמונות מהמשתלה שלנו</h1>
            <p dir="rtl">הצמחים בתמונות צולמו בתקופות שונות ולכן לא תמיד כל הצמחים יהיו זמינים במלאי. עם זאת, תמיד ניתן למצוא תחליפים איכותיים.</p>
            <section className="gallery-imgs">
                {galleryImages.map((imgSrc, index) => (
                    <img key={index} src={galleryImages[index]} alt={`Gallery Image ${index + 1}`} />
                ))}
            </section>
        </section>
    );
}
