import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { Hashtag,PostCard } from "../../components";
import { getHashtags } from "../../redux/async thunks/postThunk";
import classes from './hashtags.module.css';


const Hashtags = () => {
    const dispatch = useDispatch();
    const {hashtags,currentHashtagPosts} = useSelector(state=>state.posts);    
    useEffect(()=>{
        dispatch(getHashtags());
    },[]);
    return (
        <div className={classes["container"]}>
            <div className={classes["hashtag-container"]}>
                {
                    hashtags.map(tag=>{
                        return <NavLink key={tag} to={`/hashtags?tag=${tag}`}><Hashtag tag={tag}/></NavLink>
                    })
                }
            </div>
            <div className={classes["lists"]}>
                {
                    currentHashtagPosts.map(post=>{
                        return <PostCard key={post._id} post={post}/>
                    })
                }
            </div>

            
        </div>
    )
}

export default Hashtags
