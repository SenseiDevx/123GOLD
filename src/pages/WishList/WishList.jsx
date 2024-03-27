import cls from "./WishList.module.css"
import WishListTitle from "../../Components/WishList/WishListTitle/WishListTitle";
import WishListCard from "../../Components/WishList/WishListCard/WishListCard";

const WishList = () => {
    return (
        <div className="container">
            <WishListTitle/>
            <div className={cls.card}>
                <WishListCard/>
                <WishListCard/>
                <WishListCard/>
                <WishListCard/>
                <WishListCard/>
                <WishListCard/>
            </div>
        </div>
    );
};

export default WishList;