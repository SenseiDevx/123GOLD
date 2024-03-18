import cls from "./WeedingUniqueRing.module.css"
import {ReactComponent as Location} from "../../../assets/mainpage/location.svg";
import {ReactComponent as Persons} from "../../../assets/mainpage/persons.svg";
import {ReactComponent as Store} from "../../../assets/mainpage/store.svg";
import {ReactComponent as Like} from "../../../assets/mainpage/like.svg";
import {ReactComponent as Star} from "../../../assets/mainpage/star.svg";
import {ReactComponent as Delivery} from "../../../assets/mainpage/delivery.svg";

const WeedingUniqueRing = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.content}>
                <h1 className={cls.h1}>WEDDING RINGS AND WEDDING BANDS IN UNIQUE TIMES</h1>
                <div className={cls.aboutUs}>
                    <div className={cls.itemsBlock}>
                        <Location/>
                        <h5 className={cls.h5}>Made in Germany</h5>
                        <p className={cls.p}>Depending on the model, the delivery time is 2 to 5 weeks.</p>
                    </div>
                    <div className={cls.itemsBlock}>
                        <Persons/>
                        <h5 className={cls.h5}>We are here for you!</h5>
                        <p className={cls.p}>Whether on-the-spot, over the phone, by Chat, or Video consultation. We look forward to you.</p>
                    </div>
                    <div className={cls.itemsBlock}>
                        <Store/>
                        <h5 className={cls.h5}>Order 24/7 at our Online Shop with the best advice.</h5>
                        <p className={cls.p}>Depending on the model, the delivery time is 2 to 5 weeks.</p>
                    </div>
                    <div className={cls.itemsBlock}>
                        <Like/>
                        <h5 className={cls.h5}>We manufacture them individual pattern rings of the sample to wear.</h5>
                    </div>
                    <div className={cls.itemsBlock}>
                        <Star/>
                        <h5 className={cls.h5}>We offer the highest quality at the best price.</h5>
                    </div>
                    <div className={cls.itemsBlock}>
                        <Delivery/>
                        <h5 className={cls.h5}>All ordered orders, we will ship according to your request directly to your home.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeedingUniqueRing;