import { Link } from "react-router-dom";

import pottery from "../assets/imgs/pottery.png";
import crystals from "../assets/imgs/crystals.jpg";
import houseplant from "../assets/imgs/houseplant.jpg";
import flowers from "../assets/imgs/flowers.jpg";
import succulents from "../assets/imgs/succulents.jpg";
import vining from "../assets/imgs/vining.jpg";
import herbs from "../assets/imgs/herbs.jpg";
import fruit from "../assets/imgs/fruit.jpg";


export function CategoriesCmp() {
    return <>
        <section className="categories-cmp" dir="rtl">
            <Link to="/categories/indoor">
                <div className="category-card">
                    <img src={houseplant} />
                    <h1 dir="rtl">צמחי בית</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="/categories/herbs">
                <div className="category-card">
                    <img src={herbs} />
                    <h1 dir="rtl">תבלינים</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="/categories/succulents">
                <div className="category-card">
                    <img src={succulents} />
                    <h1 dir="rtl">קקטוסים וסוקולנטים</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="/categories/flowers">
                <div className="category-card">
                    <img src={flowers} />
                    <h1 dir="rtl">פורחים</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="/categories/trees">
                <div className="category-card">
                    <img src={fruit}/>
                    <h1 dir="rtl">עצים ושיחים</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="/categories/vining">
                <div className="category-card">
                    <img src={vining} />
                    <h1 dir="rtl">מטפסים</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="/categories/pots">
                <div className="category-card">
                    <img src={pottery} />
                    <h1 dir="rtl">עציצים</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
            <Link to="/crystal">
                <div className="category-card">
                    <img src={crystals} />
                    <h1 dir="rtl">קריסטלים</h1>
                    <div className="overlay"></div>
                </div>
            </Link>
        </section>
    </>
}
