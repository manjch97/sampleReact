import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Tab, Tabs, Container, Row, Col, Button, Card, Popover, Image, Form } from "react-bootstrap";
import stream from '../../assets/img/landing/stream.svg';

import user1 from '../../assets/img/landing/user-avt1.svg';
import user2 from '../../assets/img/landing/user-avt2.svg';
import user3 from '../../assets/img/landing/user-avt3.svg';
import gift from '../../assets/img/landing/gift.svg';

export const VideoStreamChat = () => {


    const chatdata = [
        { desc: "Cool!!! Took out loot crates", name: "Donald Richards", image: user3 },
        { desc: "YEP", name: "Bettie Reynolds", image: user1 },
        { desc: "Let goooo", name: "Sally West", image: user2 },
        { desc: "Wow next-gen", name: "Donald Richards", image: user3 },
        { desc: "Here for new PUBG", name: "Donald Richards", image: user2 },
        { desc: "Can’t Wait For This", name: "Ricardo Sherman", image: user1 },
        { desc: "New Skins!", name: "Sally West", image: user2 },
        { desc: "Haha", name: "Rebecca Jones", image: user3 },
        { desc: "This looks awesome", name: "Ricardo Sherman", image: user1 },
        { desc: "Hi Sorammm", name: "Donald Richards", image: user3 },
        { desc: 'Looks Fire', name: "Bettie Reynolds", image: user2 },
        { desc: "Here for new PUBG", name: "Donald Richards", image: user3 },
        { desc: "Can’t Wait For This", name: "Ricardo Sherman", image: user1 },
        { desc: "New Skins!", name: "Sally West", image: user2 },
        { desc: "Haha", name: "Rebecca Jones", image: user3 },

    ]

    return (
        <React.Fragment>
            <Col md={12} xs={12} className="p-0 position-relative" style={{ minHeight: '100%' }}>
                <div className="d-flex" style={{ borderBottom: '2px solid #F2F2F2' }}>
                    <img src={stream} className="p-2" />
                    <p className="p-2 f-13 schat">STREAM CHAT</p>
                </div>
                {chatdata.map(chats =>
                    <div className="d-flex">
                        <div className="p-2"><img src={chats.image} style={{ height: '22px', width: '22px' }} /></div>
                        <div className="f-12 p-2"><span style={{ whiteSpace: 'nowrap' }}>{chats.name}</span><span style={{ marginLeft: '5px' }} className="mr-2">{chats.desc}</span> </div>
                    </div>
                )}
                <Col md={12} xs={12} className="p-0 comment-box">
                    <div className="d-flex">
                        <div className="p-3">
                            <Form.Group className="input-field">
                                <Form.Control style={{ borderRadius: '35px' }}
                                    type="text"
                                    placeholder="Type your comment..."
                                ></Form.Control>
                            </Form.Group>
                        </div>
                        <div className="mr-auto p-3">
                            <img src={gift} style={{ borderRadius: '25px' }} />
                        </div>
                    </div>
                </Col>
            </Col>

        </React.Fragment>
    );
}