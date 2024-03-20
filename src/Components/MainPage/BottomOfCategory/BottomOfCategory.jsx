import cls from "./BottomOfCategory.module.css"
import {mainSimpleRingData} from "../../../consts/ringData";
import {useNavigate} from "react-router-dom";

const BottomOfCategory = () => {

    const navigate = useNavigate()

    const toRingPage = () => {
        navigate("/ring-page/")
    }

    return (
        <div className="container">
            <div className={cls.wrapper}>
                <div className={cls.topRings}>
                    {mainSimpleRingData.map((ring) => (
                        <div key={ring.id} className={cls.ringBlock} onClick={toRingPage}>
                            <img src={ring.image} alt={`Ring ${ring.id}`} />
                            <h4 className={cls.h4}>{ring.name}</h4>
                            <p className={cls.p}>{ring.parameters}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomOfCategory;