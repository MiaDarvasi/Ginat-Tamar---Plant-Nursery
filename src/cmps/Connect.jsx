import ig from "../assets/imgs/icons/ig.svg";
import facebook from "../assets/imgs/icons/facebook.svg";
import phone from "../assets/imgs/icons/phone.svg";
import trees from "../assets/imgs/trees.svg";
import logo from "../../public/logo.png"


export function Connect() {
    return <section className="connect full">
        <section className="logo">
            <img src={logo} alt="logo" />
        </section>
        <section className="connect-content">
            <section className="connect-contact" dir="rtl" id="connect">
                <h1>דרכי התקשרות</h1>
                <hr />
                <p dir="rtl">דרך בית לחם 34, ירושלים</p>
                <section className="connect-call">
                    <a href="tel:02-6710335"><img src={phone} /></a>
                    <a href="tel:02-6710335">02-6710335</a>
                </section>
                <section className="connect-social">
                    <a href="https://www.instagram.com/ginat_tamar_nursery/" target="blank"><img src={ig} /></a>
                    <a href="https://www.facebook.com/p/%D7%9E%D7%A9%D7%AA%D7%9C%D7%AA-%D7%92%D7%99%D7%A0%D7%AA-%D7%AA%D7%9E%D7%A8-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-100008666466730/?locale=he_IL" target="blank"><img className="fb" src={facebook} /></a>
                </section>
            </section>
            <section className="connect-opening-hours" dir="rtl">
                <h1>שעות פתיחה</h1>
                <hr />
                <section className="connect-opening-hours-content" dir="rtl">
                    <section>
                        <h2>שעון קיץ</h2>
                        <p>א׳-ה׳: 8:00-19:00</p>
                        <p>ו׳: 8:00-16:00</p>
                    </section>
                    <section>
                        <h2>שעון חורף</h2>
                        <p>א׳-ה׳: 8:00-18:00</p>
                        <p>ו׳: 8:00-15:00</p>
                    </section>
                </section>
            </section>
            <section className="connect-info" dir="rtl">
                <h1>מידע כללי</h1>
                <hr />
                <p dir="rtl">גינת תמר היא משתלה ירושלמית וותיקה המציעה מגוון רחב של צמחים, עם אווירה ביתית ושירות אדיב.</p>
            </section>
        </section>
    </section>
}
