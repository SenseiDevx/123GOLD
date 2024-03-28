import cls from "./MyCart.module.css"
import MyCartTitle from "../../Components/MyCart/MyCartTitle/MyCartTitle";
import TotalBlock from "../../Components/MyCart/TotalBlock/TotalBlock";
import CardBucket from "../../Components/MyCart/CardBucket/CardBucket";
import OrderNow from "../../Components/MyCart/OrderNow/OrderNow";

const MyCart = () => {
    return (
        <div className="container">
            <MyCartTitle/>
            <TotalBlock/>
            <div className={cls.card}>
                <CardBucket/>
                <CardBucket/>
                <CardBucket/>
            </div>
            <OrderNow/>
        </div>
    );
};

export default MyCart;