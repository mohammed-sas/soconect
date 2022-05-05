import classes from "./followingModal.module.css";
import { useSelector } from "react-redux"; 

const FollowingModal = ({ setShowFollowing }) => {
  const user = useSelector(state=>state.user);
  const { following } = user;
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-primary ${classes["close-btn"]}`}
          onClick={setShowFollowing}
        ></i>
        <h3 className="text-primary">Following</h3>
        <div>
          {following.map((user) => {
            return (
              <div key={user._id} className={classes["user-card"]}>
                <div className="avatar avatar-text">
                  <span className="text-primary">{user.username.substring(0, 2).toUpperCase()}</span>
                </div>
                <div>
                    <h4 className="text-primary">{user.firstName+" "+user.lastName}</h4>
                    <small className="text-primary">@{user.username}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FollowingModal;
