import classes from "./profile.module.css";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { ProfileCard,PostCard } from "../../components";
import axios from 'axios';
const Profile = () => {
  const [user, setUser] = useState(null);
  const mountedRef = useRef(false);
  const {posts} = useSelector(state=>state.posts);

  useEffect(() => {
    mountedRef.current = true;
    const fetchUser = async () => {
      const existingUser = JSON.parse(localStorage.getItem("user"));
      const response = await axios.get(`/api/users/${existingUser._id}`);
      if (mountedRef.current) {
        setUser(response.data.user);
      }
    };
    fetchUser();

    return () => (mountedRef.current = false);
  },[posts]);

  return (
    <main className={classes["profile-container"]}>
      <h1 className="centered-text text-primary">Profile</h1>
      {!user && <h1 className="text-primary">Loading...</h1>}
      {user && <ProfileCard user={user} />}
      {user && (
        <div className={classes["post-list"]}>
          {posts.filter(post=>post.username===user.username).map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Profile;
