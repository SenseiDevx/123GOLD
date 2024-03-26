import cls from "./WishList.module.css"
import WishListTitle from "../../Components/WishList/WishListTitle/WishListTitle";
import WishListCard from "../../Components/WishList/WishListCard/WishListCard";

const WishList = () => {
    return (
        <div className="container">
            <WishListTitle/>
            <WishListCard/>
        </div>
    );
};

export default WishList;