import classes from "../login/login.module.css";
import hero from "../../assets/logo.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import { useAuth } from "../../context";
import {useNavigate} from 'react-router-dom';
const Signup = () => {
  const [passMatch, setPassMatch] = useState(true);
  const [passLen, setPassLen] = useState(true);
  const [showpass, setShowpass] = useToggle(false);
  const [user, setUser] = useState(null);
  const [showConfirmpass, setShowConfirmpass] = useToggle(false);
  const { signup } = useAuth();
  const navigate=useNavigate();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      if (user.password !== user.confirmPassword) {
        setPassMatch(false);
        return;
      }
      if (user.password.length < 8) {
        setPassLen(false);
        return;
      }
      let status = await signup(user);
      if (status == 201) {
        navigate("/");
      }
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
        <h2 className="centered-text text-primary">Sign Up</h2>
        <form
          action="post"
          className={classes["login-form"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="email">
            <span className="text-primary">Username</span>
            <input
              onChange={changeHandler}
              name="username"
              type="text"
              required
            />
          </label>
          <label className="text-white" htmlFor="firstName">
            <span className="text-primary">First Name</span>
            <input
              name="firstName"
              required
              onChange={changeHandler}
              type="text"
              placeholder="First Name"
            />
          </label>
          <label className="text-white" htmlFor="lastName">
            <span className="text-primary">Last Name</span>
            <input
              name="lastName"
              required
              onChange={changeHandler}
              type="text"
              placeholder="Last Name"
            />
          </label>

          <label className="text-white" htmlFor="password">
            <span className="text-primary">Password</span>
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
                  "text-primary fas " + (showpass ? "fa-eye" : "fa-eye-slash")
                }
              ></i>
            </div>
          </label>
          <label className="text-white" htmlFor="confirmPassword">
            <span className="text-primary">Confirm Password</span>
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
                  "text-primary fas " +
                  (showConfirmpass ? "fa-eye" : "fa-eye-slash")
                }
              ></i>
            </div>
          </label>
          {passMatch ? null : (
            <span className="mismatch">Passwords Not Matching</span>
          )}
          {passLen ? null : (
            <span className="mismatch">
              Password must have minimum of 8 characters
            </span>
          )}
          <div>
            <label htmlFor="accept-condition">
              <input id="accept-condition" required type="checkbox" />{" "}
              <span className="text-primary">
                I accept all Terms & Conditions
              </span>
            </label>
          </div>
          <input type="submit" value="Signup" className="btn btn-primary" />

          <div>
            <p className="centered-text  ">
              <Link to="/login" className="text-primary">
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
