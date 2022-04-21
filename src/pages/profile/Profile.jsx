import classes from "./profile.module.css";
import { useEffect, useState, useRef } from "react";
import { usePost, useUser } from "../../context";
import { ProfileCard,PostCard } from "../../components";

const Profile = () => {
  const { getUser } = useUser();
  const [user, setUser] = useState(null);
  const mountedRef = useRef(false);
  const {postState} = usePost()

  useEffect(() => {
    mountedRef.current = true;
    const fetchUser = async () => {
      const existingUser = JSON.parse(localStorage.getItem("user"));
      const response = await getUser(existingUser._id);
      if (mountedRef.current) {
        setUser(response);
      }
    };
    fetchUser();

    return () => (mountedRef.current = false);
  },[postState]);

  return (
    <main className={classes["profile-container"]}>
      <h1 className="centered-text text-primary">Profile</h1>
      {!user && <h1 className="text-primary">Loading...</h1>}
      {user && <ProfileCard user={user} />}
      {user && (
        <div className={classes["post-list"]}>
          {postState.posts.filter(post=>post.username===user.username).map((post) => {
            return <PostCard key={post._id} post={post} />;
          })}
        </div>
      )}
    </main>
  );
};

export default Profile;
