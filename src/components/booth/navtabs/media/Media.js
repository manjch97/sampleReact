import React  from "react";
import { Button, Row, Col } from "react-bootstrap";
import { MediaItem } from './MediaItem';
import {
    MEDIA_EMPTY
  } from "../../../../constants/CommonConstants";
import './Media.scss';
import InfiniteScroll from "react-infinite-scroll-component";
import { GetSpinner } from "../../../../helper/CommonHelper";

const Media = (props) => {
    const windowHeight = 180 * 2;
    const media = props.data;
    if (media.loading) {
        return <React.Fragment>
                     <h4 className='e3-tab-title'>Media</h4>
                     <GetSpinner/>
                </React.Fragment>;
    }

    if (media.dataLoaded && media.data.length <= 0) {
        return (<div className="black text-24 font-weight-500">{MEDIA_EMPTY}</div>)
    }

    console.log("media",media);
    return (
        <React.Fragment>
            <h4 className='e3-tab-title'>Media</h4>
            <div id="scrollableMediaDiv" style={{ maxHeight: windowHeight, overflow: "auto" }} className="infintyright-scroll">
            <InfiniteScroll
                    dataLength={media.data.length}
                    next={()=>props.fetchBoothMedia(media.page+1,false)}
                    hasMore={media.hasMore}
                    loader={media.page > 1 && <GetSpinner/>}
                    style={{ overflow: 'hidden' }}
                    scrollableTarget="scrollableMediaDiv"
                >
            <Row xs={2} sm={3} md={4} lg={6}>
                {
                    media.data.map((eachMedia, i) => {
                        return <MediaItem key={`mediaItem${i}`} image={eachMedia.imageUrl} video={eachMedia.videoPlayUrl} views={eachMedia.viewCount} />
                    })
                }
            </Row>
            </InfiniteScroll>
            </div>
        </React.Fragment>
    );

}
export default Media;
