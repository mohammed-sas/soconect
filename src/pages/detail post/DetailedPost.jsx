import classes from "./detailedPost.module.css";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {  PostCard } from "../../components";
import axios from 'axios';
import CommentCard from "../../components/comment card/CommentCard";
const DetailedPost = () => {
  const params = useParams();
  const { postId } = params;
  const [post, setPost] = useState(null);
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    (async () => {
      try {
        const response = await axios.get(`/api/posts/${postId}`);
        if (response.status === 200 && mountedRef.current) {
          setPost(response.data.post);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => (mountedRef.current = false);
  });
  return (
    <main className={classes["post-details"]}>
      {post ? (
        <div className={classes["lists"]}>
          <PostCard post={post} />
        </div>
      ) : (
        <h1 className="text-primary">Loading...</h1>
      )}
      {post ? (
        <div className={classes["comments-list"]}>
          <h4 className="text-primary">Comments</h4>
          {post.comment.comments.map((comment) => {
            return (
              <CommentCard key={comment._id} comment={comment} post={post} />
            );
          })}
        </div>
      ) : null}
    </main>
  );
};

export default DetailedPost;
