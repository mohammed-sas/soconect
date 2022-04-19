import classes from "./sidebar.module.css";
import logo from "../../assets/logo-32x32.png";
import { useToggle } from "../../hooks/useToggle";
import CreatePostModal from "../create post/CreatePostModal";
import { useAuth, usePost } from "../../context";
import { useNavigate, NavLink } from "react-router-dom";
const Sidebar = () => {
  const [showModal, setShowModal] = useToggle(false);
  const { logout } = useAuth();
  const { postDispatch } = usePost();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate("/login");
    postDispatch({ type: "CLEAR" });
  };
  let active={
    background:"var(--tertiary-lighter)",
    borderRadius:"1rem"
  }
  return (
    <aside className={classes["container"]}>
      <div className={classes["tabs-container"]}>
        <div className={classes["tab-item"]}>
          <img src={logo} alt="logo" />
        </div>
        <NavLink to="/" style={({isActive})=>isActive? active : null}>
          <div className={classes["tab-item"]}>
            <i className="fas fa-home text-primary"></i>
            <span className="text-primary">Home</span>
          </div>
        </NavLink>
        <div className={classes["tab-item"]}>
          <i className="fas fa-bell text-primary"></i>
          <span className="text-primary">Notifications</span>
        </div>
        <NavLink to="/bookmark" style={({isActive})=>isActive? active : null}>
          <div className={classes["tab-item"]}>
            <i className="fas fa-bookmark text-primary"></i>
            <span className="text-primary">Bookmark</span>
          </div>
        </NavLink>
        <div className={classes["tab-item"]}>
          <i className="fas fa-user-alt text-primary"></i>
          <span className="text-primary">Profile</span>
        </div>
        <button className="btn btn-primary" onClick={setShowModal}>
          Create Post
        </button>
      </div>
      <div className={classes["profile-container"]}>
        <div className={classes["user-detail"]}>
          <span className="text-primary">Mohammed</span>
          <span className="text-primary">@mhdsas</span>
        </div>
        <i
          className={`fas fa-sign-out-alt text-primary ${classes["logout-btn"]}`}
          onClick={logoutHandler}
        ></i>
      </div>
      {showModal ? <CreatePostModal setShowModal={setShowModal} /> : null}
    </aside>
  );
};

export default Sidebar;
