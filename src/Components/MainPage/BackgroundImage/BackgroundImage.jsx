import cls from "./BackgroundImage.module.css"

const BackgroundImage = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.content}> {/* Добавьте этот див как контейнер для h1 и button */}
                <h1 className={cls.h1}>For the most beautiful</h1>
                <button className={cls.button}>Discover</button>
            </div>
        </div>
    );
};

export default BackgroundImage;
