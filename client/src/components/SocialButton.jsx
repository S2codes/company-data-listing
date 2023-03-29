import React from "react";
import classes from "../styles/SocialButton.module.css";

const SocialButton = (props)=>{
    return <button className={classes['social-button']} onClick={props.onClick}>
        {props.children}
  </button>

}

export default SocialButton
