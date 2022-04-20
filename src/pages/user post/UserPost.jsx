import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { UserInfo, PostCard } from "../../components";
import { useUser } from "../../context";
import classes from "./userPost.module.css";

const UserPost = () => {
  const params = useParams();
  const { userId } = params;
  const { getUserPost } = useUser();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;

    const fetchUser=async () => {
      const response = await getUserPost(userId);
      if (mountedRef.current) {
        setPosts(response.user.posts);
        setUser(response.user);
      }
    };
    fetchUser();

    return () => (mountedRef.current = false);
  });
  return (
    <main className={classes["user-posts-container"]}>
      {user && <UserInfo user={user} />}

      <div className={classes["post-list"]}>
        {posts.map((post) => {
          return <PostCard key={post._id} post={post} />;
        })}
      </div>  
    </main>
  );
};

export default UserPost;
