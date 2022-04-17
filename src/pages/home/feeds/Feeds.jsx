import classes from "./feeds.module.css";
import {usePost} from '../../../context'
import PostCard from "../../../components/post card/PostCard";
const Feeds = () => {
  const {postState} = usePost();
  return (
    <div className={classes["post-list"]}>
      {
        postState.posts.map(post=>{
          return <PostCard key={post._id} post={post}/>
        })
      }
    
    </div>
  );
};

export default Feeds;
