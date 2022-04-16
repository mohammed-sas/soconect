import classes from "./sidebar.module.css";
import logo from "../../assets/logo-32x32.png";
import { useToggle } from "../../hooks/useToggle";
import CreatePostModal from "../create post/CreatePostModal";
import {useAuth,usePost} from '../../context';
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [showModal, setShowModal] = useToggle(false);
  const {logout}=useAuth();
  const {postDispatch}=usePost();
  const navigate=useNavigate();
  const logoutHandler=()=>{
    logout();
    navigate("/login");
    postDispatch({type:"CLEAR"});
    
  }
  return (
    <aside className={classes["container"]}>
      <div className={classes["tabs-container"]}>
        <div className={classes["tab-item"]}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes["tab-item"]}>
          <i className="fas fa-home text-primary"></i>
          <span className="text-primary">Home</span>
        </div>
        <div className={classes["tab-item"]}>
          <i className="fas fa-bell text-primary"></i>
          <span className="text-primary">Notifications</span>
        </div>
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
          class={`fas fa-sign-out-alt text-primary ${classes["logout-btn"]}`}
          onClick={logoutHandler}
        ></i>
      </div>
      {showModal ? <CreatePostModal setShowModal={setShowModal} /> : null}
    </aside>
  );
};

export default Sidebar;
