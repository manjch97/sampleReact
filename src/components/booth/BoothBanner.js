import React from "react";
import './Booth.scss';
import BoothBannerImage from '../../assets/img/booths/banner.jpg';
import isURL from "validator/lib/isURL";
import {Image} from 'react-bootstrap'

export const BoothBanner = (props) => {
    return (
        <div className="e3-booth-banner">
            <Image src={isURL(props?.image)?props.image:BoothBannerImage} alt="loading" />
            {props.headerText && <div className="centered"> <h1 className="">{props.headerText}</h1></div>}
        </div>
    )
}