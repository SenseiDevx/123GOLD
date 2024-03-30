import cls from "./Contacts.module.css"
import ContactsBg from "../../Components/Contacts/ContactsBg/ContactsBg";
import DiscoverBlock from "../../Components/Contacts/DiscoverBlock/DiscoverBlock";
import ContactInput from "../../Components/Contacts/ContactInput/ContactInput";
import ContactBlock from "../../Components/Contacts/ContactBlock/ContactBlock";

const Contacts = () => {
    return (
        <div>
            <ContactsBg/>
            <div className="container">
                <DiscoverBlock/>
                <ContactInput/>
                <ContactBlock/>
            </div>
        </div>
    );
};

export default Contacts;