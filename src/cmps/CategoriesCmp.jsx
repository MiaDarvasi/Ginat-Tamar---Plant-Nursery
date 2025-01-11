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
    
    const categories = [
        { to: "/categories/indoor", imgSrc: houseplant, title: "צמחי בית" },
        { to: "/categories/herbs", imgSrc: herbs, title: "תבלינים" },
        { to: "/categories/succulents", imgSrc: succulents, title: "קקטוסים וסוקולנטים" },
        { to: "/categories/flowers", imgSrc: flowers, title: "פורחים" },
        { to: "/categories/trees", imgSrc: fruit, title: "עצים ושיחים" },
        { to: "/categories/vining", imgSrc: vining, title: "מטפסים" },
        { to: "/categories/pots", imgSrc: pottery, title: "עציצים" },
        { to: "/crystal", imgSrc: crystals, title: "קריסטלים" }
    ];

    return (
        <section className="categories-cmp" dir="rtl">
            {categories.map((category, index) => (
                <Link key={index} to={category.to}>
                    <div className="category-card">
                        <img src={category.imgSrc} alt={category.title} />
                        <h1 dir="rtl">{category.title}</h1>
                        <div className="overlay"></div>
                    </div>
                </Link>
            ))}
        </section>
    );
}
