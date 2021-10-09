import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSimpleAvatar, GetSpinner } from "../../helper/CommonHelper";
import "./Networking.scss";

const windowHeight = window.innerHeight - 180;

class NetworkingPeople extends React.Component {

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
        <p className="networking head">Networking</p>
        <div id="scrollableForumDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="networking-people infintyright-scroll">
          <InfiniteScroll className="p-4"
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<GetSpinner />}
            style={{ overflow: 'hidden' }}
            scrollableTarget="scrollableForumDiv"
          >
            <Row>
              {this.state.items.map((i, index) => (
                <Col xl={3} lg={3} md={6} sm={6} xs={6} key={index} className="px-1 pb-2 cardDisplay networking">
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <figure className="e3-network-people-img-card infoImage">
                          <span>PK</span>
                        </figure>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-sm">Dave Thomas</Card.Subtitle>
                      <Card.Text className="card-network-people-text">
                        Lorem ipsum is simple dummy text.
                      </Card.Text>
                      <Card.Link href="#" aria-label="" className="connect-link">
                        Connect
                      </Card.Link>
                      <Card.Link href="#" className="envelope-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                        </svg>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </InfiniteScroll>
        </div>
      </React.Fragment>
    );
  }
}

export default NetworkingPeople;