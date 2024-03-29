import cls from "./DiscoverBlock.module.css"
import Discover from "../../../assets/contacts/discover-img.png"

const DiscoverBlock = () => {
    return (
        <div className={cls.wrapper}>
            <h4 className={cls.h4}>DISCOVER OVER 60 LOCATIONS IN GERMANY, AUSTRIA, SWITZERLAND AND THE NETHERLANDS</h4>
            <div className={cls.discoverItems}>
                <img src={Discover} alt="discover"/>
                <div className={cls.listCountries}>

                </div>
            </div>
        </div>
    );
};

export default DiscoverBlock;