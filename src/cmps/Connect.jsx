import ig from "../assets/imgs/icons/ig.svg";
import facebook from "../assets/imgs/icons/facebook.svg";
import phone from "../assets/imgs/icons/phone.svg";
import trees from "../assets/imgs/trees.svg";




export function Connect() {
    return <section className="connect full" id="connect">
        <section className="logo">
            <img src={trees} alt="logo" />
            <p>גינת תמר</p>
        </section>
        <h1>דברו איתנו</h1>
        <p dir="rtl">דרך בית לחם 34, ירושלים</p>
        <section className="connect-call">
            <a href="tel:02-6710335"><img src={phone} /></a>
            <a href="tel:02-6710335"><tel>02-6710335</tel></a>
        </section>
        <section className="connect-social">
            <a href="https://www.instagram.com/ginat_tamar_nursery/" target="blank"><img src={ig} /></a>
            <a href="https://www.facebook.com/p/%D7%9E%D7%A9%D7%AA%D7%9C%D7%AA-%D7%92%D7%99%D7%A0%D7%AA-%D7%AA%D7%9E%D7%A8-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-100008666466730/?locale=he_IL" target="blank"><img className="fb" src={facebook} /></a>
        </section>
    </section>
}
