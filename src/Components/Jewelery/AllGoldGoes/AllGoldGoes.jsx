import cls from "./AllGoldGoes.module.css"
import First from "../../../assets/jewelery/first.png"
import Second from "../../../assets/jewelery/second.png"
import Third from "../../../assets/jewelery/third.png"
import Fourth from "../../../assets/jewelery/fourth.png"
import Five from "../../../assets/jewelery/five.png"

const AllGoldGoes = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>SO 123GOLD GOES</h3>
            <div className={cls.childBlock}>
                <div className={cls.item}>
                    <img className={cls.img} src={First} alt="first"/>
                    <div className={cls.texts}>
                        <h3 className={cls.h3}>1.</h3>
                        <h4 className={cls.h4}>VIELFALT UND INSPIRATION</h4>
                        <p className={cls.p}>Wahlen Sie ihr Lieblingsmodell aus unseren umfangreichen Katologen.</p>
                    </div>
                </div>
                <div className={cls.item}>
                    <img className={cls.img} src={Second} alt="first"/>
                    <div className={cls.texts}>
                        <h3 className={cls.h3}>2.</h3>
                        <h4 className={cls.h4}>PROFESSIONELLE BERATUNG</h4>
                        <p className={cls.p}>Wir begleiten Sie bei der individualisierung ihrer Traumringe.</p>
                    </div>
                </div>
                <div className={cls.item}>
                    <img className={cls.img} src={Third} alt="first"/>
                    <div className={cls.texts}>
                        <h3 className={cls.h3}>3.</h3>
                        <h4 className={cls.h4}>RINGGROBEN - SERVICE</h4>
                        <p className={cls.p}>Ermitteln Sie mit uns ihre Ringgrobe fur den hochten Tragekomfort.</p>
                    </div>
                </div>
                <div className={cls.item}>
                    <img className={cls.img} src={Fourth} alt="first"/>
                    <div className={cls.texts}>
                        <h3 className={cls.h3}>4.</h3>
                        <h4 className={cls.h4}>INDIVIDUELLE MUSTERRINGE</h4>
                        <p className={cls.p}>Bestellen Sie Ihre Traumringe als Muster zum Probetragen.</p>
                    </div>
                </div>
                <div className={cls.item}>
                    <img className={cls.img} src={Five} alt="first"/>
                    <div className={cls.texts}>
                        <h3 className={cls.h3}>5.</h3>
                        <h4 className={cls.h4}>BESTELLUNG UND VORFREUDE</h4>
                        <p className={cls.p}>Wir fertigen Ihre Ringe in den besten Manufacturen Deutschlands.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllGoldGoes;