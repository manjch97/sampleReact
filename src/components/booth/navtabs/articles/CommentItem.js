import React from "react";
import { Col, Row, Image } from 'react-bootstrap';
import { Heart, Globe, HeartFill, } from "react-bootstrap-icons";
import replay from '../../../../assets/img/booths/articles/replay.svg';
import { GetSimpleAvatar } from "../../../../helper/CommonHelper";
import { GiTrophyCup } from "react-icons/gi";

const CommentItem = (props) => {

    const comment = props.comment;
    return (
        <div>
            <Row className="d-flex align-items-center mb-4" tabIndex="1">
                <div className="commentssec avatarWin">
                    <GetSimpleAvatar avatarUrl={comment.avatarUrl} avatarInitial={comment.avatarInitial} />
                </div>
                <Col className="px-0 ">
                    <h6 className="mb-0 pb-1 mt-1 text-md">{comment.customerName}</h6>
                    <div className="text-muted text-xs">{comment.comment}</div>
                    <div className="d-flex text-sm text-muted pt-1">
                        <span className="pr-3">
                            {
                                comment?.isLiked === "true" ?
                                    <div className="cursor" onClick={() => props.handleLikeUnlike(comment.commentId, "false")}><HeartFill className="mr-1" />UNLIKE</div>
                                    :
                                    <div className="cursor" onClick={() => props.handleLikeUnlike(comment.commentId, "true")}><Heart className="mr-1" />LIKE</div>
                            }
                        </span>
                        <span className="pr-4 d-flex"><Image src={replay} alt="replay" className="mr-1" />REPLY</span>
                    </div>

                </Col>
            </Row>
            {
                comment.reply?.length > 0 &&
                comment.reply.map((eachChildComment, index) => {
                    let key = "key" + eachChildComment.commentId;
                    return <CommentItem key={key} comment={eachChildComment} parentId={comment.commentId} handleLikeUnlike={props.handleLikeUnlike} />
                })
            }
        </div>
    )
}


export default CommentItem;


