import classes from "../login/login.module.css";
import hero from "../../assets/logo.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";

const Signup = () => {
  const [passMatch, setPassMatch] = useState(true);
  const [passLen, setPassLen] = useState(true);
  const [showpass, setShowpass] = useToggle(false);
  const [showConfirmpass, setShowConfirmpass] = useToggle(false);
  const changeHandler = () => {};
  const submitHandler = () => {};

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
            <span className="text-primary">Email address</span>
            <input
              onChange={changeHandler}
              name="email"
              type="email"
              placeholder="abc@neog.com"
            />
          </label>
          <label className="text-white" htmlFor="firstName">
            <span className="text-primary">First Name</span>
            <input
              id="firstName"
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
              id="lastName"
              name="lastName"
              required
              onChange={changeHandler}
              type="text"
              placeholder="Last Name"
            />
          </label>

          <label className="text-white" htmlFor="password">
            <span className="text-primary">Password</span>
            <div id="password" className={classes["password"]}>
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
            <label htmlFor="accept-condition" className="text-primary">
              <input id="accept-condition" required type="checkbox" /> I accept
              all Terms & Conditions
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
