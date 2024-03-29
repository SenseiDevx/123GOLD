import cls from "./CaratDescription.module.css"
import {ReactComponent as Arrow} from "../../../assets/aboutRing/bottom-arrow.svg";
import CaratSchema1 from "../../../assets/diamonds/carat_schema-1.png"
import CaratSchema2 from "../../../assets/diamonds/color_schema-2.png"
import CaratSchema3 from "../../../assets/diamonds/clarity_schema-3.png"

const CaratDescription = () => {

    const arr1 = "The weight of diamonds is carat (English, carat, abbreviated as ct.) specified. 1 carat is equal to 0.2 grams and is divided into 100 points. Therefore, a half a carat weighs 0.1 grams and has 50 points. Not to be confused with the weight of a diamond to its size, which is additionally influenced by the dimensions of the diamond and the cut quality is. Important to know: all factors equal, diamond with a higher carat number of valuable as a diamond with less weight."
    const arr2 = "The word carat derives from the Greek word \"Keration\" as a name for the Pod of the carob tree, a mathematical miracle of nature: Every full-grown seed, the Bean has the same weight. A metric carat is equal to exactly 0.2 grams. Therefore, these seeds were used grains formerly used by jewellers as a reliable measure for the weight of Gold and precious stones."
    const arr3 = "For jewelry purposes of diamonds are used on all the sizes. Brilliant from 1/4 carat, are particularly suitable for Solitaire rings. In the following table, the various sizes of brilliant-cut diamonds with your approximate diameter to be displayed. This can vary depending on the individual execution of a diamond's cut."
    const arr4 = "The cut of a diamond determines the Sparkle of stone, and is the criterion, the influence the beauty of a diamond is important, because the proportions are crucial for the Reflection of the light. The ideal cut has an extraordinary brilliance, the best proportions and symmetry. The excellent cut and brilliance, proportions and symmetry are all excellent. The brilliance of drops on the graduations \"very good\" (= excellent brilliance), \"good\" (= good brilliance), \"medium\" (= slightly less brilliance) or \"unusual\" (= little brilliance). In the case of proportions and symmetry of the deviations with decreasing quality of the diamonds are bigger."
    const arr5 = "Diamonds come in a variety of colors. The value of a diamond, the stone, the more sparkling and value: The more colorless full he is. White light enters in the color spectrum of the rainbow again. The precious diamonds in the color \"River\" (= high fine White), followed by \"Top Wesselton\" (= fine White), and including \"cut diamonds\" (= White, standard quality)."
    const arr6 = "According to the laboratory is the color of diamonds with different terms, graduated at the"
    const arr7 = "River, the color most, blue white diamond, bears the letters D and E."
    const arr8 = "F, and G denotes the fine White Top Wesselton."
    const arr9 = "Diamonds with the color of Wesselton are white and carry the letter h."
    const arr10 = "Meanwhile, so-called Fancy Diamonds, or \"Fancies\" a diamond with a clear, evenly coloring are traded, as even more valuable. Fancies only make up one percent of the world production. Especially intense red and pink diamonds are extremely rare and therefore expensive. Currently the most expensive diamond in the world, a pink stone in the emerald cut, with a weight of 24.7 carats was bought by a diamond dealer for more than $ 46 million."
    const arr11 = "A diamond is, the more pure and valuable, the fewer the inclusions it has. Under inclusions understood to be included minerals, cracks, or growth phenomena, which affect the optimal light penetration of the diamond. For jewelry, diamonds are not or are not immediately recognizable, it is important that inclusions visible to the naked eye. If diamonds serve as an investment, thus, a higher degree of purity is particularly important. Flawless diamonds, and the ten-times magnification no inclusions, are the purest diamonds and correspondingly rare. The official rating ranges from FL/IF (internally flawless) to P3 (coarse inclusions). The scheme in Detail:"


    return (
        <div className={cls.wrapper}>
            <div className={cls.firstBlock}>
                <div className={cls.selectBlock}>
                    <Arrow/>
                    <h6 className={cls.h6}>CARAT WEIGHT</h6>
                    <Arrow/>
                </div>
                <div className={cls.textBlock}>
                    <p className={cls.p}>{arr1}</p>
                    <p className={cls.p}>{arr2}</p>
                    <p className={cls.p}>{arr3}</p>
                </div>
                <img className={cls.schema} src={CaratSchema1} alt="carat-schema"/>
            </div>
            <div className={cls.secondBlock}>
                <div className={cls.selectBlock}>
                    <Arrow/>
                    <h6 className={cls.h6}>CUT – CUT</h6>
                    <Arrow/>
                </div>
                <div className={cls.textBlock}>
                    <p className={cls.p}>{arr4}</p>
                </div>
                <div className={cls.childBlock}>
                    <div className={cls.item}>
                        <h6 className={cls.h6}>Excellent</h6>
                        <h6 className={cls.h6}>Very Good</h6>
                        <h6 className={cls.h6}>Good</h6>
                        <h6 className={cls.h6}>Fair</h6>
                        <h6 className={cls.h6}>Poor exterior features</h6>
                    </div>
                    <div className={cls.item}>
                        <h6 className={cls.h6}>Optimum Grinding</h6>
                        <h6 className={cls.h6}>Very good cut</h6>
                        <h6 className={cls.h6}>Good Cut Good</h6>
                        <h6 className={cls.h6}>Medium Cut</h6>
                        <h6 className={cls.h6}>Low Cut</h6>
                    </div>
                    <div className={cls.item}>
                        <h6 className={cls.h6}>The best possible brilliance, no external characteristics</h6>
                        <h6 className={cls.h6}>Excellent brilliance, a few or only minor exterior features</h6>
                        <h6 className={cls.h6}>Brilliance, some exterior</h6>
                        <h6 className={cls.h6}>Reduced brilliance, a number of major external features</h6>
                        <h6 className={cls.h6}>Brilliance is significantly reduced, large and/or numerous</h6>
                    </div>
                </div>
            </div>
            <div className={cls.thirdBlock}>
                <div className={cls.selectBlock}>
                    <Arrow/>
                    <h6 className={cls.h6}>COLOUR – COLOR</h6>
                    <Arrow/>
                </div>
                <div className={cls.textBlock}>
                    <p className={cls.p}>{arr5}</p>
                    <div>
                        <p className={cls.p}>{arr6}</p>
                        <p className={cls.p}>{arr7}</p>
                        <p className={cls.p}>{arr8}</p>
                        <p className={cls.p}>{arr9}</p>
                    </div>
                    <p className={cls.p}>{arr10}</p>
                </div>
                <img className={cls.schema} src={CaratSchema2} alt="carat-schema"/>
            </div>
            <div className={cls.fourthBlock}>
                <div className={cls.selectBlock}>
                    <Arrow/>
                    <h6 className={cls.h6}>COLOUR – COLOR</h6>
                    <Arrow/>
                </div>
                <p className={cls.p}>{arr11}</p>
                <img className={cls.schema} src={CaratSchema3} alt="carat-3"/>
            </div>
        </div>
    );
};

export default CaratDescription;