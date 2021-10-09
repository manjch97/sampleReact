import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSpinner } from "../../helper/CommonHelper";

const windowHeight = window.innerHeight - 180;

class FriendListPeople extends React.Component {

    /* Dummy Code to be removed once API got integrated */
    state = {
        items: Array.from({ length: 20 }),
        hasMore: true
    };

    fetchMoreData = () => {
        if (this.state.items.length >= 49) {
            this.setState({ hasMore: false });
            return;
        }
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 500);
    };

    render() {
        return (
            <React.Fragment>
                <p className="friendlist-heading head">Friend List</p>
                <div id="scrollableForumDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="friendlist-people infintyright-scroll">
                    <InfiniteScroll className="p-4"
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={<GetSpinner />}
                        style={{ overflow: 'hidden' }}
                        scrollableTarget="scrollableForumDiv"
                    >
                        {this.state.items.map((i, index) => (
                            <React.Fragment>
                                <Row key={index} className="cursor py-3 smt-2 w-100 rowleftremovesp">
                                    <Col xl={2} md={2} sm={2} xs={3}>
                                        <div className="formgrid avatarWin">
                                            A{index}
                                        </div>
                                    </Col>
                                    <Col xl={6} md={6} sm={5} xs={7}>
                                        <h6 className="text-13 mb-0 pb-1 mt-1 gray">Dave Thomas</h6>
                                        <div className="text-muted text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                                        <div className="text-xs mt-2">{index} hours ago</div>
                                    </Col>
                                    <Col xl={3} md={3} sm={3} xs={5}>
                                        <div aria-label="">
                                            <Button
                                                block
                                                variant="primary"
                                                className="message-btn my-3"
                                                size="sm"
                                                type="submit"
                                                tabIndex="0"
                                                aria-label="Message"
                                            >
                                                Message
                                                </Button>
                                      </div>
                                    </Col>
                                    <Col xl={1} md={1} sm={2} xs={7} className="mt-4">
                                        <div className="text-muted delete-icon" aria-label="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </div>
                                    </Col>
                                </Row>
                            </React.Fragment>
                        ))}
                    </InfiniteScroll>
                </div>
            </React.Fragment>
        );
    }
}

export default FriendListPeople;