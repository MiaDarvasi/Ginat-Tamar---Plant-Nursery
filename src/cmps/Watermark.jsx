import mylogo from "../assets/imgs/mylogo.jpg";

export function Watermark() {
    return <section className="watermark full">
        <section className="watermark-content">
            <a href="https://miadarvasi.netlify.app/" target="blank">
                <img src={mylogo} />
            </a>
            <p>Powered by Mia Darvasi</p>
        </section>
    </section>
}
