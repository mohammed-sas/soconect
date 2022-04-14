import classes from "./feeds.module.css";
import dp from "../../../assets/elon.jpeg";
const Feeds = () => {
  return (
    <div className={classes["post-list"]}>
      <div className={classes["post-container"]}>
        <div className={classes["display-picture"]}>
          <img src={dp} alt="profile image" />
        </div>
        <div className={classes["post-body-container"]}>
          <div className={classes["username-id-container"]}>
            <div className={classes["username-body"]}>
              <span className="text-white">Elon Musk</span>
              <span className="text-white">@elonmusk</span>
              <span className="text-white">3h</span>
            </div>
            <span>
              <i className="fas fa-ellipsis-h text-white"></i>
            </span>
          </div>
          <div className="tweet-body">
            <p className="text-white">
              1469 Starlink satellites active 272 moving to operational orbits
              Laser links activate soon
            </p>
          </div>
          <div className={classes["post-footer"]}>
            <span>
              <i className="far fa-comment text-white"></i>
              <span className="text-white">10.2k</span>
            </span>
            <span>
              <i className="far fa-heart text-white"></i>
              <span className="text-white">125.8k</span>
            </span>
          </div>
        </div>
      </div>
      <div className={classes["post-container"]}>
        <div className={classes["display-picture"]}>
          <img src={dp} alt="profile image" />
        </div>
        <div className={classes["post-body-container"]}>
          <div className={classes["username-id-container"]}>
            <div className={classes["username-body"]}>
              <span className="text-white">Elon Musk</span>
              <span className="text-white">@elonmusk</span>
              <span className="text-white">3h</span>
            </div>
            <span>
              <i className="fas fa-ellipsis-h text-white"></i>
            </span>
          </div>
          <div className="tweet-body">
            <p className="text-white">
              1469 Starlink satellites active 272 moving to operational orbits
              Laser links activate soon
            </p>
          </div>
          <div className={classes["post-footer"]}>
            <span>
              <i className="far fa-comment text-white"></i>
              <span className="text-white">10.2k</span>
            </span>
            <span>
              <i className="far fa-heart text-white"></i>
              <span className="text-white">125.8k</span>
            </span>
          </div>
        </div>
      </div>
      <div className={classes["post-container"]}>
        <div className={classes["display-picture"]}>
          <img src={dp} alt="profile image" />
        </div>
        <div className={classes["post-body-container"]}>
          <div className={classes["username-id-container"]}>
            <div className={classes["username-body"]}>
              <span className="text-white">Elon Musk</span>
              <span className="text-white">@elonmusk</span>
              <span className="text-white">3h</span>
            </div>
            <span>
              <i className="fas fa-ellipsis-h text-white"></i>
            </span>
          </div>
          <div className="tweet-body">
            <p className="text-white">
              1469 Starlink satellites active 272 moving to operational orbits
              Laser links activate soon
            </p>
          </div>
          <div className={classes["post-footer"]}>
            <span>
              <i className="far fa-comment text-white"></i>
              <span className="text-white">10.2k</span>
            </span>
            <span>
              <i className="far fa-heart text-white"></i>
              <span className="text-white">125.8k</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
