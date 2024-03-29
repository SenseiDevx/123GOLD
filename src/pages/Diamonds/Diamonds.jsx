import cls from "./Diamonds.module.css"
import DiamondBg from "../../Components/Diamonds/DiamondBg/DiamondBg";
import DiamondsBlock from "../../Components/Diamonds/DiamondsBlock/DiamondsBlock";
import PremiumBg from "../../Components/Diamonds/PremiumBg/PremiumBg";
import CertifiedBg from "../../Components/Diamonds/CertifiedBg/CertifiedBg";
import GiaCertificate from "../../Components/Diamonds/GiaCertificate/GiaCertificate";
import CaratDescription from "../../Components/Diamonds/CaratDescription/CaratDescription";

const Diamonds = () => {
    return (
        <div>
            <DiamondBg/>
            <div className="container">
                <DiamondsBlock/>
            </div>
            <PremiumBg/>
            <CertifiedBg/>
            <div className="container">
                <GiaCertificate/>
                <CaratDescription/>
            </div>
        </div>
    );
};

export default Diamonds;