import cls from "./UniqueTexts.module.css"

const UniqueTexts = () => {
    return (
        <div className={cls.wrapper}>
            <h2 className={cls.h2}>ENGAGEMENT RINGS - UNIQUE AS THE LOVE</h2>
            <div className={cls.textBlocks}>
                <div className={cls.textItem}>
                    <h5 className={cls.h5}>ARE YOU LOOKING FOR YOUR FAVORITES</h5>
                    <p className={cls.p}>Browse through our collections, playing with the Configurator and use to Save the wish list.</p>
                </div>
                <div className={cls.textItem}>
                    <h5 className={cls.h5}>YOU CAN ENJOY TOP-QUALITY ADVICE</h5>
                    <p className={cls.p}>Visit a location near you and take you by the Hand to find the perfect Ring for your better half.</p>
                </div>
                <div className={cls.textItem}>
                    <h5 className={cls.h5}>LET YOUR DREAMS COME TRUE</h5>
                    <p className={cls.p}>We work with you to customize the engagement ring according to your ideas.</p>
                </div>
            </div>
        </div>
    );
};

export default UniqueTexts;