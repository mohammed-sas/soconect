import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useSearchParams } from "react-router-dom";
import { Hashtag,PostCard } from "../../components";
import { getHashtags } from "../../redux/async thunks/postThunk";
import { addToHashtag } from "../../redux/async thunks/userThunk";
import classes from './hashtags.module.css';


const Hashtags = () => {
    const dispatch = useDispatch();
    const[searchParams,setSearchParams] = useSearchParams();
    const {hashtags,currentHashtagPosts} = useSelector(state=>state.posts);
    const query = searchParams.get("tag");
    useEffect(()=>{
        dispatch(getHashtags());
    },[]);
    const followHandler=()=>{
        dispatch(addToHashtag(query));
    }
    return (
        <div className={classes["container"]}>
            <div className={classes["hashtag-container"]}>
                {
                    hashtags.map(tag=>{
                        return <NavLink key={tag} to={`/hashtags?tag=${tag}`}><Hashtag tag={tag}/></NavLink>
                    })
                }
            </div>
            <div className={classes["header"]}>
                <h1 className="text-purple-400">#{query}</h1>
                <button onClick={followHandler} className="btn btn-primary">Follow</button>
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
