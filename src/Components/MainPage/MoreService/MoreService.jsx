import cls from "./MoreService.module.css"
import Img1 from "../../../assets/mainpage/ringgroessen.png"
import Img2 from "../../../assets/mainpage/musterringe.png"
import Img3 from "../../../assets/mainpage/start-at-home.png"

const MoreService = () => {
    return (
        <div className="container">
            <div className={cls.wrapper}>
                <h1 className={cls.h1}>MORE SERVICE</h1>
                <p className={cls.p}>Besides the Video guidance, we offer you a wide variety of unique services</p>
                <div className={cls.aboutUs}>
                    <div className={cls.itemsBlock}>
                        <img src={Img1} alt="img1"/>
                        <h4 className={cls.h4}>RING SIZES-SERVICE</h4>
                        <p className={cls.p}>You get a choice of ring sizes-pattern sample to wear</p>
                        <button className={cls.button}>Discover now</button>
                    </div>
                    <div className={cls.itemsBlock}>
                        <img src={Img2} alt="img2"/>
                        <h4 className={cls.h4}>INDIVIDUAL PATTERNS RINGS</h4>
                        <p className={cls.p}>You can order to wear their wedding rings as a pattern for the Sample</p>
                        <button className={cls.button}>Discover now</button>
                    </div>
                    <div className={cls.itemsBlock}>
                        <img src={Img3} alt="igm3"/>
                        <h4 className={cls.h4}>START@HOME</h4>
                        <p className={cls.p}>ou can start at home with the design of their wedding rings</p>
                        <button className={cls.button}>Discover now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreService;