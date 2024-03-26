import cls from "./WeedingRings.module.css"
import BgImage from "../../Components/WeedingRings/BgImage/BgImage";
import Categories from "../../Components/MainPage/Categories/Categories";
import BottomOfCategory from "../../Components/MainPage/BottomOfCategory/BottomOfCategory";
import WeedingUniqueRing from "../../Components/MainPage/WeedingUniqueRing/WeedingUniqueRing";
import ForYou from "../../Components/MainPage/ForYou/ForYou";
import MoreService from "../../Components/MainPage/MoreService/MoreService";


const WeedingRings = () => {
    return (
        <div className={cls.wrapper}>
            <BgImage/>
            <Categories/>
            <BottomOfCategory/>
            <WeedingUniqueRing/>
            <ForYou/>
            <MoreService/>
        </div>
    );
};

export default WeedingRings;