import cls from "./BottomOfCategory.module.css"
import {mainSimpleRingData} from "../../../consts/ringData";

const BottomOfCategory = () => {
    return (
        <div className="container">
            <div className={cls.wrapper}>
                <div className={cls.topRings}>
                    {mainSimpleRingData.map((ring) => (
                        <div key={ring.id} className={cls.ringBlock}>
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