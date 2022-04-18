import classes from './detailedPost.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {Sidebar,PostCard} from "../../components"
import { usePost } from "../../context";
const DetailedPost = () => {
    const params = useParams();
    const {postId}=params;
    const [post,setPost]=useState(null);
    const {getSinglePost}=usePost();
    useEffect(()=>{
        (async ()=>{
            try{
                const post = await getSinglePost(postId);
                setPost(post);
            }catch(error){
                console.log(error);
            }
        })()
    });
    return (
        <div className={classes["container"]}>
            <Sidebar/>
            <main className={classes["post-details"]}>
                <div>
                    {post ? <PostCard post={post}/>: <h1 className="text-primary">Loading...</h1>}
                </div>
            </main>
        </div>
    )
}

export default DetailedPost
