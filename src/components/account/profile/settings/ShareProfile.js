import React, {useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Image } from 'react-bootstrap';
import medal from '../../../../assets/img/landing/medal.svg';
import cup from '../../../../assets/img/landing/won-cup.svg'
import phone from '../../../../assets/img/landing/phone.svg';
import mail from '../../../../assets/img/landing/mail.svg';
import website from '../../../../assets/img/landing/website.svg';
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import { Customer } from '../../../../services/Api'
import { GetSimpleAvatar, GetSpinner } from '../../../../helper/CommonHelper';
import isURL from "validator/lib/isURL";

const ShareProfile = props => {

    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!profile) {
            Customer.getCustomerBusinessCard().then(response => {
                setProfile(response);
                setIsLoading(false);
            }).catch(err => {
                setIsLoading(false);
                console.log("Error Occured while fetching Business Card", err);
            });
        }
      });

    return (
            <Modal size="lg" centered show={props.show} onHide = {props.handleShareYourProfileClick} animation={false} >
                <FocusLock>
                    <AutoFocusInside>
                        <Modal.Header className="font-weight-light border-0" closeButton />
                        <Modal.Body onClick={e => e.stopPropagation()}>
                            <h5 className="d-flex justify-content-center">SHARE YOUR &nbsp;<span style={{ color: '#E73D2F' }}>PROFILE</span></h5>
                            <div className="my-2 pt-3"></div>
                            {isLoading ?  <GetSpinner /> :
                               <React.Fragment>
                                <Row>
                                    <Col md={4}>
                                        {/* <Image src={profilepic} alt="" /> */}
                                        <GetSimpleAvatar avatarUrl={profile.avatarUrl} avatarInitial={profile.avatarInitial}/>
                                    </Col>
                                    <Col md={8}>
                                        <Col md={7}>
                                            <div className="p-2 "><span style={{ whiteSpace: 'nowrap', fontSize: '18px', fontWeight: '500' }}>{profile.displayName}</span>&nbsp;<sub style={{ color: '#E73D2F', fontSize: 'x-small', fontWeight: '500' }}>{profile.caption}</sub></div>
                                        </Col>
                                        <Col md={3} className="d-flex justify-content-center">
                                            <div className="p-2"><Image src={profile.badgeIconUrl? (isURL(profile.badgeIconUrl) ? profile.badgeIconUrl : medal) : medal} alt="Medal" />{profile.badgesCount}</div><div className="p-2"> <Image src={profile.awardCupUrl ? (isURL(profile.awardCupUrl) ? profile.awardCupUrl : cup): cup} alt="Cup" />{profile.awardsCount}</div>
                                        </Col>
                                        <Col md={12} className="d-flex justify-content-start">
                                            <p>{profile.description}</p>
                                        </Col>
                                        <Col md={7} className="d-flex justify-content-start p-2">
                                            <Image src={profile.phoneIconUrl? (isURL(profile.phoneIconUrl) ? profile.phoneIconUrl : phone) : phone} alt="Phone" /> &nbsp;<span>{profile.contactNumber}</span>
                                        </Col>
                                        <Col md={7} className="d-flex justify-content-start p-2">
                                            <Image src={profile.emailIconUrl? (isURL(profile.emailIconUrl) ? profile.emailIconUrl : mail) : mail} alt="Mail" />&nbsp;<span>{profile.email}</span>
                                        </Col>
                                        <Col md={7} className="d-flex justify-content-start p-2">
                                            <Image src={profile.wwwIconUrl? (isURL(profile.wwwIconUrl) ? profile.wwwIconUrl : website): website} alt="Website" />&nbsp;<span>{profile.website}</span>
                                        </Col>
                                    </Col>
                                </Row>
                                <div className="my-2 pt-3"></div>
                                <Row>
                                    <Col className="text-center PrimaryBtn">
                                        <Button variant="primary" className="my-2" size="sm" >Share</Button>
                                    </Col>
                                </Row>
                                <div className="my-2 pt-3"></div>
                                </React.Fragment>
                            }
                            
                        </Modal.Body>
                    </AutoFocusInside>
                </FocusLock>
            </Modal>
    )
}

export default ShareProfile
