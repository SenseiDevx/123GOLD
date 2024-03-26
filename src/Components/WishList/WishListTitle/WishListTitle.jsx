import cls from "./WishListTitle.module.css"
import {useNavigate} from "react-router-dom";

const WishListTitle = () => {

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return (
        <div className={cls.wrapper}>
            <button className={cls.button} onClick={back}>Back</button>
            <h1 className={cls.h1}>WISH LIST</h1>
            <div className={cls.div}></div>
        </div>
    );
}

export default WishListTitle;