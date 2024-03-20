import cls from "./RightCustomize.module.css"
import Ring1 from "../../../assets/aboutRing/silver-ring.png"
import Ring2 from "../../../assets/aboutRing/about-ring.png"
import Ring3 from "../../../assets/aboutRing/gold-ring-3.png"
import Ring4 from "../../../assets/aboutRing/gold-ring-4.png"
import {ReactComponent as Arrow} from "../../../assets/aboutRing/bottom-arrow.svg"

const RightCustomize = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.customizeBlock}>
                <div className={cls.topBlock}>
                    <h4 className={cls.h4}>Customise</h4>
                    <div className={cls.color}>
                        <Arrow/>
                        <h3 className={cls.h3}>Color</h3>
                        <Arrow/>
                    </div>
                </div>
                <div className={cls.ringBlock}>
                    <img className={cls.img} src={Ring1} alt="ring-1"/>
                    <img className={cls.img} src={Ring2} alt="ring-2"/>
                    <img className={cls.img} src={Ring3} alt="ring-3"/>
                    <img className={cls.img} src={Ring4} alt="ring-4"/>
                </div>
            </div>
            <div className={cls.alloyBlock}>
                <div className={cls.itemBlock}>
                    <div className={cls.color}>
                        <Arrow/>
                        <h3 className={cls.h3}>Alloy</h3>
                        <Arrow/>
                    </div>
                </div>
                <div className={cls.radioBlock}>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="1" name="radioGroup"/>
                            <label className={cls.label} htmlFor="1">Yellow gold</label>
                        </div>
                        <p className={cls.p}>375/-919EUR</p>
                    </div>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="2" name="radioGroup"/>
                            <label className={cls.label} htmlFor="2">Yellow gold</label>
                        </div>
                        <p className={cls.p}>585/-1.248,- EUR</p>
                    </div>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="3" name="radioGroup"/>
                            <label className={cls.label} htmlFor="3">Yellow gold</label>
                        </div>
                        <p className={cls.p}>750/-1.647,- EUR</p>
                    </div>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="4" name="radioGroup"/>
                            <label className={cls.label} htmlFor="4">Yellow gold</label>
                        </div>
                        <p className={cls.p}>916/-2,439 current, - EUR</p>
                    </div>
                </div>
                <div className={cls.radioBlock2}>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="5" name="radioGroup"/>
                            <label className={cls.label} htmlFor="5">Yellow gold</label>
                        </div>
                        <p className={cls.p}>375/-919EUR</p>
                    </div>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="6" name="radioGroup"/>
                            <label className={cls.label} htmlFor="6">Yellow gold</label>
                        </div>
                        <p className={cls.p}>585/-1.248,- EUR</p>
                    </div>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="7" name="radioGroup"/>
                            <label className={cls.label} htmlFor="7">Yellow gold</label>
                        </div>
                        <p className={cls.p}>750/-1.647,- EUR</p>
                    </div>
                    <div className={cls.radio}>
                        <div className={cls.inputRadio}>
                            <input className={cls.input} type="radio" id="8" name="radioGroup"/>
                            <label className={cls.label} htmlFor="8">Yellow gold</label>
                        </div>
                        <p className={cls.p}>916/-2,439 current, - EUR</p>
                    </div>
                </div>
                <div className={cls.buttons}>
                    <button className={cls.button1}>Wish list</button>
                    <button className={cls.button2}>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default RightCustomize;