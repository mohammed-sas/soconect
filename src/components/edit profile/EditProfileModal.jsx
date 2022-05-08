import classes from "./editProfileModal.module.css";
import { useState } from "react";
import { editUser } from "../../redux/async thunks/userThunk";
import { useSelector, useDispatch } from "react-redux";

const EditProfileModal = ({ user, setShowModal }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [profile, setProfile] = useState(userState.bio);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editUser(profile));
    setShowModal();
  };
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-white ${classes["close-btn"]}`}
          onClick={setShowModal}
        ></i>
        <h3 className="text-white">Edit Profile</h3>
        <form
          action="post"
          className={classes["edit-profile-form"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="username">
            <span className="text-white">Username</span>
            <input
              type="text"
              className={classes["cursor-not-allowed"]}
              disabled
              value={user.username}
            />
          </label>
          <label htmlFor="name">
            <span className="text-white">Name</span>
            <input
              type="text"
              className={classes["cursor-not-allowed"]}
              disabled
              value={user.firstName + " " + user.lastName}
            />
          </label>
          <label htmlFor="bio-info">
            <span className="text-white">Bio</span>
            <textarea
              defaultValue={userState.bio.info}
              name="info"
              onChange={changeHandler}
            ></textarea>
          </label>
          <label htmlFor="bio-website">
            <span className="text-white">Website</span>
            <input
              type="text"
              defaultValue={userState.bio.website}
              name="website"
              onChange={changeHandler}
            />
          </label>
          <input type="submit" value="Update" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
