import React from "react";
import classes from './hashtag.module.css';
const Hashtag = ({ tag }) => {
  return <span className={classes["hashtag"]}>#{tag}</span>;
};

export default Hashtag;
