import cls from "./UniqueRings.module.css"
import Ring1 from "../../../assets/memoire/practiculary-ring.png"
import Ring2 from "../../../assets/memoire/combined-ring.png"
import Ring3 from "../../../assets/memoire/exclusive-ring.png"
import Ring4 from "../../../assets/memoire/classic-ring.png"

const UniqueRings = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.ringBlock}>
                <img src={Ring1} alt="ring-1"/>
                <h4 className={cls.h4}>PARTICULARLY</h4>
                <p className={cls.p}>Trendy models of their most beautiful memories</p>
                <button className={cls.button}>Discover now</button>
            </div>
            <div className={cls.ringBlock}>
                <img src={Ring2} alt="ring-1"/>
                <h4 className={cls.h4}>PARTICULARLY</h4>
                <p className={cls.p}>Trendy models of their most beautiful memories</p>
                <button className={cls.button}>Discover now</button>
            </div>
            <div className={cls.ringBlock}>
                <img src={Ring3} alt="ring-1"/>
                <h4 className={cls.h4}>PARTICULARLY</h4>
                <p className={cls.p}>Trendy models of their most beautiful memories</p>
                <button className={cls.button}>Discover now</button>
            </div>
            <div className={cls.ringBlock}>
                <img src={Ring4} alt="ring-1"/>
                <h4 className={cls.h4}>PARTICULARLY</h4>
                <p className={cls.p}>Trendy models of their most beautiful memories</p>
                <button className={cls.button}>Discover now</button>
            </div>
        </div>
    );
};

export default UniqueRings;