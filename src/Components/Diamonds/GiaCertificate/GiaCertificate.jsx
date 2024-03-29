import cls from "./GiaCertificate.module.css"
import Gia from "../../../assets/diamonds/gia-certificate.png"

const GiaCertificate = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>GIA IS THE LEADING INTERNATIONAL CERTIFICATE FOR DIAMOND</h3>
            <div className={cls.childBlock}>
                <img src={Gia} alt="gia"/>
                <div className={cls.childTexts}>
                    <h5 className={cls.h5}>QUALITY AND TRUST</h5>
                    <p className={cls.p}>Only a recognized certificate gives you the security that the information
                        provided to the diamonds also apply. The discretion is, however, large. Therefore, we have
                        decided to 123GOLD us, only with the best and most recognized laboratories to cooperate. Very
                        reliable analyses confirm to you and to us, that the qualities of voices and of the diamond has,
                        therefore, the appropriate value.</p>
                </div>
            </div>
        </div>
    );
};

export default GiaCertificate;