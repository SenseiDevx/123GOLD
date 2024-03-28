import cls from "./OrderNow.module.css"
import {ReactComponent as Visa} from "../../../assets/cart/Visa.svg";
import {ReactComponent as MasterCard} from "../../../assets/cart/Mastercard.svg";
import {ReactComponent as PayPal} from "../../../assets/cart/PayPal.svg";

const OrderNow = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>ORDER NOW</h3>
            <div className={cls.waysPayment}>
                <div className={cls.first}>
                    <Visa/>
                    <p className={cls.p}>Viza, MasterCard</p>
                    <MasterCard/>
                </div>
                <div className={cls.second}>
                    <PayPal/>
                    <p className={cls.p}>Pay Pal</p>
                </div>
            </div>
        </div>
    );
};

export default OrderNow;