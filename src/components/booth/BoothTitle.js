import React from "react";
import './Booth.scss';
import BoothLogo from '../../assets/img/booths/boothLogo.png';
import {Image} from 'react-bootstrap'
import isURL from "validator/lib/isURL";

export const BoothTitle = (props) => {

    return (
        <div className='e3-booth-title-container'>
            <div className='e3-booth-logo'>
                <Image src={isURL(props.data?.boothLogoUrl)?props.data.boothLogoUrl:BoothLogo} alt="loading.." />
                <span className='e3-booth-badge badge'>{ props.data.isLive === "true" && 'LIVE'}</span>
            </div>
            <div className='e3-booth-title pt-3'>
                <h4>{props.data.boothName}</h4>
                <p className='e3-booth-sub-title'>{props.data.boothCaption}</p>
            </div>
        </div>
    )
}