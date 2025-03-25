import ig from "../assets/imgs/icons/ig.svg";
import facebook from "../assets/imgs/icons/facebook.svg";
import phone from "../assets/imgs/icons/phone.svg";
import logo from "/logo.png"


import { connectContact, connectOpeningHours, connectInfo } from "../data/app.texts.js"


export function Connect() {

    const ContactSection = () => (
        <section className="connect-contact" id="connect" dir="rtl">
            <h1>{connectContact.title}</h1>
            <hr />
            <p dir="rtl">{connectContact.address}</p>
            <section className="connect-call">
                <a href="tel:02-6710335"><img src={phone} alt="phone icon" /></a>
                <a href="tel:02-6710335">{connectContact.tel}</a>
            </section>
            <SocialLinks />
        </section>
    );

    const SocialLinks = () => (
        <section className="connect-social">
            <a href="https://www.instagram.com/ginat_tamar_nursery/" target="blank" rel="noopener noreferrer">
                <img src={ig} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/p/%D7%9E%D7%A9%D7%AA%D7%9C%D7%AA-%D7%92%D7%99%D7%A0%D7%AA-%D7%AA%D7%9E%D7%A8-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-100008666466730/?locale=he_IL" target="blank" rel="noopener noreferrer">
                <img className="fb" src={facebook} alt="Facebook" />
            </a>
        </section>
    );

    const OpeningHoursSection = () => (
        <section className="connect-opening-hours" dir="rtl">
            <h1>{connectOpeningHours.title}</h1>
            <hr />
            <section className="connect-opening-hours-content" dir="rtl">
                <section>
                    <h2>{connectOpeningHours.summerTitle}</h2>
                    <p>{connectOpeningHours.summerWeekday}</p>
                    <p>{connectOpeningHours.summerWeekend}</p>
                </section>
                <section>
                    <h2>{connectOpeningHours.winterTitle}</h2>
                    <p>{connectOpeningHours.winterWeekday}</p>
                    <p>{connectOpeningHours.winterWeekend}</p>
                </section>
            </section>
        </section>
    );

    const InfoSection = () => (
        <section className="connect-info" dir="rtl">
            <h1>{connectInfo.title}</h1>
            <hr />
            <p dir="rtl">{connectInfo.txt}</p>
        </section>
    );

    return <section className="connect full">
        <section className="logo">
            <img src={logo} alt="logo" />
        </section>
        <section className="connect-content">
            <ContactSection />
            <OpeningHoursSection />
            <InfoSection />
        </section>
    </section>
}
