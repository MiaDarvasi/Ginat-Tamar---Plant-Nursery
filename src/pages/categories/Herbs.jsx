import lettuce from '../../assets/imgs/herbs/lettuce.jpg'
import sage from '../../assets/imgs/herbs/sage.jpg'
import mint from '../../assets/imgs/herbs/mint.jpg'
import silantro from '../../assets/imgs/herbs/silantro.jpg'
import geranium from '../../assets/imgs/herbs/geranium.jpg'
import pigam from '../../assets/imgs/herbs/pigam.jpg'
import babunag from '../../assets/imgs/herbs/babunag.jpg'
import oregano from '../../assets/imgs/herbs/oregano.jpg'
import zuta from '../../assets/imgs/herbs/zuta.jpg'
import thyme from '../../assets/imgs/herbs/thyme.jpg'
import irit from '../../assets/imgs/herbs/irit.jpg'
import lavender from '../../assets/imgs/herbs/lavender.jpg'

export function Herbs() {
    // Array of herbs data
    const herbs = [
        { name: "לוונדר", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503106/lavender_a1ivt3.jpg", description: "לוונדר אוהב הרבה שמש ישירה כדי לצמוח בצורה טובה, ולכן כדאי למקם אותו במקום שטוף שמש במהלך רוב שעות היום." },
        { name: "מרווה", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503120/sage_kwccje.jpg", description: "מרווה זקוקה לאדמה חולית ומנוקזת היטב. היא אוהבת שמש ויובש, ולכן תגדל היטב כל השנה בתנאים כאלה. בתנאי לחות, היא תהפוך לעונתית בלבד." },
        { name: "נענע", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503119/mint_jabbn9.jpg", description: "נענע דורשת שמש מלאה או חלקית, אדמה לחה אך מנוקזת היטב. אם מגדלים אותה באדניות, חשוב לדאוג לניקוז טוב כדי למנוע הצטברות מים ומחלות שורש." },
        { name: "גרניום ריחני", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503112/geranium_ay7wpv.jpg", description: "גרניום לימוני, צמח רב שנתי ריחני, גדל היטב בתנאי אקלים ים-תיכוני, סובטרופי וטרופי. עלי הצמח משמשים לחליטות ופרחיו הסגולים מושכים דבורים ודוחים את לבנן הכרוב." },
        { name: "פיגם", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503117/pigam_isiddo.jpg", description: "רוטה, או פיגם, הוא צמח רב שנתי ריחני שגדל בתנאי אקלים ים-תיכוני, סובטרופי ומדברי. העלים חזקים וחתוכים, והפרחים הצהובים הקטנים טובים לשיקום קרקעות ולמשיכת פרפרים מזן זנב סנונית." },
        { name: "כוסברה", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503118/silantro_rvokeh.jpg", description: "כוסברה, המשמש בתור צמח מאכל, גדל בתנאי אקלים ים-תיכוני, סובטרופי, ממוזג או מדברי. העלים ירוקים ומחורצים, והפרחים הלבנים הקטנים מושכים דבורים, בעוד שזרעיה אכילים ויכולים לשמש בבישול." },
        { name: "בבונג", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503117/babunag_xtf20g.jpg", description: "קמומיל או בבונג הוא צמח עשבוני רב שנתי או חד-שנתי, תלוי בזן, המשמש כצמח נוי ומאכל. העלים דקים, ירוקים וריחניים, והפרחים הלבנים עם מרכז צהוב מושכים מאביקים." },
        { name: "אורגנו", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503113/oregano_z25atb.jpg", description: "אורגנו, צמח רב שנתי ריחני, משמש כצמח מאכל וגדל בתנאי אקלים ים-תיכוני, סובטרופי, ממוזג ומדברי. העלים ירוקים אפרפרים, עם שני סוגי עלים, והפרחים הסגולים הקטנים גדלים בתפרחות." },
        { name: "זוטה לבנה", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503119/zuta_navbix.jpg", description: "זוטה לבנה, צמח רב שנתי ריחני, משמש כצמח מאכל ועמיד ביובש. העלים קטנים, ריחניים וירוקים אפרפרים, והפרחים הלבנים הקטנים גדלים על עמודי פריחה." },
        { name: "טימין", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503118/thyme_m2gruc.jpg", description: "קורנית (טימין) הוא צמח רב שנתי ריחני, משמש כצמח מאכל ויכול לגדול בתנאי אקלים ים-תיכוני, סובטרופי, ממוזג ומדברי, או כצמח בית. העלים ריחניים, קטנים בצבעים ירוק, ירוק עם צהוב או לבן, והפרחים הלבנים הקטנים גדלים בחלק העליון של עמודי הפריחה." },
        { name: "עירית", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503112/irit_soyxv7.jpg", description: "עירית הוא צמח גאופיט רב שנתי, המשמש כצמח מאכל ונוי. עלי העירית אכילים עם טעם משתנה, והפרחים בצבעים סגול, ורוד או לבן יוצרים מקבץ כדורי. הבצל הקטן, לבן ואכיל, גדל בצפיפות בקולוניות." },
        { name: "חסה", imgSrc: "https://res.cloudinary.com/duacxtqd3/image/upload/v1736503111/lettuce_znvzrw.jpg", description: "חסה דורשת אדמה פורייה, מנוקזת היטב, ומקום עם חשיפה לשמש ישירה או חלקית. חשוב להשקות אותה באופן קבוע ולשמור על לחות גבוהה בשלב הגידול." },
    ];

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
