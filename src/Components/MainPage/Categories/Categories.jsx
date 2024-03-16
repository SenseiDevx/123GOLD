import cls from "./Categories.module.css"
import { topRingData } from "../../../consts/ringData"; // Импортируйте данные


const Categories = () => {
    return (
        <div className="container">
            <div className={cls.wrapper}>
                <h1 className={cls.h1}>categories</h1>
                <div className={cls.topRings}>
                    {topRingData.map((ring) => (
                        <div key={ring.id} className={cls.ringBlock}>
                            <img src={ring.image} alt={`Ring ${ring.id}`} />
                            <h4 className={cls.h4}>{ring.status}</h4>
                            <p className={cls.p}>{ring.description}</p>
                            <button className={cls.button}>Discover now</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;