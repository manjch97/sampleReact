import React, { useState, useCallback } from "react";
import { Row, Col, Form, Container, Button, Card, Tabs, Tab, Image, DropdownButton, Dropdown, Modal } from "react-bootstrap";
import { ArrowLeft, ChatLeftDotsFill, Heart, HeartFill, ClockFill, ThreeDots, XCircleFill, CheckCircleFill } from "react-bootstrap-icons";
import './forum.scss'
import win from '../../assets/img/forum/windows.jpg';
import { FEATURED, RECENT, SEARCHED, FEATURED_TEXT, RECENT_TEXT, SEARCHED_TEXT } from "../../constants/CommonConstants";
import isURL from "validator/lib/isURL";
import { Link } from "react-router-dom";
import { GetAvatar, GetSpinner } from "../../helper/CommonHelper";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom";
import * as IconSvg from '../account/login/IconSvg';
import { isEmpty } from "lodash";
import { Forum } from "../../services/Api";
import { displayToastSuccess } from "../../helper/ToastHelper";
import { useSelector } from "react-redux";
import trim from "validator/lib/trim";
import {
    FEATUREDTOPICS_EMPTY, COMMENTORS_EMPTY, TOPICDETAILS_EMPTY, COMMENTS_EMPTY, NOTHING_EMPTY
} from "../../constants/CommonConstants";
import FocusLock, { AutoFocusInside } from "react-focus-lock";
import { number } from "prop-types";
// Navbar for Forum Main
export const ForumMainNav = (props) => {
    return (
        <React.Fragment>
            <Col lg={9}>
                <Col className="forumTab px-0 ">
                    <Tabs defaultActiveKey={FEATURED} className="pt-1 pl-2" onSelect={props.handleForumNav}>
                        <Tab eventKey={FEATURED} className="tabcustom" title={FEATURED_TEXT}>
                            {
                                FEATURED == props.CurrentTab &&
                                <ForumTopic dataTab={FEATURED} updateLike={props.updateLike} fetchMoreData={props.fetchMoreData} data={props.Featured} currentTab={props.CurrentTab} navigateToForum={props.navigateToForum} />
                            }
                        </Tab>
                        <Tab eventKey={RECENT} className="tabcustom" title={RECENT_TEXT}>
                            {
                                RECENT == props.CurrentTab &&
                                <ForumTopic dataTab={RECENT} updateLike={props.updateLike} fetchMoreData={props.fetchMoreData} data={props.Recent} currentTab={props.CurrentTab} navigateToForum={props.navigateToForum} />
                            }
                        </Tab>
                        <Tab eventKey={SEARCHED} className="tabcustom" title={SEARCHED_TEXT}>
                            {
                                SEARCHED == props.CurrentTab &&
                                <ForumTopic dataTab={SEARCHED} updateLike={props.updateLike} fetchMoreData={props.fetchMoreData} data={props.Searched} currentTab={props.CurrentTab} navigateToForum={props.navigateToForum} />
                            }
                        </Tab>
                    </Tabs>
                </Col>
            </Col>
        </React.Fragment>
    );
}


// Each Forum Topic
export const ForumTopic = (props) => {
    const tabData = props.data;
    if (tabData.loading) {
        return <GetSpinner />;
    }
    if (tabData.data?.length <= 0) {
        return (<div className="black text-24 font-weight-500">{FEATUREDTOPICS_EMPTY}</div>)
    }
    const windowHeight = window.innerHeight - 180;
    console.log("props", props);
    return (

        <div>
            <div id="scrollableForumDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
                <InfiniteScroll className="p-4"
                    dataLength={tabData.data.length}
                    next={() => props.currentTab === props.dataTab && props.fetchMoreData(props.currentTab, props.dataTab)}
                    hasMore={props.currentTab === props.dataTab ? tabData.hasMore : false}
                    loader={<GetSpinner />}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollableForumDiv"
                >
                    {
                        tabData.data?.map((eachRowData, index) => {
                            let key = props.currentTab + "rowKey" + index;
                            return (
                                <Row key={key} className="shadow py-3  rounded mt-2">
                                    <Row className="w-100">
                                        <Col>
                                            <Row onClick={(e) => props.navigateToForum(e, eachRowData.forumId)}
                                                onKeyPress={(e) => props.navigateToForum(e, eachRowData.forumId)} className="cursor rowleftremovesp" tabIndex="0">
                                                <Col style={{ maxWidth: 100 }}>
                                                    <div className="formgrid avatarWin">
                                                        <Image src={win} alt="win" />
                                                        <div className="avatarActive"></div>
                                                        {/* <GetAvatar avatarUrl={eachRowData.forumImageUrl} avatarInitial={eachRowData.forumTopicInitial}/>     */}
                                                    </div>
                                                </Col>
                                                <Col >

                                                    <h6 className="text-13 mb-0 pb-1 mt-1 gray">{eachRowData.forumTopic}</h6>
                                                    <div className="text-muted text-sm">{eachRowData.postedBy}</div>
                                                    <div className="primaryColor text-xs mt-2"><span className="pr-2"><ChatLeftDotsFill tabIndex="0" /></span>{eachRowData.repliesCount} Replies</div>


                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className="pr-0 d-flex align-items-end flex-column" style={{ maxWidth: 80 }}>
                                            <div className="primaryColor justify-content-end  text-lg " aria-label=" Top Commenters"> <div tabIndex="0" onClick={() => props.updateLike(eachRowData.forumId, !eachRowData.liked)}
                                                onKeyPress={() => props.updateLike(eachRowData.forumId, !eachRowData.liked)}> {eachRowData.liked ? <HeartFill /> : <Heart />}</div></div>
                                            <div className="d-flex justify-content-end align-items-end text-muted text-xs pt-4">  {eachRowData.creationDate}</div>

                                        </Col>
                                    </Row>


                                </Row>
                            );
                        })
                    }
                </InfiniteScroll>
            </div>
        </div>
    );
}

// Each Commentor Details
export const TopicCommentor = (props) => { //props.TopCommentors
    const history = useHistory();
    const navigateToUserProfile = (customerId) => {
        history.push("/global/userdetails/" + customerId)
    }

    const GetCommentorsData = (props) => {
        const commentorsData = props.TopCommentors;
        if (commentorsData?.loading) {
            return <GetSpinner />;
        }
        if (commentorsData?.data?.length <= 0) {
            return (<div className="black text-24 font-weight-500">{COMMENTORS_EMPTY}</div>)
        }
        return (
            commentorsData?.data?.map((eachCommentor, index) => {
                let key = "TopCommentsRowKey" + index;
                return (
                    <React.Fragment key={key}>
                        {index >= 1 && <div className="borderB my-2"></div>}
                        <Row className="cursor" tabIndex="0" aria-label=" Top Commenters" onClick={() => navigateToUserProfile(eachCommentor.customerId)} onKeyPress={() => navigateToUserProfile(index.customerId)}>
                            <Col xs={1} className="Topavatar_topcmt d-flex justify-content-center align-items-center">
                                <GetAvatar avatarUrl={eachCommentor.avatarUrl} avatarInitial={eachCommentor.avatarInitial} />
                            </Col>
                            <Col className="px-0">
                                <h4 className="">{eachCommentor.customerName}</h4>
                                <div className="text-muted text-xs">Since {eachCommentor.memberSince}</div>
                            </Col>
                            <Col xs={2} className="d-flex justify-content-end align-items-end pb-1" >
                                <div className="formsty badge">{eachCommentor.commentsCount}</div>
                            </Col>
                        </Row>
                    </React.Fragment>
                )
            })

        )
    }

    return (
        <React.Fragment>
            <h4 className="black text-default text-black text-uppercase py-2 mt-4 forum-top-hot">
                Top Commentors
                </h4>
            <div className="Topcommentor px-4">
                <GetCommentorsData TopCommentors={props.TopCommentors} />
            </div>
        </React.Fragment>
    );
}

// Hot Question Details
export const TopicHotQuestion = (props) => {

    const HotQuestionData = props.HotQuestion;
    const GetHotQuestionContent = (props) => {
        if (props.data?.loading) {
            return <GetSpinner />;
        }
        if (Object.keys(props.data?.data).length <= 0) {
            return <div className="black text-24 font-weight-500">{NOTHING_EMPTY}</div>
        }
        return (
            <p className=" pt-1 gray3">
                {props.data?.data?.content}
            </p>
        );
    }

    return (
        <React.Fragment>
            <h4 className="text-default text-black text-uppercase mt-4 pt-2 forum-top-hot">
                Hot Question
                </h4>
            <GetHotQuestionContent data={HotQuestionData} />
        </React.Fragment>
    );
}

/***********************************************************
 * Form Details Components
 ************************************************************/

export const ForumTopicDetails = (props) => {

    const topicDetails = props.TopicDetails;
    if (topicDetails?.loading) {
        return <GetSpinner />;
    }
    if (Object.keys(topicDetails?.data).length <= 0) {
        return (<div className="black text-24 font-weight-500">{TOPICDETAILS_EMPTY}</div>)
    }
    const history = useHistory();
    return (
        <React.Fragment>

            <Link aria-label=" back to forum page" onClick={props.goBack} to={() => { }}>

                <b className="cursor">
                    <span className="text-lg pr-1">
                        <ArrowLeft />
                    </span>
					 BACK
				</b>
            </Link>

            <Col className="spacetop_frmcnt">

                <Row className="formcntr_space rounded mt-2 d-flex justify-content-center align-items-center">
                    <div tabIndex="0" className="avatarWin" onClick={() => history.push("/global/userdetails/" + topicDetails.data.customerId)} onKeyPress={() => history.push("/global/userdetails/" + topicDetails.data.customerId)}>
                        <GetAvatar avatarUrl={topicDetails.data.avatarUrl} avatarInitial={topicDetails.data.avatarInitial} />
                    </div>
                    <Col className="px-0 ">
                        <Row>
                            <Col><h6 className="text-default mb-0 pb-1 mt-1">{topicDetails.data.firstName && topicDetails.data.firstName} {topicDetails.data.lastName && topicDetails.data.lastName}</h6></Col>
                            <Col className=" primaryColor text-lg d-flex justify-content-end align-items-end"><div tabIndex="0" className="cursor" onKeyPress={() => props.updateLike(topicDetails.data.forumId, !topicDetails.data.liked)} onClick={() => props.updateLike(topicDetails.data.forumId, !topicDetails.data.liked)}>{topicDetails.data.liked ? <HeartFill /> : <Heart />}</div></Col>
                        </Row>
                        <div className="text-muted text-xs">{topicDetails.data.displayName && topicDetails.data.displayName}</div>
                    </Col>
                </Row>
                <Row>
                    <p className="gray3">{topicDetails.data.topicContent}</p>
                </Row>
            </Col>

            <Row className="pt-3">
                <Col className=" text-muted text-xs"><span className="pr-2"><ClockFill /></span>{topicDetails.data.creationDate}</Col>
                <Col className="d-flex justify-content-end align-items-end"><div className="primaryColor text-xs"><span className="pr-2"><ChatLeftDotsFill /></span>{topicDetails.data.repliesCount} replies</div></Col>
            </Row>
        </React.Fragment>
    );
}


// Each Topic Reply Details
export const TopicReplyDetails = (props) => {
    //getNextPageComments={this.getNextPageComments} loadComments={this.loadComments}
    const comments = props.Comments;
    if (comments?.loading) {
        return <GetSpinner />;
    }
    if (comments?.data.length <= 0) {
        return (<div className="black text-24 font-weight-500">{COMMENTS_EMPTY}</div>)
    }
    const history = useHistory();

    const currentLoggedinUser = useSelector(
        state => state.auth?.user
    );

    /***** *****************************Add Comment ******************************/
    const [addCommentState, setAddCommentState] = useState({
        showPostCmt: false,
        postCmtValue: [{ errorMsg: "" }, { postcomment: "" }],
        loading: false
    })

    const showPostComment = () => {
        setAddCommentState({ ...addCommentState, showPostCmt: true, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }

    const handleCancelPost = () => {
        setAddCommentState({ ...addCommentState, loading: false, showPostCmt: false, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }
    const handlePostSubmit = async () => {
        if (isEmpty(addCommentState.postCmtValue[1].postcomment.trim())) {
            setAddCommentState({ ...addCommentState, postCmtValue: [{ errorMsg: "Please enter Your Comment" }, { postcomment: addCommentState.postCmtValue[1].postcomment.trim() }] });
        } else {
            setAddCommentState({ ...addCommentState, loading: true });
            const response = await Forum.addComment({ forumId: props.forumId, comment: addCommentState.postCmtValue[1].postcomment.trim() })
            if (response) {
                displayToastSuccess("Comment added succesfully");
                props.loadComments();
            }
            handleCancelPost();
        }
    }
    const handleChange = (event) => {
        setAddCommentState({ ...addCommentState, postCmtValue: [{ errorMsg: addCommentState.postCmtValue[0].errorMsg }, { postcomment: event.target.value }] });
    };

    /***** *****************************Add Comment End******************************/


    /***** *****************************Update Comment ******************************/
    const [updateCommentState, setUpdateCommentState] = useState({
        showPostCmt: false,
        postCmtValue: [{ errorMsg: "" }, { postcomment: "" }],
        loading: {}
    })

    const showUpdatePostComment = () => {
        setUpdateCommentState({ ...updateCommentState, showPostCmt: true, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }

    const handleUpdateCancelPost = () => {
        setUpdateCommentState({ ...updateCommentState, loading: {}, showPostCmt: false, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }
    const handleUpdatePostSubmit = async (commentId) => {
        if (isEmpty(updateCommentState.postCmtValue[1].postcomment.trim())) {
            setUpdateCommentState({ ...updateCommentState, postCmtValue: [{ errorMsg: "Please enter Your Comment" }, { postcomment: updateCommentState.postCmtValue[1].postcomment.trim() }] });
        } else {
            setUpdateCommentState({ ...updateCommentState, loading: { [commentId]: true } });
            const response = await Forum.updateComment({ forumId: props.forumId, commentId: commentId, comment: updateCommentState.postCmtValue[1].postcomment.trim() })
            if (response) {
                displayToastSuccess("Comment Updated succesfully");
                props.loadComments();
            }
            handleCancelPost();
        }
    }
    const handleUpdateChange = (event) => {
        setUpdateCommentState({ ...updateCommentState, postCmtValue: [{ errorMsg: updateCommentState.postCmtValue[0].errorMsg }, { postcomment: event.target.value }] });
    };

    /***** *****************************Update Comment End******************************/


    /***** *****************************Reply Comment ******************************/
    const [replyCommentState, setReplyCommentState] = useState({
        showPostCmt: false,
        postCmtValue: [{ errorMsg: "" }, { postcomment: "" }, { commentId: number }, { action: "reply" }, { isDataChange: false }],
        loading: {}
    })
    const [replyEditPopupStatus, setreplyEditPopupStatus] = useState(false);

    const replyCommentPopup = (obj, action) => {
        setreplyEditPopupStatus(!replyEditPopupStatus);
        let data = "";
        if (action === "edit") {
            data = obj.replyContent;
        }
        setReplyCommentState({ ...replyCommentState, loading: {}, showPostCmt: false, postCmtValue: [{ errorMsg: "" }, { postcomment: data }, { commentId: obj.commentId }, { action: action }, { isDataChange: false }] });
    }
    const showReplyPostComment = () => {
        setReplyCommentState({ ...replyCommentState, showPostCmt: true, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }

    const handleReplyCancelPost = () => {
        setReplyCommentState({ ...replyCommentState, loading: {}, showPostCmt: false, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }
    const handleReplyPostSubmit = async () => {
        if (isEmpty(replyCommentState.postCmtValue[1].postcomment.trim())) {
            setReplyCommentState({ ...replyCommentState, postCmtValue: [{ errorMsg: "Please enter Your Comment" }, { postcomment: replyCommentState.postCmtValue[1].postcomment.trim() }, { commentId: replyCommentState.postCmtValue[2].commentId }, { action: replyCommentState.postCmtValue[3].action }] });
        } else {
            if (replyCommentState.postCmtValue[3].action === "edit") {
                if (replyCommentState.postCmtValue[4].isDataChange === false) {
                    setReplyCommentState({ ...replyCommentState, postCmtValue: [{ errorMsg: "No Data Changed" }, { postcomment: replyCommentState.postCmtValue[1].postcomment.trim() }, { commentId: replyCommentState.postCmtValue[2].commentId }, { action: replyCommentState.postCmtValue[3].action }] });
                }
                else {
                    submitEventReplyEdit();
                }
            }
            else {
                submitEventReplyEdit();
            }
        }
    }
    const submitEventReplyEdit = async () => {
        setReplyCommentState({ ...replyCommentState, loading: { [replyCommentState.postCmtValue[2].commentId]: true } });
        let response;
        if (replyCommentState.postCmtValue[3].action === "reply") {
            response = await Forum.replyComment({ forumId: props.forumId, commentId: replyCommentState.postCmtValue[2].commentId, comment: replyCommentState.postCmtValue[1].postcomment.trim() })
        }
        else {
            response = await Forum.updateComment({ forumId: props.forumId, commentId: replyCommentState.postCmtValue[2].commentId, comment: replyCommentState.postCmtValue[1].postcomment.trim() })
        }
        if (response) {
            if (replyCommentState.postCmtValue[3].action === "reply") {
                displayToastSuccess("Replied succesfully");
            }
            else {
                displayToastSuccess("Comment Updated succesfully");
            }

            props.loadComments();
        }
        handleCancelPost();
    }
    const handleReplyChange = (event) => {
        setReplyCommentState({ ...replyCommentState, postCmtValue: [{ errorMsg: replyCommentState.postCmtValue[0].errorMsg }, { postcomment: event.target.value }, { commentId: replyCommentState.postCmtValue[2].commentId }, { action: replyCommentState.postCmtValue[3].action }, { isDataChange: true }] });
    };

    /***** *****************************Reply Comment End******************************/

    /***** *****************************Delete Comment ******************************/
    const [deleteCommentState, setDeleteCommentState] = useState({
        loading: {}
    })

    const handleDeleteComment = async (commentId) => {
        setDeleteCommentState({ ...deleteCommentState, loading: { [commentId]: true } });
        const response = await Forum.deleteComment({ forumId: props.forumId, commentId: commentId })
        if (response) {
            displayToastSuccess("Comment Deleted succesfully");
            props.loadComments();
        }
        setDeleteCommentState({ ...deleteCommentState, loading: {} });
    }
    /***** *****************************Delete Comment End******************************/

    /***** *****************************Report Abusive Comment******************************/
    const [abusiveCommentState, setAbusiveCommentState] = useState({
        loading: {}
    })


    const handleAbusiveComment = async (commentId) => {
        console.log("commentId", commentId);
        setAbusiveCommentState({ ...abusiveCommentState, loading: { [commentId]: true } });
        console.log("abusiveCommentState", abusiveCommentState);
        const response = await Forum.reportAbusiveComment({ forumId: props.forumId, commentId: commentId })
        if (response) {
            displayToastSuccess("Reported succesfully");
        }
        setAbusiveCommentState({ ...abusiveCommentState, loading: {} });
    }
    /***** *****************************Report Abusive End******************************/

    const ForumCommentItem = (props) => {
        const eachComment = props.eachComment;
        let key = eachComment.forumId + "rowKey" + props.key;
        return (
            <div className="formmsgbox shadow rounded p-3 mt-2 mb-3" tabIndex="0" key={key}>
                <Row className=" formwrappercmt d-flex align-items-center">
                    <div className="avatarWin" tabIndex="0" onKeyPress={() => { history.push("/global/userdetails/" + eachComment.customerId) }} onClick={() => { history.push("/global/userdetails/" + eachComment.customerId) }}>
                        <GetAvatar avatarUrl={eachComment.avatarUrl} avatarInitial={eachComment.avatarInitial} />
                    </div>
                    <Col className="px-0 ">
                        <Row>
                            <Col><h6 className="text-default mb-0 pb-1 mt-1">{eachComment.firstName && eachComment.firstName} {eachComment.lastName && eachComment.lastName}</h6></Col>
                            <Col className=" text-lg d-flex justify-content-end align-items-end text-muted">

                                <div className="dotsDropDown">
                                    <Dropdown animate="true" slidein="true" >
                                        <Dropdown.Toggle tabIndex="0" aria-controls="example-fade-text" id="dropdown-custom-components">
                                            {
                                                (
                                                    updateCommentState.loading[eachComment.commentId] === true ||
                                                    replyCommentState.loading[eachComment.commentId] === true ||
                                                    deleteCommentState.loading[eachComment.commentId] === true
                                                )
                                                &&
                                                <GetSpinner />
                                            }
                                            <ThreeDots />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu id="example-fade-text" className="commentwrapersec">
                                            {currentLoggedinUser?.id !== eachComment.customerId && <Dropdown.Item eventKey="1" className="replyicon"><IconSvg.replyIcon /> <span className="cmtdrptxt" onClick={() => props.replyCommentPopup(eachComment, "reply")}>Reply</span></Dropdown.Item>}
                                            {currentLoggedinUser?.id === eachComment.customerId && <Dropdown.Item eventKey="3"><IconSvg.deleteIcon /> <span className="cmtdrptxt" onClick={() => props.handleDeleteComment(eachComment.commentId)}>Delete</span ></Dropdown.Item>}
                                            {currentLoggedinUser?.id === eachComment.customerId && <Dropdown.Item eventKey="3"><IconSvg.deleteIcon /> <span className="cmtdrptxt" onClick={() => props.replyCommentPopup(eachComment, "edit")}>Edit</span ></Dropdown.Item>}
                                            {/* <Dropdown.Item eventKey="3"><IconSvg.deleteIcon /> <span className="cmtdrptxt" >Edit</span ></Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                        </Row>
                        <div className="text-muted text-xs">{eachComment.repliedAt}</div>
                    </Col>
                </Row>
                <div className="msgdesc_wrapper">
                    <div className="msgcntdesc">
                        <p className="gray3">
                            {eachComment.replyContent}
                        </p>
                    </div>
                    <div className="cmtflg_sec">
                        <Dropdown animate slideIn>
                            {
                                props.abusiveCommentState.loading[eachComment.commentId] === true &&
                                <GetSpinner />
                            }
                            <Dropdown.Toggle aria-controls="flag-fade-text" className="msgflagbtn" tabIndex="0" id="dropdown-custom-components">
                                <IconSvg.flagIcon />
                            </Dropdown.Toggle>
                            <Dropdown.Menu id="example-fade-text" className="commentwrapersec">
                                <Dropdown.Item eventKey="1" className=""><div onClick={() => props.handleAbusiveComment(eachComment.commentId)}>Report abusive comment</div></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></div>
                </div>
                {
                eachComment.replies?.length > 0 &&
                eachComment.replies?.map((eachChildComment, index) => {
                    let key = "key" + eachChildComment.commentId;
                    return <ForumCommentItem 
                            key={index} 
                            parentId={eachComment.commentId} 
                            eachComment={eachChildComment} 
                            replyCommentPopup={props.replyCommentPopup}
                            handleDeleteComment={props.handleDeleteComment}
                            abusiveCommentState={props.abusiveCommentState}
                            handleAbusiveComment={props.handleAbusiveComment}
                            />
                })
                }
            </div>

        )
    }

    return (
        <React.Fragment>
            <div className="borderB mt-3 mb-5"></div>

            <div className="flexContainer mt-4">
                <h4 className="black text-default text-black text-uppercase py-2">
                    Comments
                </h4>

                {!addCommentState.showPostCmt && <Button variant="primary" className="art_postbtn pushmarginleft" onClick={() => showPostComment()}>Add Comment</Button>}

            </div>
            {addCommentState.showPostCmt && <div className="post_cmtcnt">
                {(addCommentState.postCmtValue[0].errorMsg !== "") && <p className='cmttext-danger_forms'>{addCommentState.postCmtValue[0].errorMsg}</p>}
                <Row>
                    <Col>
                        <Form.Group controlId="postcomments">
                            <Form.Control as="textarea" value={addCommentState.postCmtValue[1].postcomment} onChange={handleChange} placeholder="Add Your Comment" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="postformcntr">
                            {addCommentState.loading && <GetSpinner />}<Button className="btnpost_primary" onClick={handlePostSubmit}>Submit</Button>
                            <Button className="btnpost_secondary" onClick={() => handleCancelPost()}>Cancel</Button>
                        </div>
                    </Col>
                </Row>

            </div>}
            {
                comments.data?.map((eachComment, index) => {
                    let key = eachComment.forumId + "rowKey" + index;
                    return (
                        <ForumCommentItem 
                                eachComment={eachComment} 
                                key={index} 
                                replyCommentPopup={replyCommentPopup}
                                handleDeleteComment={handleDeleteComment}
                                abusiveCommentState={abusiveCommentState}
                                handleAbusiveComment={handleAbusiveComment}
                                />
                    )
                })
            }
            <Modal centered show={replyEditPopupStatus} dialogClassName="custom-dialog-forumEditReply" onHide={() => replyCommentPopup(0, "close")}>
                <FocusLock>
                    <AutoFocusInside>
                        <Modal.Header className="font-weight-light border-0 pt-0" closeButton >
                            {replyCommentState.postCmtValue[3].action === "reply" ?
                                <div className="text-xl font-weight-500 black">Reply</div> :
                                <div className="text-xl font-weight-500 black">Edit</div>
                            }
                        </Modal.Header>
                        <Modal.Body className="pb-md-3 pt-3 px-md-3">
                            <Form.Group className="input-field">
                                {replyCommentState.postCmtValue[0].errorMsg != "" && (
                                    <p className="text-danger-forgotpassword" role="alert"  >{replyCommentState.postCmtValue[0].errorMsg}</p>
                                )}
                                <Form.Control as="textarea" name="postcomment" aria-required="true" tabIndex="0" value={replyCommentState.postCmtValue[1].postcomment} onChange={handleReplyChange} autoComplete="off" placeholder="Post Comment" />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer className="pt-0 pb-3">
                            <div className="d-flex justify-content-end align-items-center forumComments">
                                <Button variant="primary" size="xs" onClick={handleReplyPostSubmit} className="mr-2 submit"><span className="pr-2"><CheckCircleFill /></span>Submit</Button>
                                <Button variant="primary" size="xs" className="cancel" onClick={() => replyCommentPopup(0, "close")}><span className="pr-2"><XCircleFill /></span>Cancel</Button>
                            </div>
                        </Modal.Footer>
                    </AutoFocusInside>
                </FocusLock>
            </Modal>
        </React.Fragment>
    );
}