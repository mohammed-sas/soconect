import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {Sidebar,PostCard}  from "../../components";
import { useUser } from "../../context";
import classes from "./userPost.module.css";

const UserPost = () => {
  const params = useParams();
  const { userId } = params;
  const { getUserPost } = useUser();
  const [posts, setPosts] = useState([]);
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;

    (async () => {
      const response = await getUserPost(userId);
      if (mountedRef.current) setPosts(response);
    })();

    return () => (mountedRef.current = false);
  });
  return (
    <div className={classes["container"]}>
      <Sidebar />
      <main className={classes["user-posts-container"]}>
        <div className={classes["post-list"]}>
          {posts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default UserPost;
