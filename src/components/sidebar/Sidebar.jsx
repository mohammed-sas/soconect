import classes from "./sidebar.module.css";
import logo from "../../assets/logo-32x32.png";
import { useToggle } from "../../hooks/useToggle";
import CreatePostModal from "../create post/CreatePostModal";
import { logout } from "../../redux/slices/authSlice";
import { clearPosts } from "../../redux/slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import SearchModal from "../search/SearchModal";

const Sidebar = () => {
  const authState = useSelector((state) => state.auth);
  const { user } = authState;
  const [showModal, setShowModal] = useToggle(false);
  const [showSearch, setShowSearch] = useToggle(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
    dispatch(clearPosts());
  };
  let active = {
    background: "var(--tertiary-lighter)",
    borderRadius: "1rem",
  };
  return (
    <aside className={classes["container"]}>
      <div className={classes["tabs-container"]}>
        <div className={classes["tab-item"]}>
          <img src={logo} alt="logo" />
        </div>
        <NavLink to="/" style={({ isActive }) => (isActive ? active : null)}>
          <div className={classes["tab-item"]}>
            <i className="fas fa-home text-purple-400"></i>
            <span className="text-white">Home</span>
          </div>
        </NavLink>
        <div className={classes["tab-item"]}>
          <i className="fas fa-bell text-purple-400"></i>
          <span className="text-white">Notifications</span>
        </div>
        <NavLink
          to="/bookmark"
          style={({ isActive }) => (isActive ? active : null)}
        >
          <div className={classes["tab-item"]}>
            <i className="fas fa-bookmark text-purple-400"></i>
            <span className="text-white">Bookmark</span>
          </div>
        </NavLink>
        <NavLink
          to="/hashtags?tag=javascript"
          style={({ isActive }) => (isActive ? active : null)}
        >
          <div className={classes["tab-item"]}>
            <i className="fas fa-hashtag text-purple-400"></i>
            <span className="text-white">Hashtags</span>
          </div>
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? active : null)}
        >
          <div className={classes["tab-item"]}>
            <i className="fas fa-user-alt text-purple-400"></i>
            <span className="text-white">Profile</span>
          </div>
        </NavLink>

        <div className={classes["tab-item"]} onClick={setShowSearch}>
          <i className="fas fa-search text-purple-400"></i>
          <span className="text-white">Search</span>
        </div>

        <button
          className={`btn btn-primary ${classes["post-btn"]}`}
          onClick={setShowModal}
        >
          Create Post
        </button>
        <i
          className={`far fa-plus-square text-purple-400 ${classes["mini-create-btn"]}`}
          onClick={setShowModal}
        ></i>
      </div>
      {user && (
        <div className={classes["profile-container"]}>
          <div className={classes["user-detail"]}>
            <span className="text-white">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-white">@{user.username}</span>
          </div>
          <i
            className={`fas fa-sign-out-alt text-purple-400 ${classes["logout-btn"]}`}
            onClick={logoutHandler}
          ></i>
        </div>
      )}
      {showModal ? <CreatePostModal setShowModal={setShowModal} /> : null}
      {showSearch ? <SearchModal setShowSearch={setShowSearch}/> : null}
    </aside>
  );
};

export default Sidebar;
