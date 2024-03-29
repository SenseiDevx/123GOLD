import cls from "./DiamondsBlock.module.css"
import Carat1 from "../../../assets/diamonds/carat-1.png"
import Carat2 from "../../../assets/diamonds/carat-2.png"
import Carat3 from "../../../assets/diamonds/carat-3.png"
import Carat4 from "../../../assets/diamonds/carat-4.png"

const DiamondsBlock = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.caratItem}>
                <img className={cls.img} src={Carat1} alt="carat1"/>
                <h4 className={cls.h4}>CARAT WEIGHT</h4>
                <p className={cls.p}>The weight of a diamond is expressed in carats</p>
                <button className={cls.button}>Learn More</button>
            </div>
            <div className={cls.caratItem}>
                <img className={cls.img} src={Carat2} alt="carat1"/>
                <h4 className={cls.h4}>CUT – CUT</h4>
                <p className={cls.p}>The cut is the most important criterion of a diamond</p>
                <button className={cls.button}>Learn More</button>
            </div>
            <div className={cls.caratItem}>
                <img className={cls.img} src={Carat3} alt="carat1"/>
                <h4 className={cls.h4}>COLOUR – COLOR</h4>
                <p className={cls.p}>The white/colorless a diamond is, the more valuable it is</p>
                <button className={cls.button}>Learn More</button>
            </div>
            <div className={cls.caratItem}>
                <img className={cls.img} src={Carat4} alt="carat1"/>
                <h4 className={cls.h4}>CLARITY – PURITY</h4>
                <p className={cls.p}>This unit determines the purity of a diamond</p>
                <button className={cls.button}>Learn More</button>
            </div>
        </div>
    );
};

export default DiamondsBlock;