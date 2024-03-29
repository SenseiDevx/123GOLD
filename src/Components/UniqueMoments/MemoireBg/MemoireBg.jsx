import cls from "./MemoireBg.module.css"

const MemoireBg = () => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.content}>
                <h1 className={cls.h1}>UNIQUE MOMENTS</h1>
                <p className={cls.p}>For the most pleasant memories, our heart touching</p>
            </div>
        </div>
    );
};

export default MemoireBg;