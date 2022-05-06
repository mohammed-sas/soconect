import classes from "./feeds.module.css";
import {useSelector,useDispatch} from 'react-redux';
import {getAllPost} from '../../../redux/async thunks/postThunk';
import PostCard from "../../../components/post card/PostCard";
import { useEffect } from "react";
const Feeds = () => {
  const {posts} = useSelector(state=>state.posts);
  const dispatch = useDispatch();
  useEffect(()=>{
    (async ()=>{
      dispatch(getAllPost());
    })()
  },[])
  
  return (
    <div className={classes["post-list"]}>
      {
        posts.map(post=>{
          return <PostCard key={post._id} post={post}/>
        })
      }
    
    </div>
  );
};

export default Feeds;
