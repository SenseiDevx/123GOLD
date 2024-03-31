import cls from './Jewelery.module.css'
import JeweleryBg from "../../Components/Jewelery/JeweleryBg/JeweleryBg";
import JeweleryRings from "../../Components/Jewelery/JeweleryRings/JeweleryRings";
import AllGoldGoes from "../../Components/Jewelery/AllGoldGoes/AllGoldGoes";
import ForYou from "../../Components/MainPage/ForYou/ForYou";
import DiversityBg from "../../Components/Jewelery/DiversityBg/DiversityBg";
import JeweleryService from "../../Components/Jewelery/JeweleryService/JeweleryService";

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
            <div className="container">
                <JeweleryService/>
            </div>
        </div>
    );
};

export default Jewelery;