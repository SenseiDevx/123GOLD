import cls from "./MyCartTitle.module.css"
import {useNavigate} from "react-router-dom";

const MyCartTitle = () => {

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={cls.wrapper}>
            <button className={cls.button} onClick={back}>Back</button>
            <h1 className={cls.h1}>MY CART</h1>
            <div className={cls.void}></div>
        </div>
    );
};

export default MyCartTitle;