import cls from "./Jewellery.module.css"
import First from "../../../assets/mainpage/necklace.png"
import Second from "../../../assets/mainpage/schmuck-ring.png"
import Third from "../../../assets/mainpage/circle-necklace.png"
import Fourth from "../../../assets/mainpage/ring.png"

const Jewellery = () => {
    return (
        <div className="container">
            <div className={cls.wrapper}>
                <div className={cls.verticalBlock}>
                    <div>
                        <h3 className={cls.h3}>VALENTINE'S DAY</h3>
                        <p className={cls.p}>
                            Brilliant gift ideas for special moments. 123gold darling
                        </p>
                    </div>
                    <div className={cls.bottomBlock}>
                        <div className={cls.percent}>
                            -10%
                        </div>
                        <button className={cls.button}>Discover</button>
                    </div>
                </div>
                <div className={cls.otherBlock}>
                    <img className={cls.img} src={First} alt="first"/>
                    <img className={cls.img} src={Second} alt="second"/>
                    <div className={cls.img}>
                        <div className={cls.texts}>
                            <h4 className={cls.h4}>VALENTINE'S DAY</h4>
                            <p className={cls.p}>Brilliant gift ideas for special moments. 123gold darling</p>
                        </div>
                        <img src={Third} alt="third"/>
                    </div>
                    <img className={cls.img} src={Fourth} alt="fourth"/>
                </div>
            </div>
        </div>
    );
};

export default Jewellery;