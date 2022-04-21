import classes from "./profile.module.css";
import { useEffect, useState, useRef } from "react";
import {  useUser } from "../../context";
import {ProfileCard} from '../../components';

const Profile = () => {
  const { getUser } = useUser();
  const [user, setUser] = useState(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    const fetchUser = async () => {
      const existingUser = JSON.parse(localStorage.getItem("user"));
      const response = await getUser(existingUser._id);
      if (mountedRef.current) {
        setUser(response);
      }
    };
    fetchUser();

    return () => (mountedRef.current = false);
  }, []);

  return (
    <main className={classes["profile-container"]}>
      <h1 className="centered-text text-primary">Profile</h1>
      {user ? <ProfileCard user={user}/> : <h1 className="text-primary">Loading...</h1>}
    </main>
  );
};

export default Profile;
