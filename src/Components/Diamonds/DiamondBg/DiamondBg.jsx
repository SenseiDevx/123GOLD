import cls from "./DiamondBg.module.css"

const DiamondBg = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.content}>
                <h1 className={cls.h1}>CERTIFIED DIAMONDS</h1>
                <p className={cls.p}>The best choice for your pieces of jewelry</p>
            </div>
        </div>
    );
};

export default DiamondBg;