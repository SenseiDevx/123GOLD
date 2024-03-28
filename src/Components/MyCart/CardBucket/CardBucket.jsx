import cls from "./CardBucket.module.css"
import Ring from "../../../assets/ringData/wish-list-ring.png";

const CardBucket = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>1. ARTICLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR</h3>
            <div className={cls.items}>
                <div className={cls.firstBlock}>
                    <img src={Ring} alt="ring"/>
                    <button className={cls.order}>Order now</button>
                    <button className={cls.delete}>Delete article</button>
                </div>
                <div className={cls.secondBlock}>
                    <div className={cls.first}>
                        <h3 className={cls.h3}>Article-No.:</h3>
                        <h3 className={cls.h3p}>S-11J7PI-WWW5-22KG1Z</h3>
                    </div>
                    <div className={cls.description}>
                        <h3 className={cls.h3}>Description:</h3>
                        <h3 className={cls.h3p}>Gold 585/-, assy-and-white. approx. 0,135 ct. tw si fine white with small inclusions</h3>
                    </div>
                    <div className={cls.articles}>
                        <div className={cls.names}>
                            <h4 className={cls.h4}>Name:</h4>
                            <h4 className={cls.h4}>Price:</h4>
                            <h4 className={cls.h4}>Size:</h4>
                        </div>
                        <div className={cls.descr}>
                            <h4 className={cls.h4}>Article 1</h4>
                            <h4 className={cls.h4}>983,00 EUR</h4>
                            <h4 className={cls.h4}>54</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBucket;