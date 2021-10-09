import React, { useCallback } from "react";
import { Col, Row, Button, InputGroup, Form, Container } from 'react-bootstrap';
import { Heart, Globe, } from "react-bootstrap-icons";
import replay from '../../../../assets/img/booths/articles/replay.svg';
import { GetSpinner } from "../../../../helper/CommonHelper";
import CommentItem from "./CommentItem";
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import { Articles } from '../../../../services/Api';
import InfiniteScroll from "react-infinite-scroll-component";
import { isEmpty } from "lodash";
import { displayToastSuccess } from "../../../../helper/ToastHelper";



export const ArticleComments = (props) => {
    const { articleComments, articleId, boothId } = props;

    /***** *****************************Add Article Comment ******************************/
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
            setAddCommentState({ ...addCommentState, postCmtValue: [{ errorMsg: "Please enter your comment" }, { postcomment: addCommentState.postCmtValue[1].postcomment.trim() }] });
        } else {
            setAddCommentState({ ...addCommentState, loading: true });
            const payload = {
                commentDescription: addCommentState.postCmtValue[1].postcomment.trim()
            };
            const response = await Articles.createArticleComment(boothId, articleId, payload)
            if (response) {
                displayToastSuccess("Comment added succesfully");
                props.getNextArticleComments(boothId, articleId,1);
            }
            
            handleCancelPost();
        }
    }
    const handleChange = (event) => {
        event.preventDefault();
        setAddCommentState({ ...addCommentState, postCmtValue: [{ errorMsg: '' }, { postcomment: event.target.value }] });
    };

    /***** *****************************Add Comment End******************************/

    /***** *****************************Reply Article Comment Start******************************/
    const [replyCommentState, setReplyCommentState] = useState({
        showPostCmt: false,
        postCmtValue: [{ errorMsg: "" }, { postcomment: "" }],
        loading: false
    })

    const showReplyPostComment = () => {
        setReplyCommentState({ ...replyCommentState, showPostCmt: true, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }

    const handleCancelReplyPost = () => {
        setReplyCommentState({ ...replyCommentState, loading: false, showPostCmt: false, postCmtValue: [{ errorMsg: "" }, { postcomment: "" }] });
    }
    const handleReplyPostSubmit = async (parentCommentId) => {
        if (isEmpty(replyCommentState.postCmtValue[1].postcomment.trim())) {
            setReplyCommentState({ ...replyCommentState, postCmtValue: [{ errorMsg: "Please enter your comment" }, { postcomment: replyCommentState.postCmtValue[1].postcomment.trim() }] });
        } else {
            setReplyCommentState({ ...replyCommentState, loading: true });
            const payload = {
                commentDescription: replyCommentState.postCmtValue[1].postcomment.trim(),
                parentCommentId: parentCommentId
            };
            const response = await Articles.createArticleComment(boothId, articleId, payload)
            if (response) {
                displayToastSuccess("Comment Replied succesfully");
                props.getNextArticleComments(boothId, articleId,1);
            }
            handleCancelPost();
        }
    }
    const handleReplyChange = (event) => {
        event.preventDefault();
        setReplyCommentState({ ...replyCommentState, postCmtValue: [{ errorMsg: '' }, { postcomment: event.target.value }] });
    };

    /***** *****************************Reply Article Comment Comment End******************************/



    /***** *****************************Like/Unlike Comment Start******************************/
    const handleLikeUnlike = async (commentId,changeLike) => {
        
            const payload = {
                commentId : commentId,
                isLiked: changeLike
            };
            const response = await Articles.likeArticleComment(boothId, articleId, payload)
            if (response) {
                const tmpArticlesData = {...articleComments};
                tmpArticlesData.data.forEach((eachComment) => {
                    let commentObject = getCommentObject(eachComment,commentId);
                    if(commentObject){ // found match
                        commentObject.isLiked = payload.isLiked;
                        return;
                    }
                    
                })
                props.setArticleCommentsState(tmpArticlesData);
                displayToastSuccess((changeLike === "false")? "Unlike successful" : "Like successful");
            }
    }

    const getCommentObject=(comment,commentId)=>{

        let commentObject = undefined;
        if(comment.commentId === commentId){
            return comment;
        }

        if(comment.reply?.length > 0){
            comment.reply.forEach((eachComment) => {
                let commentObj = getCommentObject(eachComment,commentId)
                if(commentObj){
                    commentObject = commentObj;
                }
            });
        }

        return commentObject;
    }

    /***** *****************************Add Comment End******************************/


    if (articleComments.data.length <= 0) {
        return (
            <React.Fragment>
                <h4 className="text-default text-black text-uppercase pb-1 pt-3">
                    Comments
            </h4>
                <div className="borderB my-3 "></div>
                No Comments Yet
            </React.Fragment>
        )
    }

    const windowHeight = 180 * 2;
    return (

        <React.Fragment>
            <div className="d-flex">
                <div class="mr-auto p-2">
                    <h4 className="text-default justify-content-start text-black text-uppercase pb-1 pt-3">
                        Comments
                    </h4>
                </div>
                <div class="p-2">
                    {addCommentState.showPostCmt === false &&
                        <Button variant="primary" tabIndex="1" size="sm" onClick={() => showPostComment()} className="e3-button mb-1 d-inline-flex" >
                            Post Comments
                    </Button>
                    }
                </div>
            </div>
            <hr className="mb-3"/>
            { addCommentState.showPostCmt === true &&

                <div id="postCommentDiv">
                    <Row>
                        <Col>
                            {(addCommentState.postCmtValue[0].errorMsg !== "")
                                && <p className='cmttext-danger_forms'>{addCommentState.postCmtValue[0].errorMsg}
                                </p>
                            }
                            <Form.Group tabIndex="1" controlId="postcomments">
                                <Form.Control as="textarea" placeholder="Post your comments" value={addCommentState.postCmtValue[1].postcomment} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <div class="p-2 bd-highlight">
                            <Button variant="primary" tabIndex="1" size="sm" onClick={() => handlePostSubmit()} className="e3-button mb-1 d-inline-flex" >
                                Submit
                            </Button>
                    </div>
                        <div class="p-2 bd-highlight">
                            <Button variant="secondary" tabIndex="1" size="sm" onClick={handleCancelPost} className="e3-button mb-1 d-inline-flex">
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>

            }
            <div id="scrollableArCommentsDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
            <InfiniteScroll
                dataLength={articleComments.data.length}
                next={() => props.getNextArticleComments(props.boothId, articleId, articleComments.page + 1)}
                hasMore={articleComments.hasMore}
                loader={articleComments.page > 1 && <GetSpinner />}
                style={{ overflow: 'hidden' }}
                scrollableTarget="scrollableArCommentsDiv"
            >
                {
                    articleComments.data.map((eachComment, index) => {
                        return <CommentItem comment={eachComment} key={index} handleLikeUnlike={handleLikeUnlike}/>
                    })
                }
            </InfiniteScroll>
            </div>
        </React.Fragment>

    )
}