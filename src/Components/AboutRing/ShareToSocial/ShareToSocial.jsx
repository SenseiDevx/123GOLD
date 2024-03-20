import cls from "./ShareToSocial.module.css"
import {ReactComponent as Facebook} from "../../../assets/aboutRing/facebook.svg";
import {ReactComponent as Instagram} from "../../../assets/aboutRing/Instagram.svg";
import {ReactComponent as Email} from "../../../assets/aboutRing/email.svg";
import {ReactComponent as Phone} from "../../../assets/aboutRing/phone.svg";
import {ReactComponent as Telegram} from "../../../assets/aboutRing/telegram.svg";
import {ReactComponent as Twitter} from "../../../assets/aboutRing/twitter.svg";
import {ReactComponent as WhatsApp} from "../../../assets/aboutRing/whatsapp.svg";

const ShareToSocial = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>Share and recommend to others</h3>
            <div className={cls.icons}>
                <Facebook/>
                <Instagram/>
                <Email/>
                <Phone/>
                <Telegram/>
                <Twitter/>
                <WhatsApp/>
            </div>
        </div>
    );
};

export default ShareToSocial;