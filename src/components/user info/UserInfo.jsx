import classes from './userInfo.module.css';
const UserInfo = ({user}) => {
  return (
    <div className={classes["user-container"]}>
      <div className="avatar avatar-text">
        <span>{user.lastName.substring(0, 2).toUpperCase()}</span>
      </div>
      <div className={classes["body"]}>
          <h2 className="text-primary">{user.firstName} {user.lastName}</h2>
          <div className={classes["footer"]}>
              <span className="text-primary">{user.posts.length} Posts</span>
              <span className="text-primary">{user.followers.length} Followers</span>
              <span className="text-primary">{user.following.length} Following</span>
          </div>
      </div>
      <div>
          <button className="btn btn-primary">Test</button>
      </div>
    </div>
  );
};

export default UserInfo;
