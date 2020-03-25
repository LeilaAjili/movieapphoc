import React from "react";
import Spinner from "./spinner";

const Loading = Component => {
  
  return props => {
    return props.Loading ? <Spinner/> : <Component {...props} />;
  };
};

export default Loading;
