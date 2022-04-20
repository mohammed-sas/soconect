const UserInfo = ({user}) => {
  return (
    <div>
      <div className="avatar avatar-text">
        <span>{user.firstName.substring(0, 2).toUpperCase()}</span>
      </div>
      <div>
          <h2 className="text-primary">{user.firstName} {user.lastName}</h2>
          <div>
              <span>{user.posts.length} Posts</span>
              <span>{user.followers.length} Followers</span>
              <span>{user.following.length} Following</span>
          </div>
      </div>
      <div>
          <button className="btn btn-primary">Test</button>
      </div>
    </div>
  );
};

export default UserInfo;
