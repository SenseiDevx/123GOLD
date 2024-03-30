import cls from "./ContactBlock.module.css"

const ContactBlock = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.firstBlock}>
                <h6 className={cls.h6}>123GOLD WEDDING RING-CENTER AACHEN</h6>
                <p className={cls.p}>Book Kremer Str. 6</p>
                <p className={cls.p}>52062 Aachen</p>
                <p className={cls.p}>aachen@123gold.de</p>
                <p className={cls.p}>+49 241 47580913</p>
            </div>
            <div className={cls.secondBlock}>
                <h3 className={cls.h3}>CONTACT</h3>
                <div className={cls.inputs}>
                    <input className={cls.input} type="text" placeholder="Name"/>
                    <input className={cls.input} type="tel" placeholder="Phone"/>
                </div>
                <button className={cls.button}>Send</button>
            </div>
            <div className={cls.thirdBlock}>
                <h3 className={cls.h3}>ADDRESS AND CONTACT</h3>
                <div className={cls.data}>
                    <h5 className={cls.h5}>TRAURINGLOUNGE SALZBURG GMBH</h5>
                    <p className={cls.p}>Paracelsusstr. 11a</p>
                    <p className={cls.p}>5020 Salzburg</p>
                </div>
                <div className={cls.data}>
                    <h5 className={cls.h5}>PHONE</h5>
                    <p className={cls.p}>+43 662 875 100</p>
                </div>
                <div className={cls.data}>
                    <h5 className={cls.h5}>E-MAIL</h5>
                    <p className={cls.p}>salzburg@123gold.at</p>
                </div>
            </div>
        </div>
    );
};

export default ContactBlock;