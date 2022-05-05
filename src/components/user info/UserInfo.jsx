import classes from "./userInfo.module.css";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../redux/async thunks/userThunk";
const UserInfo = ({ user }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
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

  return (
    <div className={classes["user-container"]}>
      <div
        className={`avatar ${classes["avatar-text-lg"]} ${classes["avatar-large"]}`}
      >
        <span>{user.username.substring(0, 2).toUpperCase()}</span>
      </div>
      <div className={classes["body"]}>
        <h2 className="text-primary">
          {user.firstName} {user.lastName}
        </h2>
        <div className={classes["footer"]}>
          <span className="text-primary">{user.posts.length} Posts</span>
          <span className="text-primary">
            {user.followers.length} Followers
          </span>
          <span className="text-primary">
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
  );
};

export default UserInfo;
