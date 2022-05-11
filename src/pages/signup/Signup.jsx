import classes from "../login/login.module.css";
import hero from "../../assets/logo.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import { signup } from "../../redux/async thunks/authThunk";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify';
const Signup = () => {
  const dispatch = useDispatch();
  const [showpass, setShowpass] = useToggle(false);
  const [user, setUser] = useState(null);
  const [showConfirmpass, setShowConfirmpass] = useToggle(false);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (user.password !== user.confirmPassword) {
        toast.error("password should match");
        return;
      }
      if (user.password.length < 8) {
        toast.error("password should be atleast 8 characters")
        return;
      }
      await dispatch(signup(user));
      toast.success("Signed Up Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes["login-container"]}>
      <div className={classes["hero-image"]}>
        <img src={hero} alt="logo" />
      </div>
      <div className={classes["login-form-container"]}>
        <h2 className="centered-text text-white">Sign Up</h2>
        <form
          action="post"
          className={classes["login-form"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="email">
            <span className="text-white">Username</span>
            <input
              onChange={changeHandler}
              name="username"
              type="text"
              required
            />
          </label>
          <label className="text-white" htmlFor="firstName">
            <span className="text-white">First Name</span>
            <input
              name="firstName"
              required
              onChange={changeHandler}
              type="text"
              placeholder="First Name"
            />
          </label>
          <label className="text-white" htmlFor="lastName">
            <span className="text-white">Last Name</span>
            <input
              name="lastName"
              required
              onChange={changeHandler}
              type="text"
              placeholder="Last Name"
            />
          </label>

          <label className="text-white" htmlFor="password">
            <span className="text-white">Password</span>
            <div className={classes["password"]}>
              <input
                name="password"
                type={showpass ? "text" : "password"}
                required
                onChange={changeHandler}
              />
              <i
                onClick={setShowpass}
                className={
                  "text-white fas " + (showpass ? "fa-eye" : "fa-eye-slash")
                }
              ></i>
            </div>
          </label>
          <label className="text-white" htmlFor="confirmPassword">
            <span className="text-white">Confirm Password</span>
            <div className={classes["password"]}>
              <input
                name="confirmPassword"
                type={showConfirmpass ? "text" : "password"}
                required
                onChange={changeHandler}
              />
              <i
                onClick={setShowConfirmpass}
                className={
                  "text-white fas " +
                  (showConfirmpass ? "fa-eye" : "fa-eye-slash")
                }
              ></i>
            </div>
          </label>
          <div>
            <label htmlFor="accept-condition">
              <input id="accept-condition" required type="checkbox" />{" "}
              <span className="text-white">
                I accept all Terms & Conditions
              </span>
            </label>
          </div>
          <input type="submit" value="Signup" className="btn btn-primary" />

          <div>
            <p className="centered-text  ">
              <Link to="/login" className="text-white">
                Aleady have an Account <i className="fas fa-chevron-right"></i>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
