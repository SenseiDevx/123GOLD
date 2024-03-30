import React from 'react';
import cls from "./JeweleryRings.module.css";
import {topRingData} from "../../../consts/ringData";
import {useNavigate} from "react-router-dom";

const JeweleryRings = () => {

    const navigate = useNavigate()

    const topRingPage = () => {
        navigate("/ring-page/")
    }


    return (
        <div className={cls.wrapper}>
            <div className={cls.topRings}>
                {topRingData.map((ring) => (
                    <div key={ring.id} className={cls.ringBlock} onClick={topRingPage}>
                        <img src={ring.image} alt={`Ring ${ring.id}`} />
                        <h4 className={cls.h4}>{ring.status}</h4>
                        <p className={cls.p}>{ring.description}</p>
                        <button className={cls.button}>Discover now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JeweleryRings;