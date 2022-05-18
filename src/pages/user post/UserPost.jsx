import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserInfo, PostCard } from "../../components";
import axios from "axios";
import classes from "./userPost.module.css";

const UserPost = () => {
  const params = useParams();
  const { userId } = params;
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const { posts: postsState } = useSelector((state) => state.posts);
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    const fetchUser = async () => {
      const response = await axios.get(`/api/users/${userId}`);
      if (response.status === 200 && mountedRef.current) {
        setUser(response.data.user);
        let userPosts = await axios.get(
          `/api/posts/user/${response.data.user.username}`
        );
        setPosts(userPosts.data.posts);
      }
    };
    fetchUser();
    return () => (mountedRef.current = false);
  }, [postsState, userId]);
  return (
    <main className={classes["user-posts-container"]}>
      {user && <UserInfo userId={user._id} />}

      <div className={classes["post-list"]}>
        {posts.length > 0 &&
          posts.map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
      </div>
    </main>
  );
};

export default UserPost;
