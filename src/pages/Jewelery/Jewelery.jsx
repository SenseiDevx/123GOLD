import cls from './Jewelery.module.css'
import JeweleryBg from "../../Components/Jewelery/JeweleryBg/JeweleryBg";
import JeweleryRings from "../../Components/Jewelery/JeweleryRings/JeweleryRings";
import AllGoldGoes from "../../Components/Jewelery/AllGoldGoes/AllGoldGoes";
import ForYou from "../../Components/MainPage/ForYou/ForYou";
import DiversityBg from "../../Components/Jewelery/DiversityBg/DiversityBg";

const Jewelery = () => {
    return (
        <div>
            <JeweleryBg/>
            <div className="container">
                <JeweleryRings/>
                <AllGoldGoes/>
                <ForYou/>
            </div>
            <DiversityBg/>
        </div>
    );
};

export default Jewelery;