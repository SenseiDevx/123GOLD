import cls from "./Navbar.module.css"
import Gold from "../../assets/123gold-logo.svg";
import WishList from "../../assets/wish-list-logo.svg";
import Card from "../../assets/card-logo.svg"
import Search from "../../assets/search-logo.svg"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.topBlock}>
                <div></div>
                <img src={Gold} alt="gold"/>
                <div className={cls.itemsBlock}>
                    <img src={WishList} alt="wishlist"/>
                    <img src={Card} alt="card"/>
                    <img src={Search} alt="search"/>
                </div>
            </div>
            <div className={cls.listBlock}>
                <ul className={cls.ul}>
                    <NavLink to="/weeding-rings" style={{textDecoration: "none"}}>
                        <li className={cls.link}>
                            Wedding rings
                        </li>
                    </NavLink>
                    <NavLink to="/engagements-rings" style={{textDecoration: "none"}}>
                        <li className={cls.link}>
                            Engagement rings
                        </li>
                    </NavLink>
                    <NavLink to="/engagements-rings" style={{textDecoration: "none"}}>
                        <li className={cls.link}>
                            Diamonds
                        </li>
                    </NavLink>
                    <NavLink to="/weeding-rings" style={{textDecoration: "none"}}>
                        <li className={cls.link}>
                            Memoire
                        </li>
                    </NavLink>
                    <NavLink to="/weeding-rings" style={{textDecoration: "none"}}>
                        <li className={cls.link}>
                            Jewelery
                        </li>
                    </NavLink>
                    <NavLink to="/weeding-rings" style={{textDecoration: "none"}}>
                        <li className={cls.link}>
                            Contacts
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;