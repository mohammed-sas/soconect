import { useUser } from "../../context";
import classes from "./userInfo.module.css";
const UserInfo = ({ user }) => {
  const { userState, followUser, unFollowUser } = useUser();
  const followHandler = async () => {
    try {
      checkFollowing()
        ? await unFollowUser(user._id)
        : await followUser(user._id);
    } catch (error) {
      console.log(error);
    }
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
