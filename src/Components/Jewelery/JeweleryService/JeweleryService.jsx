import cls from "./JeweleryService.module.css"
import RingSize from "../../../assets/jewelery/ringsize.png"
import Engraving from "../../../assets/jewelery/tips.png"
import Alloys from "../../../assets/jewelery/alloy.png"
import CareTips from "../../../assets/jewelery/engraving.png"
import Fire1 from "../../../assets/jewelery/first-fire.png"
import Fire2 from "../../../assets/jewelery/second-fire.png"
import Fire3 from "../../../assets/jewelery/third-fire.png"
import MakeCarat from "../../../assets/jewelery/make-carat.png"
import {getCLS} from "web-vitals";


const JeweleryService = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>SERVICE</h3>
            <div className={cls.services}>
                <div className={cls.item}>
                    <img src={RingSize} alt="ring"/>
                    <h5 className={cls.h5}>Ring size</h5>
                </div>
                <div className={cls.item}>
                    <img src={Engraving} alt="ring"/>
                    <h5 className={cls.h5}>Engraving</h5>
                </div>
                <div className={cls.item}>
                    <img src={Alloys} alt="ring"/>
                    <h5 className={cls.h5}>Alloys</h5>
                </div>
                <div className={cls.item}>
                    <img src={CareTips} alt="ring"/>
                    <h5 className={cls.h5}>Care tips</h5>
                </div>
            </div>
            <div className={cls.bottomBlock}>
                <div className={cls.firstBlock}>
                    <h3 className={cls.h3}>UNIQUE WEDDING RING-QUALITY – MADE IN GERMANY</h3>
                    <p className={cls.p}>For years, we work together with confidence with the leading wedding ring manufacturers in Germany, to provide our customers with the highest quality and the best price offer. See for yourself.</p>
                    <div className={cls.images}>
                        <img src={Fire1} alt="fire-1"/>
                        <img src={Fire2} alt="fire-2"/>
                        <img src={Fire3} alt="fire-3"/>
                    </div>
                </div>
                <img src={MakeCarat} alt="carat"/>
            </div>
        </div>
    );
};

export default JeweleryService;