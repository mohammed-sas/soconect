import classes from "./login.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import hero from "../../assets/logo.webp";
import { login } from "../../redux/async thunks/authThunk";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const guestHandler = () => {
    const guestUser = {
      username: "mohammed",
      password: "@12345678_",
    };
    setUser(guestUser);
  };
  const submitHandler =async (e) => {
    e.preventDefault();
    try{
    await dispatch(login(user));
    navigate(from, { replace: true });
    }catch(error){
      console.log(error);
    }
  };
  return (
    <div className={classes["login-container"]}>
      <div className={classes["hero-image"]}>
        <img src={hero} alt="logo" />
      </div>
      <div className={classes["login-form-container"]}>
        <h2 className="centered-text text-white">Login</h2>
        <form
          action="post"
          className={classes["login-form"]}
          onSubmit={submitHandler}
        >
          <label htmlFor="email">
            <span className="text-white">Username</span>
            <input
              onChange={handleChange}
              defaultValue={user.username}
              name="username"
              type="text"
            />
          </label>

          <label htmlFor="password" className="text-white">
            <span className="text-white">Password</span>
            <input
              type="password"
              name="password"
              defaultValue={user.password}
              onChange={handleChange}
              placeholder="*******"
            />
          </label>
          <input type="submit" value="Login" className="btn btn-primary" />
          <input
            type="button"
            className="btn btn-secondary"
            onClick={guestHandler}
            value="Guest login"
          />
          <div>
            <p className="centered-text  ">
              <Link to="/signup" className="text-white">
                Create New Account <i className="fas fa-chevron-right"></i>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
