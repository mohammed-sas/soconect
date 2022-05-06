import classes from "./profile.module.css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCard, PostCard } from "../../components";
import { getUser } from "../../redux/async thunks/userThunk";
const Profile = () => {
  const mountedRef = useRef(false);
  const { posts } = useSelector((state) => state.posts);
  const authState = useSelector((state) => state.auth);
  const { user } = authState;
  const dispatch = useDispatch();

  useEffect(() => {
    mountedRef.current = true;
    const fetchUser = async () => {
      if (mountedRef.current) {
        await dispatch(getUser(user._id));
      }
    };
    fetchUser();

    return () => (mountedRef.current = false);
  }, [posts]);

  return (
    <main className={classes["profile-container"]}>
      <h1 className="centered-text text-primary">Profile</h1>
      {!user && <h1 className="text-primary">Loading...</h1>}
      {user && <ProfileCard user={user} />}
      {user && (
        <div className={classes["post-list"]}>
          {posts
            .filter((post) => post.username === user.username)
            .map((post) => {
              return <PostCard key={post._id} post={post} />;
            })}
        </div>
      )}
    </main>
  );
};

export default Profile;
