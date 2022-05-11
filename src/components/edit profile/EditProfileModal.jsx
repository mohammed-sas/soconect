import classes from "./editProfileModal.module.css";
import { useState } from "react";
import { editUser } from "../../redux/async thunks/userThunk";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const EditProfileModal = ({ user, setShowModal }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [profile, setProfile] = useState(userState.bio);
  const [submitDisable,setSubmitDisable] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      setSubmitDisable(true);
      const fileInput = e.target.avatar.files[0];
      let imageUrl = "";
      if (fileInput) {
        const formData = new FormData();
        formData.append("file", fileInput);
        formData.append("upload_preset", "gomh4n5e");
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dx1vtnzy6/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        imageUrl = data.url;
      }
      const userProfile = {
        image: imageUrl,
        bio: profile,
      };

      dispatch(editUser(userProfile));
      toast.success("Profile Updated");
      setShowModal();
    } catch (error) {
      console.log(error);
    }
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
          <label htmlFor="avatar" className={classes["avatar-input-container"]}>
            <span className="text-white">Avatar</span>
            {userState.image ? (
              <div className={`${classes["avatar-container"]} ${classes["display-pic"]}`}>
                <img
                  src={userState.image}
                  alt="avatar"
                  class="avatar avatar-md"
                />
                <i className="fas fa-camera text-white"></i>
              </div>
            ) : (
              <div
                className={`avatar avatar-text ${classes["avatar-container"]}`}
              >
                <span>{user.username.substring(0, 2).toUpperCase()}</span>
                <i className="fas fa-camera text-white"></i>
              </div>
            )}

            <input
              name="avatar"
              type="file"
              id="avatar"
              placeholder="choose image to upload"
              accept="image/png, image/jpeg, image/webp"
            />
          </label>
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
          <input type="submit" value="Update" disabled={submitDisable} className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
