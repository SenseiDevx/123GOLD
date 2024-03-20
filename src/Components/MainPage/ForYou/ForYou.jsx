import cls from "./ForYou.module.css"
import Img1 from "../../../assets/mainpage/meeting.png"
import Img2 from "../../../assets/mainpage/coding.png"
import Img3 from "../../../assets/mainpage/girl-presentation.png"

const ForYou = () => {
    return (
        <div className="container">
            <div className={cls.wrapper}>
                <h1 className={cls.h1}>WE ARE HERE FOR YOU!</h1>
                <p className={cls.p}>#Stay healthy</p>
                <div className={cls.images}>
                    <img src={Img1} alt="image1"/>
                    <img src={Img2} alt="image2"/>
                    <img src={Img3} alt="image3"/>
                </div>
            </div>
        </div>
    );
};

export default ForYou;