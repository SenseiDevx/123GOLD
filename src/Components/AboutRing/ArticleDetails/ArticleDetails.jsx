import cls from "./ArticleDetails.module.css"
import Img from "../../../assets/aboutRing/right-block-image.png"

const ArticleDetails = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.titles}>
                <h5 className={cls.h5}>Article Details</h5>
                <h5 className={cls.h5}>Your benefits at 123gold</h5>
            </div>
            <div className={cls.childBlock}>
                <div className={cls.leftBlock}>
                    <div className={cls.firstBlock}>
                        <h4 className={cls.h4}>Brand:</h4>
                        <h4 className={cls.h4}>Set Price:</h4>
                        <h4 className={cls.h4}>ID:</h4>
                        <h4 className={cls.h4}>Availability:</h4>
                        <h4 className={cls.h4L}>Description:</h4>
                    </div>
                    <div className={cls.description}>
                        <h4 className={cls.h4}>Steinberg Individuals</h4>
                        <h4 className={cls.h4}>1.248,- EUR</h4>
                        <h4 className={cls.h4}>Q-1634-2</h4>
                        <h4 className={cls.h4}>Available for order; up to 4 weeks production time, on request also shorter</h4>
                        <h4 className={cls.h4}>Couple wedding rings from Steinberg in yellow gold 585/- finish: polished with zus. 0,1 ct. Tw / si (product 1, with stone trim, product 2, without a stone trim) brilliant</h4>
                    </div>
                </div>
                <div className={cls.rightBlock}>
                    <img src={Img} alt="img"/>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;