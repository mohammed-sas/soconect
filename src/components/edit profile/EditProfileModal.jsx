import classes from "./editProfileModal.module.css";
import { useState } from "react";
import {useUser} from '../../context';

const EditProfileModal = ({ user, setShowModal }) => {
    const {editUser} = useUser();
    const [profile,setProfile]=useState({
        info:"",
        website:""
    });

    const changeHandler=e=>{
        const {name,value} = e.target;
        setProfile({
            ...profile,
            [name]:value
        })
    }

    const submitHandler=async (e)=>{
        try{
        e.preventDefault();
        await editUser(profile);
        }catch(error){
            console.log(error);
        }

    }
  return (
    <div className={classes["modal-container"]}>
      <div className={classes["modal"]}>
        <i
          className={`fas fa-times text-primary ${classes["close-btn"]}`}
          onClick={setShowModal}
        ></i>
        <h3 className="text-primary">Edit Profile</h3>
        <form action="post" className={classes["edit-profile-form"]} onSubmit={submitHandler}>
          <label htmlFor="username" >
            <span className="text-primary">Username</span>
            <input type="text" className={classes["cursor-not-allowed"]} disabled value={user.username} />
          </label>
          <label htmlFor="name">
            <span className="text-primary">Name</span>
            <input type="text" className={classes["cursor-not-allowed"]} disabled value={user.firstName + " " + user.lastName} />
          </label>
          <label htmlFor="bio-info">
            <span className="text-primary">Bio</span>
            <textarea defaultValue={user.bio.info} name="info" onChange={changeHandler}></textarea>
          </label>
          <label htmlFor="bio-website">
            <span className="text-primary">Website</span>
            <input type="text" defaultValue={user.bio.website} name="website" onChange={changeHandler} />
          </label>
          <input type="submit" value="Update" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
