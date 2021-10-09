import React from "react";
import { Carousel } from "react-bootstrap";
import Slide1 from '../../../assets/img/booths/1.svg';
import Slide2 from '../../../assets/img/booths/2.svg';
import Slide3 from '../../../assets/img/booths/3.jpg';
import Slide4 from '../../../assets/img/booths/4.svg';
import isURL from "validator/lib/isURL";
import { GetSpinner } from "../../../helper/CommonHelper";
import { useHistory } from "react-router-dom";

export const SideNavTopVideo = (props) => {
  const images = [Slide1, Slide2, Slide3, Slide4];
  let history = useHistory();
  const videoData = props.data;
  if(videoData.loading === true){
    return (<GetSpinner/>);
  }

  if(!videoData.data){
      return (<h5>No Videos</h5>);
  }
  if(Array.isArray(videoData.data)){
    if(videoData.data.length <= 0){
      return (<h5>No Videos</h5>);
    }
  }

 

  return (
    <React.Fragment>
      <Carousel prevIcon={<span>‹</span>} nextIcon={<span>›</span>} className='e3-sidenav-carousel d-none d-md-block'>
        {
          videoData.data.map((video, i) => {
            let key = "videokey_"+i;
            let image  = isURL(video.imageUrl) ? video.imageUrl : images[0];
            return (
              <Carousel.Item key={key}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide${i}`} 
                  onClick={() => { history.push('/global/events/all') }}
                />
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </React.Fragment>
  );
};
