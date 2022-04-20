import { useUser } from '../../context';
import classes from './userInfo.module.css';
const UserInfo = ({user}) => {
  const {followUser} = useUser();
  const followHandler=async ()=>{
    try{
      await followUser(user._id);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className={classes["user-container"]}>
      <div className={`avatar ${classes["avatar-text-lg"]} ${classes["avatar-large"]}`}>
        <span>{user.username.substring(0, 2).toUpperCase()}</span>
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
          <button className="btn btn-primary" onClick={followHandler}>Follow</button>
      </div>
    </div>
  );
};

export default UserInfo;
