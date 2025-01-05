import galleryimg1 from "../assets/imgs/galleryImgs/galleryimg1.jpg";
import galleryimg2 from "../assets/imgs/galleryImgs/galleryimg2.jpg";
import galleryimg3 from "../assets/imgs/galleryImgs/galleryimg3.jpg";
import galleryimg4 from "../assets/imgs/galleryImgs/galleryimg4.jpg";
import galleryimg5 from "../assets/imgs/galleryImgs/galleryimg5.jpg";
import galleryimg6 from "../assets/imgs/galleryImgs/galleryimg6.jpg";
import galleryimg7 from "../assets/imgs/galleryImgs/galleryimg7.jpg";
import galleryimg8 from "../assets/imgs/galleryImgs/galleryimg8.jpg";
import galleryimg9 from "../assets/imgs/galleryImgs/galleryimg9.jpg";
import galleryimg10 from "../assets/imgs/galleryImgs/galleryimg10.jpg";
import galleryimg11 from "../assets/imgs/galleryImgs/galleryimg11.jpg";
import galleryimg12 from "../assets/imgs/galleryImgs/galleryimg12.jpg";
import galleryimg13 from "../assets/imgs/galleryImgs/galleryimg13.jpg";
import galleryimg14 from "../assets/imgs/galleryImgs/galleryimg14.jpg";
import galleryimg15 from "../assets/imgs/galleryImgs/galleryimg15.jpg";
import galleryimg16 from "../assets/imgs/galleryImgs/galleryimg16.jpg";
import galleryimg17 from "../assets/imgs/galleryImgs/galleryimg17.jpg";
import galleryimg18 from "../assets/imgs/galleryImgs/galleryimg18.jpg";
import galleryimg19 from "../assets/imgs/galleryImgs/galleryimg19.jpg";
import galleryimg20 from "../assets/imgs/galleryImgs/galleryimg20.jpg";
import galleryimg21 from "../assets/imgs/galleryImgs/galleryimg21.jpg";
import galleryimg22 from "../assets/imgs/galleryImgs/galleryimg22.jpg";
import galleryimg23 from "../assets/imgs/galleryImgs/galleryimg23.jpg";
import galleryimg24 from "../assets/imgs/galleryImgs/galleryimg24.jpg";
import galleryimg25 from "../assets/imgs/galleryImgs/galleryimg25.jpg";
import galleryimg26 from "../assets/imgs/galleryImgs/galleryimg26.jpg";
import galleryimg27 from "../assets/imgs/galleryImgs/galleryimg27.jpg";
import galleryimg28 from "../assets/imgs/galleryImgs/galleryimg28.jpg";
import galleryimg29 from "../assets/imgs/galleryImgs/galleryimg29.jpg";
import galleryimg30 from "../assets/imgs/galleryImgs/galleryimg30.jpg";
import galleryimg31 from "../assets/imgs/galleryImgs/galleryimg31.jpg";
import galleryimg32 from "../assets/imgs/galleryImgs/galleryimg32.jpg";
import galleryimg33 from "../assets/imgs/galleryImgs/galleryimg33.jpg";
import galleryimg34 from "../assets/imgs/galleryImgs/galleryimg34.jpg";
import galleryimg35 from "../assets/imgs/galleryImgs/galleryimg35.jpg";
import galleryimg36 from "../assets/imgs/galleryImgs/galleryimg36.jpg";
import galleryimg37 from "../assets/imgs/galleryImgs/galleryimg37.jpg";
import galleryimg38 from "../assets/imgs/galleryImgs/galleryimg38.jpg";
import galleryimg39 from "../assets/imgs/galleryImgs/galleryimg39.jpg";
import galleryimg40 from "../assets/imgs/galleryImgs/galleryimg40.jpg";



export function Gallery() {

    const galleryImages = [
        galleryimg1,
        galleryimg2,
        galleryimg3,
        galleryimg4,
        galleryimg5,
        galleryimg6,
        galleryimg7,
        galleryimg8,
        galleryimg9,
        galleryimg10,
        galleryimg11,
        galleryimg12,
        galleryimg13,
        galleryimg14,
        galleryimg15,
        galleryimg16,
        galleryimg17,
        galleryimg18,
        galleryimg19,
        galleryimg20,
        galleryimg21,
        galleryimg22,
        galleryimg23,
        galleryimg24,
        galleryimg25,
        galleryimg26,
        galleryimg27,
        galleryimg28,
        galleryimg29,
        galleryimg30,
        galleryimg31,
        galleryimg32,
        galleryimg33,
        galleryimg34,
        galleryimg35,
        galleryimg36,
        galleryimg37,
        galleryimg38,
        galleryimg39,
        galleryimg40,
    ];

    return (
        <section className="gallery">
            <h1 dir="rtl">קצת תמונות מהמשתלה שלנו</h1>
            <p dir="rtl">הצמחים בתמונות צולמו בתקופות שונות ולכן לא תמיד כל הצמחים יהיו זמינים במלאי. עם זאת, תמיד ניתן למצוא תחליפים איכותיים.</p>
            <section className="gallery-imgs">
                {galleryImages.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Gallery Image ${index + 1}`} />
                ))}
            </section>
        </section>
    );
}
