import cls from "./MainPage.module.css"
import BackgroundImage from "../../Components/MainPage/BackgroundImage/BackgroundImage";
import Jewellery from "../../Components/MainPage/Jewellery/Jewellery";
import Categories from "../../Components/MainPage/Categories/Categories";
import BottomOfCategory from "../../Components/MainPage/BottomOfCategory/BottomOfCategory";
import WeedingUniqueRing from "../../Components/MainPage/WeedingUniqueRing/WeedingUniqueRing";
import ForYou from "../../Components/MainPage/ForYou/ForYou";
import MoreService from "../../Components/MainPage/MoreService/MoreService";

const MainPage = () => {
    return (
        <div className={cls.wrapper}>
            <BackgroundImage/>
            <Jewellery/>
            <Categories/>
            <BottomOfCategory/>
            <WeedingUniqueRing/>
            <ForYou/>
            <MoreService/>
        </div>
    );
};

export default MainPage;