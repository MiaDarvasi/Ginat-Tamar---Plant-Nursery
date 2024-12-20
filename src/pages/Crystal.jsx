import React, { useState } from 'react';

import amethyst from "../assets/imgs/crystals/amethyst.jpg";
import amazonite from "../assets/imgs/crystals/amazonite.jpg";
import calcite from "../assets/imgs/crystals/calcite.jpg";
import carnelian from "../assets/imgs/crystals/carnelian.jpg";
import citrine from "../assets/imgs/crystals/citrine.jpg";
import goldstone from "../assets/imgs/crystals/goldstone.jpg";
import jasper from "../assets/imgs/crystals/jasper.jpg";
import pyrite from "../assets/imgs/crystals/pyrite.jpg";
import quartz from "../assets/imgs/crystals/quartz.jpg";
import rosequartz from "../assets/imgs/crystals/rosequartz.jpg";
import tigereye from "../assets/imgs/crystals/tigereye.jpg";
import tourmaline from "../assets/imgs/crystals/tourmaline.jpg";


export function Crystal() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const crystals = [
        {
            name: "אמטיסט",
            description: "מסייעת לפתיחת העין השלישית, מחדדת אינטואיציה, מקלה בזמן גמילה מהתמכרויות שונות. עוזרת לסובלים מכאבי ראש, פחדים ובעיות שינה. מעודדת יצירתיות ומאזנת גוף פיזי.",
            imgSrc: amethyst
        },
        {
            name: "רוזקוורץ",
            description: "״אבן האהבה״. מגבירה אהבה עצמית, מרגיעה, מובילה להרמוניה במערכות יחסים. טובה ללב בזמן משברים רגשיים. מעודדת אהדה וסובלנות כלפי הסביבה.",
            imgSrc: rosequartz
        },
        {
            name: "קארנליאן",
            description: "אבן של שמחה, יצירתיות ופוריות. ממריצה אנרגתית עוצמתית. מעודדת יצירתיות. מגבירה פוריות אצל שני בני הזוג. מגבירה אנאליטיות, דיוק והתמקדות במטרה.",
            imgSrc: carnelian
        },
        {
            name: "קוורץ",
            description: "אבן הנחשבת למטהרת אנרגטית עוצמתית במיוחד. מגבירה תכונותיהן של אבנים הנמצאות בקרבתה. משמשת להגברת המודעות האישית. מטהרת ומנקה את סביבתה.",
            imgSrc: quartz
        },
        {
            name: "ג׳אספר",
            description: "גורמת להיות מחושב יותר ולפעול מתוך הגיון בריא. ממגנטת שפע רב בכל התחומים. מחזקת תכונה של שלמות. עוזרת לתפקוד תקין של הלב והכבד.",
            imgSrc: jasper
        },
        {
            name: "סיטרין",
            description: "״אבן הסוחרים״. מגבירה יצירתיות, שפע ופרנסה מחזקת את מערכת היחסים בתוך המשפחה. מחדדת זיכרון. מגבירה ביטחון עצמי. טובה למערכת השתן והכליות.",
            imgSrc: citrine
        },
        {
            name: "טייגר איי",
            description: "מגבירה ביטחון עצמי ויציבות. מרחיקה פחדים, חרדות ודכאונות. מחזקת את האינטלקט והמחשבה. מגבירה חיוביות. מאזנת בין הרוח והחומר אצל האדם.",
            imgSrc: tigereye
        },
        {
            name: "אמזונייט",
            description: "מחדדת זיכרון ומיקוד. מגבירה כישורי ריפויי אלטרנטיביים. משמשת כמאזן רגשי, תורמת להזרמת רגשות חיוביים לזולת. טובה לתפקוד הלב והריאות.",
            imgSrc: amazonite
        },
        {
            name: "טורמלין שחור",
            description: "אבן המגנה מפני אנרגיות שליליות ונחשבת לחזקה מכולן בתחום זה. מקרקעת מודעות לגוף הפיזי ולרמת החומר. טובה לטיפול במערכת העיכול והכבד.",
            imgSrc: tourmaline
        },
        {
            name: "גולדסטון",
            description: "אבן השמש. מגבירה יצירתיות ויצריות. מסייעת לכל הקשור לצ׳אקרת מקלעת השמש. ממריצה את אנרגיית החיים בגוף הפיזי. טובה לכל הקשור בכליות ומערכת השתן.",
            imgSrc: goldstone
        },
        {
            name: "פיריט",
            description: "אבן האושר. מושכת שפע ופרנסה, מסייעת להצלחה בכל תחום. מקלה בזמני שינויים, יאוש, דיכאון, פחדים וחרדות. מסייעת בהעלאת המיטב בכל אחד. עוזרת לתפקוד מערכת העיכול.",
            imgSrc: pyrite
        },
        {
            name: "קלציט",
            description: "קלציט היא אבן מינרלית במגוון צבעים, שמסייעת בשינויים פיזיים, מחשבתיים ורגשיים. היא תומכת בתהליכי ריפוי, מרגיעה רגשות, ועוזרת בבעיות במפרקים, סחוסים ועצמות.",
            imgSrc: calcite
        }
    ];

    return (
        <section className="crystal">
            <h2 dir="rtl">קריסטלים</h2>
            <p dir="rtl" className="crystal-title-description">
                במשתלה שלנו תוכלו למצוא אוסף מיוחד של קריסטלים טבעיים. כל קריסטל מביא עמו אנרגיה חיובית ויופי טבעי שיכול להעשיר את הבית או הגינה. אצלנו תמצאו קריסטלים שמתאימים לאוהבי הרוחניות, למי שמחפש פתרונות להארה אישית או פשוט לאוהבי יופי טבעי. הקריסטלים שלנו מגיעים בגדלים שונים וכוללים אבני חן עם סגולות ריפוי, ויזואליות מרהיבה ומגע קסום. אנו מזמינים אתכם לבוא ולהתרשם מהמבחר שלנו ולהתנסות באנרגיות המיוחדות של כל קריסטל.
            </p>
            <section className="crystal-list">
                {crystals.map((crystal, index) => (
                    <div
                        key={index}
                        className="crystal-item"
                        onClick={() => handleClick(index)}
                    >
                        <div className={`content ${activeIndex === index ? 'show-description' : ''}`}>
                            <img src={crystal.imgSrc} alt={crystal.name} className="crystal-image" />
                            <h1>{crystal.name}</h1>
                            {activeIndex === index && <section className="crystal-item-description">
                                <h3 dir="rtl">{crystal.name}</h3>
                                <p dir="rtl">{crystal.description}</p>
                            </section>
                            }
                        </div>
                    </div>
                ))}
            </section>
            <p dir="rtl" className="crystal-disclaimer">מלאי הקריסטלים במשתלה משתנה לפי אספקה.</p>
        </section>
    );
}
