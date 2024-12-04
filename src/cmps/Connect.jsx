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
        <section className="connect-call">
            <a href="tel:02-6710335"><img src={phone} /></a>
            <a href="tel:02-6710335"><tel>02-6710335</tel></a>
        </section>
        <section className="connect-social">
            <a href="https://www.instagram.com/maya_way_yoga/profilecard/?igsh=YXdjcnFqaThtd3Yz" target="blank"><img src={ig} /></a>
            <a href="https://wa.link/31grat" target="blank"><img className="fb" src={facebook} /></a>
        </section>
    </section>
}
