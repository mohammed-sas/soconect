import classes from "./userInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../redux/async thunks/userThunk";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
const UserInfo = ({ userId }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const mountedRef = useRef(false);
  const followHandler = () => {
    checkFollowing()
      ? dispatch(unFollowUser(user._id))
      : dispatch(followUser(user._id));
  };

  const checkFollowing = () => {
    return userState.following.some(
      (followingUser) => followingUser._id === user._id
    );
  };
  useEffect(() => {
    mountedRef.current = true;
    (async () => {
      const response = await axios.get(`/api/users/${userId}`);
      if (mountedRef.current) {
        setUser(response.data.user);
      }
    })();
    return () => (mountedRef.current = false);
  }, [userState]);

  return (
    <>
      {user ? (
        <div className={classes["user-container"]}>
          <div
            className={`avatar ${classes["avatar-text-lg"]} ${classes["avatar-large"]}`}
          >
            <span>{user.username.substring(0, 2).toUpperCase()}</span>
          </div>
          <div className={classes["body"]}>
            <h2 className="text-white">
              {user.firstName} {user.lastName}
            </h2>
            <div className={classes["footer"]}>
              <span className="text-white">{user.posts.length} Posts</span>
              <span className="text-white">
                {user.followers.length} Followers
              </span>
              <span className="text-white">
                {user.following.length} Following
              </span>
            </div>
          </div>
          <div>
            <button className="btn btn-primary" onClick={followHandler}>
              {checkFollowing() ? "UnFollow" : "Follow"}
            </button>
          </div>
        </div>
      ) : (
        <h1 className="centered-text text-primary">Loading...</h1>
      )}
    </>
  );
};

export default UserInfo;
