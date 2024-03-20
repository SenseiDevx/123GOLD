import cls from "./AboutRing.module.css"
import LeftRingImage from "../../Components/AboutRing/LeftRingImage/LeftRingImage";
import RightCustomize from "../../Components/AboutRing/RightCustomize/RightCustomize";
import ArticleDetails from "../../Components/AboutRing/ArticleDetails/ArticleDetails";
import ShareToSocial from "../../Components/AboutRing/ShareToSocial/ShareToSocial";

const AboutRing = () => {
    return (
        <div className="container">
            <div className={cls.item1}>
                <LeftRingImage/>
                <RightCustomize/>
            </div>
            <ArticleDetails/>
            <ShareToSocial/>
        </div>
    );
};

export default AboutRing;