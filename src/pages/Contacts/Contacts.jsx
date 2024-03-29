import cls from "./Contacts.module.css"
import ContactsBg from "../../Components/Contacts/ContactsBg/ContactsBg";
import DiscoverBlock from "../../Components/Contacts/DiscoverBlock/DiscoverBlock";

const Contacts = () => {
    return (
        <div>
            <ContactsBg/>
            <div className="container">
                <DiscoverBlock/>
            </div>
        </div>
    );
};

export default Contacts;