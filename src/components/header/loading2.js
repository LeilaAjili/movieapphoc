import React from "react";
import Spinner2 from './spinner2'
 

const Loading2 = Component => {
  
  return props => {
    return props.Loading2 ? <Spinner2/> : <Component {...props} />;
  };
};

export default Loading2;
