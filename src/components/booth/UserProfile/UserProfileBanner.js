import React from "react";
import '../Booth.scss';

export const UserProfileBanner = (props) => {
    return (
        <div className="e3-booth-banner">
            <img src={props.image} />
        </div>
    )
}
export default UserProfileBanner;