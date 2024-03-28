import cls from "./TotalBlock.module.css"

const TotalBlock = () => {
    return (
        <div className={cls.wrapper}>
            <p className={cls.p}>Total amount incl. Shipping (0€)</p>
            <h3 className={cls.h3}>1.503,00 EUR</h3>
        </div>
    );
};

export default TotalBlock;