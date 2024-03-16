import cls from "./MainPage.module.css"
import BackgroundImage from "../../Components/MainPage/BackgroundImage/BackgroundImage";
import Jewellery from "../../Components/MainPage/Jewellery/Jewellery";
import Categories from "../../Components/MainPage/Categories/Categories";

const MainPage = () => {
    return (
        <div className={cls.wrapper}>
            <BackgroundImage/>
            <Jewellery/>
            <Categories/>
        </div>
    );
};

export default MainPage;