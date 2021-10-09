import React from "react";
import isURL from "validator/lib/isURL";
import Header from "../components/common/header/Header";
import { Image, Spinner } from "react-bootstrap";
import Avatar from '../assets/img/forum/avatar.jpg';
import validDataUrl from 'valid-data-url';
import { MetaTags } from "react-meta-tags";
import { E3_DEFAULT_DESCRIPTION, E3_DEFAULT_TITLE } from "../constants/CommonConstants";

export const WebHeader = (props) => {
  return <Header props={props.props} />;
};

export const GetAvatar = (props) => {
    return (
      <React.Fragment>
        {
          props.avatarUrl && validURL(props.avatarUrl) ?
          <Image src={Avatar} alt={props.alt?props.alt:"Avatar"} />
          :
          <span>{props.avatarInitial}</span>
        }
      <div className="avatarActive"></div>
      </React.Fragment>
    )
}

export const GetSimpleAvatar = (props) => {

  return (
    <React.Fragment>
      {
        props.avatarUrl && validURL(props.avatarUrl) ?
        <Image src={props.avatarUrl} alt={props.alt?props.alt:"Avatar"} />
        :
        <span>{props.avatarInitial}</span>
      }
    </React.Fragment>
  )
}

export const GetProfileAvatar = (props) => {

  return (
    <React.Fragment>
      {
        props.avatarUrl && validURL(props.avatarUrl) ?
        <Image src={props.avatarUrl} alt={props.alt?props.alt:"Avatar"} />
        :
        props.avatarInitial
      }
    </React.Fragment>
  )
}

export const validURL=(avatarUrl)=>{
  return avatarUrl && (isURL(avatarUrl) || validDataUrl(avatarUrl))
}

export const GetCircleImage = (props) => {
  return (
    <React.Fragment>
      {
        props.imageUrl && validURL(props.imageUrl) ?
        <Image src={props.imageUrl} alt={props.alt?props.alt:"Image"} />
        :
        <Image src={Avatar} alt={props.alt?props.alt:"Image"} />
      }
    </React.Fragment>
  )
}

export const GetSpinner = props => {

 return (
          <Spinner animation="border" role="status" size="sm">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
};

export const GetSmallSpinner = props => {
  return (
          <Spinner
              className="position-absolute left-0 right-0 mt-1"
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
 };

 export const PopulateMetaTags = props => {
  return (
    <MetaTags>
      <title>{ props.title ? props.title:E3_DEFAULT_TITLE }</title>
      <meta name="description" content={ props.description ? props.description:E3_DEFAULT_DESCRIPTION } />
      <meta property="og:title" content={ props.title ? props.title:E3_DEFAULT_TITLE } />
    </MetaTags>
  )
 }

 export const GetDisplayFileSize = (sizeInBytes) => {
  
  var returnFileSize = "";
  if(sizeInBytes < Math.pow(1000, 2)) {
    returnFileSize = Math.round( ((sizeInBytes / Math.pow(1024, 1)) + Number.EPSILON) * 100) /100 +" KB";
  }
  else{
    returnFileSize = Math.round( ((sizeInBytes / Math.pow(1024, 2)) + Number.EPSILON) * 100) /100 +" MB";
  }
  return (
    returnFileSize
  )

 }
