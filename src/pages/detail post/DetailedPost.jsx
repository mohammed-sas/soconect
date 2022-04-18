import classes from "./detailedPost.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sidebar, PostCard } from "../../components";
import { usePost } from "../../context";
import CommentCard from "../../components/comment card/CommentCard";
const DetailedPost = () => {
  const params = useParams();
  const { postId } = params;
  const [post, setPost] = useState(null);
  const { getSinglePost } = usePost();
  useEffect(() => {
    (async () => {
      try {
        const post = await getSinglePost(postId);
        setPost(post);
      } catch (error) {
        console.log(error);
      }
    })();
  });
  return (
    <div className={classes["container"]}>
      <Sidebar />
      <main className={classes["post-details"]}>
        {post ? (
          <PostCard post={post} />
        ) : (
          <h1 className="text-primary">Loading...</h1>
        )}
        {post ? (
          <div className={classes["comments-list"]}>
              <h4 className="text-primary">Comments</h4>
            {post.comment.comments.map((comment) => {
              return <CommentCard key={comment._id} comment={comment}/>
            })}
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default DetailedPost;
