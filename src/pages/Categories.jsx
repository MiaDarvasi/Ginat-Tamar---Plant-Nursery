import { CategoriesCmp } from '../cmps/CategoriesCmp.jsx'

export function Categories() {
    return <>
        <section className="categories">
            <section className="categories-title">
                <h1 dir="rtl">מהמבחר של המשתלה</h1>
                <p dir="rtl">זוהי רק טעימה קטנה מתוך המגוון הרחב והעשיר שיש למשתלה להציע. במשתלה שלנו תמצאו אינספור צמחים מסוגים שונים, עציצים מעוצבים, תבלינים, פרחים ייחודיים, סוקולנטים, קקטוסים, עצים גדולים ומגוון פתרונות ירוקים לבית ולגינה. אנו מזמינים אתכם לבוא ולהתרשם מהמבחר הגדול שלנו שממשיך להתחדש כל הזמן.</p>
            </section>
            <CategoriesCmp />
            <p dir="rtl">מלאי הצמחים במשתלה משתנה לפי עונות ואספקה.</p>
        </section>
    </>
}
