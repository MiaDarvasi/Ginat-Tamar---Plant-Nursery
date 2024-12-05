import { Link } from "react-router-dom";

export function CategoriesCmp() {
    return <>
        <section className="categories-cmp">
            <Link to="/categories/indoor">
            <div className="category-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf95BXww7G8hZ-zO35eRA9fi9PgKwxuqb7qg&s" />
                <h1 dir="rtl">צמחי בית</h1>
                <div className="overlay"></div>
            </div>
            </Link>
            <Link to="/categories/herbs">
            <div className="category-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MC8Bqu8A1N2tG2Jj0M9wHWH79z3V98LDrg&s" />
                <h1 dir="rtl">תבלינים</h1>
                <div className="overlay"></div>
            </div>
            </Link>
            <Link to="/categories/succulents">
            <div className="category-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRkVQtDRCsLnCjSB-T_BY5xi0qHW_QokF8g&s" />
                <h1 dir="rtl">קקטוסים וסוקולנטים</h1>
                <div className="overlay"></div>
            </div>
            </Link>
            <Link to="/categories/flowers">
            <div className="category-card">
                <img src="https://cdn.mos.cms.futurecdn.net/hmACU4SQusmKT86SFZVMYb.jpg" />
                <h1 dir="rtl">פורחים</h1>
                <div className="overlay"></div>
            </div>
            </Link>
            <Link to="/categories/trees">
            <div className="category-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT605miDfycXgoBIG-tUSOv7OK09uS6zxBj5w&s" />
                <h1 dir="rtl">עצים ושיחים</h1>
                <div className="overlay"></div>
            </div>
            </Link>
            <Link to="/categories/vining">
            <div className="category-card">
                <img src="https://www.bhg.com/thmb/MkM6MyNGPwPkReVpYEF90HvJZWM=/987x0/filters:no_upscale():strip_icc()/red-mandevilla-vine-858f26ed-11caa644771a4714a6deafad3022cbe1.jpg" />
                <h1 dir="rtl">מטפסים</h1>
                <div className="overlay"></div>
            </div>
            </Link>
            <Link to="/categories/pots">
            <div className="category-card">
                <img src="https://www.mashtelaadhabait.com/Media/Uploads/%D7%9B%D7%93%D7%99_%D7%93%D7%A7%D7%95%D7%A8%D7%A6%D7%99%D7%94_%D7%9E%D7%90%D7%92%D7%93_jpg.webp" />
                <h1 dir="rtl">עציצים</h1>
                <div className="overlay"></div>
            </div>
            </Link>
            <Link to="/crystal">
            <div className="category-card">
                <img src="https://crystaldreamsworld.com/wp-content/uploads/2022/06/Rose-quartz.jpg" />
                <h1 dir="rtl">קריסטלים</h1>
                <div className="overlay"></div>
            </div>
            </Link>
        </section>
    </>
}
