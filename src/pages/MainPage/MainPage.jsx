import cls from "./MainPage.module.css"
import BackgroundImage from "../../Components/MainPage/BackgroundImage/BackgroundImage";
import Jewellery from "../../Components/MainPage/Jewellery/Jewellery";
import Categories from "../../Components/MainPage/Categories/Categories";
import BottomOfCategory from "../../Components/MainPage/BottomOfCategory/BottomOfCategory";
import WeedingUniqueRing from "../../Components/MainPage/WeedingUniqueRing/WeedingUniqueRing";

const MainPage = () => {
    return (
        <div className={cls.wrapper}>
            <BackgroundImage/>
            <Jewellery/>
            <Categories/>
            <BottomOfCategory/>
            <WeedingUniqueRing/>
        </div>
    );
};

export default MainPage;