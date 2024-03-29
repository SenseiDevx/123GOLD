import cls from "./Navbar.module.css"
import Gold from "../../assets/navbar/123gold-logo.svg";
import WishList from "../../assets/navbar/wish-list-logo.svg";
import Card from "../../assets/navbar/card-logo.svg"
import Search from "../../assets/navbar/search-logo.svg"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.topBlock}>
                <div></div>
                <NavLink to="/">
                    <img src={Gold} alt="gold"/>
                </NavLink>
                <div className={cls.itemsBlock}>
                    <NavLink to="/wish-list/">
                        <img src={WishList} alt="wishlist"/>
                    </NavLink>
                    <NavLink to="/my-cart/">
                        <img src={Card} alt="card"/>
                    </NavLink>
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
                    <NavLink to="/diamonds" style={{textDecoration: "none"}}>
                        <li className={cls.link}>
                            Diamonds
                        </li>
                    </NavLink>
                    <NavLink to="/memoire-rings" style={{textDecoration: "none"}}>
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