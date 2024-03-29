import cls from "./EngagementBrilliant.module.css"
import Bg from "../../../assets/backgrounds/bg-brilliant.png"

const EngagementBrilliant = () => {
    return (
        <div className={cls.wrapper}>
            <img className={cls.img} src={Bg} alt="bg"/>
        </div>
    );
};

export default EngagementBrilliant;