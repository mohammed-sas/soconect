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
          <h2 className="text-prim"></h2>
        <form action="post" className={classes["login-form"]} onSubmit={submitHandler}>
          <label htmlFor="email" >
            <span className="text-primary">Email address</span>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="abc@neog.com"
            />
          </label>

          <label htmlFor="password" className="text-primary">
            <span className="text-primary">Password</span>
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
            <p className="centered-text  ">
              <Link to="/signup"  className="text-primary">
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
