import { herbs } from "../../services/ctg.service.js";

export function Herbs() {

    return (
        <section dir="rtl" className="herbs">
            <h1>תבלינים</h1>
            <h3>אלו רק דוגמאות בודדות מהמבחר הרחב של העשבים שיש למשתלה להציע. אם מצאתם משהו באתר שאתם אוהבים, אל תהססו להראות לנו, ואם לא נמצא בדיוק את הצמח שחיפשתם, אנחנו תמיד כאן כדי להמליץ לכם על משהו דומה!</h3>
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
            <p className='disclaimer'>מלאי התבלינים במשתלה משתנה לפי עונות ואספקה.</p>
        </section>
    );
}
