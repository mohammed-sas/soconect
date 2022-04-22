import classes from "./profileCard.module.css";
import { useToggle } from "../../hooks/useToggle";
import EditProfileModal from "../edit profile/EditProfileModal";
import { useUser } from "../../context";
const ProfileCard = ({ user }) => {
  const { userState } = useUser();
  const [showModal, setShowModal] = useToggle(false);
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
          <h2 className="text-primary">
            {user.firstName} {user.lastName}
          </h2>
          <button className="btn btn-primary" onClick={editHandler}>
            Edit Profile
          </button>
        </div>
        <h4 className="text-primary">@{user.username}</h4>
        <div className={classes["footer"]}>
          <span className="text-primary">{user.posts.length} Posts</span>
          <span className="text-primary">
            {user.followers.length} Followers
          </span>
          <span className="text-primary">
            {user.following.length} Following
          </span>
        </div>
        <div>
          <div className={classes["bio-container"]}>
            <h4 className="text-primary">Bio</h4>
            <p className="text-white">{userState.bio.info}</p>
          </div>
          <div className={classes["bio-container"]}>
            <h4 className="text-primary">Website</h4>
            <p className="text-white">{userState.bio.website}</p>
          </div>
        </div>
      </div>

      {showModal ? (
        <EditProfileModal user={user} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default ProfileCard;
