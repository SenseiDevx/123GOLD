import cls from "./LeftRingImage.module.css"
import {useNavigate} from "react-router-dom";
import Image from "../../../assets/aboutRing/about-ring.png"
import {ReactComponent as ImageIcon} from "../../../assets/aboutRing/image-icon.svg"
import {ReactComponent as MaskIcon} from "../../../assets/aboutRing/mask-icon.svg"

const LeftRingImage = () => {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={cls.wrapper}>
            <div className={cls.childBlock}>
                <div className={cls.imageBlock}>
                    <button className={cls.back} onClick={back}>Back</button>
                    <img className={cls.img} src={Image} alt="image"/>
                </div>
                <div className={cls.icons}>
                    <ImageIcon/>
                    <MaskIcon/>
                </div>
            </div>
            <div className={cls.price}>
                <p className={cls.p}>Set Price</p>
                <h3 className={cls.h3}>1.248,- EUR</h3>
            </div>
        </div>
    );
};

export default LeftRingImage;