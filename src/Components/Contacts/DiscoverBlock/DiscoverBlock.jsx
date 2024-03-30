import cls from "./DiscoverBlock.module.css"
import Discover from "../../../assets/contacts/discover-img.png"
import {ReactComponent as WhatsApp} from "../../../assets/contacts/whatsapp.svg";

const DiscoverBlock = () => {
    return (
        <div className={cls.wrapper}>
            <h4 className={cls.h4}>DISCOVER OVER 60 LOCATIONS IN GERMANY, AUSTRIA, SWITZERLAND AND THE NETHERLANDS</h4>
            <div className={cls.discoverItems}>
                <img src={Discover} alt="discover"/>
                <div className={cls.countyList}>
                    <div className={cls.listCountries}>
                        <h5 className={cls.h5}>Germany</h5>
                        <div className={cls.lists}>
                            <div className={cls.list}>
                                <p className={cls.p}>Aachen</p>
                                <p className={cls.p}>Augsburg</p>
                                <p className={cls.p}>Bad Homburg v. d. h.</p>
                                <p className={cls.p}>Bamberg-Hallstadt</p>
                                <p className={cls.p}>Bergisch Gladbach</p>
                                <p className={cls.p}>Berlin</p>
                                <p className={cls.p}>Bielefeld</p>
                                <p className={cls.p}>Bonn</p>
                                <p className={cls.p}>Bremen</p>
                                <p className={cls.p}>Chemnitz</p>
                                <p className={cls.p}>Dortmund</p>
                                <p className={cls.p}>Dresden</p>
                                <p className={cls.p}>Düsseldorf</p>
                                <p className={cls.p}>Boar cock in Montabaur</p>
                                <p className={cls.p}>Ellwangen</p>
                                <p className={cls.p}>Erfurt</p>
                                <p className={cls.p}>Freiburg</p>
                                <p className={cls.p}>Fulda</p>
                            </div>
                            <div className={cls.list}>
                                <p className={cls.p}>Hamburg</p>
                                <p className={cls.p}>Hannover</p>
                                <p className={cls.p}>Heilbronn</p>
                                <p className={cls.p}>Ingolstadt</p>
                                <p className={cls.p}>Karlsruhe</p>
                                <p className={cls.p}>Kassel</p>
                                <p className={cls.p}>Kiel</p>
                                <p className={cls.p}>Koblenz</p>
                                <p className={cls.p}>Konstanz</p>
                                <p className={cls.p}>Köln Neumarkt</p>
                                <p className={cls.p}>Cologne Opera</p>
                                <p className={cls.p}>Leipzig</p>
                                <p className={cls.p}>Lübeck</p>
                                <p className={cls.p}>Magdeburg</p>
                                <p className={cls.p}>Mainz</p>
                                <p className={cls.p}>Mannheim</p>
                                <p className={cls.p}>Munich</p>
                                <p className={cls.p}>Nordenham</p>
                                <p className={cls.p}>Nuremberg</p>
                                <p className={cls.p}>Oberhausen</p>
                            </div>
                            <div className={cls.list}>
                                <p className={cls.p}>Offenburg</p>
                                <p className={cls.p}>Oldenburg</p>
                                <p className={cls.p}>Osnabrück</p>
                                <p className={cls.p}>Paderborn</p>
                                <p className={cls.p}>Pforzheim</p>
                                <p className={cls.p}>Ravensburg</p>
                                <p className={cls.p}>Regensburg</p>
                                <p className={cls.p}>Rostock</p>
                                <p className={cls.p}>Schwanewede</p>
                                <p className={cls.p}>Straubing</p>
                                <p className={cls.p}>Stuttgart</p>
                                <p className={cls.p}>Ulm</p>
                                <p className={cls.p}>Villingen-Schwenningen</p>
                                <p className={cls.p}>Vreden</p>
                                <p className={cls.p}>Wetzlar</p>
                                <p className={cls.p}>Würzburg</p>
                                <p className={cls.p}>Zell a. h.</p>
                                <p className={cls.p}>Two bridges</p>
                                <p className={cls.p}>Zwickau</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.secondList}>
                        <div className={cls.list}>
                            <h5 className={cls.h5}>AUSTRIA</h5>
                            <p className={cls.p}>Amstetten</p>
                            <p className={cls.p}>Dornbirn</p>
                            <p className={cls.p}>Graz</p>
                            <p className={cls.p}>Innsbruck</p>
                            <p className={cls.p}>Linz</p>
                            <p className={cls.p}>Ried im Innkreis</p>
                            <p className={cls.p}>Salzburg</p>
                            <p className={cls.p}>Villach</p>
                            <p className={cls.p}>Vienna</p>
                        </div>
                        <div className={cls.list}>
                            <h5 className={cls.h5}>SWITZERLAND</h5>
                            <p className={cls.p}>Wädenswil</p>
                        </div>
                        <div className={cls.list}>
                            <h5 className={cls.h5}>NETHERLANDS</h5>
                            <p className={cls.p}>Amsterdam</p>
                        </div>
                    </div>
                    <div className={cls.contact}>
                        <WhatsApp/>
                        <p className={cls.p}>Online shop Germany</p>
                    </div>
                </div>
            </div>
        </div>);
};

export default DiscoverBlock;