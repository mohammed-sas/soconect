import classes from "./profileCard.module.css";
import { useToggle } from "../../hooks/useToggle";
import EditProfileModal from "../edit profile/EditProfileModal";
import { useSelector } from "react-redux";
import FollowingModal from "../following/FollowingModal";
const ProfileCard = ({ user }) => {
  const userState = useSelector(state=>state.user);
  const [showModal, setShowModal] = useToggle(false);
  const [showFollowing, setShowFollowing] = useToggle(false);
  const editHandler = () => {
    setShowModal();
  };
  return (
    <div className={classes["user-container"]}>
      <div
        className={`avatar ${classes["avatar-text-lg"]} ${classes["avatar-large"]}`}
      >
        <span>{user.username.substring(0, 2).toUpperCase()}</span>
      </div>
      <div className={classes["body"]}>
        <div className={classes["header"]}>
          <h2 className="text-white">
            {user.firstName} {user.lastName}
          </h2>
          <button className="btn btn-primary" onClick={editHandler}>
            Edit Profile
          </button>
        </div>
        <h4 className="text-white">@{user.username}</h4>
        <div className={classes["footer"]}>
          <span className="text-white">{userState.posts.length} Posts</span>
          <span className="text-white">
            {userState.followers.length} Followers
          </span>
          <span className={`text-white ${classes["following"]}`} onClick={setShowFollowing}>
            {userState.following.length} Following
          </span>
        </div>
        <div>
          <div className={classes["bio-container"]}>
            <h4 className="text-white">Bio</h4>
            <p className="text-white">{userState.bio.info}</p>
          </div>
          <div className={classes["bio-container"]}>
            <h4 className="text-white">Website</h4>
            <p className="text-white">{userState.bio.website}</p>
          </div>
        </div>
      </div>

      {showModal ? (
        <EditProfileModal user={user} setShowModal={setShowModal} />
      ) : null}
      {showFollowing ? <FollowingModal setShowFollowing={setShowFollowing} /> : null}
    </div>
  );
};

export default ProfileCard;
