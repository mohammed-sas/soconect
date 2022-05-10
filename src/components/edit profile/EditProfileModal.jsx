import classes from "./editProfileModal.module.css";
import { useState } from "react";
import { editUser } from "../../redux/async thunks/userThunk";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

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

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const fileInput =e.target.avatar;
      console.log(fileInput);
      console.log(fileInput.file);
      const formData = new FormData();
      // formData.append("file", fileInput);
      // formData.append("upload_preset", "gomh4n5e");
      // const data = await axios(
      //   "https://api.cloudinary.com/v1_1/dx1vtnzy6/image/upload",
      //   {
      //     method: "POST",
      //     body: formData,
      //   }
      // );
      // console.log(data);
      // dispatch(editUser(profile));
      // setShowModal();
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
          <label htmlFor="avatar">
            <span className="text-white">Avatar</span>
            <input
              name="avatar"
              type="file"
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
          <input type="submit" value="Update" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
