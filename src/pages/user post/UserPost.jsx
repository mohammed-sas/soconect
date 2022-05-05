import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserInfo, PostCard } from "../../components";
import axios from 'axios';
import classes from "./userPost.module.css";

const UserPost = () => {
  const params = useParams();
  const { userId } = params;
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const {posts:postsState} = useSelector(state=>state.posts);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    const fetchUser = async () => {
      const response = await axios.get(`/api/users/${userId}`);
      if (response.status === 200 && mountedRef.current) {
        setUser(response.data.user);
        let postList = postsState.filter(post=>post.username === response.data.user.username);
        setPosts(postList);
      }
    };
    fetchUser();

    return () => (mountedRef.current = false);
  }, [postsState]);
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
