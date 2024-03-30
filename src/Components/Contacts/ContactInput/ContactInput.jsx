import cls from "./ContactInput.module.css"

const ContactInput = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>WHERE AM I?</h3>
            <div className={cls.parentInput}>
                <input className={cls.input} type="text" placeholder="location"/>
                <button className={cls.search}>Search</button>
            </div>
        </div>
    );
};

export default ContactInput;