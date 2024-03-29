import cls from "./ContactsBg.module.css"

const ContactsBg = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.content}>
                <h1 className={cls.h1}>ON-SITE CONSULTATION</h1>
                <button className={cls.button}>Discover</button>
            </div>
        </div>
    );
};

export default ContactsBg;