import cls from "./Footer.module.css"
import {ReactComponent as Facebook} from "../../assets/mainpage/Facebook.svg"
import {ReactComponent as Telegram} from "../../assets/mainpage/Telegram.svg"
import {ReactComponent as Instagram} from "../../assets/mainpage/Instagram.svg"
import {ReactComponent as WhatsApp} from "../../assets/mainpage/WhatsApp.svg"

const Footer = () => {
    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <div className={cls.firstBlock}>
                    <h3 className={cls.h3}>FOLLOW US</h3>
                    <div className={cls.icons}>
                        <div className={cls.childIcon}>
                            <Facebook/>
                            <Telegram/>
                        </div>
                        <div className={cls.childIcon}>
                            <Instagram/>
                            <WhatsApp/>
                        </div>
                    </div>
                </div>
                <div className={cls.secondBlock}>
                    <h3 className={cls.h3}>WEDDING RING KNOW</h3>
                    <ul className={cls.ul}>
                        <li className={cls.li}>Wedding rings</li>
                        <li className={cls.li}>Engagement rings</li>
                        <li className={cls.li}>Diamonds</li>
                        <li className={cls.li}>Memoire rings</li>
                        <li className={cls.li}>Jewelery</li>
                        <li className={cls.li}>Contacts</li>
                    </ul>
                </div>
                <div className={cls.thirdBlock}>
                    <h3 className={cls.h3}>CONTACT</h3>
                    <div className={cls.inputs}>
                        <input className={cls.input} type="text" placeholder="Name"/>
                        <input className={cls.input} type="tel" placeholder="Phone"/>
                    </div>
                    <button className={cls.button}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;