import cls from "./EngagementRings.module.css"
import BgEngagementImage from "../../Components/EngagementRings/BgEngagementImage/BgEngagementImage";
import Categories from "../../Components/MainPage/Categories/Categories";
import EngagementTexts from "../../Components/EngagementRings/EngagementTexts/EngagementTexts";
import ForYou from "../../Components/MainPage/ForYou/ForYou";
import EngagementBrilliant from "../../Components/EngagementRings/EngagementBrilliant/EngagementBrilliant";

const EngagementRings = () => {
    return (
        <div className={cls.wrapper}>
            <BgEngagementImage/>
            <div className="container">
                <Categories/>
                <EngagementTexts/>
                <ForYou/>
            </div>
            <EngagementBrilliant/>
        </div>
    );
};

export default EngagementRings;