import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getHashtagPosts } from "../../redux/async thunks/postThunk";
import classes from './hashtag.module.css';
const Hashtag = ({ tag }) => {
  const [searchParams,setSearchParams] = useSearchParams();
  const query=searchParams.get("tag");
  const disptach=useDispatch();
  const clickHandler=(tag)=>{
    setSearchParams({"tag":tag});
    disptach(getHashtagPosts(tag));
  }
  return <span className={`${classes["hashtag"]} ${query===tag ? classes["active"] :""}`} onClick={()=>clickHandler(tag)}>#{tag}</span>;
};

export default Hashtag;