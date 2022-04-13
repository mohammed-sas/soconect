import classes from "./login.module.css";
import { Link } from "react-router-dom";
import hero from '../../assets/logo.webp';

const Login = () => {
  const handleChange = () => {};
  const guestHandler = () => {};
  const submitHandler = () => {};
  return (
    <div className={classes["login-container"]}>
      <div className={classes["hero-image"]}>
          <img src={hero} alt="logo" />
      </div>
      <div className={classes["login-form-container"]}>
        <form action="post" className={classes["login-form"]} onSubmit={submitHandler}>
          <label htmlFor="email" className="text-primary">
            Email address
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="abc@neog.com"
            />
          </label>

          <label htmlFor="password" className="text-primary">
            Password
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="*******"
            />
          </label>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary"
          />
          <button
            className="btn btn-secondary"
            onClick={guestHandler}
          >
            Login as Guest
          </button>
          <div>
            <p className="centered-text ">
              <Link to="/signup" >
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
