import cls from "./EngagementTexts.module.css"

const EngagementTexts = () => {
    return (
        <div className={cls.wrapper}>
            <h3 className={cls.h3}>ENGAGEMENT RINGS - UNIQUE AS THE LOVE</h3>
            <div className={cls.texts}>
                <div className={cls.items}>
                    <h6 className={cls.h6}>ARE YOU LOOKING FOR YOUR FAVORITES</h6>
                    <p className={cls.p}>Browse through our collections, playing with the Configurator and use to Save the wish list.</p>
                </div>
                <div className={cls.items}>
                    <h6 className={cls.h6}>YOU CAN ENJOY TOP-QUALITY ADVICE</h6>
                    <p className={cls.p}>Visit a location near you and take you by the Hand to find the perfect Ring for your better half.</p>
                </div>
                <div className={cls.items}>
                    <h6 className={cls.h6}>LET YOUR DREAMS COME TRUE</h6>
                    <p className={cls.p}>We work with you to customize the engagement ring according to your ideas.</p>
                </div>
            </div>
        </div>
    );
};

export default EngagementTexts;