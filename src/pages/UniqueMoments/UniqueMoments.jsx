import cls from "./UniqueMoments.module.css"
import MemoireBg from "../../Components/UniqueMoments/MemoireBg/MemoireBg";
import UniqueRings from "../../Components/UniqueMoments/UniqueRings/UniqueRings";
import UniqueTexts from "../../Components/UniqueMoments/UniqueTexts/UniqueTexts";
import ForYou from "../../Components/MainPage/ForYou/ForYou";
import EngagementBrilliant from "../../Components/EngagementRings/EngagementBrilliant/EngagementBrilliant";

const UniqueMoments = () => {
    return (
        <div>
            <MemoireBg/>
            <div className="container">
                <UniqueRings/>
                <UniqueTexts/>
                <ForYou/>
            </div>
            <EngagementBrilliant/>
        </div>
    );
};

export default UniqueMoments;